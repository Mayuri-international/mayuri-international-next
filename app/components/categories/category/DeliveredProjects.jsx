
'use client'

import SquareBox from "../../common/SquareBox";


import HorizontalSlider from "../../landing/HorizontalSlider";

export default function DeliveredProjects() {

    const images = [
        { name: "Home Furniture", image: "https://mayuriinternational.com/images/home-furniture-gallery/sofa-set-1.jpg" },
        { name: "Home Furniture", image: "https://mayuriinternational.com/images/home-furniture-gallery/sofa-set-2.jpg" },
        { name: "Home Furniture", image: "https://mayuriinternational.com/images/home-furniture-gallery/sofa-set-3.jpg" },
        { name: "Home Furniture", image: "https://mayuriinternational.com/images/home-furniture-gallery/sofa-set-4.jpg" },
        { name: "Home Furniture", image: "https://mayuriinternational.com/images/home-furniture-gallery/sofa-set-5.jpg" },
        { name: "Home Furniture", image: "https://mayuriinternational.com/images/home-furniture-gallery/sofa-set-6.jpg" },
        { name: "Home Furniture", image: "https://mayuriinternational.com/images/home-furniture-gallery/sofa-set-7.jpg" },
        { name: "Home Furniture", image: "https://mayuriinternational.com/images/home-furniture-gallery/sofa-set-8.jpg" },
        { name: "Home Furniture", image: "https://mayuriinternational.com/images/home-furniture-gallery/sofa-set-9.jpg" },
        { name: "Home Furniture", image: "https://mayuriinternational.com/images/home-furniture-gallery/sofa-set-10.jpg" },
        { name: "Home Furniture", image: "https://mayuriinternational.com/images/home-furniture-gallery/sofa-set-11.jpg" },
        { name: "Home Furniture", image: "https://mayuriinternational.com/images/home-furniture-gallery/sofa-set-12.jpg" },
        { name: "Home Furniture", image: "https://mayuriinternational.com/images/home-furniture-gallery/sofa-set-13.jpg" },
        { name: "Home Furniture", image: "https://mayuriinternational.com/images/home-furniture-gallery/sofa-set-14.jpg" },
        { name: "Home Furniture", image: "https://mayuriinternational.com/images/home-furniture-gallery/sofa-set-15.jpg" }
    ];


    console.log("images are ", images);


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

            <HorizontalSlider preparedData={images} boxType="square"></HorizontalSlider>

        </div>
    )
}




