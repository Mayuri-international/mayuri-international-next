import { fetchCatalogueData } from "@/utils";
import { CatalogueBox } from "@/app/components/catalogue/catalogueComponent";

import { cleanAndLowercaseAddSpace } from "@/lib/utils";

import HorizontalSlider from "@/app/components/landing/HorizontalSlider";

import CatalogueHorizontalSection from "@/app/components/catalogue/CatalogueHorizontalSection";

import NoCatalogueDataFound from "@/app/components/catalogue/NoCatalogueDataFound";

import FeaturesSection from "@/app/components/common/FeaturesSection";


export async function generateMetadata({ params }) {
    const slug = params.slug.join("/");
    const data = await fetchCatalogueData(slug);

    if (!data.length) {
        return {
            title: "Category Not Found - Mayuri",
            description: "No such catalogue category exists.",
        };
    }

    const category = data[0];

    return {
        title: `${category.name} - Mayuri International`,
        description: `Explore the best in ${category.name} collections.`,
    };
}

export default async function Page({ params }) {
    const slug = params.slug.join("/");
    const data = await fetchCatalogueData(slug);

    if (!data.length) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center text-2xl text-gray-500">
                Category Not Found
            </div>
        );
    }

    const category = data[0];

    return (

        <div className="relative w-screen min-h-screen bg-gray-50">

            <CatalogueHorizontalSection currentCategory={slug}></CatalogueHorizontalSection>

            <div className="flex items-center justify-center gap-4 py-4">
                <hr className=" w-4 md:w-14 border-t border-[#67152f]" />
                <h1 className="text-sm lg:text-2xl font-semibold text-[#67152f] text-center uppercase cursor-pointer">
                    {cleanAndLowercaseAddSpace(slug)} Catalogues
                </h1>
                <hr className=" w-4 md:w-14 border-t border-[#67152f]" />
            </div>

            <div className="flex w-full pt-7 max-w-[96%] mx-auto ">

                {

                    category && category.catalogues.length > 0 ? (

                        <div className="grid relative w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
                            {category.catalogues.map((item, index) => (
                                <CatalogueBox
                                    key={item.pdfUrl || index}
                                    name={item.name}
                                    pdImage={item.image}
                                    pdfUrl={item.pdfUrl}
                                />
                            ))}
                        </div>
                    ) : (

                        <NoCatalogueDataFound></NoCatalogueDataFound>
                    )

                }

            </div>

            <div className="mt-7">

                <FeaturesSection></FeaturesSection>

            </div>

        </div>
    );
}

