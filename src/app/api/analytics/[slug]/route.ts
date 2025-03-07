import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { use } from "react";

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {

  //checkkk
  const { slug } = await params;

  try {
    const shortUrl = await prisma.shortUrl.findUnique({
      where: { slug: slug },
      include: {
        visits: {
          orderBy: { timestamp: "desc" },
          take: 1000,
        },
      },
    });

    if (!shortUrl) {
      return NextResponse.json({ error: "URL not found" }, { status: 404 });
    }

    // Calculate analytics
    const totalVisits = shortUrl.visits.length;
    const browsers: Record<string, number> = {};
    const countries: Record<string, number> = {};
    const devices: Record<string, number> = {};
    const referrers: Record<string, number> = {};

    shortUrl.visits.forEach((visit) => {
      if (visit.browser)
        browsers[visit.browser] = (browsers[visit.browser] || 0) + 1;
      if (visit.country)
        countries[visit.country] = (countries[visit.country] || 0) + 1;
      if (visit.device)
        devices[visit.device] = (devices[visit.device] || 0) + 1;
      if (visit.referrer) {
        referrers[visit.referrer] = (referrers[visit.referrer] || 0) + 1;
      }
    });

    // Get visits over time
    const visitsOverTime = await prisma.urlVisit.groupBy({
      by: ["timestamp"],
      where: {
        shortUrlId: shortUrl.id,
      },
      _count: {
        id: true,
      },
      orderBy: {
        timestamp: "desc",
      },
      take: 30,
    });

    const formattedVisitsOverTime = visitsOverTime.map((visit) => ({
      date: visit.timestamp,
      count: visit._count.id,
    }));

    return NextResponse.json({
      totalVisits,
      browsers,
      countries,
      devices,
      referrers,
      visitsOverTime: formattedVisitsOverTime,
    });
  } catch (error) {
    console.error("Error fetching analytics:", error);
    return NextResponse.json(
      { error: "Failed to fetch analytics" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
