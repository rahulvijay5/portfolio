import BlogNavbar from "@/components/BlogNavbar"
import { BlogPostsPreview } from "@/components/BlogPostPreview"
import { BlogPostsPagination } from "@/components/BlogPostsPagination"
import { PostsSidebar } from "@/components/PostsSidebar"
import { wisp } from "@/lib/wisp"
import Link from "next/link"

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) => {
  const searchParam = await searchParams
  const page = searchParam.page ? Number.parseInt(searchParam.page as string) : 1

  // Fetch more posts for the sidebar (limit: 15)
  const allPostsResult = await wisp.getPosts({ limit: 15, page: 1 })

  // Fetch posts for the current page (limit: 7)
  const result = await wisp.getPosts({ limit: 7, page })

  console.log("Page:" ,page)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      <BlogNavbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <header className="mb-8 md:mb-12 text-center">
          <p className="text-muted-foreground max-w-6xl mx-auto text-sm sm:text-base md:text-lg">
            Explore some of my collection of thoughtfully crafted articles on technology, experiences travel, and more.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Sidebar - only visible on desktop */}
          <div className="hidden lg:block">
            <PostsSidebar posts={allPostsResult.posts} />
          </div>

          {/* Main content */}
          <div className="flex-1">
            <BlogPostsPreview posts={result.posts} />
          </div>
        </div>
            <BlogPostsPagination pagination={result.pagination} />
      </div>

      <footer className="border-t py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="text-xl sm:text-2xl font-bold tracking-tight">Blogs By Rahul</div>
            <nav className="flex flex-wrap justify-center gap-x-6 sm:gap-x-8 gap-y-3 sm:gap-y-4 text-xs sm:text-sm text-muted-foreground">
              <Link href="/t" className="hover:text-primary transition-colors">
                Tech
              </Link>
              <Link href="/c" className="hover:text-primary transition-colors">
                Travel
              </Link>
            </nav>
            <p className="text-xs sm:text-sm text-muted-foreground mt-6 sm:mt-8">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Page

