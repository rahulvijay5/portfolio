import {
  Aperture,
  Bike,
  Briefcase,
  CalendarIcon,
  Caravan,
  CheckIcon,
  Compass,
  Feather,
  Flag,
  Globe,
  Heart,
  Home,
  List,
  Mail,
  MailIcon,
  Map,
  Mountain,
  MountainIcon,
  Tent,
  ThumbsUp,
  Utensils,
  Video,
} from "lucide-react";
import { Education, Experience, IconProps } from "./types";
import Image from "next/image";

export const ResumeLink =
  "https://pub-820e71ce4d574173a723b481ca8f19c7.r2.dev/1724777162070-Rahul_Resume_short.pdf";

export const Icons = {
  calendar: (props: IconProps) => <CalendarIcon {...props} />,
  email: (props: IconProps) => <MailIcon {...props} />,
  instagram: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32px"
      height="32px"
      fill="currentColor"
      className=""
      viewBox="0 0 50 50"
      {...props}
    >
      <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
    </svg>
  ),
  linkedin: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>LinkedIn</title>
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  ),
  x: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>X</title>
      <path
        fill="currentColor"
        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      />
    </svg>
  ),
  youtube: (props: IconProps) => (
    <svg
      width="32px"
      height="32px"
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>youtube</title>
      <path d="M29.41,9.26a3.5,3.5,0,0,0-2.47-2.47C24.76,6.2,16,6.2,16,6.2s-8.76,0-10.94.59A3.5,3.5,0,0,0,2.59,9.26,36.13,36.13,0,0,0,2,16a36.13,36.13,0,0,0,.59,6.74,3.5,3.5,0,0,0,2.47,2.47C7.24,25.8,16,25.8,16,25.8s8.76,0,10.94-.59a3.5,3.5,0,0,0,2.47-2.47A36.13,36.13,0,0,0,30,16,36.13,36.13,0,0,0,29.41,9.26ZM13.2,20.2V11.8L20.47,16Z" />
    </svg>
  ),
  github: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
};

export const socialHandles = {
  GitHub: {
    name: "GitHub",
    url: "https://www.github.com/rahulvijay5",
    icon: Icons.github,
  },
  LinkedIn: {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rahul-viijay/",
    icon: Icons.linkedin,
  },
  X: {
    name: "X",
    url: "https://twitter.com/rahulviijay",
    icon: Icons.x,
  },
  Email: {
    name: "Email",
    url: "mailto:rahulviijay@gmail.com",
    icon: Icons.email,
  },
  Instagram: {
    name: "Instagram",
    url: "https://www.instagram.com/rahul_vijay___",
    icon: Icons.instagram,
  },
};

export const bucketListItems = [
  {
    text: "Manali to Leh on a Bicycle",
    description:
      "Pedal through the mountains, feel the wind, and embrace the challenge.",
    icon: <Bike className="w-8 h-6" />,
    color: "#7695FF",
  },
  {
    text: "Camping at Tso Moriri Lake",
    description: "Spend a night under the stars by the tranquil waters.",
    icon: <Tent className="w-6 h-6" />,
    color: "#FF3D71",
  },
  {
    text: "Certification in Skiing from Auli",
    description: "Master the slopes and embrace the thrill of the mountains.",
    icon: <Mountain className="w-6 h-6" />,
    color: "#00C9A7",
  },
  {
    text: "Camper Van Journey Across India",
    description:
      "A year-long adventure across the diverse landscapes of India, making friends along the way.",
    icon: <Caravan className="w-8 h-6" />,
    color: "#FFB800",
  },
  {
    text: "Paragliding Master from Bir Billing",
    description: "Soar through the skies, experiencing the world from above.",
    icon: <Compass className="w-6 h-6" />,
    color: "#FF8A8A",
  },
  {
    text: "Taste Every Regional Cuisine in India",
    description:
      "Embark on a culinary journey to savor the diverse flavors of India, from the spicy streets of Rajasthan to the coastal delicacies of Kerala.",
    icon: <Utensils className="w-8 h-6" />,
    color: "#405D72",
  },
];

