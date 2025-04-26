import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Topbar() {
  return (
    <div className="w-full relative bg-[#F2F2F2] py-2 border-b border-[#E5E5E5]">
      <div className="relative mx-auto flex items-center justify-center px-5 text-[#7B3F00]">
        {/* Branding */}
        <p className="absolute left-5 text-xs font-bold whitespace-nowrap text-[#000000]">
          Your vision, Our Craftsmanship
        </p>

        {/* Contact Info (hidden before md) */}
        <div className="hidden md:flex flex-row gap-1 text-sm justify-center items-center">
          <div className="flex items-center gap-1 text-[#56172b] hover:text-[#9D2C50] transition-colors">
            <FaPhoneAlt className="text-xs" />
            <p className="whitespace-nowrap text-xs font-bold cursor-pointer">
              +91 9731734610 +91 9686056378
            </p>
          </div>

          <div className="px-2">|</div>

          <div className="flex items-center text-[#56172b] gap-1 hover:text-[#9D2C50] transition-colors">
            <IoMail className="text-sm " />
            <p className="whitespace-nowrap text-xs font-bold cursor-pointer">
              info@mayuriinternational.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
