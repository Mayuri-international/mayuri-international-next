'use client';

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { landingPageProductImages } from "../../../lib/data";

const HomeSlider = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [showContent, setShowContent] = useState(true);

  const goToPrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? productImages.length - 1 : prev - 1
    );
    setShowContent(true);
    setTimeout(() => setShowContent(false), 4500);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % landingPageProductImages.length);
    setShowContent(true);
    setTimeout(() => setShowContent(false), 4500);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full h-[85vh] overflow-hidden bg-black"
      aria-label="Furniture Hero Slider"
    >
      {landingPageProductImages.map((img, index) => (
        <article
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="absolute inset-0 bg-black/60" />

          {currentSlide === index && showContent && (
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-white text-center">
              <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-lg max-w-3xl transition-all duration-1000">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight drop-shadow">
                  Luxury Furniture for Every Space
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-6">
                  Elevate your interiors with timeless designs crafted for hospitality, corporate, and residential elegance.
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                  <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
                    Explore Collection
                  </button>
                  <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          )}
        </article>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full z-20 transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full z-20 transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
};

export default HomeSlider;
