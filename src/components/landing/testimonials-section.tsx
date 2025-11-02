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
    quote: "Ivoria Systems transformed our entire data infrastructure. Their expertise in systems architecture is unparalleled. They delivered on time, on budget, and beyond our expectations.",
    name: "Jane Doe",
    title: "CTO, Global Tech Inc.",
    avatar: "JD",
  },
  {
    quote: "The AI platform Ivoria built for us has become the core of our operational strategy. It's intelligent, resilient, and has given us a significant competitive edge.",
    name: "John Smith",
    title: "CEO, Innovate Solutions",
    avatar: "JS",
  },
  {
    quote: "Working with Ivoria was a masterclass in professionalism and precision engineering. Their team integrated seamlessly with ours and elevated our product to a new level.",
    name: "Emily White",
    title: "VP of Engineering, Future Systems",
    avatar: "EW",
  },
    {
    quote: "The user experience they designed is simply brilliant. Our customer satisfaction scores have skyrocketed, and the feedback has been overwhelmingly positive.",
    name: "Michael Brown",
    title: "Head of Product, Connectly",
    avatar: "MB",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Trusted by Industry Leaders</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear what our partners have to say about our commitment to excellence and innovation.
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
