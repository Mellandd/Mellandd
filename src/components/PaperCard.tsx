import { useState } from "react";
import { ChevronDown, ExternalLink, Github, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { Paper } from "@/data/papers";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface PaperCardProps {
  paper: Paper;
}

export const PaperCard = ({ paper }: PaperCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="group relative p-6 rounded-lg border border-border bg-card/50 card-hover">
      {/* Featured indicator */}
      {paper.featured && (
        <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
          <div className="absolute top-3 right-[-35px] w-[120px] text-center text-xs font-medium py-1 bg-primary text-primary-foreground rotate-45">
            Featured
          </div>
        </div>
      )}

      <div className="space-y-3">
        {/* Title */}
        <h3 className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors pr-12">
          {paper.title}
        </h3>

        {/* Authors & Venue */}
        <div className="text-sm text-muted-foreground">
          <p>{paper.authors.join(", ")}</p>
          <p className="mt-1">
            <span className="text-primary font-medium">{paper.venue}</span>
            <span className="mx-2">•</span>
            <span>{paper.year}</span>
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {paper.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Abstract (Collapsible) */}
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="p-0 h-auto hover:bg-transparent">
              <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {isOpen ? "Hide" : "Show"} Abstract
              </span>
              <ChevronDown
                className={cn(
                  "ml-1 h-4 w-4 text-muted-foreground transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
              />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-3">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {paper.abstract}
            </p>
          </CollapsibleContent>
        </Collapsible>

        {/* Links */}
        <div className="flex flex-wrap gap-2 pt-2">
          {paper.links.pdf && (
            <a
              href={paper.links.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <FileText className="h-3.5 w-3.5" />
              PDF
            </a>
          )}
          {paper.links.arxiv && (
            <a
              href={paper.links.arxiv}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              arXiv
            </a>
          )}
          {paper.links.code && (
            <a
              href={paper.links.code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <Github className="h-3.5 w-3.5" />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
