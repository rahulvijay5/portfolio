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
      <div className="grid grid-cols-1 gap-1 md:gap-3 md:col-span-2 mt-4">
        <h2 className="font-sans font-semibold tracking-tighter text-primary text-2xl md:text-3xl">
          {/* <LinkPreview url={post.image || "/images/placeholder.webp"} className="font-bold"> */}
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          {/* </LinkPreview> */}
        </h2>
        <div className="md:flex md:flex-row-reverse justify-between items-start">
          <div className="prose italic tracking-tighter text-muted-foreground text-sm md:text-base">
            {formatDate(post.publishedAt || post.updatedAt, "dd MMMM yyyy")}
          </div>
          <div className="prose leading-relaxed md:text-md line-clamp-2 text-muted-foreground">
            {post.description}
          </div>
          {/* <div className="text-sm text-muted-foreground">
          {post.tags.map((tag) => (
            <div key={tag.id} className="mr-2 inline-block">
              <Link href={`/tag/${tag.name}`}>#{tag.name}</Link>
            </div>
          ))}
        </div> */}
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
      <div className="grid grid-cols-1 md:grid-cols-1 md:grid-flow-row-dense gap-4 lg:gap-8 md:my-16 my-8">
        {posts.map((post, index) => (
          <BlogPostPreview key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
