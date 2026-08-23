import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticleBackground } from "@/components/ParticleBackground";
import { SectionWrapper } from "@/components/SectionWrapper";
import { PaperCard } from "@/components/PaperCard";
import { ProjectCard } from "@/components/ProjectCard";
import { BlogCard } from "@/components/BlogCard";
import { TrajectoryGraph } from "@/components/TrajectoryGraph";
import { CvActions } from "@/components/CvActions";
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
            {/* Profile Photo */}
            <div className="flex justify-center mb-6">
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt={profile.name}
                className="w-36 h-36 rounded-full object-cover border-2 border-primary/40 glow-border"
              />
            </div>

            {/* Positioning */}
            <p className="text-primary font-mono text-xs md:text-sm uppercase tracking-[0.22em] mb-4">
              AI research · Deep learning
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
              {profile.affiliation.department} · {profile.affiliation.university}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="glow">
                <Link to="/about">
                  About &amp; contact
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <CvActions compact />
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
        {/* AI Expertise */}
        <SectionWrapper>
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Research <span className="text-primary">Focus</span>
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl">
              I develop transferable AI methods, from model design and training to
              interpretation, evaluation, and efficient implementation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {profile.expertise.map((item, index) => (
              <article
                key={item.area}
                className="group p-6 rounded-lg border border-border bg-card/50 card-hover"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {item.area}
                  </h3>
                  <span className="font-mono text-xs text-primary/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {item.topics.map((topic) => (
                    <span key={topic} className="text-xs text-foreground/70">
                      {topic}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionWrapper>

        {/* Featured Papers */}
        <SectionWrapper>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              Featured <span className="text-primary">Publications</span>
            </h2>
            <Link
              to="/papers"
              className="text-sm text-muted-foreground hover:text-primary transition-colors link-underline"
            >
              View all publications →
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

        {/* Academic Trajectory */}
        <SectionWrapper>
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Academic <span className="text-primary">Trajectory</span>
            </h2>
            <p className="text-sm text-muted-foreground">
              Mathematics and computer science foundations, followed by advanced AI research.
            </p>
          </div>
          <TrajectoryGraph />
        </SectionWrapper>

        {/* Recent Blog Posts */}
        {recentPosts.length > 0 && (
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
        )}
      </div>
    </div>
  );
};

export default Index;
