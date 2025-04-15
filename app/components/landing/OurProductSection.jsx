
'use client'

import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { useRef } from "react";

import Image from "next/image";

export const ourProductList = [
  {
    image: "https://www.mayuriinternational.com/images/loose-furniture-sliders/bar-stools.jpg",
    title: "Bar Stools",
    description: "Raising the Bar on comfort and style",
  },
  {
    image: "https://www.mayuriinternational.com/images/loose-furniture-sliders/center-table.jpg",
    title: "Center Table",
    description: "Gather Round and Elevate your space",
  },
  {
    image: "https://www.mayuriinternational.com/images/loose-furniture-sliders/beds.jpg",
    title: "Sofa",
    description: "Relax in comfort with stylish seating",
  },
  {
    image: "/landing/products/table.png",
    title: "Dining Table",
    description: "Dine in elegance and comfort",
  },
  {

    image: "https://www.mayuriinternational.com/images/loose-furniture-sliders/cafe-chair.jpg",
    title: "Cafe Chair",
    description: "Comfort Meets Style in Every Sip",

  },
  {

    image: "https://www.mayuriinternational.com/images/loose-furniture-sliders/cafe-table.jpg",
    title: "Cafe Table",
    description: "Gather and Savor in Style",

  },

];


const ProductSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const width = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -width : width,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full bg-[#F9F9F9] px-4 lg:px-20 py-12 relative">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold uppercase text-[#212529]">
          Our Products
        </h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Versatile Loose Furniture Solutions Tailored for Every Space in India
        </p>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition"
        >
          <IoMdArrowDropleft size={24} className="text-gray-700" />
        </button>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 scroll-smooth no-scrollbar px-12 md:px-14 lg:px-16"
        >
          {ourProductList.map((product, idx) => (
            <div
              key={idx}
              className="group perspective min-w-[300px] md:min-w-[360px] lg:min-w-[400px] h-[400px] flex-shrink-0"
            >
              <div className="card-inner w-full h-full">
                {/* Front Side */}
                <div className="card-front bg-white shadow-md">
                  {/* <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  /> */}

                  <Image
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                    fill
                  />
                  
                </div>

                {/* Back Side */}
                <div className="card-back bg-white shadow-md flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-2xl font-bold text-[#212529] mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition"
        >
          <IoMdArrowDropright size={24} className="text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default ProductSection;


