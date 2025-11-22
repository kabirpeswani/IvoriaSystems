import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { format } from 'date-fns';

const blogPosts = [
  {
    id: "blog-post-1",
    title: "The Future of Hypersonic Propulsion Systems",
    date: new Date(2023, 10, 15),
    excerpt: "An analysis of emerging scramjet technologies and their strategic implications for next-generation platforms.",
  },
  {
    id: "blog-post-2",
    title: "AI Ethics in Autonomous Warfare",
    date: new Date(2023, 9, 28),
    excerpt: "Navigating the complex ethical landscape of AI-driven combat systems and decision-making frameworks.",
  },
  {
    id: "blog-post-3",
    title: "Quantum Sensing and its Impact on Stealth Technology",
    date: new Date(2023, 9, 5),
    excerpt: "How quantum-based sensors are poised to revolutionize detection and change the nature of stealth.",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex justify-between items-center mb-12">
           <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Strategic Intelligence</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore our analysis of emerging threats, technological trends, and future defense landscapes.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="#">View All Briefings</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => {
            const image = PlaceHolderImages.find(p => p.id === post.id);
            return (
              <Card key={post.id} className="flex flex-col overflow-hidden group">
                {image && (
                   <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <p className="text-sm text-muted-foreground">{format(post.date, 'MMMM d, yyyy')}</p>
                  <CardTitle className="font-headline text-lg leading-snug">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                   <Button variant="secondary" asChild>
                    <Link href="#">Read Briefing</Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
