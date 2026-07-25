import { BookOpen, Mic, Users } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Badge } from "@/components/ui/badge";
import {
  reviewingActivities,
  conferenceParticipations,
  otherActivities,
} from "@/data/activities";

const roleColors: Record<string, string> = {
  Reviewer: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Sub-reviewer": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  "Program Committee": "bg-purple-500/20 text-purple-400 border-purple-500/30",
  "Poster Presentation": "bg-green-500/20 text-green-400 border-green-500/30",
  "Oral and Poster Presentation": "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  "Doctoral Consortium": "bg-orange-500/20 text-orange-400 border-orange-500/30",
  "Invited Talk": "bg-pink-500/20 text-pink-400 border-pink-500/30",
};

const Activities = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <SectionWrapper className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">&lt;</span>
            Activities
            <span className="text-primary">/&gt;</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Academic service, conference participation, and professional memberships.
          </p>
        </SectionWrapper>

        {/* Reviewing */}
        <SectionWrapper className="mb-12">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            Reviewing
          </h2>
          <div className="space-y-4">
            {reviewingActivities.map((activity, index) => (
              <article
                key={activity.id}
                className="p-6 rounded-lg border border-border bg-card/50 card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge
                      variant="outline"
                      className={roleColors[activity.role] || ""}
                    >
                      <Users className="mr-1 h-3 w-3" />
                      {activity.role}
                    </Badge>
                    <span className="font-medium">{activity.venue}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {activity.years.join(", ")}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </SectionWrapper>

        {/* Conference Participation */}
        <SectionWrapper className="mb-12">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Mic className="h-5 w-5 text-primary" />
            Conference Participation
          </h2>
          <div className="space-y-4">
            {conferenceParticipations.map((conf, index) => (
              <article
                key={conf.id}
                className="p-6 rounded-lg border border-border bg-card/50 card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <Badge
                        variant="outline"
                        className={roleColors[conf.role] || ""}
                      >
                        {conf.role}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {conf.year}
                      </span>
                    </div>
                    <h3 className="font-medium">{conf.name}</h3>
                    {conf.location && (
                      <p className="text-sm text-muted-foreground">{conf.location}</p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionWrapper>

        {/* Memberships & Service */}
        <SectionWrapper>
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Memberships & Service
          </h2>
          <div className="space-y-4">
            {otherActivities.map((activity, index) => (
              <article
                key={activity.id}
                className="p-6 rounded-lg border border-border bg-card/50 card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="font-medium">
                      {activity.title} — {activity.organization}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {activity.description}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {activity.years}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
};

export default Activities;
