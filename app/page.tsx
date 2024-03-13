import CustomCard from "@/components/CustomCard";
import Education from "@/components/Education";
import Header from "@/components/Header";
import Project from "@/components/Project";
import { ThreeDCardDemo } from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
  <>
    <div className="flex flex-col gap-3">
      <Header/>
      <div className="grid lg:grid-cols-2 gap-3 sm:grid-cols-1 md:grid-cols-1 ">
        
      <Education/>
      <Skills />

      </div>
      <CustomCard/>
      <div className="grid lg:grid-cols-2 gap-3">
      {/* <Project/> */}
      <ThreeDCardDemo />
      <ThreeDCardDemo />
      </div>
    </div>
  </>
  );
}
