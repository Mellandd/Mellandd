import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const categoryColors: Record<string, string> = {
  Research: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Talk: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  News: "bg-green-500/20 text-green-400 border-green-500/30",
  Tutorial: "bg-orange-500/20 text-orange-400 border-orange-500/30",
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Back Button */}
        <Link
          to="/blog"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all posts
        </Link>

        {/* Header */}
        <header className="mb-8 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <Badge
              variant="outline"
              className={categoryColors[post.category] || ""}
            >
              {post.category}
            </Badge>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" />
              {formattedDate}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

          {post.tags && (
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-sm text-muted-foreground">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </header>

        {/* Content */}
        <article
          className="prose prose-invert prose-cyan max-w-none animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          {post.content.split("\n\n").map((paragraph, index) => {
            // Handle headers
            if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
              return (
                <h3 key={index} className="text-xl font-semibold mt-6 mb-3 text-foreground">
                  {paragraph.replace(/\*\*/g, "")}
                </h3>
              );
            }

            // Handle lists
            if (paragraph.includes("\n- ")) {
              const [intro, ...items] = paragraph.split("\n- ");
              return (
                <div key={index}>
                  {intro && <p className="text-muted-foreground">{intro}</p>}
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    {items.map((item, i) => (
                      <li key={i} className="text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }

            // Handle numbered lists
            if (/^\d+\./.test(paragraph)) {
              const items = paragraph.split(/\n(?=\d+\.)/).filter(Boolean);
              return (
                <ol key={index} className="list-decimal list-inside space-y-2 mt-4">
                  {items.map((item, i) => (
                    <li key={i} className="text-muted-foreground">
                      {item.replace(/^\d+\.\s*/, "").replace(/\*\*/g, "")}
                    </li>
                  ))}
                </ol>
              );
            }

            // Regular paragraph
            return (
              <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                {paragraph}
              </p>
            );
          })}
        </article>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-border">
          <Button asChild variant="outline">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all posts
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
