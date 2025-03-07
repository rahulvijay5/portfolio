"use client";
import { cn } from "@/lib/utils";
import { GetPostsResult } from "@/lib/wisp";
import { formatDate } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { ArrowUpRight, Calendar } from "lucide-react";

export const BlogPostPreview: FunctionComponent<{
  post: GetPostsResult["posts"][0];
  fullWidth?: boolean;
  variant?: "large" | "medium" | "small" | "featured";
  className?: string;
}> = ({ post, fullWidth = false, variant = "medium", className }) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl transition-all duration-500",
        "border border-gray-100 dark:border-gray-800",
        "hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)]",
        "bg-white dark:bg-gray-900/60 backdrop-blur-sm",
        fullWidth && "col-span-full md:col-span-3",
        variant === "large" && "row-span-2 md:col-span-2",
        variant === "featured" && "row-span-2 col-span-full md:col-span-3",
        variant === "small" && "aspect-square",
        className
      )}
    >
      <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">View {post.title}</span>
      </Link>

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20 z-[1]" />
        <Image
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          src={post.image || "/images/placeholder.webp"}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={variant === "featured"}
        />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8 z-[2] text-white">
        {variant === "featured" && (
          <div className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs sm:text-sm font-medium w-fit mb-4 backdrop-blur-sm shadow-lg">
            Latest Post
          </div>
        )}

        {/* Category indicator - derived from first tag */}
        {post.tags && post.tags.length > 0 && (
          <div className={
            "text-xs uppercase tracking-wider font-medium text-primary-foreground/90 mb-2"}>
            {post.tags[0]?.name} , {post.tags[1]?.name}
          </div>
        )}

        <h2
          className={cn(
            "font-bold tracking-tight mt-auto leading-tight group-hover:text-primary-foreground transition-colors line-clamp-3",
            variant === "featured" &&
              "text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4",
            variant === "large" &&
              "text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3",
            variant === "medium" && "text-lg sm:text-xl md:text-2xl mb-2",
            variant === "small" && "text-base sm:text-lg mb-1 sm:mb-2"
          )}
        >
          {post.title}
        </h2>

        {(variant === "featured" || variant === "large") && (
          <div className="line-clamp-2 sm:line-clamp-3 text-gray-200/90 mb-3 sm:mb-4 text-sm sm:text-base font-light leading-relaxed">
            {post.description}
          </div>
        )}

        {variant === "medium" && (
          <div className="line-clamp-2 text-gray-200/90 mb-2 sm:mb-3 text-sm sm:text-base font-light leading-relaxed">
            {post.description}
          </div>
        )}

        <div className="flex justify-between items-center pt-2 sm:pt-3 border-t border-white/20">
          <div className="flex items-center text-xs text-gray-200/90 font-medium">
            <Calendar className="h-3 w-3 mr-1.5 opacity-70" />
            {formatDate(post.publishedAt || post.updatedAt, "dd MMM yyyy")}
          </div>

          <div className="hidden sm:flex items-center gap-2">
            {post.tags.slice(0, variant === "small" ? 1 : 2).map((tag) => (
              <div
                key={tag.id}
                className="text-xs bg-white/10 px-2 py-0.5 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                #{tag.name}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-4 right-4 bg-white/10 p-2 rounded-full opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 backdrop-blur-sm hover:bg-white/20 shadow-lg">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export const BlogPostsPreview: FunctionComponent<{
  posts: GetPostsResult["posts"];
  className?: string;
}> = ({ posts, className }) => {
  if (!posts.length) return null;

  return (
    <div className={cn("w-full", className)}>
      {/* Featured post */}
      <BlogPostPreview
        post={posts[0]}
        variant="featured"
        className="mb-6 sm:mb-8 h-[400px] sm:h-[500px] md:h-[550px]"
      />

      {/* Bento grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 sm:gap-4 md:gap-6 md:auto-rows-fr">
        {posts.length > 1 && (
          <BlogPostPreview
            post={posts[1]}
            variant="large"
            className="sm:col-span-2 md:col-span-3 md:row-span-2 h-[350px] sm:h-[400px] md:h-auto"
          />
        )}

        {posts.length > 2 && (
          <BlogPostPreview
            post={posts[2]}
            variant="medium"
            className="sm:col-span-2 md:col-span-3 h-[300px] sm:h-[350px] md:h-auto"
          />
        )}

        {posts.length > 3 && (
          <BlogPostPreview
            post={posts[3]}
            variant="medium"
            className="sm:col-span-2 md:col-span-3 h-[300px] sm:h-[350px] md:h-auto"
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-4 md:gap-6 md:col-span-6">
          {posts.slice(4).map((post) => (
            <BlogPostPreview
              key={post.id}
              post={post}
              variant="small"
              className="h-[250px] sm:h-[280px] md:h-auto w-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
