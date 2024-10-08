import { demoUrl } from "@/lib/constants";
import Image from "next/image";
import React from "react";

const DiscovererOfHiddenGems = () => {
  return (
    <section
      className="relative w-full md:h-screen md:snap-start text-center py-12 bg-gray-50 flex items-center justify-center"
      id="discoverer"
    >
      {/* Overlay Text */}
      <h2 className="text-3xl md:text-5xl font-bold text-red-800 mb-4">
        DISCOVERER OF HIDDEN GEMS
      </h2>
      <div className="relative mt-12 h-full w-full">
        <Image
          src={demoUrl}
          width={1000}
          height={200}
          className="z-0 absolute w-full h-48"
          alt="Maps image"
        />
        <p className="italic text-white z-10 text-2xl w-full mb-8">
          Google maps has always been my true friend.
        </p>
      </div>
      <p className="text-lg md:text-xl font-light max-w-3xl mx-auto text-gray-800 px-4 md:px-0">
        I pride myself on finding the hidden gems that others overlook. My
        explorations have led me to discover treks and trails in Rajasthan that
        were previously unknown. Whether it’s uncovering a dream-like location
        in Meghalaya or experiencing the unique rituals of Rajasthan’s local
        festivals, my journey is always about discovery.
      </p>

      {/* Decorative Bottom Illustration */}
      <div className="relative z-10 mt-16">
        <div className="h-full bg-gradient-to-b from-white to-blue-100">
          <div
            className="h-full w-full bg-no-repeat bg-bottom bg-cover"
            style={{
              backgroundImage:
                "url('https://pub-820e71ce4d574173a723b481ca8f19c7.r2.dev/1724783948758-Traveler3.jpg')",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default DiscovererOfHiddenGems;
