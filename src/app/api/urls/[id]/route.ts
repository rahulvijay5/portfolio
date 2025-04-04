import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { use } from 'react'
import { deleteShortUrl } from '@/lib/redis'

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // checkkk
    const { id } = await params

    // Delete the URL and its associated visits
    await prisma.shortUrl.delete({
      where: { id },
    })

    await deleteShortUrl(id);

    return NextResponse.json({ message: 'URL deleted successfully' })
  } catch (error) {
    console.error('Error deleting URL:', error)
    return NextResponse.json(
      { error: 'Failed to delete URL' },
      { status: 500 }
    )
  }
}