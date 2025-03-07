"use client";
import { cn } from "@/lib/utils";
import { GetPostsResult } from "@/lib/wisp";
import { formatDate } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { LinkPreview } from "./ui/link-preview";

export const BlogPostPreview: FunctionComponent<{
  post: GetPostsResult["posts"][0];
  fullWidth?: boolean;
}> = ({ post, fullWidth = false }) => {
  return (
    <div className={cn("break-words ", fullWidth && "col-span-full")}>
      <div className="flex flex-col lg:flex-row gap-2 my-4 md:my-2">
        {/* Text Content */}
        <div className="flex flex-col justify-between flex-1">
          <h2 className="font-sans font-semibold text-primary text-2xl md:text-3xl">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>
          <div className="md:flex md:flex-row-reverse justify-between items-start my-4">
            <div className="w-full italic text-left md:text-center text-muted-foreground text-sm md:text-base">
              {formatDate(post.publishedAt || post.updatedAt, "dd MMMM yyyy")}
            </div>
            <div className="prose leading-relaxed md:text-md line-clamp-3 text-muted-foreground">
              {post.description}
            </div>
          </div>
        </div>

        {/* Image on the Right */}
        <div className="w-full lg:w-[200px] lg:h-[150px] flex-shrink-0 flex md:justify-center justify-start items-center">
          <Image
            src={post.image || "/images/placeholder.webp"}
            className="object-cover rounded-lg"
            width={300}
            height={150}
            alt={`Image view of ${post.title}`}
          />
        </div>
      </div>
    </div>
  );
};

export const BlogPostsPreviewCategory: FunctionComponent<{
  posts: GetPostsResult["posts"];
  className?: string;
}> = ({ posts, className }) => {
  return (
    <div className={cn("grid gap-4 lg:gap-8 w-full", className)}>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 lg:gap-8 md:my-16 my-8">
        {posts.map((post, index) => (
          <BlogPostPreview key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
