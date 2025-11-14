import Link from "next/link";
import { Linkedin, Github } from 'lucide-react';

interface FooterProps {
  variant?: "internal" | "landing";
}

export function Footer({ variant = "internal" }: FooterProps) {
  if (variant === "landing") {
    return (
      <footer className="border-t py-8 bg-background text-center">
        <p className="text-sm text-muted-foreground">
          Automation Assistant Prototype · © 2025 · Created by Jerusha Gray
        </p>
      </footer>
    );
  }

  return (
    <footer className="border-t py-6 bg-background mt-auto">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-sm text-muted-foreground">
          <span>Automation Assistant Prototype · © 2025 · Created by Jerusha Gray ·</span>
          <span>All data is synthetic and for demonstration purposes only.</span>
          <div className="flex items-center gap-4 ml-4">
            <Link
              href="https://www.linkedin.com/in/jerushagray/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/JerushaGray"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors flex items-center gap-1"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
