import { BlogPostsPreview } from "@/components/BlogPostPreview";
import { BlogPostsPagination } from "@/components/BlogPostsPagination";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Badge } from "@/components/ui/badge";
import { wisp } from "@/lib/wisp";
import { CircleX } from "lucide-react";
import Link from "next/link";
import { use } from "react";

interface Params {
  slug: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  // checkkk
  const {slug} = await params
  return {
    title: `#${slug}`,
    description: `Posts tagged with #${slug}`,
  };
}

const Page = async ({
  params,
  searchParams,
}: {
  params: Promise<Params>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
// checkkk
  const {slug} = await params
  const {pageSearch} = await searchParams

  const page = pageSearch ? parseInt(pageSearch as string) : 1;
  const result = await wisp.getPosts({ limit: 6, tags: [slug], page });
  return (
    <div className="container mx-auto px-5 mb-10">
      <Header />
      <Link href="/blog">
        <Badge className="px-2 py-1">
          <CircleX className="inline-block w-4 h-4 mr-2" />
          Posts tagged with <strong className="mx-2">#{slug}</strong>{" "}
        </Badge>
      </Link>
      <BlogPostsPreview posts={result.posts} />
      <BlogPostsPagination
        pagination={result.pagination}
        basePath={`/tag/${slug}/?page=`}
      />
      <Footer />
    </div>
  );
};

export default Page;
