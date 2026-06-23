import Hero from "@/components/Home/hero";
import Stats from "@/components/Home/Stats";
import MyStory from "@/components/Home/MyStory";
import Experience from "@/components/Home/Experience";
import Tools from "@/components/Home/Tools";
import Portfolio from "@/components/Home/Portfolio";
import Contact from "@/components/Home/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <MyStory />
      <Experience />
      <Tools />
      <Portfolio />
      <Contact />
    </div>
  );
}
