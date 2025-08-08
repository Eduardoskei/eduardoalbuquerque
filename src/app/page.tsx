import About from "@/components/About";
import NavBar from "@/components/NavBar";
import Skills from "@/components/Skills";
import Works from "@/components/Works";

export default function Home() {
  return (
    <div className="w-full h-full bg-black">

      {/*NavBar*/}
      <div className="mb-5">
        <NavBar/>
      </div>

      {/*About*/}
      <div className="mb-5">
        <About/>
      </div>

      {/*NavBar*/}
      <div className="mb-5">
        <Skills/>
      </div>

      {/*NavBar*/}
      <div className="mb-5">
        <Works/>
      </div>

      {/*NavBar*/}
      <div className="mb-5">
        
      </div>
    </div>
  )
}
