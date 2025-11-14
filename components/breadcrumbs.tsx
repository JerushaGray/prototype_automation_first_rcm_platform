"use client";

import Link from "next/link";
import { useSelectedLayoutSegments } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumbs() {
  const segments = useSelectedLayoutSegments();

  // Don't show breadcrumbs if we're on the root page or if no segments
  if (!segments || segments.length === 0) {
    return null;
  }

  // Build breadcrumb path
  const breadcrumbs = [
    { label: "Home", href: "/dashboard" },
    ...segments.map((segment, index) => {
      const href = `/${segments.slice(0, index + 1).join("/")}`;
      // Convert segment to readable label (kebab-case to Title Case)
      const label = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      return { label, href };
    }),
  ];

  return (
    <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
      <Link
        href="/dashboard"
        className="hover:text-foreground transition-colors flex items-center gap-1"
      >
        <Home className="w-4 h-4" />
      </Link>
      {breadcrumbs.slice(1).map((crumb, index) => (
        <div key={crumb.href} className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4" />
          {index === breadcrumbs.length - 2 ? (
            <span className="text-foreground font-medium">{crumb.label}</span>
          ) : (
            <Link
              href={crumb.href}
              className="hover:text-foreground transition-colors"
            >
              {crumb.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
