import { UpArrowRight } from "@/lib/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <div className="bg-zinc-800 border-zinc-700 border-2 rounded-xl flex flex-col gap-6 p-4">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-lg">
            Project Title
          </div>
          <div className="text-zinc-400">
            Project Subtitle
          </div>
        </div>
        <Link 
            href={"https://www.google.com"}
            target="_blank"
            className="h-10 w-10 p-1.5 duration-75 rounded-full bg-orange-600 items-center flex justify-center hover:bg-orange-700 cursor-pointer">
            <UpArrowRight />
        </Link>
      </div>
      <div className="flex object-cover items-center justify-center">
        <Image 
            width={400}
            height={400}
            alt="Project Image"
            className="rounded-lg grayscale hover:grayscale-0 duration-100 hover:scale-105 ease-in-out transition-transform"
            src={"https://images.unsplash.com/photo-1682685794761-c8e7b2347702?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"}
        />
      </div>
    </div>
  );
};

export default Project;
