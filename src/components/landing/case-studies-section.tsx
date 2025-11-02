
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const caseStudies = [
  {
    id: "case-study-1",
    title: "AI-Powered Logistics Optimization for a Fortune 500",
    description: "Developed a bespoke AI platform that reduced shipping costs by 22% and improved delivery times.",
    tags: ["AI/ML", "Enterprise", "Logistics"],
  },
  {
    id: "case-study-2",
    title: "Scalable Cloud Architecture for a FinTech Startup",
    description: "Engineered a secure, multi-cloud infrastructure to support rapid user growth, ensuring 99.99% uptime.",
    tags: ["Cloud", "FinTech", "Security"],
  },
  {
    id: "case-study-3",
    title: "Next-Gen UX for a Global E-commerce Leader",
    description: "Redesigned a customer-facing portal, resulting in a 40% increase in user engagement and a 15% uplift in conversions.",
    tags: ["UX/UI", "E-commerce", "Web App"],
  },
];

export function CaseStudiesSection() {
  return (
    <section id="work" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">From Ambition to Achievement</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We partner with visionary companies to build transformative digital products. Explore some of our success stories.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => {
            const image = PlaceHolderImages.find(p => p.id === study.id);
            return (
              <Card key={study.id} className="flex flex-col overflow-hidden group">
                {image && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline text-lg leading-snug">{study.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm">{study.description}</p>
                   <div className="mt-4 flex flex-wrap gap-2">
                    {study.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="link" asChild className="p-0 h-auto">
                    <Link href="#">
                      Read Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
