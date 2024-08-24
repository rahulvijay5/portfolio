"use client";

import {
  Bike,
  Compass,
  Mountain,
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

const Sidebar: React.FC = () => {
  const demoUrl =
    "https://images.unsplash.com/photo-1723341716427-e2c3ccdbade2?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

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
  const sections = [
    { id: "about_me", label: "About Me" },
    { id: "past_experiences", label: "Past Experiences" },
    { id: "adventurer", label: "I am an Adventurer" },
    { id: "traveler", label: "I am a Traveler" },
    { id: "storyteller", label: "I am a Storyteller" },
    { id: "photographer", label: "I am a Photographer" },
    { id: "content_creator", label: "Content Creation" },
    { id: "pushing_limits", label: "Pushing the limits" },
    { id: "terrioties", label: "Explored Territories" },
    { id: "passion-profession", label: "Passion = Career?" },
    { id: "testimonials", label: "What others say?" },
    { id: "bucket-list", label: "Bucket List" },
    { id: "contact", label: "Let's Connect" },
  ];
  return (
    <>
      {/* Sidebar for Desktop */}
      <div className="w-1/6 bg-white dark:bg-gray-900 text-black dark:text-gray-100 snap-start hidden lg:flex h-screen overflow-hidden justify-between flex-col px-8 py-8">
        <Link
          href={"#main_header"}
          className="h-24 w-24 rounded-lg hover:cursor-none hover:shadow-sm hover:shadow-black hover:backdrop-brightness-50"
        >
          <AutoImageSlider
            images={[
              "/images/avatar.png",
            ]}
            altText="Rotating Avatar"
            transitionDuration={1000} // Optional: change transition duration
            interval={30000} // Optional: change interval
          />
        </Link>
        <HoverEffect items={sections} />
        <div>
          <SidebarFooter />
        </div>
      </div>

      {/* Sidebar Toggle Button for Mobile */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size={"icon"}
              variant={"outline"}
              onClick={toggleSidebar}
              className="fixed top-4 right-8 lg:hidden z-50 p-2 opacity-50 bg-gray-800 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-700 text-white rounded"
            >
              {isSidebarOpen ? <SidebarClose /> : <SidebarOpen />}
            </Button>
          </TooltipTrigger>
          <TooltipContent className="opacity-50">
            <p>Press "Ctrl+\" to alter.</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed inset-y-0 left-0 bg-white dark:bg-gray-900 text-black dark:text-gray-100 transform ${
          isSidebarOpen
            ? "translate-x-0 shadow-xl shadow-black"
            : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 w-2/3 max-w-xs flex items-start justify-between flex-col py-8 px-8 lg:hidden`}
      >
        <Link href={"/"} className="h-24 w-24 rounded-lg hover:cursor-none hover:shadow-sm hover:shadow-black hover:backdrop-brightness-50">
          <AutoImageSlider
            images={[
              "/images/avatar.png",
              "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            ]}
            altText="Rotating Avatar"
            transitionDuration={1000} // Optional: change transition duration
            interval={30000} // Optional: change interval
          />
        </Link>
        <ul className="py-4">
          {sections.map((section) => (
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
