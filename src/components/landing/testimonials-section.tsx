import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Aegis Dynamics provided a level of situational awareness we previously thought was unattainable. Their C4ISR platform is a generation ahead of anything else on the market.",
    name: "General J. Matthews",
    title: "Commander, Joint Task Force",
    avatar: "JM",
  },
  {
    quote: "The autonomous systems delivered by Aegis have been a force multiplier, reducing risk to our personnel while increasing mission effectiveness. A true strategic partner.",
    name: "Admiral S. Hayes",
    title: "Head of Naval R&D",
    avatar: "SH",
  },
  {
    quote: "In the cyber domain, there is no one I trust more. Aegis Dynamics' expertise in digital warfare is second to none. They are the shield of the modern era.",
    name: "Dir. Elena Petrova",
    title: "National Cyber Security Agency",
    avatar: "EP",
  },
    {
    quote: "Their ability to rapidly prototype and deploy solutions in the field is extraordinary. Aegis operates at a speed and precision that is simply unmatched in the industry.",
    name: "Dr. Marcus Thorne",
    title: "DARPA Project Lead",
    avatar: "MT",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Trusted by Strategic Partners</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear from leaders on the front lines who rely on Aegis Dynamics technology.
          </p>
        </div>
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-4xl mx-auto mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between shadow-sm">
                    <CardContent className="pt-6 flex flex-col flex-grow">
                      <p className="text-foreground/90 italic flex-grow">"{testimonial.quote}"</p>
                      <div className="mt-6 flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={`https://picsum.photos/seed/${testimonial.avatar}/40/40`} />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
