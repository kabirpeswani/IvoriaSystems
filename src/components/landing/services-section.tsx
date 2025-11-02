
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Network, BrainCircuit, ShieldCheck, AppWindow, DatabaseZap, Smile } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: Network,
    title: "Advanced Systems Architecture",
    description: "Designing scalable and robust architectures that form the backbone of modern digital enterprises.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Driven Platforms",
    description: "Leveraging artificial intelligence to build smart platforms that automate processes and derive insights.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Cloud Infrastructure",
    description: "Building and managing secure, high-performance cloud environments for critical applications.",
  },
  {
    icon: AppWindow,
    title: "Enterprise-Grade Applications",
    description: "Developing powerful and polished applications tailored to meet complex business requirements.",
  },
  {
    icon: DatabaseZap,
    title: "Data Ecosystem Optimization",
    description: "Structuring and optimizing data pipelines and storage for maximum efficiency and accessibility.",
  },
  {
    icon: Smile,
    title: "Next-Gen User Experiences",
    description: "Pioneering intuitive and engaging user interfaces that delight users and drive adoption.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Transforming Complexity into Clarity</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our core services are designed to address the most demanding challenges in the digital landscape, delivering solutions that are both powerful and polished.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col text-center items-center hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <CardHeader className="items-center">
                <div className="p-4 bg-accent/10 rounded-full">
                   <service.icon className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="font-headline mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
