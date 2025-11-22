import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const teamMembers = [
  {
    id: "team-kabir",
    name: "Kabir Peswani",
    role: "Director & Head of Strategic",
    avatar: "KP",
  },
  {
    id: "team-simran",
    name: "Simran Peswani",
    role: "Director",
    avatar: "SP",
  },
  {
    id: "team-divya",
    name: "Divya Singh",
    role: "CEO",
    avatar: "DS",
  },
  {
    id: "team-gauri",
    name: "Gauri Bhade",
    role: "Joint Head of Legal Advisory",
    avatar: "GB",
  },
  {
    id: "team-abhinandan",
    name: "Abhinandan Shah",
    role: "Joint Head of Legal Advisory",
    avatar: "AS",
  },
  {
    id: "team-mayank",
    name: "Mayank Mahajan",
    role: "Backend Developer",
    avatar: "MM",
  },
  {
    id: "team-parth",
    name: "Parth Latke",
    role: "Frontend Developer",
    avatar: "PL",
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
            Meet the minds behind our mission-critical technology and strategic
            vision.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => {
             const image = PlaceHolderImages.find(p => p.id === member.id);
             return (
            <Card
              key={member.id}
              className="text-center items-center p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-primary/50"
            >
              <CardContent className="p-2 flex flex-col items-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={`https://picsum.photos/seed/${member.avatar}/200/200`} />
                  <AvatarFallback>{member.avatar}</AvatarFallback>
                </Avatar>
                <CardTitle className="font-headline text-lg leading-snug">
                  {member.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  {member.role}
                </p>
              </CardContent>
            </Card>
          )})}
        </div>
      </div>
    </section>
  );
}
