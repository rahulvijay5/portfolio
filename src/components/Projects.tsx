// // import ProjectCard from "./ProjectCard";

// // const projects = [
// //     {
// //       title: "Project One",
// //       description: "This is a description of project one. It is a great project.",
// //       technologies: ["React", "Next.js", "Tailwind CSS"],
// //       liveLink: "https://projectone.example.com",
// //       repoLink: "https://github.com/username/project-one",
// //       imageUrl: "/images/placeholder.webp",
// //     },
// //     {
// //       title: "Project Two",
// //       description: "This is a description of project two. It is an awesome project.",
// //       technologies: ["Node.js", "Express", "MongoDB"],
// //       liveLink: "https://projecttwo.example.com",
// //       repoLink: "https://github.com/username/project-two",
// //       imageUrl: "/images/placeholder.webp",
// //     },
// //     // Add more projects as needed
// //   ];

// //   const Projects = () => {
// //     return (
// //       <section id="projects" className="py-12">
// //         <div className="container mx-auto px-0">
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {projects.map((project, index) => (
// //               <ProjectCard
// //                 key={index}
// //                 title={project.title}
// //                 description={project.description}
// //                 technologies={project.technologies}
// //                 liveLink={project.liveLink}
// //                 repoLink={project.repoLink}
// //                 imageUrl={project.imageUrl}
// //               />
// //             ))}
// //           </div>
// //         </div>
// //       </section>
// //     );
// //   };

// //   export default Projects;

// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { useMotionValueEvent, useScroll } from "framer-motion";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { cn } from "@/lib/utils";

// interface Project {
//   title: string;
//   description: string;
//   technologies: string[];
//   liveLink: string;
//   repoLink: string;
//   imageUrl: string;
// }

// const projects: Project[] = [
//   {
//     title: "Project One",
//     description:
//       "This is a description of project one. It showcases the use of modern web technologies to solve real-world problems.",
//     technologies: ["React", "Next.js", "Tailwind CSS"],
//     liveLink: "https://projectone.example.com",
//     repoLink: "https://github.com/username/project-one",
//     imageUrl:
//       "https://images.unsplash.com/photo-1536565206219-37a3cf48b2d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybCUyMG1vZGVsfGVufDB8MHwwfHx8Mg%3D%3D",
//   },
//   {
//     title: "Project Two",
//     description:
//       "Project two demonstrates the power of server-side technologies and databases for efficient data management.",
//     technologies: ["Node.js", "Express", "MongoDB"],
//     liveLink: "https://projecttwo.example.com",
//     repoLink: "https://github.com/username/project-two",
//     imageUrl:
//       "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Project Two",
//     description:
//       "Project two demonstrates the power of server-side technologies and databases for efficient data management.",
//     technologies: ["Node.js", "Express", "MongoDB"],
//     liveLink: "https://projecttwo.example.com",
//     repoLink: "https://github.com/username/project-two",
//     imageUrl:
//       "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   // Add more projects as needed
// ];

// export const ProjectsSection: React.FC = () => {
//   const [activeProject, setActiveProject] = useState(0);
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   const projectCount = projects.length;

//   useMotionValueEvent(scrollYProgress, "change", (latest) => {
//     const newActiveProject = Math.min(
//       Math.floor(latest * projectCount),
//       projectCount - 1
//     );
//     setActiveProject(newActiveProject);
//   });

//   const backgroundColors = [
//     "var(--slate-900)",
//     "var(--black)",
//     "var(--neutral-900)",
//   ];

//   return (
//     <>
//       <h2 className="text-lg md:text-3xl w-full font-bold text-neutral-800 dark:text-neutral-200 font-sans">
//         Why not see some of my projects?
//       </h2>
//       <motion.div
//         animate={{
//           backgroundColor:
//             backgroundColors[activeProject % backgroundColors.length],
//         }}
//         className=" overflow-y-auto flex justify-center relative rounded-md w-full py-10"
//         ref={ref}
//       >
//         <div className="div relative flex items-start px-4 max-w-6xl w-full">
//           <div className="w-1/2 pr-8 h-full">
//             {projects.map((project, index) => (
//               <motion.div
//                 key={project.title}
//                 initial={{ opacity: 0 }}
//                 animate={{
//                   opacity: activeProject === index ? 1 : 0.3,
//                 }}
//                 className=""
//               >
//                 <h2 className="text-2xl font-bold text-slate-100 mb-4">
//                   {project.title}
//                 </h2>
//                 <p className="text-slate-300 mb-4">{project.description}</p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.technologies.map((tech) => (
//                     <span
//                       key={tech}
//                       className="px-2 py-1 bg-slate-700 text-slate-200 rounded-full text-sm"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex space-x-4">
//                   <a
//                     href={project.liveLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
//                   >
//                     Live Demo
//                   </a>
//                   <a
//                     href={project.repoLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-4 py-2 bg-slate-700 text-slate-200 rounded hover:bg-slate-600 transition duration-300"
//                   >
//                     GitHub Repo
//                   </a>
//                 </div>
//                 <div className="h-40"></div>
//               </motion.div>
//             ))}
//             <div className="h-40" />
//           </div>
//           <div className="w-1/2 sticky top-20">
//             <motion.div
//               animate={{
//                 opacity: [0, 1],
//                 y: [50, 0],
//               }}
//               transition={{
//                 duration: 0.5,
//               }}
//               key={activeProject}
//               className="h-80 w-full rounded-md overflow-hidden"
//             >
//               <Image
//                 src={projects[activeProject].imageUrl}
//                 alt={projects[activeProject].title}
//                 layout="fill"
//                 objectFit="cover"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </motion.div>
//     </>
//   );
// };

"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Running out of content",
    description: {
      details:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      skills: ["reactjs", "nextjs"],
      livelink:"abc.com",
      repolink:"abc.com",
    },
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Running out of content",
    description: {
      details:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      skills: ["reactjs", "nextjs"],
      livelink:"abc.com",
      repolink:"abc.com",
    },
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1536565206219-37a3cf48b2d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybCUyMG1vZGVsfGVufDB8MHwwfHx8Mg%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Running out of content",
    description: {
      details:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      skills: ["reactjs", "nextjs"],
      livelink:"abc.com",
      repolink:"abc.com",
    },
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Running out of content",
    description: {
      details:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      skills: ["reactjs", "nextjs"],
      livelink:"abc.com",
      repolink:"abc.com",
    },
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://images.unsplash.com/photo-1536565206219-37a3cf48b2d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybCUyMG1vZGVsfGVufDB8MHwwfHx8Mg%3D%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full">
      <StickyScroll content={content} />
    </div>
  );
}
