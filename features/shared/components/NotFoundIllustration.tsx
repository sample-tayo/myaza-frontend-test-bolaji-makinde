import React from "react";
import { cn } from "@/lib/utils";

/**
 * Props for the NotFoundIllustration component
 */
interface NotFoundIllustrationProps {
  className?: string;
}

/**
 * A custom SVG illustration for 404 pages
 * This can be used when an actual image is not available
 */
export const NotFoundIllustration = ({
  className,
}: NotFoundIllustrationProps) => {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-primary-foreground", className)}
    >
      {/* Decorative elements */}
      <circle
        cx="100"
        cy="100"
        r="85"
        stroke="currentColor"
        strokeWidth="2"
        strokeOpacity="0.2"
      />
      <circle
        cx="100"
        cy="100"
        r="65"
        stroke="currentColor"
        strokeWidth="2"
        strokeOpacity="0.3"
      />

      {/* Data visualization-like elements */}
      <path
        d="M50 130C60 110 70 115 80 125C90 135 95 110 110 105C125 100 130 120 150 115"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Broken connection lines */}
      <path
        d="M60 70L85 95M115 95L140 70"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="2 4"
      />

      {/* Page/document icon */}
      <rect
        x="85"
        y="55"
        width="30"
        height="40"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M90 65H110M90 75H110M90 85H100"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Question mark */}
      <path
        d="M100 140C100 140 100 130 100 125C100 120 105 115 110 115C115 115 120 120 120 125C120 130 115 135 110 135"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="110" cy="145" r="2.5" fill="currentColor" />
    </svg>
  );
};
