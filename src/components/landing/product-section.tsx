import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, FileAudio } from "lucide-react";

export function ProductSection() {
  return (
    <section id="product" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Flagship Product</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Introducing Sentinel Audio, our next-generation audio intelligence platform.
          </p>
        </div>
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="overflow-hidden md:flex md:items-center">
            <div className="p-8 md:p-10 bg-primary/10 md:w-1/3 flex items-center justify-center">
              <FileAudio className="w-24 h-24 text-primary" />
            </div>
            <div className="md:w-2/3">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Sentinel Audio</CardTitle>
                <CardDescription>AI-Powered Audio Recording Analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  An advanced AI tool for real-time analysis and transcription of audio recordings. It identifies key events, speakers, and topics from vast amounts of audio data, delivering actionable intelligence.
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Real-time transcription and speaker diarization.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Keyword spotting and topic modeling.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Secure, on-premise deployment options.</span>
                  </li>
                </ul>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
