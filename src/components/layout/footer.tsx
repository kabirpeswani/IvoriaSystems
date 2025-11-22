import Link from "next/link";
import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex flex-col items-center gap-4">
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline">Ivoria Systems</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Forging the Future of Defense Technology.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-secondary-foreground/20 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Ivoria Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
