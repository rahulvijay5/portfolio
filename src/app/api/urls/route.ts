import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const urls = await prisma.shortUrl.findMany({
      select: {
        id: true,
        slug: true,
        url: true,
        createdAt: true,
        _count: {
          select: { visits: true }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    const formattedUrls = urls.map(url => ({
      id: url.id,
      slug: url.slug,
      url: url.url,
      createdAt: url.createdAt.toISOString(),
      visits: url._count.visits
    }))

    return NextResponse.json(formattedUrls)
  } catch (error) {
    console.error('Error fetching URLs:', error)
    return NextResponse.json(
      { error: 'Failed to fetch URLs' },
      { status: 500 }
    )
  }
}