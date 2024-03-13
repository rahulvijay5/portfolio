"use client";

import React from "react";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { Button } from "./ui/button";
import { ResumeIcon } from "@/lib/icons";
import { CopyIcon } from "lucide-react";



const Header = () => {
  const handleResume = () => {};
  const handleCopy = () =>{
    if (!navigator.clipboard) {
      return
    }
    try {
      navigator.clipboard.writeText("rahulviijay@gmail.com")
    } catch (err) {
      console.error('Failed to copy!', err)
    }
  }
  return (
    <div className="border-zinc-700 bg-zinc-800 rounded-xl p-4 border-2 flex flex-col gap-12">
      <div className="flex justify-between mt-8 text-xl text-zinc-400">
        <div>Software Developer</div>
        <Badge variant={"outline"} className=" py-1 text-zinc-300 bg-zinc-900">
          <div className="bg-orange-600 h-2  w-2 animate-pulse mr-1.5 rounded-full "></div>
          Open to Work
        </Badge>
      </div>
      <div className="sm:flex-row-reverse sm:flex justify-between">
        <Image
          className="p-2 bg-zinc-700 border-zinc-700 border-2 rounded-full"
          height={100}
          width={100}
          alt="Profile Picture"
          src={"/logo.svg"}
        />
        <div>
          <h1 className="text-3xl font-bold">I'm Rahul Vijay</h1>
          <p className="font-medium text-zinc-400 mt-1">
            I am a software developer
          </p>
          <div className="sm:flex gap-2 mt-6">
            <Button
              variant={"orange"}
              onClick={handleResume}
              className="flex gap-2 text-md"
            >
              Resume
              <Image
                alt="Resume Icon"
                src={"/cv.png"}
                height={24}
                width={24}
                className="text-white"
              />
            </Button>
            <Button  onClick={handleCopy} className="flex gap-2 text-md mt-2 sm:mt-0 bg-zinc-900">
              Copy Email <CopyIcon className="h-[20px] w-[20px]" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
