import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative w-full h-auto min-h-[50vh] flex items-center justify-center text-center bg-background text-primary-foreground py-20 md:py-28">
      <div className="relative z-10 p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto flex flex-col items-center justify-center animate-in fade-in-0 slide-in-from-bottom-10 duration-1000">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-headline tracking-tighter">
          Ivoria Systems
        </h1>
        <p className="mt-2 text-base md:text-lg text-primary-foreground/70 tracking-widest font-headline uppercase">
          Decision. Precision. Influence.
        </p>
        <p className="mt-4 md:mt-6 max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/90">
          Secure. Sovereign. Built for the future of national-scale operations.
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-base text-muted-foreground">
          We are developing advanced infrastructure technology for organizations requiring uncompromising security, reliability, and sovereignty. Full details are available only to authorized government entities.
        </p>
      </div>
    </section>
  );
}
