import type { GetPostsResult } from "@/lib/wisp"
import Link from "next/link"
import type { FunctionComponent } from "react"
import { Clock, TrendingUp } from "lucide-react"

export const PostsSidebar: FunctionComponent<{
  posts: GetPostsResult["posts"]
  currentPostId?: string
}> = ({ posts, currentPostId }) => {
  // Sort posts by date (newest first)
  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = new Date(a.publishedAt || a.updatedAt)
    const dateB = new Date(b.publishedAt || b.updatedAt)
    return dateB.getTime() - dateA.getTime()
  })

  // Get trending posts (could be based on views or other metrics)
  // For now, just using the first 3 posts
  const trendingPosts = sortedPosts.slice(0, 3)

  return (
    <aside className="w-full lg:w-64 xl:w-72 sticky top-24 h-fit">
      {/* <div className="bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-100 dark:border-gray-800 p-5 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="h-4 w-4 text-primary" />
          <h3 className="font-semibold text-lg">Trending</h3>
        </div>
        <ul className="space-y-3">
          {trendingPosts.map((post) => (
            <li key={post.id}>
              <Link
                href={`/blog/${post.slug}`}
                className={`block text-sm hover:text-primary transition-colors line-clamp-2 ${
                  post.id === currentPostId ? "text-primary font-medium" : ""
                }`}
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div> */}

      <div className=" dark:shadow-white/10 shadow-md shadow-black/10 backdrop-blur-sm rounded-xl border border-gray-100 dark:border-gray-800 p-5">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="h-4 w-4 text-primary" />
          <h3 className="font-semibold text-lg">Recent Posts</h3>
        </div>
        <ul className="space-y-3">
          {sortedPosts.map((post) => (
            <li key={post.id} className="pb-3 border-b border-gray-100 dark:border-gray-800 last:border-0 last:pb-0">
              <Link
                href={`/blog/${post.slug}`}
                className={`block text-sm hover:text-primary transition-colors line-clamp-2 ${
                  post.id === currentPostId ? "text-primary font-medium" : ""
                }`}
              >
                {post.title}
              </Link>
              {/* <div className="flex mt-1">
                {post.tags.slice(0, 2).map((tag) => (
                  <Link
                    key={tag.id}
                    href={`/tag/${tag.name}`}
                    className="text-xs text-muted-foreground hover:text-primary mr-2"
                  >
                    #{tag.name}
                  </Link>
                ))}
              </div> */}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

