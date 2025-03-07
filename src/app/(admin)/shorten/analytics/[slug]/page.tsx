import AnalyticsShortUrlPage from '@/components/AnalyticsShortUrl'
import React from 'react'

type AnalyticsPageProps = {
  params: Promise<{
    slug: string
  }>
}

const AnalyticsPage = async ({ params }: AnalyticsPageProps) => {
  const slug= (await params).slug
  return (
    <AnalyticsShortUrlPage slug={slug} />
  )
}

export default AnalyticsPage
