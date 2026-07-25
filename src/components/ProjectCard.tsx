import { ExternalLink, Github, FileText } from "lucide-react";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="group relative h-full p-6 rounded-lg border border-border bg-card/50 card-hover flex flex-col">
      {/* Featured indicator */}
      {project.featured && (
        <div className="absolute -top-2 -right-2">
          <span className="flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-primary" />
          </span>
        </div>
      )}

      <div className="flex-1 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.longDescription || project.description}
        </p>

        {/* Research metadata */}
        {(project.role || project.duration || project.funding || project.partners) && (
          <div className="text-xs text-muted-foreground space-y-1">
            {project.role && (
              <p>
                <span className="font-medium text-foreground/80">Role:</span>{" "}
                {project.role}
                {project.duration && ` (${project.duration})`}
              </p>
            )}
            {project.funding && (
              <p><span className="font-medium text-foreground/80">Funding:</span> {project.funding}</p>
            )}
            {project.partners && (
              <p><span className="font-medium text-foreground/80">Partners:</span> {project.partners.join(", ")}</p>
            )}
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge 
              key={tech} 
              variant="outline" 
              className="text-xs border-primary/30 text-primary"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-border">
        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Live Demo
          </a>
        )}
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
          >
            <Github className="h-3.5 w-3.5" />
            GitHub
          </a>
        )}
        {project.links.paper && (
          <a
            href={project.links.paper}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
          >
            <FileText className="h-3.5 w-3.5" />
            Paper
          </a>
        )}
      </div>
    </article>
  );
};
