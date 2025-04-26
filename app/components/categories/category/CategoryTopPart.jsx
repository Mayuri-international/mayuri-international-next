
'use client'

import { useRouter } from "next/navigation";

import { FaPhoneAlt } from "react-icons/fa";



export default function CategoryTopPart({ categoryName, desc1,image}) {

    

    const router = useRouter();

    return (
        <div className="bg-[#490017] relative w-screen text-white py-7 px-6 md:px-6">
            <div className="w-full relative grid md:grid-cols-2 gap-16">

                {/* Left Part - Text Content */}
                <div className=" relative w-full">
                    <nav className="text-sm mb-4 text-gray-300 border-b border-gray-100/20 pb-4">
                        <span className="hover:underline cursor-pointer font-medium text-white" onClick={()=>{

                            router.push("/");
                            
                        }}>Home</span>
                        <span className="mx-2 font-medium text-white text-md">›</span>
                        <span className=" font-medium text-white">{categoryName}</span>
                    </nav>

                    <h1 className="text-4xl md:text-4xl font-medium mb-6">{categoryName} Manufacturer</h1>
                    <p className="text-md text-[#f5f5f5] leading-relaxed mb-6 relative w-full md:w-[70%]">
                        {desc1}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 ">
                        <a
                            href="tel:+919731734610"
                            className="flex items-center w-full md:w-fit px-7 gap-2 bg-white text-[#6a1a33] text-sm lg:text-md md:px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
                        >
                            <FaPhoneAlt></FaPhoneAlt> +91 9731734610

                        </a>
                        <a
                            href="mailto:info@mayuriinternational.com"
                            className="flex items-center gap-2 border border-white px-6 py-3 rounded-full hover:bg-white hover:text-[#3C001E] transition"
                        >
                            <span>✉️</span> info@mayuriinternational.com
                        </a>
                    </div>
                </div>

                {/* Right Part - Images */}
                <div className="grid grid-cols-2 grid-rows-2 gap-4">
                    <div className="col-span-2 row-span-2">
                        <img
                            src={image}
                            alt="Hotel Furniture Lounge"
                            className="w-full h-full object-cover rounded-3xl shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
