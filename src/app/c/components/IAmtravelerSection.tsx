// import { Bike, Compass, Mountain, Train } from "lucide-react";
// import Image from "next/image";
// import React from "react";

// const IAmTravelerSection: React.FC = () => {
//   const demoUrl =
//     "https://images.unsplash.com/photo-1723341716427-e2c3ccdbade2?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

//   return (
//     <>
//       <section className="bg-gray-100 py-6 px-4 snap-start h-screen" id="traveler">
//         <div className="flex-grow">
//           <h2 className="text-4xl font-bold mb-4">I Am a Traveler</h2>
//           <p className="text leading-relaxed mb-8">
//             Embracing the World with Open Arms: Traveling, for me, is not just
//             about visiting new places; it's about immersing myself in different
//             cultures, meeting new people, and broadening my understanding and
//             love for diversity. Every journey is a new lesson, and every
//             destination has its own unique story to tell.
//           </p>
//           </div>
//           <div className="grid grid-cols-2 gap-4 flex-grow min-h-[70vh]">
//             <div className="relative h-full w-full col-span-1">
//               <Image
//                 src={demoUrl}
//                 alt="Traveler Image"
//                 className="w-full h-full object-cover rounded-lg"
//                 layout="fill"
//                 />
//             </div>
//             <div className="relative h-full w-full col-span-1 grid grid-rows-2 gap-4 flex-grow">
//             <div className="relative h-full w-full col-span-1">
//               <Image
//                 src={demoUrl}
//                 alt="Traveler Image"
//                 className="w-full h-full object-cover rounded-lg"
//                 layout="fill"
//                 />
//             </div>
//             <div className="relative h-full w-full col-span-1">
//               <Image
//                 src={demoUrl}
//                 alt="Traveler Image"
//                 className="w-full h-full object-cover rounded-lg"
//                 layout="fill"
//                 />
//             </div>
//             </div>
//           </div>
//       </section>
//     </>
//   );
// };

// export default IAmTravelerSection;

// "use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import AutoImageSlider from "@/components/AutoImageSlider";

const images = [
  "https://images.unsplash.com/photo-1561982479-c36896dad276?q=100&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1526404746352-668ded9b50ab?q=100&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1669851274769-a3ce80ac021f?q=100&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const TravelerSection: React.FC = () => {
  // const [currentImage, setCurrentImage] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImage((prev) => (prev + 1) % images.length);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section
      className={`min-h-screen flex flex-col justify-center items-center p-4 md:p-8 transition-colors duration-300 dark:bg-gray-900 dark:text-white bg-white text-gray-900 snap-start`}
      id="traveler"
    >
      <div className="max-w-4xl w-full space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-2 transition-colors duration-300">
          I Am a Traveler
        </h2>
        <h3 className="text-xl md:text-2xl text-center mb-4 italic transition-colors duration-300 dark:text-gray-300 text-gray-600">
          Embracing the World with Open Arms
        </h3>

        <div className="relative h-64 md:h-96 mb-8 overflow-hidden rounded-lg shadow-lg">
          <AutoImageSlider images={images} altText="Image depicting taveling version of mine." interval={5000} transitionDuration={300}/>
        </div>

        <p className="text-lg md:text-xl leading-relaxed text-center mb-8 transition-colors duration-300">
          Traveling for me is not just about visiting places; it's about
          immersing myself in the local culture, traditions, and life. I thrive
          on meeting new people, understanding their ways, and living like a
          local. My travels have allowed me to see the world from different
          perspectives, enriching my understanding and love for diversity.
        </p>

        {/* <div className="flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentImage === index
                  ? "dark:bg-white bg-gray-900"
                  : "dark:bg-gray-600 bg-gray-300"
              }`}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default TravelerSection;
