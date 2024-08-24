// import { Bike, Compass, Mountain, Train } from 'lucide-react';
// import Image from 'next/image';
// import React from 'react';

// const AdventureSection: React.FC = () => {
//   const demoUrl =
//   "https://images.unsplash.com/photo-1723341716427-e2c3ccdbade2?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

//   return(<section
//     id="adventurer"
//     className="relative h-screen flex items-center snap-start overflow-hidden bg-gradient-to-br from-emerald-800 to-teal-600 text-white py-6"
//   >
//     <div className="absolute inset-0 overflow-hidden">
//       <div className="absolute inset-0 bg-black opacity-30"></div>
//       <img
//         src={`${demoUrl}?height=1080&width=1920&text=Adventure+Background`}
//         alt="Adventure background"
//         className="w-full h-full object-cover opacity-25 object-center"
//       />
//     </div>

//     <div className="container mx-auto px-4 relative z-10">
//       <div className="max-w-3xl mx-auto">
//         <h2 className="text-5xl font-bold mb-4 leading-tight">
//           I Am an Adventurer
//         </h2>
//         <h3 className="text-2xl font-semibold mb-6 text-emerald-300">
//           Pushing the Boundaries of Exploration
//         </h3>

//         <p className="text-lg mb-6 leading-relaxed">
//           Adventure is my middle name. Whether it's trekking to hidden
//           waterfalls, navigating through dense forests, or facing the
//           wild, I've embraced it all. My journeys have taken me to places
//           where few dare to tread.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//           <div className="flex items-start">
//             <Mountain className="w-8 h-8 mr-4 flex-shrink-0 text-emerald-300" />
//             <p>
//               From being rescued during a snowstorm on the Kedarkantha
//               trek to close encounters with wild bears and leopards, every
//               adventure is a testament to my love for the wild and the
//               unknown.
//             </p>
//           </div>
//           <div className="flex items-start">
//             <Train className="w-8 h-8 mr-4 flex-shrink-0 text-emerald-300" />
//             <p>
//               I undertook one of India's longest train journeys,
//               traversing the country from west to east, and I look forward
//               to exploring north to south in the same way.
//             </p>
//           </div>
//           <div className="flex items-start md:col-span-2">
//             <Bike className="w-8 h-8 mr-4 flex-shrink-0 text-emerald-300" />
//             <p>
//               I also defied the odds by riding an Activa scooter to
//               Gangotri in the rain, despite warnings that only bikes could
//               make the journey.
//             </p>
//           </div>
//         </div>

//         <div className="flex justify-center">
//           <Compass className="w-16 h-16 animate-spin-slow text-emerald-300" />
//         </div>
//       </div>
//     </div>
//   </section>
//   )
// }

// export default AdventureSection;

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
  'https://images.unsplash.com/photo-1561982479-c36896dad276?q=100&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1669851274769-a3ce80ac021f?q=100&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1593836788196-9fd68e904906?q=100&w=2573&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1579752515255-40a127455074?q=100&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
            Adventure is my middle name. Whether it's trekking to hidden waterfalls, navigating through dense forests, or facing the wild, I've embraced it all. My journeys have taken me to places where few dare to tread.
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
          {images.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`Adventure ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className={`transition-opacity duration-1000 ${
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