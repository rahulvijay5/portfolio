export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  info?: string;
  startDate: Date;
  endDate?: Date | null;
  description: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  repoLink?: string;
  imageUrl: string;
}

export interface moreProjects {
  title: string;
  repolink: string;
}
[];

export type IconProps = React.HTMLAttributes<SVGElement>;

export interface GuestbookEntry {
  id: string;
  message: string;
  name: string;
  email: string;
  createdAt: string;
}
