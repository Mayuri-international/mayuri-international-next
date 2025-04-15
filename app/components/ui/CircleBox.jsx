'use client'

import Image from "next/image"

export default function CircleBox({ image, name }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div
        className="
          w-[200px] h-[200px] rounded-full overflow-hidden border 
          border-gray-300 hover:border-black transition-all duration-300
          group cursor-pointer
        "
      >
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <p className="text-center text-sm font-semibold text-muted-foreground group-hover:text-black">
        {name}
      </p>
    </div>
  );
}
