import Image from "next/image";
import React from "react";

const PastExperiences: React.FC = () => {
  const demoUrl =
    "https://images.unsplash.com/photo-1723341716427-e2c3ccdbade2?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section
      className="bg-gray-100 dark:bg-gray-900 dark:text-white py-6 px-4 h-screen snap-start"
      id="past_experiences"
    >
      <div className="md:container md:mx-auto">
        <h2 className="text-4xl font-bold mb-4">Past Experiences</h2>
        <p className="text-lg leading-relaxed mb-8">
          Mastermind of Memorable Journeys: I’ve organized multiple trips and
          expeditions, ensuring each one is unique and filled with unforgettable
          memories. From planning routes to managing logistics, I bring an
          explorer’s mindset to every journey, making sure that every traveler
          experiences something extraordinary.
        </p>
        <div className="grid grid-cols-3 gap-4 flex-grow">
          <div className="relative w-full h-full col-span-2">
            <Image
              src={demoUrl}
              alt="Past Experience Image"
              className="w-full h-full object-cover rounded-lg"
              layout="fill"
              // width={900}
              // height={600}
            />
          </div>
          <div className="relative w-full h-full">
            <Image
              src={demoUrl}
              alt="Past Experience Image"
              className="w-full h-full object-cover rounded-lg"
              width={450}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastExperiences;
