"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { moreProjects } from "@/lib/constants";
import { Button } from "./button";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: {
      details: string;
      skills: string[];
      livelink?: string;
      repolink: string;
    };
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <>
      <h2 className="text-2xl md:text-3xl w-full font-bold text-neutral-900 dark:text-neutral-200 font-sans pb-6">
        Why not see some of my projects?
      </h2>
      <motion.div
        animate={{
          backgroundColor:
            backgroundColors[activeCard % backgroundColors.length],
        }}
        className="h-[90vh] sm:h-[65vh] w-5xl overflow-y-auto flex justify-between relative space-x-10 rounded-md"
        ref={ref}
      >
        <div className="div relative md:w-1/2 flex items-start">
          <div className="w-full h-full">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-2xl font-bold text-neutral-800 dark:text-slate-100"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-lg text-neutral-800 dark:text-slate-300 max-w-full mt-4 md:mt-10"
                >
                  {item.description.details}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-md text-white max-w-full mt-4 flex flex-wrap gap-2"
                >
                  {item.description.skills.map(
                    (skill: string, skillIndex: number) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-slate-700 rounded-md"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="flex mt-4 gap-4"
                >
                  {item.description.livelink && (
                    <Link
                      href={item.description.livelink}
                      className="text-blue-500 hover:underline"
                      rel="noopener noreferrer"
                      passHref
                    >
                      Live Demo
                    </Link>
                  )}
                  <Link
                    href={item.description.repolink}
                    className="text-blue-500 hover:underline"
                    rel="noopener noreferrer"
                    passHref
                  >
                    Repo Link
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="mt-10 md:hidden"
                >
                  {item.content}
                </motion.div>
              </div>
            ))}
            <div className="my-6">
              <h1>More projects I have worked on:</h1>
              {moreProjects.map((item, index) => (
                <div key={item.title + index} className="my-2">
                    <Button asChild variant={"link"}>
                      <Link
                        href={item.repolink}
                        className="hover:text-blue-500 hover:underline"
                        rel="noopener noreferrer"
                        passHref
                      >
                        {item.title}
                      </Link>
                    </Button>
                </div>
              ))}
            </div>
            <div className="h-10"/>
          </div>
        </div>
        <div
          style={{ background: backgroundGradient }}
          className={cn(
            "hidden md:block h-80 w-100 rounded-md bg-white sticky top-10 overflow-hidden mr-10",
            contentClassName
          )}
        >
          {content[activeCard].content ?? null}
        </div>
      </motion.div>
    </>
  );
};
