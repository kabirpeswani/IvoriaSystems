
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getRecommendedContent } from '@/app/actions';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

type Recommendation = {
  title: string;
  description: string;
  link: string;
  reason: string;
};

export function AiRecommendationsSection() {
  const [recommendations, setRecommendations] = useState<Recommendation[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendations = async () => {
      setIsLoading(true);
      const userBehavior = 'User has spent time reviewing case studies on AI-driven platforms and secure cloud infrastructure services.';
      const result = await getRecommendedContent(userBehavior);
      setRecommendations(result?.recommendations ?? []);
      setIsLoading(false);
    };

    fetchRecommendations();
  }, []);

  const renderSkeletons = () => (
    Array.from({ length: 2 }).map((_, index) => (
      <Card key={index}>
        <CardHeader>
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full mt-2" />
          <Skeleton className="h-4 w-4/5" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 w-1/2" />
        </CardContent>
        <CardFooter>
           <Skeleton className="h-10 w-32" />
        </CardFooter>
      </Card>
    ))
  );

  return (
    <section id="recommendations" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8 text-accent" />
            Recommended For You
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Based on your interests, here are some articles and case studies you might find valuable.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {isLoading ? renderSkeletons() : (
            recommendations && recommendations.length > 0 ? (
              recommendations.map((rec, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="font-headline">{rec.title}</CardTitle>
                    <CardDescription>{rec.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground italic">&ldquo;{rec.reason}&rdquo;</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="link" className="p-0 h-auto">
                      <Link href={rec.link}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
               <div className="col-span-1 md:col-span-2 text-center text-muted-foreground">
                 <p>Could not load recommendations at this time.</p>
               </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
