import { ExternalLink, BookOpen, Calendar, Users } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { courses } from "@/data/teaching";
import { Badge } from "@/components/ui/badge";

const roleColors: Record<string, string> = {
  Instructor: "bg-primary/20 text-primary border-primary/30",
  "Teaching Assistant": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Guest Lecturer": "bg-purple-500/20 text-purple-400 border-purple-500/30",
};

const Teaching = () => {
  // Group courses by year
  const coursesByYear = courses.reduce((acc, course) => {
    const year = course.year;
    if (!acc[year]) acc[year] = [];
    acc[year].push(course);
    return acc;
  }, {} as Record<number, typeof courses>);

  const years = Object.keys(coursesByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <SectionWrapper className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">&lt;</span>
            Teaching
            <span className="text-primary">/&gt;</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            I'm passionate about teaching and have been involved in various
            courses as an instructor, teaching assistant, and guest lecturer.
          </p>
        </SectionWrapper>

        {/* Courses by Year */}
        <div className="space-y-12">
          {years.map((year) => (
            <SectionWrapper key={year}>
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                {year}
              </h2>
              <div className="space-y-6">
                {coursesByYear[year].map((course, index) => (
                  <article
                    key={course.id}
                    className="p-6 rounded-lg border border-border bg-card/50 card-hover animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="flex-1">
                        {/* Course Code & Role */}
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="font-mono text-sm text-primary">
                            {course.code}
                          </span>
                          <Badge
                            variant="outline"
                            className={roleColors[course.role] || ""}
                          >
                            <Users className="mr-1 h-3 w-3" />
                            {course.role}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {course.semester} {course.year}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold mb-2">
                          {course.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground mb-4">
                          {course.description}
                        </p>

                        {/* Topics */}
                        {course.topics && (
                          <div className="flex flex-wrap gap-2">
                            {course.topics.map((topic) => (
                              <span
                                key={topic}
                                className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Materials Link */}
                      {course.materials && course.materials.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {course.materials.map((material) => (
                            <a
                              key={material.label}
                              href={material.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
                            >
                              <ExternalLink className="h-3.5 w-3.5" />
                              {material.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </SectionWrapper>
          ))}
        </div>

        {/* Teaching Philosophy */}
        <SectionWrapper className="mt-16">
          <div className="p-8 rounded-lg border border-primary/30 bg-primary/5">
            <div className="flex items-start gap-4">
              <BookOpen className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Teaching Philosophy</h3>
                <p className="text-muted-foreground">
                  I believe in making complex mathematical and computational concepts
                  accessible through clear explanations, visual intuition, and
                  hands-on examples. My goal is to help students build strong
                  foundations while connecting theory to real-world applications.
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
};

export default Teaching;
