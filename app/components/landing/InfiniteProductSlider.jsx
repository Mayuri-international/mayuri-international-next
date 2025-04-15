
'use client'

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    "https://dupe.com/_next/image?url=%2Fassets%2Fhome%2Fhome-08.png&w=640&q=75",
    "https://dupe.com/_next/image?url=%2Fassets%2Fhome%2Fhome-04.png&w=640&q=75",
    "https://dupe.com/_next/image?url=%2Fassets%2Fhome%2Fhome-01.png&w=640&q=75",
    "https://dupe.com/_next/image?url=%2Fassets%2Fhome%2Fhome-02.png&w=640&q=75",
    "https://dupe.com/_next/image?url=%2Fassets%2Fhome%2Fhome-06.png&w=640&q=75",
    "https://dupe.com/_next/image?url=%2Fassets%2Fhome%2Fhome-03.png&w=640&q=75",
];

const InfiniteSlider = () => {
    return (
        <div className="relative w-full overflow-hidden py-10">
            <div className="infinite-scroll flex space-x-8">
                {[...images, ...images].map((image, index) => (
                    <div
                        key={index}
                        className="w-64 h-80 flex-shrink-0 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 hover:scale-105 transition-transform duration-300"
                    >

                        <Image

                            src={image}
                            alt={`Slide ${index + 1}`}
                            fill
                            className="w-full h-full object-cover rounded-lg"
                            
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteSlider;