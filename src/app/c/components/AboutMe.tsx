"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const AboutMeSection: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1561982479-c36896dad276?q=100&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1526404746352-668ded9b50ab?q=100&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <section
      className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-500 dark:bg-gray-900 dark:text-white bg-white text-gray-900 md:snap-start`}
      id="about_me"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative h-[600px] perspective-1000">
          {images.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                index === activeImage
                  ? "opacity-100 z-10 rotate-0"
                  : "opacity-0 z-0 rotate-12"
              }`}
              style={{
                transform: `rotateY(${
                  index === activeImage ? "0deg" : "45deg"
                }) translateZ(${index === activeImage ? "0px" : "-100px"})`,
              }}
            >
              <Image
                src={src}
                alt={`Rahul's adventure ${index + 1}`}
                width={500}
                height={500}
                // layout="fill"
                // objectFit="cover"
                className="rounded-lg w-full h-full object-cover shadow-xl"
              />
            </div>
          ))}
          <button
            onClick={() => setActiveImage((prev) => (prev + 1) % images.length)}
            className="absolute bottom-4 right-4 bg-white text-gray-900 px-4 py-2 rounded-full shadow-lg z-20 hover:bg-gray-200 transition-colors duration-300"
          >
            Next Image
          </button>
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            Hello! I&apos;m Rahul, a passionate traveler and adventurer from the
            small town of Kekri in Rajasthan. My journey began in the bustling
            streets of Kota, where I prepared for IIT JEE and secured a spot at
            LNMIIT, Jaipur. However, my true education happened outside the
            classroom, fueled by my love for exploration and storytelling.
          </p>
          <p className="text-lg leading-relaxed">
            Raised in a family that cherished travel, I inherited my
            father&apos;s adventurous spirit and a desire to explore the
            unknown. With a camera in hand and an insatiable curiosity,
            I&apos;ve roamed the diverse landscapes of India, from the vibrant
            festivals of Rajasthan to the serene heights of the Himalayas.
          </p>
          <p className="text-lg leading-relaxed font-semibold italic">
            My ideology is simple: life is a collection of stories waiting to be
            told, and I&apos;m here to capture every moment, every experience,
            and share it with the world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
