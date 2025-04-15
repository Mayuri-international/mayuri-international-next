
'use client'

import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

import { useRouter } from "next/navigation";

import { navbarData } from "@/lib";

const FooterSection = () => {

    const router = useRouter();

    return (
        <footer className="bg-[#120008] w-screen text-white py-14">
            <div className=" mx-auto relative w-full px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/10 pb-10">

                    {/* Social Media + Contact */}
                    <div>
                        <h3 className="text-xl font-semibold mb-5 tracking-wide">Mayuri Social Media</h3>
                        <div className="flex space-x-4 mb-6">
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

                        <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
                        <p className="text-sm text-gray-300">Mobile: <a href="tel:+919731734610" className="hover:underline">+91 9731734610</a></p>
                        <p className="text-sm text-gray-300">Email: <a href="mailto:info@mayuriinternational.com" className="hover:underline">info@mayuriinternational.com</a></p>
                    </div>

                    {/* Empty Spacer (can use for logo or quote later) */}
                    <div className="hidden md:block"></div>

                    {/* Quick Links */}
                    <div className="md:col-span-1 md:text-right">
                        <h3 className="text-xl font-semibold mb-5 tracking-wide">Quick Links</h3>
                        <ul className="flex flex-col gap-3 text-sm text-gray-300">

                            {

                                navbarData.map((Items, index) => (


                                    <li className="hover:text-white transition" onClick={() => {

                                        router.push(Items.link)

                                    }}>{Items.title}</li>

                                ))
                            }
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="mt-6 text-center text-sm text-gray-400">
                    ©2024 <span className="font-medium text-white">Mayuri International</span>, All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;


