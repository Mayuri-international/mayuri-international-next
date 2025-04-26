'use client'

import { Button } from "@/components/ui/button";
import { IoVideocamOutline } from "react-icons/io5";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu";
export default function FurnitureVideoSection() {

    const furnitureVideoDropDownn = [
        {

            name: "Furniture Manufacturers",
            link: "https://www.youtube.com/watch?v=vLoRvb52odw",

        },
        {

            name: "Hotel Furniture",
            link: "https://www.youtube.com/watch?v=KBL_L2IMmQI",
        },
        {

            name: "Mayuri youtube",
            link: "https://www.youtube.com/@MayuriInternational/videos?view=0&sort=dd&shelf_id=0"
        }
    ]

    return (

        <DropdownMenu className="rounded-full">
            <DropdownMenuTrigger>
                <div
                    className="hidden md:flex items-center gap-2 p-2 px-4 rounded-full cursor-pointer font-medium text-white text-base bg-[#a52a59] hover:bg-[#8d234b] transition-all shadow-md"
                    onClick={() => {
                        window.location.href = "https://www.youtube.com/channel/UC-mulr98cjwzNRvavWew8Ww";
                    }}
                >
                    <IoVideocamOutline size={22} className="text-white" />
                    <span>Furniture Videos</span>
                </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="bg-white w-64 mt-2 rounded-xl shadow-lg overflow-hidden">
                {furnitureVideoDropDownn.map((data, idx) => (
                    <DropdownMenuItem
                        key={idx}
                        className="px-4 py-3 hover:bg-[#f7d6e0] text-gray-700 font-normal cursor-pointer text-sm transition-all"
                        onClick={() => {

                            window.open(data.link, '_blank');
                            
                        }}
                    >
                        {data.name}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

