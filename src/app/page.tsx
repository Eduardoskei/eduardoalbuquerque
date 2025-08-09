import About from "@/components/About";
import Contact from "@/components/Contact";
import NavBar from "@/components/NavBar";
import SkillCard from "@/components/SkillCard";
import Skills from "@/components/SkillCard";
import WorkCard from "@/components/WorkCard";
import { projects, skills } from "@/data/mockdata";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-background ">

      {/*NavBar*/}
        <NavBar/>

      {/*About*/}
        <About/>

      {/*Skiils*/}
      <div className="container mx-auto text-foreground text-center px-4 mb-10">
        <h1 className="text-[#6A0DAD] border-b border-[#6A0DAD] inline-block pb-2 mb-10 text-5xl">
          Habilidades
        </h1>

        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>

      {/*Works*/}
      
      <div className="container mx-auto text-white text-center px-4">
        <h1 className="text-[#6A0DAD] border-b border-[#6A0DAD] inline-block pb-2 mb-5 text-5xl">
          Trabalhos
        </h1>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <WorkCard key={index} {...project} />
          ))}
        </div>
        
      </div>

      {/*NavBar*/}
        <Contact/>

    </div>
  )
}
