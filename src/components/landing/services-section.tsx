import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Satellite, BrainCircuit, ShieldCheck, Crosshair, DatabaseZap, Wifi } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: Satellite,
    title: "Global C4ISR",
    description: "Providing secure, resilient Command, Control, Communications, Computers, Intelligence, Surveillance & Reconnaissance.",
  },
  {
    icon: BrainCircuit,
    title: "Autonomous Systems",
    description: "Developing intelligent, unmanned platforms for air, land, and sea that enhance mission effectiveness and safety.",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Warfare & Security",
    description: "Delivering offensive and defensive cyber capabilities to protect critical infrastructure and national security assets.",
  },
  {
    icon: Crosshair,
    title: "Precision Strike Systems",
    description: "Engineering advanced guidance and targeting systems for unparalleled accuracy and mission success.",
  },
  {
    icon: DatabaseZap,
    title: "Battlefield Data Fusion",
    description: "Fusing multi-source intelligence into a single, actionable picture for commanders on the ground.",
  },
  {
    icon: Wifi,
    title: "Resilient Communications",
    description: "Ensuring secure, jam-resistant communication links in contested and denied environments.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Core Capabilities</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our portfolio of advanced technologies is engineered to provide decisive advantages and ensure mission success in complex, multi-domain environments.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col text-center items-center hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
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
