import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center bg-background text-primary-foreground overflow-hidden">
      <div className="relative z-10 p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto flex flex-col items-center justify-center animate-in fade-in-0 slide-in-from-bottom-10 duration-1000">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-headline tracking-tighter">
          Dominance Through Technology
        </h1>
        <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90">
          Ivoria Systems delivers decisive strategic advantages through next-generation autonomous systems, secure communications, and advanced battlefield intelligence.
        </p>
        <div className="mt-8 md:mt-10 flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#services">
              Explore Capabilities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
