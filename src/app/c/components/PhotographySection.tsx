"use client";

import { photographySectionImages } from "@/lib/constants";
import { Camera, Image as ImageIcon, Share2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function PhotographySection() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section
      className=" text-black md:h-screen py-16 px-4 font-sans md:snap-start  flex items-center justify-center"
      id="photographer"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Image Gallery */}
          <div className="lg:w-2/3">
            <div className="relative aspect-video mb-4">
              <Image
                src={photographySectionImages[activeImage]}
                alt={`Featured photograph ${activeImage + 1}`}
                // layout="fill"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 p-2 rounded-full">
                <Camera className="w-6 h-6" />
              </div>
            </div>
            <div className="flex justify-center gap-4 flex-wrap">
              {photographySectionImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-20 h-20 rounded-lg opacity-30 blur-sm/50 overflow-hidden ${
                    index === activeImage
                      ? "ring-2 opacity-100 blur-0 ring-blue-500"
                      : ""
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-1/3 space-y-8">
            <div>
              <h2 className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text pb-3">
                Photographer
              </h2>
              <p className="text-xl text-gray-800 dark:text-gray-200">
                Capturing Moments, Creating Memories
              </p>
            </div>

            <div className="prose prose-invert text-black dark:text-white">
              <p>
                Photography is my way of documenting the world as I see it.
                Every photo is a story, a memory frozen in time. I believe that
                while memories may fade, a photograph has the power to bring
                them back to life.
              </p>
              <p>
                My photography is more than just a hobby; it&apos;s a way to
                blog about my travels, to summarize my experiences, and to share
                my journey with others.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-blue-800" />
                <span className="dark:text-blue-300">1000+ Captures</span>
              </div>
              <div className="flex items-center gap-2">
                <Share2 className="w-5 h-5 text-purple-800" />
                <span className="dark:text-purple-300">
                  Shared with 10k+ followers
                </span>
              </div>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              View Photo Blog
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
