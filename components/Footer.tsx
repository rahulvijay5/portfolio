import React from "react";
import { Badge } from "./ui/badge";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="md:block hidden bg-gradient-to-bl rounded-xl from-zinc-700 from-85% to-orange-600/60 to-95% p-0.5">
        <div className="bg-gradient-to-bl from-zinc-800 from-85% to-orange-600/30 to-95% rounded-xl px-4 py-8 flex justify-between">
          <div className="text-lg font-semibold text-zinc-200">Portfolio 2024</div>
          <div className="flex justify-center gap-2">
            <Link
              href={"https://github.com/rahulvijay5"}
              target="_blank"
              className="text-orange-600"
            >
              Github
            </Link>
            <Link
              href={"https://www.linkedin.com/in/rahul-viijay/"}
              target="_blank"
            >
              LinkedIn
            </Link>
            <Link
              href={"https://twitter.com/rahulviijay"}
              target="_blank"
            >
              Twitter
            </Link>
          </div>
          <div>
            <Badge variant={"outline"} className=" py-1 text-zinc-300">
              <div className="bg-orange-600 h-2  w-2 animate-pulse mr-1.5 rounded-full "></div>
              Open to Work
            </Badge>
          </div>
        </div>
      </div>

      {/* For mobile versions */}
      <div className="md:hidden lg:hidden xl:hidden 2xl:hidden border-2 border-zinc-700 rounded-xl">
        <div className="bg-gradient-to-b from-zinc-800 from-40% to-orange-600/10 to-95% rounded-xl p-6 items-center lg:justify-between flex flex-col lg:flex-row gap-4">
          <div>
            <Badge variant={"outline"} className=" py-1 text-zinc-300 bg-zinc-900">
              <div className="bg-orange-600 h-2  w-2 animate-pulse mr-1.5 rounded-full "></div>
              Open to Work
            </Badge>
          </div>
          <div className="flex lg:justify-center justify-between w-2/3 gap-2">
            <Link
              href={"https://github.com/rahulvijay5"}
              target="_blank"
              className="text-orange-600"
            >
              Github
            </Link>
            <Link
              href={"https://www.linkedin.com/in/rahul-viijay/"}
              target="_blank"
            >
              LinkedIn
            </Link>
            <Link href={"https://twitter.com/rahulviijay"} target="_blank">
              Twitter
            </Link>
          </div>
          <div>Portfolio 2024</div>
        </div>
      </div>
    </>
  );
};

export default Footer;