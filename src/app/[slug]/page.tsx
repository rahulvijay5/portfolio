import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { UAParser } from "ua-parser-js";

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

  const shortUrl = await prisma.shortUrl.findUnique({
    where: { slug: slug },
  });

  if (shortUrl) {
    const headersList = await headers();
    const userAgent = headersList.get("user-agent") || "";
    const referer = headersList.get("referer");
    const ip = headersList.get("x-forwarded-for")?.split(",")[0] || "unknown";

    // Parse user agent
    const parser = new UAParser(userAgent);
    const browser = parser.getBrowser();
    const os = parser.getOS();
    const device = parser.getDevice();

    // Get location data
    const location = await getLocationData(ip);

    // Record visit
    await prisma.urlVisit.create({
      data: {
        shortUrlId: shortUrl.id,
        browser: browser.name,
        os: os.name,
        device: device.type || "desktop",
        referrer: referer || null,
        country: location.country,
        city: location.city,
        ip,
      },
    });

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
