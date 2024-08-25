"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";
import { NeonGradientCard } from "./magicui/neon-gradient-card";
import ShinyButton from "./magicui/shiny-button";
import DarkModeToggleText from "./DarkModeToggleText";
import WordRotate from "./magicui/word-rotate";

const DownloadResume = () => (
  <motion.a
    href="/path-to-your-resume.pdf"
    download
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <ShinyButton
      text={`Download Resume`}
      className="items-center px-8 py-4 rounded-full"
    />
  </motion.a>
);

const LandingHeader: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-black  dark:text-white pt-20 pb-10 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Hey there, I&apos;m <br />
              <span className="bg-clip-text text-6xl sm:text-5xl lg:text-6xl text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Rahul Vijay
              </span>
            </h1>
            <p className="text-xl text-black dark:text-gray-300 leading-relaxed">
              A self-taught programmer with a passion for development. For the
              past two years, I&apos;ve been immersing myself in the world of
              coding, often finding inspiration in the middle of the night.
              I&apos;m currently seeking an exciting software development
              opportunity, preferably in a startup environment where I can
              contribute and grow.
            </p>
            <div className="flex items-center space-x-4">
              <DownloadResume />
              {/* <motion.a
                href="#projects"
                className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a> */}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-2xl opacity-20"></div> */}
            <NeonGradientCard className="max-w-sm opacity-70 items-center justify-center text-center relative">
              <Image
                alt="Rahul Vijay"
                src="https://images.unsplash.com/photo-1583341612074-ccea5cd64f6a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={400}
                height={400}
                className=" w-full h-full sm:w-80 rounded-full sm:h-80 object-cover  z-10"
              />
            </NeonGradientCard>
          </motion.div>
        </div>
        <div className="dark:hidden block mt-16 select-none w-full">
          <div className="md:flex-row flex flex-col items-center gap-1 md:gap-0  justify-center">
            <span className="text-2xl font-bold mr-3">
              <WordRotate
                className="text-2xl font-bold text-black dark:text-white"
                words={["Programmer?", "Engineer?","Developer?"]}
              />
            </span>
            then Better be seen this in <DarkModeToggleText />
          </div>
          <span className="text-sm text-muted-foreground flex items-center mt-2 justify-center">
            Otherwise Continue...
          </span>
        </div>
      </div>
    </section>
  );
};

export default LandingHeader;
