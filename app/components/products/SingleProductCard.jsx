'use client';

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { setSelectedProductData } from "@/store/slices/productSlice";

import { cleanAndLowercaseAddSpace } from "@/lib/utils";

const SingleProductCard = ({ product, subCategoryName, categoryName }) => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();

  console.log("product is ", product);

  console.log("sub category name is ", subCategoryName);

  console.log("category name is ", categoryName);

  const imageUrl = product.images?.[0]?.replace(/\\/g, "/") || "/placeholder.jpg";

  const handleClick = () => {
    dispatch(setSelectedProductData({ product, subCategoryName, categoryName }));
    router.push(`${pathname}/${product.code}`);
  };

  return (
    <div
      className="bg-white relative h-full rounded-xl cursor-pointer transition-transform duration-300 group w-full mb-5"
      onClick={handleClick}
    >
      {/* Image Wrapper */}
      <div className="relative w-full max-w-[500px] h-[400px] mb-4 overflow-hidden rounded-lg">
        <div className="w-full h-full relative">
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            className="object-fill w-full h-full rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 500px"
            priority
          />
        </div>
      </div>

      {/* Product Name */}
      <h3 className="text-sm font-semibold text-gray-800 uppercase text-center px-2">
        {cleanAndLowercaseAddSpace(subCategoryName)} ({product.code})
      </h3>
    </div>
  );
};

export default SingleProductCard;
