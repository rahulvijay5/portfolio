"use client";

import { careerSectionSkills } from "@/lib/constants";
import React, { useState, useEffect, useRef } from "react";

const CareerSection: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-4 pb-4 px-4 overflow-hidden md:snap-start flex items-center justify-center "
      }`}
      id="passion-profession"
    >
      <div className="max-w-6xl mx-auto h-full flex flex-col justify-between">
        <div className="mt-4">
          <h2 className="text-5xl font-bold mb-4 text-center animate-fade-in-down">
            When Passion Meets Profession
          </h2>
          <p className="text-xl text-center mb-8 text-gray-300 animate-fade-in-up">
            Mastering the Art of Creation and Exploration
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-left">
              <p className="text-lg leading-relaxed">
                I&apos;m now ready to turn my passion into a profession. With my
                diverse skill set spanning travel planning, content creation,
                and digital design, I am eager to take on roles that challenge
                and inspire.
              </p>
              <p className="text-lg leading-relaxed">
                I bring creativity, technical expertise, and a deep love for
                exploration to every project. My goal is to help others discover
                the world in innovative ways, leveraging cutting-edge tools and
                techniques.
              </p>
              <div className=" pt-10 text-center animate-fade-in-up">
                <a
                  href="#contact"
                  className="inline-block bg-white text-gray-900 py-3 px-8 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-110 hover:rotate-3 hover:shadow-2xl"
                >
                  Let&apos;s Create Something Amazing Together
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-fade-in-right">
              {careerSectionSkills.map((skill) => (
                <div
                  key={skill.name}
                  className={`${skill.color} p-4 rounded-lg shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-105 hover:rotate-3`}
                  onClick={() => setActiveSkill(skill.name)}
                >
                  <div className="text-4xl mb-2">{skill.icon}</div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {activeSkill && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in"
          onClick={() => setActiveSkill(null)}
        >
          <div
            className="bg-white text-gray-900 p-8 rounded-lg max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4">{activeSkill}</h3>
            <p className="text-lg mb-4">
              {
                careerSectionSkills.find((skill) => skill.name === activeSkill)
                  ?.description
              }
            </p>
            <button
              className="bg-gray-900 text-white py-2 px-4 rounded-full font-semibold"
              onClick={() => setActiveSkill(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CareerSection;
