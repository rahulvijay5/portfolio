import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'
// import { rateLimiter, runMiddleware } from '@/lib/rateLimit'


function setCorsHeaders(response: NextResponse) {
  response.headers.set('Access-Control-Allow-Origin', '*')
  response.headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type')
  return response
}

export async function GET() {
  const entries = await prisma.guestbookEntry.findMany({
    orderBy: { createdAt: 'desc' },
  })
  const response = NextResponse.json(entries)
  return setCorsHeaders(response)
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    await prisma.guestbookEntry.delete({
      where: { id },
    });
    return NextResponse.json({ message: "Entry deleted successfully" });
  } catch (error) {
    console.error("Failed to delete entry:", error);
    return NextResponse.json({ error: "Failed to delete entry" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    // await runMiddleware(req, new NextResponse(), rateLimiter)
    const { message, name, email } = await req.json()
    const entry = await prisma.guestbookEntry.create({
      data: {
        message,
        name,
        email,
      },
    })
    const response = NextResponse.json(entry)
    return setCorsHeaders(response)
  } catch (error: any) {
    console.error('Failed to create entry:', error)
    const response = NextResponse.json({ error: 'Failed to create entry', details: error.message }, { status: 500 })
    return setCorsHeaders(response)
  }
}

export async function OPTIONS() {
  const response = NextResponse.json(null, { status: 204 })
  return setCorsHeaders(response)
}