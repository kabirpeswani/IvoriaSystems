import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-primary/60 to-transparent" />
      <div className="relative z-10 p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto animate-in fade-in-0 slide-in-from-bottom-10 duration-1000">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-headline tracking-tighter">
          Engineering Digital Elegance
        </h1>
        <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90">
          Ivoria Systems blends cutting-edge technology with refined design to empower enterprises with intelligent, resilient, and future-ready digital solutions.
        </p>
        <div className="mt-8 md:mt-10 flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#services">
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="#contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
