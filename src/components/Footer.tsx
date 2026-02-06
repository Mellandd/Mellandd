import { Github, Mail, Twitter, Linkedin, BookOpen } from "lucide-react";
import { profile } from "@/data/profile";

export const Footer = () => {
  const socialLinks = [
    { icon: Mail, href: `mailto:${profile.social.email}`, label: "Email" },
    { icon: Github, href: profile.social.github, label: "GitHub" },
    { icon: BookOpen, href: profile.social.scholar, label: "Google Scholar" },
    { icon: Twitter, href: profile.social.twitter, label: "Twitter" },
    { icon: Linkedin, href: profile.social.linkedin, label: "LinkedIn" },
  ];

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
