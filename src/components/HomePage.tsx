"use client"
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import Particles from "@/components/Particles";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";

const HomePage = () => {
    const [showNavlinks, setShowNavLinks] = useState<Boolean>(false);

  setTimeout(() => {
    setShowNavLinks(true);
  }, 7000);
  return (
    <div className="flex items-center justify-center h-screen mx-auto">
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in bg-black"
          quantity={100}
        />
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-md duration-500 text-zinc-300 hover:text-zinc-400 font-serif">
            Hey there, I am
          </h3>

          <h1 className="py-3.5 z-10 text-6xl text-transparent duration-1000 bg-white text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap relative font-extrabold bg-clip-text cursor-none">
            <span className="hover:text-red-200 transition-all duration-500">
              r
            </span>
            <span className="hover:text-green-200 transition-all duration-500">
              a
            </span>
            <span className="hover:text-orange-200 transition-all duration-500">
              h
            </span>
            <span className="hover:text-yellow-200 transition-all duration-500">
              u
            </span>
            <span className="hover:text-blue-200 transition-all duration-500">
              l
            </span>
            <span className="hover:text-zinc-200 transition-all duration-500">
              {" "}
            </span>
            <span className="hover:text-indigo-200 transition-all duration-500">
              v
            </span>
            <span className="hover:text-purple-200 transition-all duration-500">
              i
            </span>
            <span className="hover:text-pink-200 transition-all duration-500">
              j
            </span>
            <span className="hover:text-emerald-200 transition-all duration-500">
              a
            </span>
            <span className="hover:text-violet-200 transition-all duration-500">
              y
            </span>
          </h1>
          <h3 className="text-lg mt-6 text-zinc-300 text-center px-4 sm:px-12 md:px-0 md:w-2/3">
            and you probably either know me as a{" "}
            <Link
              href={"/t"}
              className="font-bold text-xl hover:text-white font-mono inline"
            >
              <AnimatedShinyText className="inline items-center justify-center hover:text-neutral-600  text-white hover:underline">
                <span>[developer, engineer or techy guy]</span>
              </AnimatedShinyText>
            </Link>{" "}
            or you may know me as a{" "}
            <Link
              href={"/c"}
              className="font-bold text-xl hover:text-white italic font-serif inline"
            >
              <AnimatedShinyText className="inline items-center justify-centerhover:text-neutral-600 hover:dark:text-zinc-100">
                <span>
                  {" "}
                  traveler, photographer, storyteller or an adventurer,
                </span>
              </AnimatedShinyText>
            </Link>{" "}
            but let me tell you I am a combination of both.
          </h3>
          <div className={`flex items-center justify-center gap-4 mx-6 mt-16 sm:mt-12 flex-wrap transition-opacity duration-500 ease-in-out ${showNavlinks ? "opacity-80":"opacity-0"}`}>
              <Button asChild variant={"link"}>
              <Link
              href={"/t"}
              className="text-zinc-300 opacity-80"
              >
              Tech
            </Link>
            </Button>
              <Button asChild variant={"link"}>
              <Link
              href={"/c"}
              className="text-zinc-300 opacity-80"
              >
              Creatives
            </Link>
                </Button>
              <Button asChild variant={"link"}>
              <Link
              href={"/blog"}
              className="text-zinc-300 opacity-80"
              >
              Blog
            </Link>
                </Button>
              <Button asChild variant={"link"}>
              <Link
              href={"/guestbook"}
              className="text-zinc-300 opacity-80"
              >
              Sign my Guestbook
            </Link>
                </Button>
            </div>
        </div>
      </div>
  )
}

export default HomePage