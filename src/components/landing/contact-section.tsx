import { ContactForm } from "@/components/contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-md">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Information Access</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Platform details, documentation, and demonstrations are provided only after verification and authorization. If you represent an authorized party, you may request a secure briefing.
            </p>
          </div>
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
