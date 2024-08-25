import React from "react";
import AutoImageSlider from "@/components/AutoImageSlider";
import { travelerSectionImages } from "@/lib/constants";

const TravelerSection: React.FC = () => {
  return (
    <section
      className={`min-h-screen flex flex-col justify-center items-center p-4 md:p-8 transition-colors duration-300 dark:bg-gray-900 dark:text-white bg-white text-gray-900 md:snap-start`}
      id="traveler"
    >
      <div className="max-w-4xl w-full space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-2 transition-colors duration-300">
          I Am a Traveler
        </h2>
        <h3 className="text-xl md:text-2xl text-center mb-4 italic transition-colors duration-300 dark:text-gray-300 text-gray-600">
          Embracing the World with Open Arms
        </h3>

        <div className="relative h-64 md:h-96 mb-8 overflow-hidden rounded-lg shadow-lg object-cover">
          <AutoImageSlider
            images={travelerSectionImages}
            altText="Image depicting taveling version of mine."
            interval={5000}
            transitionDuration={300}
          />
        </div>

        <p className="text-lg md:text-xl leading-relaxed text-center mb-8 transition-colors duration-300">
          Traveling for me is not just about visiting places; it&apos;s about
          immersing myself in the local culture, traditions, and life. I thrive
          on meeting new people, understanding their ways, and living like a
          local. My travels have allowed me to see the world from different
          perspectives, enriching my understanding and love for diversity.
        </p>
      </div>
    </section>
  );
};

export default TravelerSection;
