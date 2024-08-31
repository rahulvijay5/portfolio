"use client";

import {
  Bike,
  Compass,
  // Mountain,
  SidebarClose,
  SidebarOpen,
  Train,
} from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import SidebarFooter from "./SidebarFooter";
import AutoImageSlider from "@/components/AutoImageSlider";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { 
  sidebarSections
 } from "@/lib/constants";

import { motion } from 'framer-motion';

interface SidebarProps {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isExpanded, setIsExpanded }) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "\\") {
        event.preventDefault(); // Prevent default action for the key combination
        setIsSidebarOpen((prev) => !prev); // Toggle sidebar
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      {/* Sidebar for Desktop */}
      <motion.div 
        className={`fixed top-0 left-0 h-screen bg-gray-100 dark:bg-gray-900 transition-all duration-300 ease-in-out overflow-hidden ${
          isExpanded ? 'w-64' : 'w-16'
        } hidden md:flex flex-col items-center  py-8 z-50`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <Link href="#main_header" className="mb-8 w-2/3 h-24">
          <div className={`rounded-full overflow-hidden  transition-all duration-300 ${isExpanded ? 'w-24 h-24' : 'w-12 h-12'}`}>
            <AutoImageSlider
              images={["/images/avatar.png"]}
              altText="Rotating Avatar"
              transitionDuration={1000}
              interval={30000}
            />
          </div>
        </Link>

        <nav className="flex-1">
          <ul className="space-y-3">
            {sidebarSections.map((section) => (
              <li key={section.id}>
                <Link href={`#${section.id}`} className="flex items-center text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200 line-clamp-1 truncate">
                  <section.icon className="w-6 h-6" />
                  {isExpanded && <span className="ml-4 ">{section.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {isExpanded && (
          <div className="mt-auto">
            <SidebarFooter />
          </div>
        )}
      </motion.div>

      {/* Sidebar Toggle Button for Mobile */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size={"icon"}
              variant={"outline"}
              onClick={toggleSidebar}
              className="fixed top-4 right-4 lg:hidden z-50 p-2 opacity-50 bg-gray-800 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-700 text-white rounded-full"
            >
              {isSidebarOpen ? <SidebarClose /> : <SidebarOpen />}
            </Button>
          </TooltipTrigger>
          <TooltipContent className="opacity-50">
            <p>Press &quot;Ctrl+\&quot; to alter.</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed inset-y-0 left-0 bg-inherit transform ${
          isSidebarOpen
            ? "translate-x-0 shadow-xl shadow-black"
            : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 w-2/3 max-w-xs flex items-start justify-between flex-col py-8 px-8 lg:hidden`}
      >
        <Link
          href={"/"}
          className="h-24 w-24 rounded-lg hover:cursor-none hover:shadow-sm hover:shadow-black hover:backdrop-brightness-50"
        >
          <AutoImageSlider
            images={["/images/avatar.png"]}
            altText="Rotating Avatar"
            transitionDuration={1000} // Optional: change transition duration
            interval={30000} // Optional: change interval
          />
        </Link>
        <ul className="py-4">
          {sidebarSections.map((section) => (
            <li key={section.id} className="mb-2">
              <Link
                href={`#${section.id}`}
                className="hover:text-emerald-500 text-lg dark:hover:text-emerald-400"
                onClick={() => setIsSidebarOpen(false)} // Close sidebar on link click
              >
                {section.label}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <SidebarFooter />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
