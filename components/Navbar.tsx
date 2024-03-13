"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { CancelMenuIcon, HamburgerIcon } from "@/lib/icons";
import { Button } from "./ui/button";
import { CrossIcon } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClickNavbar = () => {
    setIsMenuOpen(true);
  };

  return (
    <div>
      <div className={`sm:hidden ${isMenuOpen ? "hidden" : "block"}`}>
        <div className="flex gap-1 text-lg items-center">
          <Link href={"/"} className="w-14 h-14 rounded-full p-2 border-zinc-700 bg-zinc-800 border-2 items-center flex hover:border-4 duration-150 cursor-pointer justify-center">
            <Image height={44} width={44} src={"/logo.svg"} alt="Logo" />
          </Link>
          <div className="rounded-full h-14 border-zinc-700 border-2 w-full bg-zinc-800 px-4 items-center flex justify-between">
            <Link href={"/"} className="font-bold text-orange-600">
              ABOUT
            </Link>
            <Button
              variant={"link"}
              onClick={handleClickNavbar}
              className="w-12 h-12 rounded-full text-white cursor-pointer p-2 items-center flex justify-center"
            >
              <HamburgerIcon />
            </Button>
          </div>
        </div>
      </div>
      <div
        className={`sm:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-zinc-800 border-2 p-4 flex flex-col rounded-xl ease-in-out duration-200 items-center w-full`}
      >
        <div className="flex items-center justify-between w-full">
          <Link href={"/"} className="w-14 h-14 rounded-full p-2 border-zinc-700 bg-zinc-800 items-center flex hover:border-4 duration-150 cursor-pointer justify-center border-2">
            <Image height={44} width={44} src={"/logo.svg"} alt="Logo" />
          </Link >
          <Button
            onClick={() => {
              setIsMenuOpen(false);
            }}
            variant={"link"}
            className="text-white"
          >
            <Image
              alt="Close"
              src={"/close.png"}
              height={24}
              width={24}
              className="text-white hover:rotate-90 duration-200"
            />
          </Button>
        </div>
        <div>
          <ul className="flex flex-col items-center gap-8 mb-8">
            <Link href={"/about"} className="text-2xl font-bold">About</Link>
            <Link href={"/contact"} className="text-2xl text-orange-600 border-b-2 border-orange-600 font-bold">Contact</Link>
          </ul>
        </div>
      </div>
      <div className="sm:block hidden">
        <div className="flex gap-1 text-lg">
          <Link href={"/"} className="w-14 h-14 rounded-full p-2 border-zinc-700 bg-zinc-800 items-center flex hover:border-4 duration-150 cursor-pointer justify-center border-2">
            <Image height={44} width={44} src={"/logo.svg"} alt="Logo" />
          </Link>
          <div className="rounded-full h-14 border-zinc-700 border-2 w-full bg-zinc-800 px-14 items-center flex justify-between">
            <Link href={"/"} className="font-bold text-orange-600">
              ABOUT
            </Link>
            <p className="">PORTFOLIO</p>
            <Link href={"/contact"} className="">
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
