"use client";

import { useEffect } from "react";
import { Button } from "@/features/shared/ui/button";
import { RefreshCcw, Home } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function DashboardError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full flex items-center justify-center h-[calc(100vh-80px)]">
      <div className="max-w-md w-full mx-auto text-center px-4">
        {/* Error Icon */}
        <div className="mb-8 flex justify-center">
          <div className="size-24 rounded-full bg-destructive/10 flex items-center justify-center">
            <svg
              className="size-12 text-destructive"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>

        {/* Error Message */}
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
          Something went wrong
        </h2>
        <p className="text-muted-foreground text-base mb-2">
          An unexpected error occurred in the dashboard.
        </p>
        <p className="text-xs text-destructive/80 font-mono mb-8">
          {error.message || "Unknown error"}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button
            variant="default"
            size="lg"
            className={cn(
              "transition-all duration-300",
              "hover:bg-primary-foreground/90"
            )}
            onClick={reset}
          >
            <RefreshCcw className="mr-2 h-4 w-4" />
            Try Again
          </Button>

          <Link href="/dashboard" passHref>
            <Button
              variant="outline"
              size="lg"
              className={cn(
                "transition-all duration-300",
                "hover:bg-primary/10"
              )}
            >
              <Home className="mr-2 h-4 w-4" />
              Dashboard Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
