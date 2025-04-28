'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { landingPageProductImages } from "@/lib/data";

const HomeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? landingPageProductImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % landingPageProductImages.length);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden bg-black" aria-label="Furniture Hero Slider">
      {/* Slides */}
      {landingPageProductImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
            currentSlide === index ? "opacity-100 scale-105 z-10" : "opacity-0 scale-100 z-0"
          }`}
        >
          <Image
            src={img}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover object-center transition-transform duration-1000 ease-in-out"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        aria-label="Previous Slide"
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full z-20"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>
      <button
        onClick={goToNext}
        aria-label="Next Slide"
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full z-20"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {landingPageProductImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3.5 h-3.5 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-white/40"
            } transition-all`}
          ></button>
        ))}
      </div>

      {/* Fade In Animation */}
      <style jsx>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default HomeSlider;

