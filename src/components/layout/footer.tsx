import Link from "next/link";
import { Shield, Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline">Aegis Dynamics</span>
            </Link>
            <p className="text-sm">
              Forging the Future of Defense Technology.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#services" className="hover:text-primary transition-colors">Capabilities</Link></li>
                <li><Link href="#work" className="hover:text-primary transition-colors">Missions</Link></li>
                <li><Link href="#blog" className="hover:text-primary transition-colors">Intelligence</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
                <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
             <h4 className="font-semibold">Follow Us</h4>
             <div className="flex gap-2">
                <Button variant="ghost" size="icon" asChild>
                    <Link href="#"><Twitter className="h-5 w-5" /></Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                    <Link href="#"><Linkedin className="h-5 w-5" /></Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                    <Link href="#"><Github className="h-5 w-5" /></Link>
                </Button>
             </div>
          </div>
        </div>
        <div className="mt-8 border-t border-secondary-foreground/20 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Aegis Dynamics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
