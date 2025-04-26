'use client';

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import HorizontalSlider from "./HorizontalSlider";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { fetchCategories } from "@/lib/api";
import { cleanAndLowercase,cleanAndLowercaseAddDash } from "@/lib/utils";

const FurnitureManufacturerSection = ({ products }) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  
  const removeSpaces = (str) => str.replace(/\s+/g, "");
  
  const moveCategoryHandler = (category) => {
    router.push(`/category/${cleanAndLowercaseAddDash(category.title)}`);
  };


  const cachedCategories = queryClient.getQueryData(["categories"])?.data || [];

  const { data: rawCategories = [], isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    staleTime: 1000 * 60 * 5,
    enabled: cachedCategories.length === 0,
  });

  const categoriesData = cachedCategories.length > 0 ? cachedCategories : rawCategories;

  const preparedData = categoriesData.map((data) => ({
    name: data.name,
    image: data.images[0],
  }));

  const clickHandler = (name) => {
    const updatedName = cleanAndLowercase(name.replace(/Catalogue/gi, "")).trim();
    router.push(`/categories/${updatedName}`);
  };

  return (
    <section className="relative flex flex-col pt-20 gap-1 w-full h-full bg-gradient-to-br from-gray-100 via-white to-gray-200 overflow-hidden">
      <div className="max-w-7xl relative mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            India’s Premier Furniture Manufacturer
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            We blend craftsmanship and innovation to deliver timeless, elegant
            furniture for hotels, offices, and luxury residences across India.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="relative w-full max-w-[100%] mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      >
        <HorizontalSlider preparedData={preparedData} clickHandler={clickHandler} />
      </motion.div>
    </section>
  );
};

export default FurnitureManufacturerSection;
