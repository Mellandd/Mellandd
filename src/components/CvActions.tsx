import { Download, ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";
import { publicAssetUrl } from "@/lib/public-assets";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CvActionsProps {
  className?: string;
  compact?: boolean;
}

export function CvActions({ className, compact = false }: CvActionsProps) {
  const cvUrl = publicAssetUrl(profile.cv.path);

  return (
    <div
      className={cn(
        "flex gap-3",
        compact ? "flex-wrap justify-center" : "flex-col sm:flex-row",
        className,
      )}
    >
      <Button asChild size={compact ? "lg" : "default"} className={cn(!compact && "flex-1")}>
        <a href={cvUrl} download={profile.cv.downloadName}>
          <Download className="mr-2 h-4 w-4" aria-hidden="true" />
          Download CV
        </a>
      </Button>
      <Button
        asChild
        variant="outline"
        size={compact ? "lg" : "default"}
        className={cn(!compact && "flex-1")}
      >
        <a href={cvUrl} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
          View CV
        </a>
      </Button>
    </div>
  );
}
