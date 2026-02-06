import { SectionWrapper } from "@/components/SectionWrapper";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts, categories } from "@/data/blog";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = selectedCategory
    ? blogPosts.filter((post) => post.category === selectedCategory)
    : blogPosts;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <SectionWrapper className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">&lt;</span>
            Blog
            <span className="text-primary">/&gt;</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Research updates, conference talks, tutorials, and news about my
            academic journey.
          </p>
        </SectionWrapper>

        {/* Category Filter */}
        <SectionWrapper className="mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                selectedCategory === null
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </SectionWrapper>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredPosts.map((post, index) => (
            <div
              key={post.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <BlogCard post={post} />
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No posts in this category yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
