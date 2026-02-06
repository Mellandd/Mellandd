import { Link } from "react-router-dom";
import { Calendar, Tag } from "lucide-react";
import { BlogPost } from "@/data/blog";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  post: BlogPost;
}

const categoryColors: Record<string, string> = {
  Research: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Talk: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  News: "bg-green-500/20 text-green-400 border-green-500/30",
  Tutorial: "bg-orange-500/20 text-orange-400 border-orange-500/30",
};

export const BlogCard = ({ post }: BlogCardProps) => {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link to={`/blog/${post.slug}`}>
      <article className="group p-6 rounded-lg border border-border bg-card/50 card-hover">
        <div className="space-y-3">
          {/* Category & Date */}
          <div className="flex items-center gap-3 text-sm">
            <Badge 
              variant="outline" 
              className={categoryColors[post.category] || ""}
            >
              {post.category}
            </Badge>
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" />
              {formattedDate}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>

          {/* Tags */}
          {post.tags && (
            <div className="flex items-center gap-2 pt-2">
              <Tag className="h-3.5 w-3.5 text-muted-foreground" />
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Read more indicator */}
          <div className="pt-2">
            <span className="text-sm text-primary font-medium group-hover:underline">
              Read more →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};
