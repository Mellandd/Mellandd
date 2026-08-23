import { SectionWrapper } from "@/components/SectionWrapper";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => {
  const researchProjects = projects.filter((p) => p.category === "research");
  const softwareProjects = projects.filter((p) => p.category === "software");

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <SectionWrapper className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">&lt;</span>
            Projects
            <span className="text-primary">/&gt;</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Applied AI research and research software spanning graph learning,
            reliable machine learning, recommendation, and high-performance computing.
          </p>
        </SectionWrapper>

        {/* Research Projects */}
        {researchProjects.length > 0 && (
          <SectionWrapper className="mb-16">
            <h2 className="text-xl font-semibold mb-6 text-primary">
              Research Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {researchProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </SectionWrapper>
        )}

        {/* Software & Tools */}
        {softwareProjects.length > 0 && (
          <SectionWrapper>
            <h2 className="text-xl font-semibold mb-6 text-muted-foreground">
              Software & Tools
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softwareProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </SectionWrapper>
        )}
      </div>
    </div>
  );
};

export default Projects;
