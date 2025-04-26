'use client'

import Image from "next/image";

import { cleanAndLowercaseAddSpace, cleanAndLowercase } from "@/lib/utils";


import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function CircleBox({ image, name, currentSubCategory,clickHandler }) {


  console.log("Current subCategory at circle box is ", currentSubCategory);

  console.log("name at circle is ", name);

  let isActive = false;

  if (currentSubCategory && cleanAndLowercase(currentSubCategory) == cleanAndLowercase(name)) {

    isActive = true;
  }
  else {

    isActive = false;

  }


  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div
        className="
          w-[200px] h-[200px] rounded-full overflow-hidden border-2  border-[#A52A59] transition-all duration-300
          group cursor-pointer 
        "
      >
        <Image
          src={typeof image === "string" ? image.trim() : ""}
          alt={name}
          width={200}
          height={200}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-125"
        />
      </div>

      <div
        className={`transition-all px-7 duration-300 ${isActive
          ? "bg-[#EBE1E4] rounded-full p-2 text-white"
          : ""
          }`}
      >
        <p className="text-center text-[#380416] text-[10px] uppercase font-semibold group-hover:text-black">
          {cleanAndLowercaseAddSpace(name)}
        </p>

      </div>

    </div>
  );
}

