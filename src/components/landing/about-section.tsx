export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid md:grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              We Build High-Assurance Software Systems
            </h2>
          </div>
          <div className="lg:col-span-3 text-lg text-muted-foreground space-y-4">
            <p>
              Ivorya Systems focuses on sovereign technology platforms engineered
              for critical environments. Our work spans secure architectures,
              data infrastructure, and high-integrity operational tooling.
            </p>
            <p>
              All details are protected and shared only with eligible agencies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
