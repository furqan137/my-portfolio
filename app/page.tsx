import { HeroSection } from "@/sections/hero-section";
import { AboutSection } from "@/sections/about-section";
import { ProjectsSection } from "@/sections/projects-section";
import { ContactSection } from "@/sections/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}