import { Metadata } from 'next';

import CategoriesSubCategoriesPage from '@/app/components/categories/CategorySubCategoryPage';

// 🟡 Correct SEO Metadata
export async function generateMetadata({ params }) {
  const slug = params.slug;
  const categorySlug = slug?.[0]?.replace(".html", "") || "Furniture";
  const subCategorySlug = slug?.[1];
  const productSlug = slug?.[2];

  let title = "Furniture | Mayuri International";
  let description = "Explore premium hotel, office, and home furniture collections by Mayuri International. Custom designs and bulk orders available.";

  if (categorySlug && !subCategorySlug && !productSlug) {
    title = `${categorySlug.replace(/-/g, " ")} - Premium Furniture Collection | Mayuri International`;
    description = `Discover a wide range of ${categorySlug.replace(/-/g, " ")} at Mayuri International, Bangalore. Bulk and custom orders available.`;
  }

  if (categorySlug && subCategorySlug && !productSlug) {
    title = `${subCategorySlug.replace(/-/g, " ")} - ${categorySlug.replace(/-/g, " ")} | Mayuri International Furniture`;
    description = `Browse premium ${subCategorySlug.replace(/-/g, " ")} under ${categorySlug.replace(/-/g, " ")} category. Perfect for hotels, offices, homes, and institutions.`;
  }

  if (categorySlug && subCategorySlug && productSlug) {
    title = `${productSlug.replace(/-/g, " ")} | Furniture Product Detail | Mayuri International`;
    description = `Detailed specifications and craftsmanship of ${productSlug.replace(/-/g, " ")} furniture product. Contact Mayuri International for custom orders.`;
  }

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url: `https://www.mayuriinternational.com/categories/${slug?.join("/")}`,
      siteName: "Mayuri International",
      images: [
        {
          url: "https://www.mayuriinternational.com/images/slider-icon/hotel-furniture.jpg",
          width: 1200,
          height: 630,
          alt: "Furniture - Mayuri International",
        },
      ],
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://www.mayuriinternational.com/images/slider-icon/hotel-furniture.jpg"],
    },
  };
}

// ⬇️ This simply renders your client-side component
export default function Page() {

  return <CategoriesSubCategoriesPage />;
}


