import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { UAParser } from "ua-parser-js";
import { getShortUrl } from "@/lib/redis";

async function getLocationData(ip: string) {
  try {
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await response.json();
    return {
      country: data.country_name,
      city: data.city,
    };
  } catch {
    return { country: null, city: null };
  }
}

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  let urlPromise = getShortUrl(slug);
  let shortUrlPromise = prisma.shortUrl.findUnique({ where: { slug } });

  // Await Redis first
  let url = await urlPromise;

  if (url) {

    // Fetch the full short URL from DB in background
    shortUrlPromise.then((shortUrl) => {
      if (shortUrl) {
        updateAnalytics(shortUrl.id);
      } else {
        console.error("Short URL not found in database.");
      }
    });

    // Redirect immediately
    redirect(url);
  }

  // If not in Redis, await DB result
  let shortUrl = await shortUrlPromise;

  if (shortUrl) {

    // Track analytics asynchronously
    updateAnalytics(shortUrl.id);

    // Redirect instantly
    redirect(shortUrl.url);
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="text-9xl font-bold text-gray-800">404</div>
      <div className="text-2xl mb-8">Page not found</div>
      <a
        href="/"
        className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors"
      >
        Go to homepage
      </a>
    </div>
  );
}

// Background function to update analytics
async function updateAnalytics(shortUrlId: string) {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";
  const referer = headersList.get("referer");
  const ip = headersList.get("x-forwarded-for")?.split(",")[0] || "unknown";

  // Parse user agent
  const parser = new UAParser(userAgent);
  const browser = parser.getBrowser();
  const os = parser.getOS();
  const device = parser.getDevice();

  // Get location data asynchronously
  const location = await getLocationData(ip);

  prisma.urlVisit.create({
    data: {
      shortUrlId,
      browser: browser.name || "Unknown",
      os: os.name || "Unknown",
      device: device.type || "desktop",
      referrer: referer || null,
      country: location.country || "Unknown",
      city: location.city || "Unknown",
      ip,
    },
  }).catch((err) => console.error("Failed to store analytics:", err));
}