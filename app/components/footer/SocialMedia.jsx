'use client'
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
export default function SocialMedia() {

    return (

        <div>
            <h3 className="text-xl font-bold uppercase text-white mb-3">Follow Us</h3>
            <div className="flex space-x-4">
                <a href="https://www.facebook.com/mayuriInternationalfurnitures" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all duration-300">
                    <FaFacebookF className="text-lg" />
                </a>
                <a href="https://www.instagram.com/mayuriinternational/" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all duration-300">
                    <FaInstagram className="text-lg" />
                </a>
                <a href="https://www.youtube.com/channel/UC-mulr98cjwzNRvavWew8Ww" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all duration-300">
                    <FaYoutube className="text-lg" />
                </a>
                <a href="https://www.linkedin.com/company/mayuri-international" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all duration-300">
                    <FaLinkedinIn className="text-lg" />
                </a>
            </div>
        </div>

    )
}


