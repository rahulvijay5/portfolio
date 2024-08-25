export interface Experience {
    title: string;
    company: string;
    location: string;
    startDate: Date;
    endDate: Date | null;
    description: string;
  };
  
export interface Education {
    degree: string;
    institution: string;
    location: string;
    info?: string;
    startDate: Date;
    endDate?: Date | null;
    description: string;
  };

  export interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    liveLink?: string;
    repoLink?: string;
    imageUrl: string;
  }

  export type IconProps = React.HTMLAttributes<SVGElement>;