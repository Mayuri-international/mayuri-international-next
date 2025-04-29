'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const ProductComponent = ({ subcategoryName, productUrl }) => {
  const [selected, setSelected] = useState(false);

  const pathname = usePathname();

  const router = useRouter();

  const handleClick = (subcategoryName) => {
    setSelected(true);
    const currentPath = pathname; // e.g., /categories/furniture

    router.push(`${currentPath}/${subcategoryName}`);

  };

  return (
    <div className="w-full px-4 mt-12">
      <div className="flex flex-wrap justify-center gap-8">
        <div
          onClick={()=>handleClick(subcategoryName)}
          tabIndex={0}
          className={`group relative cursor-pointer transition-transform duration-300 ${
            selected ? 'scale-105 z-10' : 'hover:scale-105'
          } w-[280px] md:w-[340px] lg:w-[380px] h-[460px] bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-200`}
        >
          {/* Product Image */}
          <div className="relative w-full h-[55%] bg-gray-100">
            <Image
              src={productUrl}
              alt={subcategoryName}
              fill
              unoptimized
              className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out rounded-t-2xl"
            />
          </div>

          {/* Text Content */}
          <div className="h-[45%] p-5 flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300">
              {subcategoryName}
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Explore elegant and handcrafted {subcategoryName} designs.
            </p>
          </div>

          {/* Optional Overlay */}
          {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300 rounded-2xl pointer-events-none" /> */}
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;


