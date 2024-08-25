import BlogByCategory from "@/components/BlogByCategory";
import LandingHeader from "@/components/LandingHeader";
import { StickyScrollRevealDemo } from "@/components/Projects";
import Skills from "@/components/Skills";
import { ExperienceAndEducation } from "@/components/WorkExperience";
import React from "react";
import ContactPage from "../c/components/Contact";
import DarkModeToggleText from "@/components/DarkModeToggleText";
import { TracingBeam } from "@/components/ui/tracing-beam";

const tech = () => {
  return (
    <div className="flex items-center justify-center">
      {/* <TracingBeam className=""> */}
      <div className="min-h-screen flex flex-col justify-center max-w-5xl pb-6 md:pb-16 ">

        <section>
          <LandingHeader />
        </section>
        

        <section className="p-4 md:w-full">
          <ExperienceAndEducation />
        </section>

        <section>
          <div className="p-4 md:w-full">
            {/* <ProjectsSection/> */}
            <StickyScrollRevealDemo />
          </div>
        </section>

        <section className="p-4 w-full">
          <Skills />
        </section>

        <section className="p-4">
          <BlogByCategory category="code" />
        </section>

        <section className="bg-inherit">
          <ContactPage purpose="t" />
        </section>

        {/* <section>Logs? can be stored, will think later.</section> */}
      </div>
      {/* </TracingBeam> */}
    </div>
  );
};

export default tech;
