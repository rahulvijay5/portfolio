import { BlogPostsPreview } from "@/components/BlogPostPreview";
import { BlogPostsPagination } from "@/components/BlogPostsPagination";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { wisp } from "@/lib/wisp";
import { use } from "react";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  // checkkk
  const {pageSearch} = await searchParams
  const page = pageSearch ? parseInt(pageSearch as string) : 1;
  const result = await wisp.getPosts({ limit: 7, page });
  return (
    <div className="container mx-auto px-5 mb-10">
      <BlogPostsPreview posts={result.posts} />
      <BlogPostsPagination pagination={result.pagination} />
    </div>
  );
};

export default Page;
