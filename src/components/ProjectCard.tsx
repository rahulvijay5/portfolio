// components/ProjectCard.tsx

import { ProjectCardProps } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  liveLink, 
  repoLink,
  imageUrl,
}) => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-100 shadow-white/10">
      <div className="relative h-56">
        <Image
          src={imageUrl}
          alt={title}
          // layout="fill"
          width={500}
          height={500}
          // objectFit="cover"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-5">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-400 px-2 py-1 mr-2 mb-2 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {liveLink && (
            <Link href={liveLink}>
                Live
            </Link>
          )}
          {repoLink && (
            <Link href={repoLink}>
                GitHub
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
