import Hero from "@/app/components/Sections/Hero"
import History from "./components/Sections/History";
import Methodology from "./components/Sections/Methodology";
import Benefits from "./components/Sections/Benefits";
import Contact from "./components/Sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div id="home">
      <Hero />
    </div>
    <div id="about">
      <History />
    </div>
    <div id="methodology">
      <Methodology />
    </div>
    <div id="benefits">
      <Benefits />
    </div>
    <div id="contact">
      <Contact />
    </div>
  </div>
  );
}
