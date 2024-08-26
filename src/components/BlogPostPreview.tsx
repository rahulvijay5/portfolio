"use client";
import { cn } from "@/lib/utils";
import { GetPostsResult } from "@/lib/wisp";
import { formatDate } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

export const BlogPostPreview: FunctionComponent<{
  post: GetPostsResult["posts"][0];
  fullWidth?: boolean;
}> = ({ post, fullWidth = false }) => {
  return (
    <div className={cn("break-words", fullWidth && "col-span-full")}>
      <Link href={`/blog/${post.slug}`}>
        <div className={cn("relative", fullWidth ? "aspect-[16/6]" : "aspect-[16/9]")}>
          <Image
            alt={post.title}
            className="object-cover"
            src={post.image || "/images/placeholder.webp"}
            fill
          />
        </div>
      </Link>
      <div className="grid grid-cols-1 gap-3 md:col-span-2 mt-4">
        <h2 className="font-sans font-semibold tracking-tighter text-primary text-2xl md:text-3xl">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <div className="flex justify-between items-center">
        <div className="prose lg:prose-lg italic tracking-tighter text-muted-foreground">
          {formatDate(post.publishedAt || post.updatedAt, "dd MMMM yyyy")}
        </div>
        <div className="text-sm text-muted-foreground">
          {post.tags.map((tag) => (
            <div key={tag.id} className="mr-2 inline-block">
              <Link href={`/tag/${tag.name}`}>#{tag.name}</Link>
            </div>
          ))}
        </div>
        </div>
        <div className="prose lg:prose-lg leading-relaxed md:text-lg line-clamp-4 text-muted-foreground">
          {post.description}
        </div>
        
      </div>
    </div>
  );
};

export const BlogPostsPreview: FunctionComponent<{
  posts: GetPostsResult["posts"];
  className?: string;
}> = ({ posts, className }) => {
  return (
    <div className={cn("grid gap-16 lg:gap-28", className)}>
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-flow-row-dense gap-12 lg:gap-18 md:my-16 my-8">
        {posts.map((post, index) => (
          <BlogPostPreview key={post.id} post={post} fullWidth={index === 0} />
        ))}
      </div>
    </div>
  );
};
