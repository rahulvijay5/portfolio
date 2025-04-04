// API route handler
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { setShortUrl, getShortUrl } from "@/lib/redis";

export async function POST(req: Request) {
    try {
        const { url, customSlug } = await req.json();

        // Validate URL
        try {
            new URL(url);
        } catch {
            return NextResponse.json(
                { error: "Invalid URL provided" },
                { status: 400 }
            );
        }

        let slug = customSlug || nanoid(6);

        // Check Redis cache first
        const cachedUrl = await getShortUrl(slug);
        if (cachedUrl) {
            return NextResponse.json({
                shortUrl: `https://rahulvijay.site/${slug}`,
                slug,
            });
        }

        // Check if custom slug is available in DB
        if (customSlug) {
            const existing = await prisma.shortUrl.findUnique({
                where: { slug: customSlug },
            });

            if (existing) {
                return NextResponse.json(
                    { error: "Custom short URL is already in use" },
                    { status: 400 }
                );
            }
        }

        // Create short URL in DB
        const shortUrl = await prisma.shortUrl.create({
            data: { slug, url },
        });

        // Save to Redis
        await setShortUrl({ key: slug, value: url });

        return NextResponse.json({
            shortUrl: `https://rahulvijay.site/${shortUrl.slug}`,
            slug: shortUrl.slug,
        });
    } catch (error) {
        console.error("Error creating short URL:", error);
        return NextResponse.json(
            { error: "Failed to create shortened URL" },
            { status: 500 }
        );
    }
}
