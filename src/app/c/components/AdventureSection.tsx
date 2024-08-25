"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  adventureSectionContent,
  adventureSectionImages,
} from "@/lib/constants";

const AdventurerSection: React.FC = () => {
  const [currentAdventure, setCurrentAdventure] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentAdventure(
        (prev) => (prev + 1) % adventureSectionContent.length
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="h-screen flex items-center justify-center px-4 transition-colors duration-500 bg-white dark:bg-gray-900 md:snap-start"
      id="adventurer"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div
          className={`space-y-6 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            I Am an Adventurer
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 italic">
            Pushing the Boundaries of Exploration
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Adventure is my middle name. Whether it&apos;s trekking to hidden
            waterfalls, navigating through dense forests, or facing the wild,
            I&apos;ve embraced it all. My journeys have taken me to places where
            few dare to tread.
          </p>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg transition-all duration-1000 delay-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {adventureSectionContent[currentAdventure].title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {adventureSectionContent[currentAdventure].description}
            </p>
          </div>
        </div>
        <div className="relative h-80 md:h-96 overflow-hidden rounded-lg shadow-xl">
          {adventureSectionImages.map((image, index) => (
            <Image
              key={image}
              src={image}
              alt={`Adventure ${index + 1}`}
              width={500}
              height={500}
              className={`object-cover w-full h-full transition-opacity duration-500 ${
                index === currentAdventure ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
        <p className="text-gray-500 text-end">
          ...these were just a few of them
        </p>
      </div>
    </section>
  );
};

export default AdventurerSection;
