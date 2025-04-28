
'use client'

import { BsFileEarmarkPdf } from "react-icons/bs";
import { RiVideoLine } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";

import Image from "next/image";

import { FaArrowRight } from "react-icons/fa6";

import HorizontalScrollingWithoutArrow from "../common/HorizotalScrollingWithoutArrow";


const CompanyProfile = () => {

   function pdfClickHandler() {

    window.open("https://www.mayuriinternational.com/images/pdf/porfile.pdf", "_blank");


  }

  function videoClickHandler() {

    window.open("https://www.youtube.com/watch?v=cER_icbi-Nk&feature=youtu.be", "_blank");

  }

  function getLocationClickHandler() {

    window.open("https://www.google.com/maps/place/3PF3%2BMFX,+Kammasandra+-+Augusta+Link+Rd,+Bengaluru,+Karnataka+562149/@13.074166,77.7036684,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae1a8620102009:0x23daeecd240aa227!8m2!3d13.074166!4d77.7036684!16s%2Fg%2F11q3stzg0m?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D", "_blank");

  }

  return (
    <div className="relative w-full px-4 lg:px-20 py-12 bg-[#f5f5f5]">
      {/* Top Section */}
      <div className="flex flex-col relative w-full lg:flex-row justify-between items-start gap-10">
        {/* Left - Diamond Image */}
        <div className="relative w-full flex justify-center lg:max-w-[40%]">
          <div className="transform relative mix-blend-multiply rotate-45 overflow-hidden w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
            <Image
              src="https://www.mayuriinternational.com/images/video-icon.png"
              alt="company"
              fill
              className="w-full h-full object-contain transform -rotate-45"
            />
          </div>
        </div>

        {/* Right - Text Info */}
        <div className="w-full lg:w-[60%] ">
          {/* Title & Profile Button */}
          <div className="relative w-full">

            <div className="flex flex-col relative w-full gap-3 md:gap-0 md:flex-row md:justify-between md:items-center border-b border-b-gray-300">

              <div className="flex flex-col">

                <p className="text-black text-base text-start font-semibold">Welcome to</p>
                <h2 className="text-3xl text-start font-medium text-[#212529] mb-3">
                  Mayuri International
                </h2>

              </div>


              {/* Profile Button */}
              <div className="flex items-center gap-4 bg-[#A52A59] text-white px-6 py-3 rounded-full w-fit shadow-md mb-6 md:mb-0">
                <div className="flex items-center gap-2">
                  <p className="uppercase text-xs md:text-[15px] font-medium tracking-wide">
                    Company Profile
                  </p>
                  <BsFileEarmarkPdf size={25} className="cursor-pointer" onClick={pdfClickHandler}/>
                </div>
                <RiVideoLine size={25} className="cursor-pointer" onClick={videoClickHandler}/>
              </div>

            </div>

          </div>

          {/* center part  */}

          <div className="flex flex-col md:flex-row relative w-full border-b border-b-gray-300">

            {/* Description */}


            <div className="text-black text-sm pb-7 pr-10 pt-1.5 relative w-full md:w-[60%] leading-relaxed border-r border-r-gray-200">
              <p className="relative w-full text-wrap">
                Mayuri International, based in Bangalore, is a Leading{" "}
                <strong>Furniture Manufacturer</strong> specializing in crafting
                exquisite and versatile pieces for every space. From luxurious{" "}
                <strong>Hotel Furniture</strong> and <strong>Home Furniture</strong> to durable{" "}
                <strong>Outdoor Furniture</strong> and <strong>Office Furniture</strong>{" "}
                solutions, we provide tailor-made, <strong>Loose Furniture</strong> with
                nationwide delivery on order basis, ensuring impeccable style and
                functionality for diverse settings.
              </p>

              <div className="flex justify-end items-end">

                <p
                  href="#"
                  className="inline-block mt-3 text-[#A52A59]  cursor-pointer font-medium text-end hover:underline"
                >
                  Know more about Mayuri International →
                </p>

              </div>

            </div>

            <div className="flex flex-col w-full md:w-[40%] relative justify-center items-center gap-4">

              {/* Location Button */}
              <div className="shadow flex items-center gap-2 relative w-fit h-fit p-3 px-5 cursor-pointer rounded-full bg-[#d9d9d9] hover:bg-[#750C2B] group" onClick={getLocationClickHandler}>
                <FaMapMarkerAlt className="text-black text-lg relative group-hover:text-white" />
                <span className="text-black font-medium text-md group-hover:text-white">
                  Get Location
                </span>

                <FaArrowRight className="text-black group-hover:text-white"></FaArrowRight>

              </div>

              {/* Address */}
              <div className="text-black mt-1 text-sm leading-snug">
                <h4 className="font-bold uppercase mb-3 text-center text-black">BENGALURU</h4>
                <p className="text-black text-[15px] font-medium text-center">
                  Kada Agrahara Village,
                  <br />
                  Bidarahalli Hobli,
                  <br />
                  Doddagubbi Post,
                  <br />
                  Karnataka 560077
                </p>
              </div>

            </div>


          </div>

          <div className="py-3 flex flex-col gap-4 relative w-full">

            <h1 className="text-md text-black uppercase relative w-full">Delivered Projects : -</h1>

            <HorizontalScrollingWithoutArrow></HorizontalScrollingWithoutArrow>

          </div>

        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;

