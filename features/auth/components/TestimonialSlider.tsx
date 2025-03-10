"use client";
import React, { useState, useEffect, useCallback } from "react";
import { testimonials } from "@/constants/auth";
import { cn } from "@/lib/utils";

const TestimonialSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto rotating of testimonials
  const rotateSlides = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
      setIsTransitioning(false);
    }, 300);
  }, []);

  // Setup auto-rotation interval
  useEffect(() => {
    const interval = setInterval(rotateSlides, 5000);
    return () => clearInterval(interval);
  }, [rotateSlides]);

  // Manual navigation with smooth transition
  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 300);
  };

  // Render stars based on rating
  const renderStars = (rating: number) => {
    return Array(rating)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-yellow-400 transition-all duration-300 hover:scale-110"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      ));
  };

  return (
    <section className="py-4relative">
      <h2 className="sr-only">Customer Testimonials</h2>
      <div className="max-w-3xl mx-auto">
        <div className="relative min-h-[200px]">
          {testimonials.map((testimonial, index) => {
            const isActive = currentSlide === index;
            return (
              <div
                key={testimonial.id}
                className={cn(
                  "absolute w-full transition-all duration-500 ease-in-out",
                  isActive
                    ? "opacity-100 transform-none z-10"
                    : "opacity-0 translate-x-8 z-0",
                  isTransitioning && "transition-opacity duration-300"
                )}
              >
                <div className="flex gap-1 mb-4 animate-pulse-subtle">
                  {renderStars(testimonial.rating)}
                </div>
                <blockquote className="text-foreground text-2xl sm:text-4xl font-bold mb-4 hover:text-primary transition-colors duration-300">
                  <p>{`"${testimonial.quote}"`}</p>
                </blockquote>
                <footer className="text-secondary-foreground">
                  <cite className="font-bold text-xl not-italic">
                    {testimonial.author}
                  </cite>
                  <p className="transition-all duration-300 hover:translate-x-1">
                    {testimonial.location}
                  </p>
                </footer>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-3 gap-2">
          {testimonials.map((_, index) => {
            const isActive = currentSlide === index;
            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "h-3 rounded-full transition-all duration-300 cursor-pointer",
                  isActive
                    ? "bg-primary-foreground w-8"
                    : "bg-primary w-3 hover:bg-primary-foreground/70"
                )}
                aria-label={`View testimonial ${index + 1} of ${
                  testimonials.length
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
