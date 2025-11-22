"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#services", label: "Capabilities" },
  { href: "#recommendations", label: "Recommendations" },
  { href: "#blog", label: "Intelligence" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderNavLinks = () => (
    navLinks.map((link) => (
      <Button key={link.href} asChild variant="ghost" className="text-sm font-medium">
        <Link href={link.href}>{link.label}</Link>
      </Button>
    ))
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-sm border-b" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Shield className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold font-headline text-foreground">
            Aegis Dynamics
          </span>
        </Link>
        <nav className="hidden items-center gap-2 md:flex">
          {renderNavLinks()}
          <Button asChild>
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 p-6">
              <Link href="/" className="flex items-center gap-2" prefetch={false}>
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold font-headline">Aegis Dynamics</span>
              </Link>
              <nav className="flex flex-col gap-4">
                {renderNavLinks()}
              </nav>
               <Button asChild>
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
