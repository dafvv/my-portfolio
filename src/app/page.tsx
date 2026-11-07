import { HeaderSection } from "@/components/sections/HeaderSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ScrollObserver } from "@/components/ui/ScrollObserver";

export default function Home() {
  return (
    <>
      <div id="top" />
      <ScrollObserver />
      <HeaderSection />
      <main id="main-content">
        <HeroSection />
        <WorkSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
      </main>
      <ContactSection />
    </>
  );
}
