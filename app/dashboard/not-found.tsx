"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/features/shared/ui/button";
import { ArrowLeft, Home, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { NotFoundIllustration } from "@/features/shared/components/NotFoundIllustration";
import { useEffect, useState } from "react";

export default function DashboardNotFound() {
  const [imageError, setImageError] = useState(false);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="w-full flex items-center justify-center h-[calc(100vh-80px)]">
      <div className="max-w-md w-full mx-auto text-center px-4">
        <div className="flex justify-center mb-8 relative">
          <div className="relative animate-pulse-subtle">
            <h1 className="text-[10rem] font-bold text-primary-foreground/20 leading-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              {!imageError ? (
                <Image
                  src="/assets/illustrations/not-found-illustration.png"
                  alt="Not found illustration"
                  width={200}
                  height={200}
                  className="object-contain"
                  onError={() => setImageError(true)}
                />
              ) : (
                <NotFoundIllustration className="w-48 h-48" />
              )}
            </div>
          </div>
        </div>

        {/* Error Message */}
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
          Page Not Found
        </h2>
        <p className="text-muted-foreground text-base mb-8">
          Sorry, the dashboard page you&apos;re looking for doesn&apos;t exist
          or has been moved.
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
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
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

        {/* Search Suggestion */}
        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-muted-foreground text-sm mb-4">
            Looking for something specific?
          </p>
          <div className="relative max-w-xs mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
            <input
              type="text"
              placeholder="Search dashboard..."
              className={cn(
                "pl-10 pr-4 py-2 w-full",
                "bg-background border border-input rounded-md",
                "text-sm text-foreground",
                "focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:border-transparent",
                "transition-all duration-200"
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
