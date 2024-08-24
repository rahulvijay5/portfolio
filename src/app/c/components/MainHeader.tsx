// import Image from "next/image";
// import React from "react";

// const MainHeader: React.FC = () => {
//   const demoUrl =
//     "https://images.unsplash.com/photo-1723341716427-e2c3ccdbade2?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

//   return (
//     <header className="relative h-full w-full snap-start" id="header">
//       <Image
//         src={demoUrl}
//         alt="Banner Image"
//         //   layout="fill"
//         objectFit="cover"
//         className="h-full w-full"
//         width={600}
//         height={400}
//       />
//       <div className="absolute inset-0  flex top-10 md:top-0 items-start justify-center">
//         <div className="bg-white/30 rounded-b-md p-12 flex items-center justify-center flex-col gap-4">
//           <h1 className="text-black text-5xl font-bold font-onefont">Rahul</h1>
//           <h1 className="text-black text-xl font-semibold font-onefont text-center">
//             Traveler | Photographer | Adventurer
//           </h1>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default MainHeader;

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const BannerComponent: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - left) / width;
    const y = (event.clientY - top) / height;
    setMousePosition({ x, y });
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
      id="main_header"
    >
      <Image
        src="https://pub-820e71ce4d574173a723b481ca8f19c7.r2.dev/header.JPG?height=1080&width=1920&text=Captivating+Landscape"
        alt="Header image for rahul's portfolio site"
        // layout="fill"
        priority
        width={500}
        height={500}
        // objectFit="cover"
        className={`transition-opacity w-full h-full object-cover duration-1000 ${
          isLoaded ? "opacity-60" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
      />
      <div
        className="absolute inset-0 flex flex-col justify-center items-center text-white"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${
            mousePosition.y * 20
          }px)`,
          transition: "transform 0.2s ease-out",
        }}
      >
        <h1 className="text-6xl md:text-8xl font-bold mt-2 text-center absolute md:top-24 top-40  tracking-tight">
          RAHUL
        </h1>
        <div className="text-xl md:text-2xl font-light absolute top-60 md:mt-2 md:top-48 tracking-widest text-center">
          <span className="inline-block mx-2 transform hover:scale-110 transition-transform duration-300">
            <Link href={"#traveler"}>TRAVELER</Link>
          </span>
          <span className="inline-block mx-2">|</span>
          <span className="inline-block mx-2 transform hover:scale-110 transition-transform duration-300">
            <Link href={"#photographer"}>PHOTOGRAPHER</Link>
          </span>
          <span className="inline-block mx-2">|</span>
          <span className="inline-block mx-2 transform hover:scale-110 transition-transform duration-300">
            <Link href={"#adventurer"}>ADVENTURER</Link>
          </span>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-between px-8 text-sm font-light">
          <span className="transform hover:scale-110 transition-transform duration-300">
            ISSUE 01
          </span>
          <span className="transform hover:scale-110 transition-transform duration-300">
            2024
          </span>
        </div>
      </div>
      {/* <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 dark:from-yellow-700 dark:via-red-700 dark:to-pink-700"></div>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 dark:from-yellow-700 dark:via-red-700 dark:to-pink-700"></div> */}
    </div>
  );
};

export default BannerComponent;
