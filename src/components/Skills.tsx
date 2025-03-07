import React from "react";
import IconCloud from "./magicui/icon-cloud";
import { Button } from "./ui/button";
import { techSkills } from "@/lib/constants";

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
              <SkillBadge skillName="ReactJs" />
              <SkillBadge skillName="TypeScript" />
              <SkillBadge skillName="React native" />
              {/* Add more primary tech stack badges here */}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-neutral-800 dark:text-neutral-200">
              Also Have Worked With:
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <SkillBadge skillName="AWS" />
              <SkillBadge skillName="Zustand" />
              <SkillBadge skillName="SocketIO" />
              <SkillBadge skillName="Expo" />
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
              <SkillBadge skillName="Cloudflare" />
              <SkillBadge skillName="Vercel" />
              {/* Add more tools here */}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center p-4 md:p-0">
          <IconCloud iconSlugs={techSkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
