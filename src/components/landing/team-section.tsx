
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  {
    id: "team-kabir",
    name: "Kabir Peswani",
    role: "Director & Head of Strategic",
  },
  {
    id: "team-simran",
    name: "Simran Peswani",
    role: "Director",
  },
  {
    id: "team-divya",
    name: "Divya Singh",
    role: "CEO",
  },
  {
    id: "team-gauri",
    name: "Gauri Bhade",
    role: "Visiting Legal Advisory",
  },
  {
    id: "team-abhinandan",
    name: "Abhinandan Shah",
    role: "Visiting Legal Advisory",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Our Leadership
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Meet the minds behind our advanced technology and strategic
            vision.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-center">
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              className="text-center items-center p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-primary/50"
            >
              <CardContent className="p-2 flex flex-col items-center justify-center flex-grow">
                <CardTitle className="font-headline text-lg leading-snug">
                  {member.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  {member.role}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
