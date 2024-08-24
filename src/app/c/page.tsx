import {
  Bike,
  BookOpen,
  Compass,
  Feather,
  MapPin,
  Mountain,
  Train,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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

const TravelMagazine = () => {

  const demoUrl =
    "https://images.unsplash.com/photo-1723341716427-e2c3ccdbade2?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="flex">
      <Sidebar/>
      
      <div className="bg-white text-gray-800 w-5/6 flex-1 h-screen overflow-y-auto scroll-smooth snap-y snap-proximity snap-always">  


        <MainHeader/>

        <AboutMe/>

        <PastExperiences/>

        <AdventureSection/>

        <IAmTravelerSection/>

        <StorytellerSection/>
        
        <PhotographySection />

        {/* <DiscovererOfHiddenGems /> */}

        <ContentCreatorSection />

        <PushingLimitsSection />

        <ExploredTerritoriesSection/>

        <CareerSection/>

        <TestimonialsSection/>

        <CrazyBucketList/>

        <ContactPage purpose="c"/>

      </div>
    </div>
  );
};

export default TravelMagazine;
