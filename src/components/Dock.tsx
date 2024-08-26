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
  Signature,
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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { DarkModeToggle } from "./DarkModeToggle";

const DATA = {
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/tech", icon: LaptopMinimal, label: "Tech" },
    { href: "/c", icon: Map, label: "Creatives" },
    { href: "/blog", icon: PencilIcon, label: "Blog" },
    { href: "/guestbook", icon: Signature, label: "Guestbook" },
  ],
  contact: {
    socialHandles,
  },
};

import { motion, AnimatePresence } from "framer-motion";
import { Share2, X } from "lucide-react";
import { socialHandles } from "@/lib/constants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

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

            <div className="hidden sm:flex items-center">
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

              <AnimatePresence>
                {showSocial && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    className="flex overflow-hidden"
                  >
                    <Separator orientation="vertical" className="h-8 mx-2" />
                    {Object.entries(DATA.contact.socialHandles).map(
                      ([name, social]) => (
                        <Tooltip key={name}>
                          <TooltipTrigger asChild>
                            <Link
                              href={social.url}
                              target="_blank"
                              className={cn(
                                buttonVariants({
                                  variant: "ghost",
                                  size: "icon",
                                }),
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
                      )
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile view */}
            <div className="sm:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-10 rounded-full"
                    )}
                  >
                    <Share2 className="size-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="bottom" className="h-[300px]">
                  <DropdownMenuLabel>Social Links</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <div className="mt-4 flex flex-col items-start justify-between h-full gap-2">
                      {Object.entries(DATA.contact.socialHandles).map(
                        ([name, social]) => (
                          <Tooltip key={name}>
                            <TooltipTrigger asChild>
                              <Link
                                href={social.url}
                                target="_blank"
                                className={cn(
                                  buttonVariants({
                                    variant: "ghost",
                                    // size: "icon",
                                  }),
                                  " w-full items-center flex gap-4 justify-between"
                                )}
                              >
                                <DropdownMenuItem className="w-full">
                                  <social.icon className="size-4 sm:size-5" />
                                  {/* <User className="mr-2 h-4 w-4" /> */}
                                  <span className="ml-3">{social.name}</span>
                                </DropdownMenuItem>
                              </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{name}</p>
                            </TooltipContent>
                          </Tooltip>
                        )
                      )}
                    </div>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

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
