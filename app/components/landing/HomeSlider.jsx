'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { landingPageProductImages } from "@/lib/data";

const sliderTexts = [
  "Luxury Hotel Furniture Collections",
  "Elegant Office Spaces, Designed by Mayuri",
  "Custom-Made Sofas and Beds for Your Dream Projects",
];

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
    <section className="relative w-full h-[90vh] md:h-[75vh] sm:h-[60vh] xs:h-[55vh] overflow-hidden" aria-label="Furniture Hero Slider">
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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
          {/* Soft Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        </div>
      ))}

      {/* Centered Text Overlays */}
      <div className="absolute inset-0 flex items-center justify-center px-6 text-center z-20">
        <h1 className="text-white font-bold text-2xl md:text-4xl lg:text-5xl animate-fade-in">
          {sliderTexts[currentSlide]}
        </h1>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        aria-label="Previous Slide"
        className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full z-30"
      >
        <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
      </button>
      <button
        onClick={goToNext}
        aria-label="Next Slide"
        className="absolute right-4 cursor-pointer top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full z-30"
      >
        <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {landingPageProductImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full ${
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
        @media (max-width: 640px) {
          section {
            height: 55vh !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeSlider;
