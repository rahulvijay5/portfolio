import React from "react";
import {
  Instagram,
  Camera,
  Video,
  Users,
  Edit,
  ArrowUpRightIcon,
  ExternalLink,
} from "lucide-react";
import { socialAccounts } from "@/lib/constants";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ContentCreatorSection: React.FC = () => {
  return (
    <section
      className=" bg-purple-100 dark:bg-gray-900 md:min-h-screen flex items-center justify-center md:snap-start  py-6 px-4"
      id="content_creator"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-800 dark:text-purple-400 mb-2">
          Content Creator and Curator
        </h2>
        <p className="text-xl text-pink-700 dark:text-pink-400 mb-8 font-serif italic">
          Crafting Visual Narratives
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I&apos;ve had the privilege of leading a team of 20 creatives to
              manage and cover events at LNMIIT, including the vibrant Vivacity
              cultural fest and the dynamic Desportivos sports fest. As the
              coordinator of the Imagination Club, I mentored my juniors,
              guiding them in photography and videography.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                #EventCoverage
              </span>
              <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-semibold">
                #TeamLeadership
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                #Mentorship
              </span>
            </div>
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-300 mb-4">
                Key Achievements
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Users className="w-5 h-5 text-purple-600 dark:purple-gray-300 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-800 dark:text-gray-300">
                    Led a team of 20 creatives for fest and event coverage
                  </span>
                </li>
                <li className="flex items-start">
                  <Camera className="w-5 h-5 text-pink-600 dark:text-pink-300 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-800 dark:text-gray-300">
                    Coordinated Imagination Club, mentoring in photography
                  </span>
                </li>
                <li className="flex items-start">
                  <Video className="w-5 h-5 text-blue-600 dark:text-blue-300 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-800 dark:text-gray-300">
                    Guided juniors in videography and videoediting techniques
                  </span>
                </li>
                <li className="flex items-start">
                  <Edit className="w-5 h-5 text-green-600 dark:text-green-300 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-800 dark:text-gray-300">
                    Write blog articles about travel experiences
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Social Media Showcase */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Been a part of:
              </h3>
              <ul className="space-y-4">
                {socialAccounts.map((account, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <ArrowUpRightIcon className="w-5 h-5 text-pink-500 mr-2" />
                      <Link href={`https://instagram.com/${account.name}`} target="_blank" className="text-gray-700">@{account.name}</Link>
                    </div>
                    <span className="text-sm font-semibold text-purple-600">
                      {account.followers} followers
                    </span>
                  </li>
                ))}
              </ul>
              <h3 className="text-lg font-bold text-gray-800 mt-4">
                handled these accounts once.
              </h3>
            </div>

            {/* Featured Project */}
            {/* <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Featured Project</h3>
              <p className="mb-4">
                From @travel_the_worldd to @mumbai_tales: A Journey in Visual
                Storytelling
              </p>
              <button className="bg-white text-purple-600 px-4 py-2 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
                Explore Journey
              </button>
            </div> */}
            {/* <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl font-semibold">Some of My Edits</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-4">
              {videoLinks.map((link, index) => (
                <li key={index} className="bg-gray-800 rounded-lg shadow p-4 transition duration-300 hover:shadow-md">
                  <Link
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-purple-600 hover:text-pink-500"
                  >
                    <span>{link.title}</span>
                    <ExternalLink size={20} />
                  </Link>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentCreatorSection;
