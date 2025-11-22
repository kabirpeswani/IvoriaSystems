import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Network, Scaling } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: Network,
    title: "Sovereign Technology",
    description: "Built to operate fully within national boundaries and air-gapped environments.",
  },
  {
    icon: ShieldCheck,
    title: "Security First",
    description: "Designed with strict access controls, isolation layers, and zero-trust principles.",
  },
  {
    icon: Scaling,
    title: "Built for Scale",
    description: "Architected for large organizations requiring reliability across multiple environments.",
  },
];

export function WhyIvoryaSection() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Ivoria?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We are founded on three core principles that guide our engineering and mission execution.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col text-center items-center p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-primary/50">
              <CardHeader className="items-center">
                <div className="p-3 bg-primary/10 rounded-full">
                   <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
