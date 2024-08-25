"use client";

import React, { useState } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { testimonials } from '@/lib/constants';

const TestimonialsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    beforeChange: (oldIndex: number, newIndex: number) => setCurrentSlide(newIndex),
  };

  return (
    <section className="h-[90vh] bg-white  dark:bg-gradient-to-bl dark:from-gray-800 dark:to-gray-900 text-black dark:text-gray-100 snap-start flex flex-col justify-center items-center px-4 overflow-hidden" id='testimonials'>
  <div className="max-w-4xl w-full">
    <h2 className="text-4xl md:text-5xl font-bold mb-2 text-center">Testimonials</h2>
    <p className="text-xl text-center mb-12 text-gray-600 dark:text-gray-400 italic">
      What people say about their experiences after traveling out with me.
    </p>

    <div className="relative">
      <Slider ref={(slider) => setSliderRef(slider)} {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="outline-none">
            <blockquote className="text-2xl font-light italic mb-6 text-center">
            &quot;{testimonial.quote}&quot;
            </blockquote>
            <p className="text-xl font-semibold text-center mb-4">- {testimonial.name}</p>
            <div className="text-center">
              <Link href={`https://www.instagram.com/${testimonial.instagramHandle}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline">
                @{testimonial.instagramHandle}
              </Link>
            </div>
          </div>
        ))}
      </Slider>

      <div className="flex justify-center mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
              currentSlide === index ? 'bg-black dark:bg-gray-100' : 'bg-gray-300 dark:bg-gray-600'
            }`}
            onClick={() => sliderRef?.slickGoTo(index)}
          />
        ))}
      </div>
    </div>
  </div>
</section>

  );
};

export default TestimonialsSection;
