import { useState, useMemo } from "react";
import { Filter } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";
import { PaperCard } from "@/components/PaperCard";
import { papers, allTags } from "@/data/papers";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const Papers = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredPapers = useMemo(() => {
    if (selectedTags.length === 0) return papers;
    return papers.filter((paper) =>
      selectedTags.some((tag) => paper.tags.includes(tag))
    );
  }, [selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <SectionWrapper className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">&lt;</span>
            Publications
            <span className="text-primary">/&gt;</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            A collection of my research papers spanning machine learning theory,
            geometric deep learning, and automated reasoning.
          </p>
        </SectionWrapper>

        {/* Filters */}
        <SectionWrapper className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Filter by topic:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className={cn(
                  "cursor-pointer transition-all duration-200",
                  selectedTags.includes(tag)
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-primary/10 hover:border-primary"
                )}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Badge>
            ))}
            {selectedTags.length > 0 && (
              <button
                onClick={() => setSelectedTags([])}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors underline"
              >
                Clear filters
              </button>
            )}
          </div>
        </SectionWrapper>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {filteredPapers.length} of {papers.length} papers
          </p>
        </div>

        {/* Papers Grid */}
        <div className="space-y-6">
          {filteredPapers.map((paper, index) => (
            <div
              key={paper.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PaperCard paper={paper} />
            </div>
          ))}
        </div>

        {filteredPapers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No papers match the selected filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Papers;
