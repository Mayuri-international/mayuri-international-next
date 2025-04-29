
'use client'

import SquareBox from "../../common/SquareBox";


import HorizontalSlider from "../../landing/HorizontalSlider";

import { specificCategoryDeliveredProjectsData } from "@/lib/data";

import { cleanAndLowercase,cleanAndLowercaseAddSpace } from "@/lib/utils";

export default function DeliveredProjects({currentCategory}) {

    const filteredData = specificCategoryDeliveredProjectsData.find((item)=>cleanAndLowercase(item.name) === cleanAndLowercase(currentCategory));

    const preparedData = filteredData.images.map((data)=>{

        return {
            name: cleanAndLowercaseAddSpace(currentCategory),
            image: data,
        }
    })

    return (

        <div className="relative w-full h-full">


            <h1 className="text-[#212529] font-extrabold text-3xl text-center uppercase">Delivered Home Furniture Collection on @ Mayuri</h1>

            {/* <div>

                {

                    images.map((data) => (

                        <SquareBox name={"adarsh"} image={data} />

                    ))
                }

            </div> */}

            <HorizontalSlider preparedData={preparedData} boxType="square"></HorizontalSlider>

        </div>
    )
}




