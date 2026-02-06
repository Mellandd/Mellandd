import { Link } from "react-router-dom";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticleBackground } from "@/components/ParticleBackground";
import { SectionWrapper } from "@/components/SectionWrapper";
import { PaperCard } from "@/components/PaperCard";
import { ProjectCard } from "@/components/ProjectCard";
import { BlogCard } from "@/components/BlogCard";
import { profile } from "@/data/profile";
import { papers } from "@/data/papers";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blog";

const Index = () => {
  const featuredPapers = papers.filter((p) => p.featured).slice(0, 2);
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 2);
  const recentPosts = blogPosts.slice(0, 2);

  const scrollToContent = () => {
    document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="stagger-children">
            {/* Greeting */}
            <p className="text-primary font-mono text-sm md:text-base mb-4">
              Hello, I'm
            </p>

            {/* Name */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
              <span className="glow-text">{profile.name}</span>
            </h1>

            {/* Title */}
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              {profile.title}
            </h2>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto mb-8">
              {profile.tagline}
            </p>

            {/* Affiliation */}
            <p className="text-sm text-muted-foreground mb-8">
              {profile.affiliation.lab} • {profile.affiliation.university}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="glow">
                <Link to="/about">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={profile.cv} download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
          aria-label="Scroll to content"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </section>

      {/* Featured Content */}
      <div id="featured" className="container mx-auto px-4 py-20 space-y-24">
        {/* Featured Papers */}
        <SectionWrapper>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              Featured <span className="text-primary">Papers</span>
            </h2>
            <Link
              to="/papers"
              className="text-sm text-muted-foreground hover:text-primary transition-colors link-underline"
            >
              View all papers →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredPapers.map((paper) => (
              <PaperCard key={paper.id} paper={paper} />
            ))}
          </div>
        </SectionWrapper>

        {/* Featured Projects */}
        <SectionWrapper>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <Link
              to="/projects"
              className="text-sm text-muted-foreground hover:text-primary transition-colors link-underline"
            >
              View all projects →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </SectionWrapper>

        {/* Recent Blog Posts */}
        <SectionWrapper>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              Recent <span className="text-primary">Updates</span>
            </h2>
            <Link
              to="/blog"
              className="text-sm text-muted-foreground hover:text-primary transition-colors link-underline"
            >
              View all posts →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {recentPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </SectionWrapper>

        {/* Research Interests */}
        <SectionWrapper className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Research <span className="text-primary">Interests</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
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
    </div>
  );
};

export default Index;
