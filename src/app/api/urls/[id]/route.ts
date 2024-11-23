import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params

    // Delete the URL and its associated visits
    await prisma.shortUrl.delete({
      where: { id },
    })

    return NextResponse.json({ message: 'URL deleted successfully' })
  } catch (error) {
    console.error('Error deleting URL:', error)
    return NextResponse.json(
      { error: 'Failed to delete URL' },
      { status: 500 }
    )
  }
}