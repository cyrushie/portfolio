import Hero from "@/components/Hero";
import Image from "next/image";
import { FloatingNav } from "../components/ui/floating-nav";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import LearningPath from "@/components/LearningPath";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-background flex justify-center items-center flex-col overflow-clip mc-auto sm:p-10 p-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <LearningPath />
        <Footer />
      </div>
    </main>
  );
}
