import { AboutSection } from "@/components/landing/about-section";
import { ContactSection } from "@/components/landing/contact-section";
import { HeroSection } from "@/components/landing/hero-section";
import { ServicesSection } from "@/components/landing/services-section";
import { TeamSection } from "@/components/landing/team-section";
import { WhyIvoryaSection } from "@/components/landing/why-ivorya-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <WhyIvoryaSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
