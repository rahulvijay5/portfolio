// "use client";

// import Link from "next/link";
// import React, { useState } from "react";

// interface Testimonial {
//   name: string;
//   text: string;
//   instaId: string;
// }

// const TestimonialsSection: React.FC = () => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   const testimonials: Testimonial[] = [
//     {
//       name: "Shresth Jain",
//       text: "Thanks to Rahul, I was able to drive my dream bike in the Himalayas. Without him, it would have remained just a dream.",
//       instaId: "shresth_jain",
//     },
//     {
//       name: "Harsh Kesarwani",
//       text: "Rahul's trips are more than just travel—they're about seeing the world differently. His passion for exploration ensures that everyone experiences the raw beauty of a place.",
//       instaId: "harsh_kesarwani",
//     },
//     {
//       name: "Anshul Jain",
//       text: "Rahul's itinerary for our Mathura trip was spot on. We couldn't have planned a better 24-hour stay.",
//       instaId: "anshul_jain",
//     },
//     {
//       name: "Asim Gouri",
//       text: "Living at my dream destination was only possible because of Rahul. He made it happen, just the way I imagined.",
//       instaId: "asim_gouri",
//     },
//     {
//       name: "Riya Chachlani",
//       text: "Rahul made our college-ending trip unforgettable. Every moment was epic, thanks to his planning and enthusiasm.",
//       instaId: "riya_chachlani",
//     },
//     {
//       name: "Mahak Jain",
//       text: "Some memories never fade, and our Mount Abu trip is one of them. Despite challenges, Rahul ensured we returned with only good memories.",
//       instaId: "mahak_jain",
//     },
//   ];

//   return (
//     <section className="relative h-screen bg-gradient-to-br from-indigo-900 to-purple-900 overflow-hidden flex items-center justify-center">
//       <div className="absolute inset-0 bg-[url('/stars.png')] opacity-50"></div>

//       <div className="relative z-10 flex items-center justify-center w-full h-full">
//         <div>
//           <div className="relative w-[800px] h-[800px] flex items-center justify-center">
//             <h2 className="absolute text-4xl md:text-5xl font-bold text-white text-center mb-8">
//               Testimonials
//             </h2>
//             {testimonials.map((testimonial, index) => (
//               <Link
//                 href={`https://instagram.com/${testimonial.instaId}`}
//                 target="_blank"
//                 key={index}
//                 className={`absolute w-48 h-48 bg-white bg-opacity-20 backdrop-blur-lg rounded-full flex items-center justify-center p-4 transition-all duration-300 cursor-pointer
//                          ${
//                            hoveredIndex === index
//                              ? "scale-110 z-20"
//                              : "scale-100 z-10"
//                          }
//                          testimonial-${index}`}
//                 style={{
//                   transform: `rotate(${
//                     index * 60
//                   }deg) translateX(250px) rotate(-${index * 60}deg)`,
//                 }}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//               >
//                 <div className="text-center">
//                   <h3 className="font-semibold text-white">
//                     {testimonial.name}
//                   </h3>
//                   {hoveredIndex === index && (
//                     <p
//                       className="mt-2 text-xs text-gray-200 overflow-hidden"
//                       style={{
//                         display: "-webkit-box",
//                         WebkitLineClamp: 4,
//                         WebkitBoxOrient: "vertical",
//                       }}
//                     >
//                       {testimonial.text}
//                     </p>
//                   )}
//                   <p className="mt-1 text-xs text-blue-300">
//                     @{testimonial.instaId}
//                   </p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;



"use client";

import React, { useState } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: "Shresth Jain",
    quote: "Thanks to Rahul, I was able to drive my dream bike in the Himalayas. Without him, it would have remained just a dream.",
    instagramHandle: "shresthjain"
  },
  {
    name: "Harsh Kesarwani",
    quote: "Rahul's trips are more than just travel—they're about seeing the world differently. His passion for exploration ensures that everyone experiences the raw beauty of a place.",
    instagramHandle: "harshkesarwani"
  },
  {
    name: "Anshul Jain",
    quote: "Rahul's itinerary for our Mathura trip was spot on. We couldn't have planned a better 24-hour stay.",
    instagramHandle: "anshuljain"
  },
  {
    name: "Asim Gouri",
    quote: "Living at my dream destination was only possible because of Rahul. He made it happen, just the way I imagined.",
    instagramHandle: "asimgouri"
  },
  {
    name: "Riya Chachlani",
    quote: "Rahul made our college-ending trip unforgettable. Every moment was epic, thanks to his planning and enthusiasm.",
    instagramHandle: "riyachachlani"
  },
  {
    name: "Mahak Jain",
    quote: "Some memories never fade, and our Mount Abu trip is one of them. Despite challenges, Rahul ensured we returned with only good memories.",
    instagramHandle: "mahakjain"
  }
];

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
              "{testimonial.quote}"
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
