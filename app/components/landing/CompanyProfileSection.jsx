
'use client'

import { BsFileEarmarkPdf } from "react-icons/bs";
import { RiVideoLine } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";

import Image from "next/image";

const CompanyProfile = () => {

  return (
    <div className="bg-[#F5F5F5] w-full px-4 lg:px-20 py-12">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Left - Diamond Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="transform rotate-45 overflow-hidden shadow-lg w-[320px] h-[320px] lg:w-[400px] lg:h-[400px]">

            <Image
              src="https://www.mayuriinternational.com/images/video-icon.png"
              alt="company"
              fill
              className="w-full h-full object-cover transform -rotate-45"
            />

          </div>

        </div>

        {/* Right - Text Info */}
        <div className="w-full lg:w-1/2 space-y-5">
          {/* Title & Profile Button */}
          <div>
            <p className="text-gray-700 text-base font-medium">Welcome to</p>
            <h2 className="text-3xl font-bold text-[#212529] mb-3">
              Mayuri International
            </h2>

            {/* Profile Button */}
            <div className="flex items-center gap-4 bg-[#A52A59] text-white px-6 py-3 rounded-full w-fit shadow-md">
              <div className="flex items-center gap-2">
                <p className="uppercase text-sm font-semibold tracking-wide">
                  Company Profile
                </p>
                <BsFileEarmarkPdf className="text-lg" />
              </div>
              <RiVideoLine className="text-xl" />
            </div>
          </div>

          {/* Description */}
          <div className="text-gray-700 text-sm leading-relaxed">
            <p>
              Mayuri International, based in Bangalore, is a Leading{" "}
              <strong>Furniture Manufacturer</strong> specializing in crafting
              exquisite and versatile pieces for every space. From luxurious{" "}
              <strong>Hotel Furniture</strong> and <strong>Home Furniture</strong> to durable{" "}
              <strong>Outdoor Furniture</strong> and <strong>Office Furniture</strong>{" "}
              solutions, we provide tailor-made, <strong>Loose Furniture</strong> with
              nationwide delivery on order basis, ensuring impeccable style and
              functionality for diverse settings.
            </p>
            <a
              href="#"
              className="inline-block mt-3 text-[#A52A59] font-medium hover:underline"
            >
              Know more about Mayuri International →
            </a>
          </div>

          {/* Location Button */}
          <div className="bg-white w-fit px-5 py-3 rounded-xl shadow flex items-center gap-2 mt-4">
            <FaMapMarkerAlt className="text-[#A52A59] text-lg" />
            <span className="text-[#212529] font-semibold text-sm">
              Get Location
            </span>
          </div>

          {/* Address */}
          <div className="text-gray-800 mt-1 text-sm leading-snug">
            <h4 className="font-bold uppercase mb-1">BENGALURU</h4>
            <p>
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
    </div>
  );
};

export default CompanyProfile;

