import { Download, Mail, Github, Twitter, Linkedin, BookOpen, MapPin, GraduationCap } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";

const About = () => {
  const socialLinks = [
    { icon: Mail, href: `mailto:${profile.social.email}`, label: "Email", username: profile.social.email },
    { icon: Github, href: profile.social.github, label: "GitHub", username: "@username" },
    { icon: BookOpen, href: profile.social.scholar, label: "Google Scholar", username: "Scholar Profile" },
    { icon: Twitter, href: profile.social.twitter, label: "Twitter", username: "@username" },
    { icon: Linkedin, href: profile.social.linkedin, label: "LinkedIn", username: "linkedin.com/in/username" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <SectionWrapper className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">&lt;</span>
            About Me
            <span className="text-primary">/&gt;</span>
          </h1>
        </SectionWrapper>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Bio */}
            <SectionWrapper>
              <div className="flex items-start gap-6 mb-6">
                {/* Profile Image Placeholder */}
                <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl font-bold text-primary">
                    {profile.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-1">{profile.name}</h2>
                  <p className="text-primary mb-2">{profile.title}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>
                      {profile.affiliation.department}, {profile.affiliation.university}
                    </span>
                  </div>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                {profile.bio.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </SectionWrapper>

            {/* Education */}
            <SectionWrapper>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Education
              </h3>
              <div className="space-y-4">
                {profile.education.map((edu, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border border-border bg-card/50"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div>
                        <h4 className="font-semibold">{edu.degree}</h4>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                        {edu.focus && (
                          <p className="text-sm text-primary mt-1">Focus: {edu.focus}</p>
                        )}
                        {edu.honors && (
                          <p className="text-sm text-muted-foreground mt-1">{edu.honors}</p>
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground font-mono">
                        {edu.years}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </SectionWrapper>

            {/* Research Interests */}
            <SectionWrapper>
              <h3 className="text-xl font-semibold mb-6">Research Interests</h3>
              <div className="flex flex-wrap gap-3">
                {profile.researchInterests.map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 rounded-full border border-primary/30 text-sm font-medium hover:bg-primary/10 hover:border-primary transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </SectionWrapper>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Download CV */}
            <SectionWrapper>
              <div className="p-6 rounded-lg border border-primary/30 bg-primary/5">
                <h3 className="font-semibold mb-4">Curriculum Vitae</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Download my full CV for a complete overview of my academic background,
                  publications, and experience.
                </p>
                <Button asChild className="w-full glow">
                  <a href={`${import.meta.env.BASE_URL}cv.pdf`} download>
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </div>
            </SectionWrapper>

            {/* Contact & Social */}
            <SectionWrapper>
              <h3 className="font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
                  >
                    <link.icon className="h-5 w-5 text-primary" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{link.label}</p>
                      <p className="text-xs text-muted-foreground truncate">
                        {link.username}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </SectionWrapper>

            {/* Quick Stats */}
            <SectionWrapper>
              <h3 className="font-semibold mb-4">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-border bg-card/50 text-center">
                  <p className="text-2xl font-bold text-primary">5+</p>
                  <p className="text-xs text-muted-foreground">Publications</p>
                </div>
                <div className="p-4 rounded-lg border border-border bg-card/50 text-center">
                  <p className="text-2xl font-bold text-primary">5+</p>
                  <p className="text-xs text-muted-foreground">Projects</p>
                </div>
                <div className="p-4 rounded-lg border border-border bg-card/50 text-center">
                  <p className="text-2xl font-bold text-primary">5</p>
                  <p className="text-xs text-muted-foreground">Courses TA'd</p>
                </div>
                <div className="p-4 rounded-lg border border-border bg-card/50 text-center">
                  <p className="text-2xl font-bold text-primary">3+</p>
                  <p className="text-xs text-muted-foreground">Years PhD</p>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
