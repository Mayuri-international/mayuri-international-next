'use client'

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional: Use Heroicons or replace with SVG

const HomeSlider = () => {
  const productImages = [
    "https://www.mayuriinternational.com/images/slides-banner/mobile/hotel-lobby-furniture.jpg",
    "https://www.mayuriinternational.com/images/slides-banner/hotel-dining-furniture.jpg",
    "https://www.mayuriinternational.com/images/slides-banner/lounge-sofa.jpg",
    "https://www.mayuriinternational.com/images/slides-banner/hotel-furniture.jpg",
    "https://www.mayuriinternational.com/images/slides-banner/bar-furniture.jpg",
  ];

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
    setCurrentSlide((prev) => (prev + 1) % productImages.length);
    setShowContent(true);
    setTimeout(() => setShowContent(false), 4500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      {productImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="absolute inset-0 bg-black/50 transition duration-1000"></div>

          {currentSlide === index && showContent && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 transition-all duration-1000">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Luxury Furniture for Every Space
              </h1>
              <p className="text-lg md:text-xl mb-6 max-w-2xl text-gray-200">
                Crafting comfort and elegance in hospitality, corporate, and
                residential spaces with timeless designs.
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
                  Explore Collection
                </button>
                <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full z-20 transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full z-20 transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
};

export default HomeSlider;
