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

import { cleanAndLowercase, cleanAndLowercaseAddDash, cleanAndLowercaseAddSpace } from "@/lib/utils";

export default function FAQSection({ categoryName }) {

  const router = useRouter();

  const pathname = usePathname();

  // const taggedCategoriesData = useSelector((state) => state.category.clickedCategoryData);

  const categoriesData = useSelector((state) => state.navbarCategory.data);

  const filteredCategory = categoriesData.find(
    (category) => cleanAndLowercase(category.name) === cleanAndLowercase(categoryName)
  );


  if (!filteredCategory) return;

  const mappedTaggedSubCategories = filteredCategory.tagsIncluded.length
    ? filteredCategory.tagsIncluded.map((tag) => {

      let groupedSubCategories = [];

      if (tag.isCategory) {
        const referencedCategory = categoriesData.find(
          (data) => cleanAndLowercase(data.name) === cleanAndLowercase(tag.tagName)
        );

        if (referencedCategory) {

          groupedSubCategories = referencedCategory.subCategories || [];

        }
      } else {
        groupedSubCategories = filteredCategory.subCategories.filter((subCategory) =>
          subCategory.tagsIncluded.includes(tag._id)
        );
      }

      return {
        tagName: tag.tagName,
        subCategories: groupedSubCategories,
      };
    })
    : [
      {
        tagName: filteredCategory.name,
        subCategories: filteredCategory.subCategories,
      },
    ];


  return (
    <div className="w-full relative mx-auto p-7 bg-[#eeeeee] rounded-2xl">
      <h2 className="text-sm sm:text-md md:text-2xl text-[#212529] font-medium text-start uppercase text-wrap md:text-nowrap">{categoryName} Categories</h2>

      <Accordion type="single" collapsible className="w-full">
        {mappedTaggedSubCategories?.map((data, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-b border-gray-300"
          >
            <AccordionTrigger className="text-sm font-medium cursor-pointer uppercase text-[#212529] hover:text-[#3C001E]">
              {cleanAndLowercaseAddSpace(data.tagName)}
            </AccordionTrigger>
            <AccordionContent className="pl-4 mt-2 relative w-full text-gray-700 space-y-2">
              {data.subCategories?.map((item, subIndex) => (
                <div key={subIndex} className="flex items-start gap-2 cursor-pointer" onClick={() => {

                  const pathName = pathname;

                  router.push(`${pathName}/${cleanAndLowercaseAddDash(item.name)}`);

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
