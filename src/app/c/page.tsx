"use client"

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';
import PhotographySection from "./components/PhotographySection";
import MainHeader from "./components/MainHeader";
import AboutMe from "./components/AboutMe";
import PastExperiences from "./components/PastExpSection";
import AdventureSection from "./components/AdventureSection";
import IAmTravelerSection from "./components/IAmtravelerSection";
import StorytellerSection from "./components/StorytellerSection";
import Sidebar from "./components/Sidebar";
import DiscovererOfHiddenGems from "./components/DiscovererOfHiddenGems";
import ContentCreatorSection from "./components/ContentCreatorSection";
import PushingLimitsSection from "./components/PushingLimitsSection";
import ExploredTerritoriesSection from "./components/ExploredTerritories";
import CareerSection from "./components/CareerSection";
import TestimonialsSection from "./components/TestimonialSection";
import ContactPage from "./components/Contact";
import CrazyBucketList from "./components/BucketList";

// const TravelMagazine = () => {
  // const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');
  // const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  // const contentRef = useRef<HTMLDivElement>(null);
  // const sections = useRef<HTMLElement[]>([]);

  // useEffect(() => {
  //   const content = contentRef.current;
  //   if (!content) return;

  //   sections.current = Array.from(content.children) as HTMLElement[];

  //   let lastScrollTop = 0;
  //   const handleScroll = () => {
  //     const st = content.scrollTop;
  //     setScrollDirection(st > lastScrollTop ? 'down' : 'up');
  //     lastScrollTop = st;

  //     // Update current section index
  //     const currentIndex = sections.current.findIndex((section, index) => {
  //       const rect = section.getBoundingClientRect();
  //       return rect.top <= 0 && rect.bottom > 0;
  //     });
  //     if (currentIndex !== -1) {
  //       setCurrentSectionIndex(currentIndex);
  //     }
  //   };

  //   content.addEventListener('scroll', handleScroll);
  //   return () => content.removeEventListener('scroll', handleScroll);
  // }, []);

  // const scrollToSection = (direction: 'up' | 'down') => {
  //   const content = contentRef.current;
  //   if (!content) return;

  //   let targetIndex = direction === 'down' ? currentSectionIndex + 1 : currentSectionIndex - 1;
  //   targetIndex = Math.max(0, Math.min(targetIndex, sections.current.length - 1));

  //   sections.current[targetIndex].scrollIntoView({ behavior: 'smooth' });
  // };


  const TravelMagazine: React.FC = () => {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  
    return (
      <div className="flex bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Sidebar isExpanded={isSidebarExpanded} setIsExpanded={setIsSidebarExpanded} />
        
        <div 
          className={`flex-1 h-screen overflow-y-auto scroll-smooth snap-y snap-proximity snap-always transition-all duration-300 ease-in-out ${
            isSidebarExpanded ? 'md:ml-64' : 'md:ml-16'
          }`}
        >  
          <MainHeader />
          <AboutMe />
          <PastExperiences />
          <AdventureSection />
          <IAmTravelerSection />
          <StorytellerSection />
          <PhotographySection />
          <ContentCreatorSection />
          <PushingLimitsSection />
          <ExploredTerritoriesSection />
          <CareerSection />
          <TestimonialsSection />
          <CrazyBucketList />
          <ContactPage purpose="c" />
        </div>
      </div>
    );
  };
  
  export default TravelMagazine;


  // return (
  //   <div className="flex bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
  //     <Sidebar/>
      
  //     <div 
  //     // ref={contentRef}
  //     className="w-5/6 flex-1 h-screen overflow-y-auto scroll-smooth snap-y snap-proximity snap-always">  
  //       <MainHeader/>
  //       <AboutMe/>
  //       <PastExperiences/>
  //       <AdventureSection/>
  //       <IAmTravelerSection/>
  //       <StorytellerSection/>
  //       <PhotographySection />
  //       <ContentCreatorSection />
  //       <PushingLimitsSection />
  //       <ExploredTerritoriesSection/>
  //       <CareerSection/>
  //       <TestimonialsSection/>
  //       <CrazyBucketList/>
  //       <ContactPage purpose="c"/>
  //     </div>

      {/* <AnimatePresence>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 right-4 bg-slate-700/50 text-white p-2 rounded-full shadow-lg hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-opacity-50 flex items-center justify-center"
          onClick={() => scrollToSection(scrollDirection)}
          aria-label={scrollDirection === 'down' ? 'Scroll to next section' : 'Scroll to previous section'}
        >
          {scrollDirection === 'down' ? <ChevronDown size={24} /> : <ChevronUp size={24} />}
        </motion.button>
      </AnimatePresence> */}

    {/* </div>
  );
};

export default TravelMagazine; */}