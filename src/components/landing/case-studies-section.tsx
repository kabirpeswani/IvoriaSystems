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
    title: "Project Chimera: AI-Driven Threat Detection",
    description: "Deployed a multi-domain AI that reduced analyst response time by 75% in a simulated combat environment.",
    tags: ["AI/ML", "C4ISR", "Intelligence"],
  },
  {
    id: "case-study-2",
    title: "Aegis Shield: National Infrastructure Cyber-Defense",
    description: "Engineered a zero-trust cyber defense network for a national power grid, neutralizing over 10,000 threats daily.",
    tags: ["Cybersecurity", "Infrastructure", "Zero Trust"],
  },
  {
    id: "case-study-3",
    title: "Project Longbow: Autonomous Swarm Logistics",
    description: "Created a swarm UAV logistics platform that increased battlefield resupply efficiency by 200% in field trials.",
    tags: ["Autonomous", "Logistics", "UAV"],
  },
];

export function CaseStudiesSection() {
  return (
    <section id="work" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Mission Success Stories</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our technology is field-tested and proven in the most demanding scenarios. Explore our successful mission deployments.
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
                      View Debrief
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
