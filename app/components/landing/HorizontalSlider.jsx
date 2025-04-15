'use client'

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import CircleBox from "../ui/CircleBox"

const HorizontalSlider = () => {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -300 : 300
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" })
    }
  }

  const images = [
    { image: "https://www.mayuriinternational.com/images/slider-icon/home-furniture.jpg", name: "Home Furniture" },
    { image: "https://www.mayuriinternational.com/images/slider-icon/outdoor-furniture.jpg", name: "Outdoor Furniture" },
    { image: "https://www.mayuriinternational.com/images/slider-icon/office-furniture.jpg", name: "Office Furniture" },
    { image: "https://www.mayuriinternational.com/images/slider-icon/educational-furniture.jpg", name: "Educational Furniture" },
    { image: "https://www.mayuriinternational.com/images/slider-icon/metal-furniture.jpg", name: "Metal Furniture" },
    { image: "https://www.mayuriinternational.com/images/slider-icon/hotel-furniture.jpg", name: "Hotel Furniture" },
    { image: "https://www.mayuriinternational.com/images/slider-icon/home-furniture.jpg", name: "Home Furniture" },
    { image: "https://www.mayuriinternational.com/images/slider-icon/outdoor-furniture.jpg", name: "Outdoor Furniture" },
    { image: "https://www.mayuriinternational.com/images/slider-icon/office-furniture.jpg", name: "Office Furniture" },
    { image: "https://www.mayuriinternational.com/images/slider-icon/educational-furniture.jpg", name: "Educational Furniture" },
    { image: "https://www.mayuriinternational.com/images/slider-icon/metal-furniture.jpg", name: "Metal Furniture" },
    { image: "https://www.mayuriinternational.com/images/slider-icon/hotel-furniture.jpg", name: "Hotel Furniture" },
  ]

  return (
    <div className="relative w-[90%] flex items-center mx-auto mb-9">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md hover:shadow-lg"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Scrollable Area */}
      <div
        ref={scrollRef}
        className="overflow-x-auto whitespace-nowrap px-12 scroll-smooth no-scrollbar"
      >
        <div className="flex gap-8">
          {images.map((item, idx) => (
            <CircleBox key={idx} image={item.image} name={item.name} />
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md hover:shadow-lg"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  )
}

export default HorizontalSlider
