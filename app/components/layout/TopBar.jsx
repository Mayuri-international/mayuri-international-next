import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Topbar() {
  return (
    <div className="w-full relative bg-[#F9F7F3] py-2 border-b border-[#E5E5E5]">
      <div className="relative mx-auto flex flex-col md:flex-row justify-between items-center px-5 text-[#7B3F00] gap-2 md:gap-8">
        
        {/* Branding */}
        <p className="text-sm md:text-base font-bold whitespace-nowrap hover:text-[#B84E55] transition-colors">
          Jodhpur Woodcraft By Mayuri International
        </p>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-sm items-center">
          <div className="flex items-center gap-2 hover:text-[#B84E55] transition-colors">
            <FaPhoneAlt className="text-base" />
            <p className="whitespace-nowrap">+91 9731734610 | +91 9686056378</p>
          </div>

          <div className="flex items-center gap-2 hover:text-[#B84E55] transition-colors">
            <IoMail className="text-base" />
            <p className="whitespace-nowrap">info@mayuriinternational.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

