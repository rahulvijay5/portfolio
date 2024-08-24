import { FunctionComponent } from "react";
import { BlogPostsPagination } from "@/components/BlogPostsPagination";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { wisp } from "@/lib/wisp";
import { ArrowUpRight, CircleX } from "lucide-react";
import Link from "next/link";
import { BlogPostsPreviewCategory } from "./BlogPostPreviewCategory";
import { Button } from "./ui/button";

interface BlogByCategoryProps {
  category: string;
  initialPage?: number;
}

export const BlogByCategory: FunctionComponent<BlogByCategoryProps> = async ({
  category,
  initialPage = 1,
}) => {
  // Fetch blog posts for the given category
  const result = await wisp.getPosts({
    limit: 5,
    tags: [category],
    page: initialPage,
  });

  // Metadata can still be generated dynamically if needed
  // Example: generateMetadata({ params: { slug: category } });

  return (
    <div className="w-full flex flex-col">
      <BlogPostsPreviewCategory posts={result.posts} />
      <Button asChild variant={"link"}>
      <Link href={`/tag/${category}/?page=1`} className="ml-auto flex gap-0 hover:scale-110 duration-1000 transition-all ease-in-out scale-105">
        View More <ArrowUpRight />
      </Link>
      </Button>
    </div>
  );
};

export default BlogByCategory;
