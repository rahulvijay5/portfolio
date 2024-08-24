"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface AutoImageSliderProps {
  images: string[]; // Array of image URLs
  altText: string; // Alt text for images
  transitionDuration?: number; // Duration of the transition in milliseconds
  interval?: number; // Interval between image changes in milliseconds
}

const AutoImageSlider: React.FC<AutoImageSliderProps> = ({
  images,
  altText,
  transitionDuration = 1000, // default to 1 second for smooth transition
  interval = 20000, // default to 15 seconds
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const imageChangeInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(imageChangeInterval);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-${transitionDuration} ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt={altText}
            // layout="fill"
            width={200}
            height={200}
            // objectFit="cover" // Ensure the image covers the entire container
            className="rounded-lg h-full w-full object-cover" // Maintain consistent styling
          />
        </div>
      ))}
    </div>
  );
};

export default AutoImageSlider;
