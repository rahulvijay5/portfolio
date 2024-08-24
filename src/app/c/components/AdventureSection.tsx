"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const adventures = [
  { title: "Kedarkantha Snowstorm", description: "Rescued during a treacherous snowstorm" },
  { title: "Wildlife Encounters", description: "Close encounters with wild bears and leopards" },
  { title: "Cross-Country Train Journey", description: "One of India's longest train journeys, west to east" },
  { title: "Scooter to Gangotri", description: "Defied odds, rode an Activa to Gangotri in the rain" },
];

const images = [
  'https://images.unsplash.com/photo-1561982479-c36896dad276?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1669851274769-a3ce80ac021f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1593836788196-9fd68e904906?q=80&w=2573&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1579752515255-40a127455074?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const AdventurerSection: React.FC = () => {
  const [currentAdventure, setCurrentAdventure] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentAdventure((prev) => (prev + 1) % adventures.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="h-screen flex items-center justify-center px-4 transition-colors duration-500 bg-white dark:bg-gray-900 snap-start" id='adventurer'>
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className={`space-y-6 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            I Am an Adventurer
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 italic">
            Pushing the Boundaries of Exploration
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Adventure is my middle name. Whether it&apos;s trekking to hidden waterfalls, navigating through dense forests, or facing the wild, I&apos;ve embraced it all. My journeys have taken me to places where few dare to tread.
          </p>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg transition-all duration-1000 delay-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {adventures[currentAdventure].title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {adventures[currentAdventure].description}
            </p>
          </div>
        </div>
        <div className="relative h-80 md:h-96 overflow-hidden rounded-lg shadow-xl">
          {images.map((image, index) => (
            <Image
              key={image}
              src={image}
              alt={`Adventure ${index + 1}`}
              width={500}
              height={500}
              className={`object-cover w-full h-full transition-opacity duration-500 ${
                index === currentAdventure ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        <p className='text-gray-500 text-end'>...these were just a few of them</p>
      </div>
    </section>
  );
};

export default AdventurerSection;