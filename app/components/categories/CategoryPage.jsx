"use client";

import { furnitureCategoriesData } from "@/lib/data";
import { cleanAndLowercase } from "@/lib/utils";
import CategoryTopPart from "@/app/components/categories/category/CategoryTopPart";
import FAQSection from "@/app/components/categories/category/FaQSection";
import TagDetailedSection from "@/app/components/categories/category/TagDetailSection";
import SubCategorySection from "./category/SubCategorySection";
import DeliveredProjects from "./category/DeliveredProjects";
import FeaturesSection from "../common/FeaturesSection";
import CategoryNotFound from "./CategoryNotFound";

// ✅ Structured Data Components
function CollectionPageSchema({ categoryData }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${categoryData.categoryName} Collection | Mayuri International`,
    "description": categoryData.desc1,
    "url": `https://www.mayuriinternational.com/categories/${cleanAndLowercase(categoryData.categoryName)}`,
    "image": categoryData.image,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function BreadcrumbSchema({ categoryData }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.mayuriinternational.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": categoryData.categoryName,
        "item": `https://www.mayuriinternational.com/categories/${cleanAndLowercase(categoryData.categoryName)}`
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// 🟡 Main Category Page Component
export function CategoryPage({ categoryName }) {
  console.log("category name is ", categoryName);

  const categoryData = furnitureCategoriesData.find(
    (cat) => cleanAndLowercase(cat.categoryName) === cleanAndLowercase(categoryName)
  );

  if (!categoryData) return <CategoryNotFound />;

  return (
    <div className="min-h-screen relative w-full bg-gray-50">
      {/* 🔥 Inject Structured Data */}
      <CollectionPageSchema categoryData={categoryData} />
      <BreadcrumbSchema categoryData={categoryData} />

      {/* ✅ Top Section */}
      <CategoryTopPart
        categoryName={categoryData.categoryName}
        desc1={categoryData.desc1}
        image={categoryData.image}
      />

      {/* ✅ SubCategory Section */}
      <SubCategorySection categoryName={categoryName} />

      {/* ✅ Middle Section */}
      <div className="w-full relative mx-auto py-12 px-9 flex flex-col xl:flex-row justify-center items-start gap-10">
        {/* Left: FAQ Section */}
        <aside className="lg:w-[40%] w-full relative h-fit rounded-2xl">
          <FAQSection categoryName={categoryData.categoryName} />
        </aside>

        {/* Right: Tag Details Section */}
        <main className="relative lg:w-[60%] w-full">
          <TagDetailedSection
            categoryName={categoryData.categoryName}
            desc2={categoryData.desc2}
            tagNamedData={categoryData.subCategories}
          />
        </main>
      </div>

      {/* ✅ Delivered Projects */}
      <DeliveredProjects />

      {/* ✅ Features Section */}
      <div className="mt-40">
        <FeaturesSection />
      </div>
    </div>
  );
}
