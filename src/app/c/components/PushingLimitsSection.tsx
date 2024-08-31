import React from "react";
import { Mountain, Users, Backpack, Recycle } from "lucide-react";
import Image from "next/image";
import { pushingLimitsSectionImage } from "@/lib/constants";

const PushingLimitsSection: React.FC = () => {
  return (
    <section
      className="min-h-screen md:h-screen bg-gradient-to-br from-green-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8 overflow-hidden font-sans md:snap-start flex items-center justify-center mt-4"
      id="pushing_limits"
    >
      <div className="max-w-7xl mx-auto h-full flex flex-col items-center justify-center">
        <header className="mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 dark:text-green-500 mb-2 leading-tight">
            Pushing the Limits
          </h1>
          <p className="text-xl text-blue-700 dark:text-blue-400 font-serif italic">
            Going the Extra Mile for Adventure
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="md:col-span-2 flex flex-col justify-end space-y-6">
            <div className="bg-white dark:bg-gray-800  bg-opacity-80 backdrop-blur-sm rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
              <p className="text-gray-700 dark:text-white leading-relaxed">
                Adventure isn&apos;t just a word; it&apos;s a way of life.
                Whether it&apos;s enduring continous 4 sleepless nights on a
                trip to Mount Abu or surviving on just bread and jam in the
                remote Khasi hills, I&apos;ve always gone to extreme lengths to
                make every journey worthwhile.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800  bg-opacity-80 backdrop-blur-sm rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
              <p className="text-gray-700 dark:text-white leading-relaxed">
                From solo trips to group expeditions, I&apos;ve successfully
                organized journeys, with the best case possible out there, from
                travel arrangements and accommodation to itineraries and food,
                ensuring a smooth and enjoyable experience for everyone
                involved.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-600 dark:bg-green-700 text-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition duration-500 hover:scale-105">
                <Backpack className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Minimalist Travel</h3>
                <p className="text-sm">
                  Traveled through Meghalaya for 15 days with just a 20L
                  backpack from Decathlon, packing only the essentials.
                </p>
              </div>
              <div className="bg-blue-600 text-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition duration-500 hover:scale-105">
                <Recycle className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Zero Waste Expeditions
                </h3>
                <p className="text-sm">
                  Committed to leaving no trace, I&apos;ve successfully
                  completed some of the best zero-waste trips and expeditions.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="w-full h-full relative">
              <Image
                src={pushingLimitsSectionImage}
                alt="waste collected"
                width={300}
                height={300}
                className="object-cover h-full w-full rounded-t-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PushingLimitsSection;
