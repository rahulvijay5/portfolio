"use client";
import React from "react";
import { motion } from "framer-motion";

const PastExperiences: React.FC = () => {
  const tripSizes = [
    "solo",
    "duo",
    "trio",
    "quad",
    "5 people",
    "6 people",
    "7 people",
    "8 people",
    "11 people",
    "50+ people",
  ];

  return (
    <section
      className="py-16 px-4 md:px-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 md:snap-start flex items-center justify-center h-screen"
      id="past_experiences"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
        >
          Past Experiences
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-serif italic text-center mb-6 text-gray-700 dark:text-gray-300">
            Mastermind of Memorable Journeys
          </h3>

          <p className="text-lg md:text-xl leading-relaxed mb-8">
            Over the years, I&apos;ve organized multiple trips for groups of all
            sizes, whether it&apos;s my{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              solo trip, duo adventure, or expeditions with up to 11 people
            </span>
            . Each journey is meticulously planned to ensure a balance of
            thrill, discovery, and unforgettable memories.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-3 md:grid-cols-5 gap-4 text-center"
        >
          {tripSizes.map((size, index) => (
            <div
              key={size}
              className={`p-4 rounded-lg ${
                index % 2 === 0
                  ? "bg-gray-100 dark:bg-gray-800"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              <p className="font-bold text-lg md:text-xl">{size}</p>

              {index == 9 ? (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  on photowalks
                </p>
              ) : (
                <p className="text-sm text-gray-600 dark:text-gray-400">trip</p>
              )}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-xl md:text-2xl font-serif italic text-gray-700 dark:text-gray-300">
            &quot;Crafting trips, curating lifelong memories.&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PastExperiences;
