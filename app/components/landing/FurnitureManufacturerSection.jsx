'use client';

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import HorizontalSlider from "./HorizontalSlider";

const FurnitureManufacturerSection = ({ products }) => {
  const router = useRouter();

  function moveCategoryHandler(category) {
    router.push(`/category/${removeSpaces(category.title).toLowerCase()}`);
  }

  function removeSpaces(str) {
    return str.replace(/\s+/g, '');
  }

  // Extract unique categories
//   const uniqueCategories = useMemo(() => {
//     const categoryMap = new Map();
//     products.forEach((product) => {
//       const categoryName = product.category?.name || product.category;
//       if (!categoryMap.has(categoryName)) {
//         categoryMap.set(categoryName, {
//           title: categoryName,
//           icon: product.category?.images?.[0] || "",
//           subCategories: product.category?.subCategories || [],
//         });
//       }
//     });
//     return Array.from(categoryMap.values());
//   }, [products]);

  return (
    <section className="relative flex flex-col py-20 w-full h-full bg-gradient-to-br from-gray-100 via-white to-gray-200">
      <div className="max-w-7xl relative mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            India’s Premier Furniture Manufacturer
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We blend craftsmanship and innovation to deliver timeless, elegant
            furniture for hotels, offices, and luxury residences across India.
          </p>
        </div>
      </div>

      <HorizontalSlider></HorizontalSlider>

    </section>
  );
};

export default FurnitureManufacturerSection;
