'use client'

import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { useRef } from "react";
import OverlayBox from "../common/OverlayBox";

import { BiSolidLeftArrow,BiSolidRightArrow } from "react-icons/bi";

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
    <div className="w-screen bg-[#F9F9F9] py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold uppercase text-[#212529]">Our Products</h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Versatile Loose Furniture Solutions Tailored for Every Space in India
        </p>
      </div>

      {/*  */}


      {/* Carousel */}
      <div className="relative w-full">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 cursor-pointer -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center"
        >
          <BiSolidLeftArrow className="text-[#212529] hover:text-[#811235]" size={35} />

        </button>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="overflow-x-auto relative w-full max-w-[95%] flex gap-6 scroll-smooth no-scrollbar px-3 mx-auto"
        >
          {ourProductList.map((product, idx) => (
            <div key={idx} className=" max-w-[600px] flex-shrink-0">
              <OverlayBox title={product.title} desc={product.description} image={product.image} />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center"
        >
          <BiSolidRightArrow className="text-[#212529] cursor-pointer hover:text-[#811235]" size={35} />
        </button>
      </div>
    </div>
  );
};

export default ProductSection;
