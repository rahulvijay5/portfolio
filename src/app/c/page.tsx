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
  return (
    <div className="flex bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Sidebar/>
      
      <div className=" w-5/6 flex-1 h-screen overflow-y-auto scroll-smooth snap-y snap-proximity snap-always">  

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
