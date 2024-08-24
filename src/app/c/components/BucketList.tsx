"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Compass, Mountain, Rocket, Utensils } from "lucide-react";

const bucketListItems = [
  {
    text: "Manali to Leh on a Bicycle: Pedal through the mountains, feel the wind, and embrace the challenge.",
    icon: <Mountain className="w-6 h-6" />,
  },
  {
    text: "Camping at Tso Moriri Lake: Spend a night under the stars by the tranquil waters.",
    icon: <Mountain className="w-6 h-6" />,
  },
  {
    text: "Camper Van Journey Across India: A year-long adventure across the diverse landscapes of India, making friends along the way.",
    icon: <Compass className="w-6 h-6" />,
  },
  {
    text: "Certification in Skiing from Auli: Master the slopes and embrace the thrill of the mountains.",
    icon: <Mountain className="w-6 h-6" />,
  },
  {
    text: "Master of Paragliding from Bir Billing: Soar through the skies, experiencing the world from above.",
    icon: <Compass className="w-6 h-6" />,
  },
  {
    text: "Taste Every Regional Cuisine in India: Embark on a culinary journey to savor the diverse flavors of India, from the spicy streets of Rajasthan to the coastal delicacies of Kerala.",
    icon: <Utensils className="w-6 h-6" />,
  },
];

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
    // <section className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 overflow-hidden transition-colors duration-300">
    //   <div className="container mx-auto px-4 py-12">
    //     <div className="relative">
    //       <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 inline-block">
    //         Crazy Bucket List
    //       </h2>
    //     </div>
    //     <p className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-8">
    //       Daring to Dream, Ready to Conquer
    //     </p>

    //     <div className="grid md:grid-cols-2 gap-8 items-start">
    //       <div className="space-y-6">
    //         {bucketListItems.map((item, index) => (
    //           <div
    //             key={index}
    //             className={`flex items-start space-x-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 ${index/2==0? "col-span-2" : "col-span-1"}`}
    //           >
    //             <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
    //               {item.icon}
    //             </div>
    //             <div>
    //               <p className="text-sm">{item.text}</p>
    //             </div>
    //           </div>
    //         ))}
    //       </div>

    //       {/* <div className="relative">
    //         <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 transform -rotate-3 rounded-2xl"></div>
    //         <div className="relative rounded-2xl overflow-hidden shadow-xl">
    //           <Image
    //             src="/placeholder.svg"
    //             alt="Travel adventure"
    //             width={800}
    //             height={600}
    //             layout="responsive"
    //             className="object-cover"
    //           />
    //         </div>
    //         <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 dark:bg-yellow-600 rounded-full opacity-50"></div>
    //       </div> */}
    //     </div>
    //   </div>
    // </section>

    // <section className="h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 overflow-hidden transition-colors duration-300 relative">
    //   <div className="container mx-auto px-4 py-12 h-full">
    //     <div className="relative">
    //       <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 inline-block">
    //         Bucket List
    //       </h2>
    //     </div>
    //     <p className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-8">
    //       Hard to do, but ready to conquer
    //     </p>

    //     <div className="relative w-full h-full">
    //   {bucketListItems.map((item, index) => {
    // Random position for top and left
    // const randomTop = Math.random() * 50; // Ensures items don't go off screen
    // const randomLeft = Math.random() * 50;
    // const randomBottom = Math.random() * 50;
    // const randomRight = Math.random() * 50;

    // Define different widths and content lengths
    // let widthClass = "";
    //         let contentClass = "";
    //         if (index % 6 < 3) {
    //           widthClass = "w-1/4"; // Smaller width
    //           contentClass = "h-12"; // 3 lines
    //         } else if (index % 6 < 5) {
    //           widthClass = "w-1/3"; // Medium width
    //           contentClass = "h-8"; // 2 lines
    //         } else {
    //           widthClass = "w-2/5"; // Larger width
    //           contentClass = "h-4"; // 4 lines
    //         }

    //         return (
    //           <div
    //             key={index}
    //             className={`absolute ${widthClass} h-fit bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105`}
    //             style={{
    //               top: `${randomTop}%`,
    //               left: `${randomLeft}%`,
    //               bottom: `${randomBottom}%`,
    //               right: `${randomRight}%`,

    //               animation: `pulse ${
    //                 Math.random() * 4 + 4
    //               }s ease-in-out infinite alternate`,
    //             }}
    //           >
    //             <div className="flex items-start space-x-4 h-full">
    //               <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
    //                 {item.icon}
    //               </div>
    //               <div>
    //                 <p className="text-sm">{item.text}</p>
    //               </div>
    //             </div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </section>

    <section
      className="h-screen bg-gradient-to-br from-white to-gray-100/30 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 overflow-hidden transition-colors duration-300 relative snap-start flex justify-center items-center"
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
          Hard to do? but we are talking about challenges, and can&apos;t be easy.
        </p>

        <div className="relative w-full h-full" id="canvas">
          {bucketListItems.map((item, index) => {
            // Define different widths and content lengths
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
                  //   animation: `bounce ${
                  //     Math.random() * 4 + 4
                  //   }s ease-in-out infinite alternate`,
                }}
                onMouseDown={(e) => handleMouseDown(e, index)}
              >
                <div className="flex items-start space-x-4 h-full">
                  <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900 p-2 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })} 
        </div>
        <p className="text-lg font-light text-gray-400 dark:text-gray-600 mb-2 z-50 absolute bottom-2">
          There are so many more, but better be done, then showcasing them all.
        </p>
      </div>
    </section>
  );
}
