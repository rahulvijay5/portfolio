import { FunctionComponent } from "react";
import { format } from "date-fns";
import { education, experiences } from "@/lib/constants";

const TimelineItem: FunctionComponent<{
  title: string;
  organization: string;
  location: string;
  startDate: Date;
  endDate?: Date | null;
  info?: string;
  description: string;
}> = ({
  title,
  organization,
  location,
  startDate,
  endDate,
  description,
  info,
}) => {
  return (
    <div className="relative mb-8 pl-4 md:pl-8">
      <div className="absolute top-0 py-6 left-0 h-full w-1 bg-gray-200"></div>
      <div className="relative">
        {/* <div className="absolute w-3 h-3 bg-white border-2 border-gray-900 rounded-full -left-6 top-0"></div> */}
        <div className="">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600">{organization}</p>
          <div className="flex justify-between items-center w-full">
            <div className="text-gray-600">
              {location} | {format(startDate, "MMM yyyy")} -{" "}
              {endDate ? format(endDate, "MMM yyyy") : "Present"}
            </div>
            <p className="text-gray-600">{info ? info : ""}</p>
          </div>
          <p className="mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

const ExperienceSection: FunctionComponent = () => {
  return (
    <section id="experience" className="my-16">
      <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
      <div className="pl-2 md:pl-8">
        {experiences.map((exp, index) => (
          <TimelineItem
            key={index}
            title={exp.title}
            organization={exp.company}
            location={exp.location}
            startDate={exp.startDate}
            endDate={exp.endDate}
            description={exp.description}
          />
        ))}
      </div>
    </section>
  );
};

const EducationSection: FunctionComponent = () => {
  return (
    <section id="education" className="my-16">
      <h2 className="text-3xl font-bold mb-8">Education</h2>
      <div className="pl-2 md:pl-8">
        {education.map((edu, index) => (
          <TimelineItem
            key={index}
            title={edu.degree}
            organization={edu.institution}
            location={edu.location}
            startDate={edu.startDate}
            endDate={edu.endDate}
            info={edu.info}
            description={edu.description}
          />
        ))}
      </div>
    </section>
  );
};

export const ExperienceAndEducation: FunctionComponent = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <ExperienceSection />
      <EducationSection />
    </div>
  );
};
