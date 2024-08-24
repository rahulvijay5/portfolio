import React from "react";
import IconCloud from "./magicui/icon-cloud";
import { Button } from "./ui/button";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

function SkillBadge({ skillName }: { skillName: string }) {
  return <Button variant={"secondary"}>{skillName}</Button>;
}

const Skills = () => {
  return (
    <section className="w-full py-2 md:py-8">
      <h2 className="mb-8 mx-auto text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Here&apos;s a brief about my skills:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 items-end">
        <div>
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-bold dark:font-semibold text-neutral-800 dark:text-neutral-200">
              Primary Tech Stack:
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <SkillBadge skillName="NextJs" />
              <SkillBadge skillName="React" />
              <SkillBadge skillName="TypeScript" />
              {/* Add more primary tech stack badges here */}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-neutral-800 dark:text-neutral-200">
              Also Have Worked With:
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <SkillBadge skillName="AWS" />
              <SkillBadge skillName="Redux Toolkit" />
              <SkillBadge skillName="SocketIO" />
              {/* Add more additional skills here */}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-neutral-800 dark:text-neutral-200">
              Other Tools:
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <SkillBadge skillName="GitHub" />
              <SkillBadge skillName="VSCode" />
              <SkillBadge skillName="Bootstrap" />
              {/* Add more tools here */}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center p-4 md:p-0">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
