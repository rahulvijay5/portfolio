"use client";

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

  const skills = [
    {
      name: "Trekking and Adventures",
      icon: "🗻",
      color: "bg-indigo-500",
      description:
        "Experienced in leading groups through challenging terrains while ensuring safety and enjoyment.",
    },
    {
      name: "Travel Planning",
      icon: "🗺️",
      color: "bg-blue-500",
      description:
        "Expert in crafting unforgettable journeys tailored to individual preferences and budgets.",
    },
    {
      name: "Content Creation",
      icon: "📸",
      color: "bg-purple-500",
      description:
        "Skilled in producing engaging travel content across various platforms, from photography to written articles.",
    },
    {
      name: "Web Development",
      icon: "💻",
      color: "bg-green-500",
      description:
        "Coding the future, one line at a time. Building responsive and interactive web experiences.",
    },
    {
      name: "Figma & Framer",
      icon: "🎨",
      color: "bg-pink-500",
      description:
        "Crafting digital experiences with precision and creativity, from wireframes to high-fidelity prototypes.",
    },
    {
      name: "No-Code Tools",
      icon: "🛠️",
      color: "bg-yellow-500",
      description:
        "Building powerful applications with speed and efficiency, leveraging the latest no-code platforms.",
    },
    {
      name: "Lightroom & </br> Premiere Pro",
      icon: "🎬",
      color: "bg-red-500",
      description:
        "Transforming raw photos and videos into captivating stories that inspire wanderlust.",
    },
    {
      name: "Effective Traveling",
      icon: "✈️",
      color: "bg-teal-500",
      description:
        "Navigating the globe with confidence and a strategic mind, maximizing experiences while minimizing hassles.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-4 pb-4 px-4 overflow-hidden transition-opacity duration-1000 snap-start flex items-center justify-center ${
        isVisible ? "opacity-100" : "opacity-0"
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
                I'm now ready to turn my passion into a profession. With my
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
                  Let's Create Something Amazing Together
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-fade-in-right">
              {skills.map((skill) => (
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
              {skills.find((skill) => skill.name === activeSkill)?.description}
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
