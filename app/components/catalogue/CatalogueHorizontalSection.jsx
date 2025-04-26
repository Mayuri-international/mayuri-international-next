
'use client'

import { useSelector } from "react-redux";

import HorizontalSlider from "../landing/HorizontalSlider";

import { cleanAndLowercase, cleanAndLowercaseAddDash } from "@/lib/utils";

import { useRouter } from "next/navigation";

import { useCallback } from "react";

export default function CatalogueHorizontalSection({ currentCategory }) {

    const router = useRouter();

    const catalogueData = useSelector((state) => state.catalogue.catalogueData);
    
    const clickHandler = useCallback((name) => {

        let tempName = name.replace(/Catalogue/gi, "").trim();

        router.push(`/catalogue/${cleanAndLowercaseAddDash(tempName)}`);

    }, [router]);
    

    return (

        <div className="relative w-full h-full">

            <HorizontalSlider preparedData={catalogueData} currentSubCategory={currentCategory} clickHandler={clickHandler}></HorizontalSlider>

        </div>

    )
}

