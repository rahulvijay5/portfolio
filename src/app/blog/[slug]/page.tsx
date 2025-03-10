import { BlogPostContent } from "@/components/BlogPostContent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RelatedPosts } from "@/components/RelatedPosts";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import { wisp } from "@/lib/wisp";
import { notFound } from "next/navigation";
import { use } from "react";
import type { BlogPosting, WithContext } from "schema-dts";

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  // checkkk
  const {slug} = await params
  const result = await wisp.getPost(slug);
  if (!result || !result.post) {
    return {
      title: "Blog post not found",
    };
  }

  const { title, description, image } = result.post;
  const generatedOgImage = signOgImageUrl({ title, brand: config.blog.name });

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: image ? [image, generatedOgImage] : [generatedOgImage],
    },
  };
}
interface Params {
  slug: string;
}

const Page = async ({ params }: { params: Promise<Params> }) => {
  // checkkk
  const {slug} = await params
  const result = await wisp.getPost(slug);
  const { posts } = await wisp.getRelatedPosts({ slug, limit: 3 });

  if (!result || !result.post) {
    return notFound();
  }

  const { title, publishedAt, updatedAt, image } = result.post;

  const jsonLd: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    image: image ? image : undefined,
    datePublished: publishedAt ? publishedAt.toString() : undefined,
    dateModified: updatedAt.toString(),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-5">
        <Header />
        <BlogPostContent post={result.post} />
        <RelatedPosts posts={posts} />
        <Footer />
      </div>
    </>
  );
};

export default Page;
