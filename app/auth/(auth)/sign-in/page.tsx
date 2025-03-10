import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UifryLogo } from "@/features/shared/ui";
import { LoginForm } from "@/features/auth/components/LoginForm";
import TestimonialSlider from "@/features/auth/components/TestimonialSlider";

export default function Home() {
  return (
    <main className="w-full grid grid-cols-1 lg:grid-cols-2 h-screen overflow-hidden">
      <section
        className="w-full flex items-center p-4 md:p-0 justify-center h-screen bg-primary overflow-hidden"
        aria-labelledby="login-heading"
      >
        <div className="w-full max-w-md space-y-8">
          <div className="flex flex-col gap-4 items-center">
            <Link
              href="/"
              className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-foreground rounded-md"
            >
              <UifryLogo />
            </Link>
            <div className="space-y-1">
              <h1
                id="login-heading"
                className="text-center text-white font-bold text-2xl"
              >
                Welcome back, Ali Riaz 🙇🏾‍♀️
              </h1>
              <h2 className="text-center text-base text-custom-muted">
                Login to access your Uifry account
              </h2>
            </div>
          </div>

          <LoginForm />
        </div>
      </section>

      <section
        className="hidden w-full lg:flex flex-col bg-background items-center h-screen overflow-y-auto overflow-x-hidden"
        aria-labelledby="content-heading"
      >
        <div className="flex flex-col items-center justify-between w-full max-w-full py-8 h-full">
          {/* Testimonial Section */}
          <div className="w-full mb-8 px-8 animate-fade-in">
            <h2 id="content-heading" className="sr-only">
              Testimonials and Dashboard Preview
            </h2>
            <TestimonialSlider />
          </div>

          {/* Illustration Section */}
          <div className="w-full mt-auto flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[900px] animate-slide-up">
              <Image
                src="/assets/illustrations/login-page-illustration.png"
                alt="Uifry Dashboard"
                width={900}
                height={584}
                className="w-full h-auto object-contain transition-all duration-700 ease-in-out hover:translate-y-[-8px] cursor-pointer"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
