import { HeroSection } from "@/components/landing/hero-section";
import { ServicesSection } from "@/components/landing/services-section";
import { CaseStudiesSection } from "@/components/landing/case-studies-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { AiRecommendationsSection } from "@/components/landing/ai-recommendations-section";
import { BlogSection } from "@/components/landing/blog-section";
import { ContactSection } from "@/components/landing/contact-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ServicesSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <AiRecommendationsSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}
