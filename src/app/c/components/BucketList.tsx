"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatedList } from "@/components/magicui/animated-list";
import { cn } from "@/lib/utils";
import { bucketListItems } from "@/lib/constants";

interface Item {
  text: string;
  icon: JSX.Element;
  color: string;
  description: string;
}

const BucketListPopups = ({ text, icon, color, description }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex p-1 items-center justify-center w-12 h-12 rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg  flex items-center justify-center">
            {icon}
          </span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-md">{text}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export default function CrazyBucketList() {
  const [positions, setPositions] = useState(
    bucketListItems.map(() => ({
      top: Math.random() * 90,
      left: Math.random() * 90,
    }))
  );

  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent, index: number) => {
    setDraggingIndex(index);
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    document.body.style.cursor = "grabbing";
  };

  const handleMouseUp = () => {
    setDraggingIndex(null);
    document.body.style.cursor = "default";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggingIndex !== null) {
      const newPositions = [...positions];
      newPositions[draggingIndex] = {
        top: e.clientY - offset.y,
        left: e.clientX - offset.x,
      };
      setPositions(newPositions);
    }
  };
  return (
    <>
      <section
        className="h-screen bg-gradient-to-br from-white to-gray-100/30 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 overflow-hidden transition-colors duration-300 relative md:snap-start flex justify-center items-center"
        id="bucket-list"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div className="container mx-auto px-4 py-6 h-full">
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 inline-block">
              Bucket List
            </h2>
          </div>
          <p className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-4">
            Hard to do? but we are talking about challenges, and they can&apos;t
            be easy.
          </p>

          <div className="md:hidden">
            <AnimatedList>
              {bucketListItems.map((item, idx) => (
                <BucketListPopups {...item} key={idx} />
              ))}
            </AnimatedList>
          </div>
          <div className="hidden md:block">
            <div className="relative w-full h-full" id="canvas">
              {bucketListItems.map((item, index) => {
                let widthClass = "";
                let contentClass = "";
                if (index % 6 < 3) {
                  widthClass = "w-1/4"; // Smaller width
                  contentClass = "h-12"; // 3 lines
                } else if (index % 6 < 5) {
                  widthClass = "w-1/3"; // Medium width
                  contentClass = "h-8"; // 2 lines
                } else {
                  widthClass = "w-2/5"; // Larger width
                  contentClass = "h-4"; // 4 lines
                }

                return (
                  <div
                    key={index}
                    className={`absolute ${widthClass} h-fit bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-grab select-none`}
                    style={{
                      top: `${positions[index].top}px`,
                      left: `${positions[index].left}px`,
                    }}
                    onMouseDown={(e) => handleMouseDown(e, index)}
                  >
                    <div className="flex items-start space-x-4 h-full">
                      <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{item.text}</p>
                        <p className="text-sm text-muted-foreground dark:text-white/60 line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="text-lg font-light text-gray-400 dark:text-gray-600 mb-2 z-50 absolute bottom-2">
            There are so many more, but better be done, then showcasing them
            all.
          </p>
        </div>
      </section>
    </>
  );
}
