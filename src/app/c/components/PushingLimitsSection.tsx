import React from "react";
import { Mountain, Users, Backpack, Recycle } from "lucide-react";
import Image from "next/image";

const PushingLimitsSection: React.FC = () => {
  return (
    <section
      className="md:h-screen bg-gradient-to-br from-green-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8 overflow-hidden font-sans snap-start flex items-center justify-center"
      id="pushing_limits"
    >
      <div className="max-w-7xl mx-auto h-full flex flex-col">
        <header className="mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 dark:text-green-500 mb-2 leading-tight">
            Pushing the Limits
          </h1>
          <p className="text-xl text-blue-700 dark:text-blue-400 font-serif italic">
            Going the Extra Mile for Adventure
          </p>
        </header>

        <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-6 overflow-auto">
          {/* Main Content */}
          <div className="md:col-span-2 flex flex-col justify-end space-y-6">
            <div className="bg-white dark:bg-gray-800  bg-opacity-80 backdrop-blur-sm rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
              <p className="text-gray-700 dark:text-white leading-relaxed">
                Adventure isn&apos;t just a word; it&apos;s a way of life. Whether it&apos;s
                enduring continous 4 sleepless nights on a trip to Mount Abu or
                surviving on just bread and jam in the remote Khasi hills, I&apos;ve
                always gone to extreme lengths to make every journey worthwhile.
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
                  Committed to leaving no trace, I&apos;ve successfully completed
                  some of the best zero-waste trips and expeditions.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-green-800 mb-4">Adventure Highlights</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Mountain className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" />
                  <span>Conquered Mount Abu despite sleepless nights</span>
                </li>
                <li className="flex items-start">
                  <Users className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" />
                  <span>Organized successful group expeditions</span>
                </li>
                <li className="flex items-start">
                  <Backpack className="w-6 h-6 text-yellow-600 mr-2 flex-shrink-0" />
                  <span>15-day Meghalaya trip with just a 20L backpack</span>
                </li>
                <li className="flex items-start">
                  <Recycle className="w-6 h-6 text-purple-600 mr-2 flex-shrink-0" />
                  <span>Completed multiple zero-waste expeditions</span>
                </li>
              </ul>
            </div> */}

            {/* <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Next Adventure</h3>
              <p className="mb-4">Planning a sustainable trek through the Himalayas. Join me on this eco-friendly expedition!</p>
              <button className="bg-white text-green-600 px-4 py-2 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
                Learn More
              </button>
            </div> */}
            <div className="w-full h-full relative">
              <Image
                src={
                  "https://images.unsplash.com/photo-1724179016304-972febc1cc43?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=600&width=800&text=Photo+1"
                }
                alt="waste collected"
                // layout="fill"
                width={500}
                height={500}
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
