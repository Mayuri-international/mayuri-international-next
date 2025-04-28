'use client';
import Image from 'next/image';
import {cleanAndLowercaseAddDash } from '@/lib/utils';

export default function SubcategoryBox({ imageSrc, label, clickHandler }) {
  return (
    <div className="flex flex-col items-center justify-center p-3 sm:p-4 bg-[#eae4d7] border border-[#ddd] hover:shadow-md transition-shadow duration-300 w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px] xl:w-[240px] group overflow-hidden relative rounded-xl">
      <div className="w-full flex items-center justify-center border-r-2 border-r-white/55 aspect-square overflow-hidden relative">
        <div
          className="relative w-full h-full cursor-pointer"
          onClick={() => clickHandler(cleanAndLowercaseAddDash(label))}
        >
          <Image
            src={imageSrc || ''}
            alt={label}
            width={550}
            height={400}
            className="object-contain w-full h-full scale-110 group-hover:scale-125 transition-transform duration-300 ease-in-out"
          />
          {/* Continuous shine layer */}
          <div className="absolute inset-0 z-10 pointer-events-none shine-overlay" />
        </div>
      </div>
      <p className="mt-3 sm:mt-4 text-center text-[14px] sm:text-[15px] text-black font-medium">
        {label}
      </p>
    </div>
  );
}
