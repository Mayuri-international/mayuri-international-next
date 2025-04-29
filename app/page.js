
'use client'

import HomeSlider from "@/app/components/landing/HomeSlider"

import FurnitureManufacturerSection from "@/app/components/landing/FurnitureManufacturerSection";

import HorizontalSlider from "@/app/components/landing/HorizontalSlider";

import CompanyProfile from "@/app/components/landing/CompanyProfileSection";
import InfiniteSlider from "@/app/components/landing/InfiniteProductSlider";

import ProductSection from "@/app/components/landing/OurProductSection";
import FooterSection from "@/app/components/layout/Footer";

export default function LandingPage() {

    return (

        <div className="relative w-screen  no-scrollbar min-h-screen flex flex-col">

            <HomeSlider />

            <FurnitureManufacturerSection/>
        
            <CompanyProfile/>

            <ProductSection></ProductSection>

        </div>
    )

}

