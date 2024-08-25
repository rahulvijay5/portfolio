"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CalendarIcon,
  HomeIcon,
  LaptopMinimal,
  MailIcon,
  Map,
  PencilIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { DarkModeToggle } from "./DarkModeToggle";

const DATA = {
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/tech", icon: LaptopMinimal, label: "Tech" },
    { href: "/c", icon: Map, label: "Creatives" },
    { href: "/blog", icon: PencilIcon, label: "Blog" },
  ],
  contact: {
    socialHandles
  },
};

import { motion, AnimatePresence } from "framer-motion";
import { Share2, X } from "lucide-react";
import { socialHandles } from "@/lib/constants";

export function DockToUse() {
  const [showSocial, setShowSocial] = useState(false);
  const toggleSocial = () => setShowSocial(!showSocial);
  return (
    // <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">

    <TooltipProvider>
      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <motion.div
          className="flex items-center bg-background rounded-2xl shadow-lg "
          layout
        >
          {/* Main navigation items */}
          <Dock direction="middle">
            {DATA.navbar.map((item) => (
              <DockIcon key={item.label}>
                <Tooltip key={item.label}>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-10 sm:size-12 rounded-full"
                      )}
                    >
                      <item.icon className="size-4 sm:size-5" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}

            {/* Social links (collapsed on mobile) */}
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={toggleSocial}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-10 sm:size-12 rounded-full"
                  )}
                >
                  {showSocial ? (
                    <X className="size-4 sm:size-5" />
                  ) : (
                    <Share2 className="size-4 sm:size-5" />
                  )}
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Social Links</p>
              </TooltipContent>
            </Tooltip>

            {/* Expanded social links */}
            <AnimatePresence>
              {showSocial && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="flex overflow-hidden"
                >
                  <Separator orientation="vertical" className="h-8 mx-2" />
                  {Object.entries(DATA.contact.socialHandles).map(([name, social]) => (
                    <Tooltip key={name}>
                      <TooltipTrigger asChild>
                        <Link
                          href={social.url}
                          target="_blank"
                          className={cn(
                            buttonVariants({ variant: "ghost", size: "icon" }),
                            "size-10 sm:size-12 rounded-full"
                          )}
                        >
                          <social.icon className="size-4 sm:size-5" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{name}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Theme toggle */}
            <Separator orientation="vertical" className="h-8 mx-2" />

            <DockIcon>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DarkModeToggle />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Theme</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          </Dock>
        </motion.div>
      </nav>
    </TooltipProvider>

    // <TooltipProvider>
    //   <Dock direction="middle">
    //     {DATA.navbar.map((item) => (
    //       <DockIcon key={item.label}>
    //         <Tooltip>
    //           <TooltipTrigger asChild>
    //             <Link
    //               href={item.href}
    //               className={cn(
    //                 buttonVariants({ variant: "ghost", size: "icon" }),
    //                 "size-12 rounded-full"
    //               )}
    //             >
    //               <item.icon className="size-4" />
    //             </Link>
    //           </TooltipTrigger>
    //           <TooltipContent>
    //             <p>{item.label}</p>
    //           </TooltipContent>
    //         </Tooltip>
    //       </DockIcon>
    //     ))}
    //     <Separator orientation="vertical" className="h-full" />
    //     {Object.entries(DATA.contact.social).map(([name, social]) => (
    //       <DockIcon key={name}>
    //         <Tooltip>
    //           <TooltipTrigger asChild>
    //             <Link
    //               href={social.url}
    //               target="_blank"
    //               className={cn(
    //                 buttonVariants({ variant: "ghost", size: "icon" }),
    //                 "size-12 rounded-full"
    //               )}
    //             >
    //               <social.icon className="size-4" />
    //             </Link>
    //           </TooltipTrigger>
    //           <TooltipContent>
    //             <p>{name}</p>
    //           </TooltipContent>
    //         </Tooltip>
    //       </DockIcon>
    //     ))}
    //     <Separator orientation="vertical" className="h-full py-2" />
    //     <DockIcon>
    //       <Tooltip>
    //         <TooltipTrigger asChild>
    //           <DarkModeToggle />
    //         </TooltipTrigger>
    //         <TooltipContent>
    //           <p>Theme</p>
    //         </TooltipContent>
    //       </Tooltip>
    //     </DockIcon>
    //   </Dock>
    // </TooltipProvider>
    // </div>
  );
}
