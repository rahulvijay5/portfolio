"use client";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { HomeIcon, Rss, Signature } from "lucide-react";
import Link from "next/link";
import React from "react";

const SidebarFooter = () => {
  return (
    <div className="flex gap-3 items-center justify-start w-full">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={"ghost"} className="p-2 hover:bg-emerald-500" asChild>
              <Link href={"/"}>
                <HomeIcon className="h-4 w-4" />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent className="opacity-50">
            <p>Go Home</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={"ghost"} className="p-2 hover:bg-emerald-500" asChild>
              <Link href={"/blog"}>
                <Rss className="h-4 w-4" />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent className="opacity-50">
            <p>View Blogs</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={"ghost"} className="p-2 hover:bg-emerald-500" asChild>
              <Link href={"/guestbook"}>
                <Signature className="h-4 w-4" />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent className="opacity-50">
            <p>Sign my Guestbook</p>
          </TooltipContent>
        </Tooltip>
        
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant={"ghost"} className="p-2 hover:bg-emerald-500" asChild>
              <DarkModeToggle />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="opacity-50">
            <p>Toggle theme</p>
          </TooltipContent>
        </Tooltip>

      </TooltipProvider>
    </div>
  );
};

export default SidebarFooter;
