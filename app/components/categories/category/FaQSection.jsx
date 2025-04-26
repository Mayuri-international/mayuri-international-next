"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { usePathname } from "next/navigation";

import { useSelector } from "react-redux";
import { ChevronRight } from "lucide-react";

import { useRouter } from "next/navigation";

import { cleanAndLowercase } from "@/lib/utils";

export default function FAQSection({ categoryName }) {

  const taggedCategoriesData = useSelector((state) => state.category.clickedCategoryData);

  const router = useRouter();

  const pathname = usePathname();

  return (
    <div className="w-full relative mx-auto p-7 bg-[#eeeeee] rounded-2xl">
      <h2 className="text-sm sm:text-md md:text-2xl text-[#212529] font-medium text-start uppercase text-wrap md:text-nowrap">{categoryName} Categories</h2>

      <Accordion type="single" collapsible className="w-full">
        {taggedCategoriesData?.map((data, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-b border-gray-300"
          >
            <AccordionTrigger className="text-sm font-medium cursor-pointer uppercase text-[#212529] hover:text-[#3C001E]">
              {data.tagName}
            </AccordionTrigger>
            <AccordionContent className="pl-4 mt-2 relative w-full text-gray-700 space-y-2">
              {data.subCategories?.map((item, subIndex) => (
                <div key={subIndex} className="flex items-start gap-2 cursor-pointer" onClick={() => {

                  const pathName = pathname;

                  router.push(`${pathName}/${cleanAndLowercase(item.name)}`);

                }}>

                  {

                    data.subCategories.length === subIndex + 1 ? (

                      <span className="cursor-pointer w-full capitalize text-black font-medium border-gray-300 pb-2 ">{item.name}</span>

                    ) : (

                      <span className="cursor-pointer w-full capitalize text-black font-medium border-b border-gray-300 pb-2 ">{item.name}</span>
                    )
                  }

                </div>
              ))}
            </AccordionContent>

          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