export const demoUrl =
  "https://images.unsplash.com/photo-1723341716427-e2c3ccdbade2?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const aboutMeContent = `
  ![Rahul](https://imagedelivery.net/lLmNeOP7HXG0OqaG97wimw/clvlugru90000o4g8ahxp069s/db7abbe3-aa5c-433e-a16d-cbf137d1c9e5.png/public)
  
  Hello! I'm Rahul, a passionate traveler, adventurer, and self-taught programmer hailing from the small town of Kekri in Rajasthan. My journey has been a blend of academic pursuits and soul-stirring adventures, shaped by the diverse landscapes and cultures of India. Raised in a family that cherished the spirit of exploration, I inherited my father’s love for travel and a deep-seated curiosity to discover the unknown.
  
  My formal education took me through the bustling streets of Kota, where I prepared for IIT JEE and secured a spot at LNMIIT, Jaipur. However, the most valuable lessons I’ve learned came from beyond the classroom. With a camera in hand and a heart full of wanderlust, I’ve roamed the deserts of Rajasthan, captured the vibrant festivals, and scaled the serene heights of the Himalayas. Each journey, whether solo or with companions, has been meticulously planned, focusing on crafting experiences that turn into lifelong memories.
  
  In parallel to my adventures, I’ve immersed myself in the world of coding. For the past two years, I’ve been a self-taught programmer, often finding inspiration in the quiet hours of the night. My passion for development is fueled by a desire to build meaningful applications that make an impact. I’m currently seeking an exciting software development opportunity, ideally in a startup environment where I can contribute and grow, blending my technical skills with my creative drive.
  
  ![Rahul](https://imagedelivery.net/lLmNeOP7HXG0OqaG97wimw/clvlugru90000o4g8ahxp069s/db7abbe3-aa5c-433e-a16d-cbf137d1c9e5.png/public)
  My ideology is simple: life is a collection of stories waiting to be told. Whether it’s through code or a camera lens, I’m here to capture every moment, every experience, and share it with the world. I believe that every trip, every line of code, and every adventure is a step towards creating something beautiful and unforgettable.
  
  Let's get connected!
  
  Rahul`;

// Use respective image for respective adventure.
export const adventureSectionContent = [
  {
    title: "Cross-Country Train Journey",
    description: "One of India's longest train journeys, west to east",
  },
  {
    title: "Kedarkantha Snowstorm",
    description: "Rescued during a treacherous snowstorm",
  },
  {
    title: "Wildlife Encounters",
    description: "Close encounters with wild bears and leopards",
  },
  {
    title: "Scooties to Gangotri",
    description: "Defied odds, rode an Activa to Gangotri in the rain",
  },
];

export const adventureSectionImages = [
  "https://pub-820e71ce4d574173a723b481ca8f19c7.r2.dev/1724782218129-CrossCountryTrainJourney.jpg",
  "https://pub-820e71ce4d574173a723b481ca8f19c7.r2.dev/1724782184296-KedarkanthaAdventure.png",
  "https://pub-820e71ce4d574173a723b481ca8f19c7.r2.dev/1724782249744-WildlifeEncounter.jpg",
  "https://pub-820e71ce4d574173a723b481ca8f19c7.r2.dev/1724782235184-ScootiesToGangotri.jpg",
];

// SKills used in creative section:
export const careerSectionSkills = [
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
    name: "Lightroom & Premiere Pro",
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

export const socialAccounts = [
  // { name: '@travel_the_worldd', followers: '10K+' },
  { name: "mumbai_tales", followers: "40K+" },
  { name: "imagination.lnmiit", followers: "2K+" },
  { name: "desportivos.lnmiit", followers: "2K+" },
  { name: "vivacity_lnmiit", followers: "6K+" },
];

// export const videoLinks = [
//   { title: "Holi Video Shoot", url: "https://youtu.be/5-gjbAGuDq8" },
//   { title: "Mount Abu Vlog trailer", url: "https://youtu.be/ct_uJ3xbumw" },
//   { title: "Desportivos Aftermovie", url: "https://www.youtube.com/watch?v=example2" },
//   { title: "After Trek Short Reel", url: "https://www.instagram.com/reel/example2" },
// ]

export const exploredLocations = [
  "Ladakh",
  "Dharamshala",
  "Dalhousie",
  "Manali",
  "Kullu",
  "Mussoorie",
  "Harsil",
  "Utarkashi",
  "Dehradun",
  "Rishikesh",
  "Nainital",
  "Pokhra",
  "Kathmandu",
  "Gangtok",
  "Darjeeling",
  "Guwahati",
  "Shillong",
  "Cherrapunji",
];

export const travelerSectionImages = [
  "https://pub-820e71ce4d574173a723b481ca8f19c7.r2.dev/1724783912788-Traveler1.jpg",
  "https://pub-820e71ce4d574173a723b481ca8f19c7.r2.dev/1724783935453-Traveler2.jpg",
  "https://pub-820e71ce4d574173a723b481ca8f19c7.r2.dev/1724783948758-Traveler3.jpg",
];

export const photographySectionImages = [
  "https://pub-820e71ce4d574173a723b481ca8f19c7.r2.dev/1725128185156-20240703_122039.jpg",
  "https://pub-820e71ce4d574173a723b481ca8f19c7.r2.dev/1724853924807-20220616-DSC_0261-1.jpg",
  "https://pub-820e71ce4d574173a723b481ca8f19c7.r2.dev/1724853953507-DSC_0024.JPG",
  "https://pub-820e71ce4d574173a723b481ca8f19c7.r2.dev/1724853884184-20220503-DSC_0047.jpg",
];

export const pushingLimitsSectionImage =
  "https://pub-820e71ce4d574173a723b481ca8f19c7.r2.dev/1725127602564-IMG_20240716_122155.jpg";

export const sidebarSections = [
  { id: "about_me", label: "About Me", icon: Home },
  { id: "past_experiences", label: "Past Experiences", icon: Briefcase },
  { id: "adventurer", label: "I am an Adventurer", icon: MountainIcon },
  { id: "traveler", label: "I am a Traveler", icon: Globe },
  { id: "storyteller", label: "I am a Storyteller", icon: Feather },
  { id: "photographer", label: "I am a Photographer", icon: Aperture },
  { id: "content_creator", label: "Content Creation", icon: Video },
  { id: "pushing_limits", label: "Pushing the limits", icon: Flag },
  { id: "terrioties", label: "Explored Territories", icon: Map },
  { id: "passion-profession", label: "Passion = Career?", icon: Heart },
  { id: "testimonials", label: "What others say?", icon: ThumbsUp },
  { id: "bucket-list", label: "Bucket List", icon: List },
  { id: "contact", label: "Let's Connect", icon: Mail },
];

export const storytellerSectionImage =
  "https://pub-820e71ce4d574173a723b481ca8f19c7.r2.dev/1725131230396-storyteller.jpg";

export const testimonials = [
  {
    name: "Shresth Jain",
    quote:
      "Thanks to Rahul, I was able to drive my dream bike in the Himalayas. Without him, it would have remained just a dream.",
    instagramHandle: "shresthjain14",
  },
  {
    name: "Harsh Kesarwani",
    quote:
      "Rahul's trips are more than just travel—they're about seeing the world differently. His passion for exploration ensures that everyone experiences the raw beauty of a place.",
    instagramHandle: "harshk89_",
  },
  {
    name: "Rashi Gupta",
    quote:
      "Rahul made our college-ending trip unforgettable. Every moment was epic, thanks to his planning and enthusiasm.",
    instagramHandle: "rashiii.g",
  },
  {
    name: "Anshul Jain",
    quote:
      "Rahul's itinerary for our Mathura trip was spot on. We couldn't have planned a better 28-hour trip, experiencing holi to that next level.",
    instagramHandle: "anshul_jainn_",
  },
  {
    name: "Asim Gouri",
    quote:
      "Living at my dream destination was only possible because of Rahul. He made it happen, just the way I imagined.",
    instagramHandle: "asim_gouri",
  },
  {
    name: "Mahak Jain",
    quote:
      "Some memories never fade, and our Mount Abu trip is one of them. Despite challenges, Rahul ensured we returned with only good memories.",
    instagramHandle: "mahak.jain09",
  },
];

// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

export const education: Education[] = [
  {
    degree:
      "Bachelor of Technology in Computer and Communication Engineering (CCE)",
    institution: "The LNM Institute of Information Technology.",
    location: "Jaipur, Rajasthan",
    startDate: new Date(2020, 10),
    endDate: new Date(2024, 5),
    description:[

      "Specialization in computer and communication engineering, primarily learnt about software engineering and data structures, while completing a few of projects.",
    ]
  },
  {
    degree: "High Schooling",
    institution: "Maa Bharti Sr. Sec. School",
    location: "Kota, Rajasthan",
    startDate: new Date(2018, 4),
    endDate: new Date(2020, 4),
    description:[

      "Completed my 10+2 schooling from Kota, while scoring a total of 85.6% in RBSE Boards with my major in PCM.",
    ]
  },
];

export const experiences: Experience[] = [
  {
    title: "Application Developer",
    company: "IBM",
    location: "Bangalore",
    startDate: new Date(2024, 10),
    endDate: null,
    description: [
      "Developed and hosted streamlit webapp for file uploading on AWS S3 and EC2, conducted web scraping with Python and BeautifulSoup and later conversion of these huge XML files to TSV for efficient data management, built a markdown-based documentation site using Next.js and Nextra. Used no-code tool framer to built their complete site to showcase their work.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Eigengram Technologies",
    location: "Remote",
    startDate: new Date(2024, 5),
    endDate: new Date(2024, 10),
    description: [
      "Developed and hosted streamlit webapp for file uploading on AWS S3 and EC2, conducted web scraping with Python and BeautifulSoup and later conversion of these huge XML files to TSV for efficient data management, built a markdown-based documentation site using Next.js and Nextra. Used no-code tool framer to built their complete site to showcase their work.",
    ],
  },
  {
    title: "Freelance Developer",
    company: "Hirequotient, Aceternity UI, Mehandy.in",
    location: "Remote",
    startDate: new Date(2024, 5),
    endDate: new Date(2024, 5),
    description: [
      "HireQuotient: Developed and successfully integrated 14 AI-powered tools for HireQuotient, including the NPS Calculator, AI Letter Generator, and AI Email Generator.",
      "Aceternity UI: Built and Developed 5 of webpages for their client namely Jetify.com, working on their docs page and making them stand out.",
      "Mehandy.in: Creating there simple landing web page, with some analytics tracking and storing them in Upstash redis.",
    ],
  },
];

export const techSkills = [
  "typescript",
  "javascript",
  "framer",
  "socketdotio",
  "react",
  "clerk",
  "html5",
  "css3",
  "nodedotjs",
  "prisma",
  "express",
  "nextdotjs",
  "amazonaws",
  "postgresql",
  "cloudflare",
  // "nextauthdotjs",
  "vercel",
  "python",
  "mongodb",
  "supabase",
  "docker",
  // "server",
  "git",
  // "operatingsystem",
  "github",
  // "DBMS",
  "visualstudiocode",
  "notion",
  "sqlite",
  "bootstrap",
  // "datastructures",
  "leetcode",
  "figma",
  "shadcnui",
  // "aceternityui",
  // "discord",
  "gmail",
  // "s3",
  // "zustand",
  "redux",
  "linux",
  "ubuntu",
  "openai",
  "expo",
  "turborepo",
  "react-native",
  "redis",
  "upstash",
  // "ml",
];

export const projectsContent = [
  {
    title: "Vijaychai",
    description: {
      details:
        "A complete fullstack wholesale order management platform, built for my father's shop, where customers can place their order under their business name with Clerk Auth, with complete admin privileges to admin, to view, modify, and manage orders, enabling insights with beautiful and modern UI and UI.",
      skills: [
        "NextJs",
        "Clerk",
        "Docker",
        "Postgresql",
        "Prisma ORM",
        "ShadcnUI",
      ],
      livelink: "https://vijaychai.vercel.app",
      repolink: "https://github.com/rahulvijay5/store",
    },
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white ">
        <Image
          src="https://pub-820e71ce4d574173a723b481ca8f19c7.r2.dev/1724777372922-storeThumb.png"
          height={500}
          width={500}
          className="h-full w-full object-contain rounded-md"
          alt="App showcase"
        />
      </div>
    ),
  },
  {
    title: "This Portfolio Site",
    description: {
      details:
        "This is a fully responsive and dynamic portfolio site built using Next.js, TailwindCSS, and ShadcnUI. The site features a blog, project showcase, guestbook, and interactive components that highlight my skills as a developer. It’s designed with a minimalistic aesthetic, ensuring a clean and user-friendly experience across all devices.",
      skills: [
        "Next.js",
        "Cloudflare R2",
        "TailwindCSS",
        "Prisma",
        "TypeScript",
        "ShadcnUI",
      ],
      livelink: "https://rahulviijay.netlify.app/",
      repolink: "https://github.com/rahulvijay5/portfolio",
    },
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://pub-820e71ce4d574173a723b481ca8f19c7.r2.dev/1724777672362-portfolioThumb.png"
          height={500}
          width={500}
          className="h-full w-full object-contain rounded-md"
          alt="App showcase"
        />
      </div>
    ),
  },
  {
    title: "Realtime Web Chat Application",
    description: {
      details:
        "A comprehensive realtime web chat application built using the MERN stack and Socket.IO allowing multiple users to chat with each other in real-time, with robust state management using Redux. It features user status management, allowing users to set their status to 'Busy' or 'Available', if a user is busy, others can chat with an AI instead, secured by JWT-based authentication to ensure data privacy.",
      skills: [
        "Socket.IO",
        "MongoDB",
        "React.js",
        "TailwindCSS",
        "Redux",
        "JWT",
      ],
      repolink: "https://github.com/rahulvijay5/chatApp_hq",
    },
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://pub-820e71ce4d574173a723b481ca8f19c7.r2.dev/1724777762583-chatAppThumb.png"
          height={500}
          width={500}
          className="h-full w-full object-contain rounded-md"
          alt="App showcase"
        />
      </div>
    ),
  },
  {
    title: "Connect App",
    description: {
      details:
        "App that allows users to connect to others on the basis of their social connection level, how friendly they are to each other, users can manage their connections, their privacy their details like what they want to share and what now with others. (Currently I am building and working on this.)",
      skills: ["Nextjs", "KindeAuth", "TailwindCSS", "MongoDB", "Prisma"],
      repolink: "https://github.com/rahulvijay5/connect",
    },
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://pub-820e71ce4d574173a723b481ca8f19c7.r2.dev/1724777781323-connectThumb.png"
          height={500}
          width={500}
          className="h-full w-full object-contain rounded-md"
          alt="App showcase"
        />
      </div>
    ),
  },
];

export const moreProjects = [
  {
    title: "Thailand ID Verification App",
    repolink: "https://github.com/rahulvijay5/Qoala-OCR",
  },
  {
    title: "Future Stock Prediction Model",
    repolink: "https://github.com/rahulvijay5/future_stock_prediction",
  },
  {
    title: "Detect and Estimate Human Posture",
    repolink: "https://github.com/rahulvijay5/Posture_Detection_Using_Python",
  },
  {
    title: "Data analysis on Endosulfan",
    repolink: "https://github.com/rahulvijay5/Data_Analysis_Using_Python",
  },
];
