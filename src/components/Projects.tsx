"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { projectsContent } from "@/lib/constants";

export function StickyScrollRevealDemo() {
  return (
    <div className="w-full">
      <StickyScroll content={projectsContent} />
    </div>
  );
}
