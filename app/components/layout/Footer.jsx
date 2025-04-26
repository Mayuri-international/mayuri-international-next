'use client'

import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { navbarData } from "@/lib";

const FooterSection = () => {
    const router = useRouter();

    return (
        <footer className="bg-[#120008] text-white w-full py-14 font-sans">
            <div className="max-w-11/12 mx-auto">

                <div className="text-center relative w-full lg:text-left mx-auto px-6 sm:px-10">
                    {/* Brand Header */}
                    <div className="mb-6">
                        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wide uppercase text-white mb-2">Mayuri International</h1>
                        <h2 className="text-lg sm:text-xl text-gray-300 font-light">Premium Furniture Manufacturer & Exporter</h2>
                    </div>

                    {/* Grid Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-10">
                        {/* Address */}
                        <div className="text-sm text-gray-300 space-y-3">
                            <h3 className="text-xl font-bold uppercase text-white mb-4">Address</h3>
                            <p>No. 44/1, 1st Main Road, Industrial Area,</p>
                            <p>Yeshwanthpur, Bangalore – 560022, India</p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-xl font-bold uppercase text-white mb-4">Quick Links</h3>
                            <ul className="space-y-2 text-sm text-gray-300">
                                {navbarData.map((item, index) => (
                                    <li
                                        key={index}
                                        className="hover:text-white cursor-pointer transition"
                                        onClick={() => router.push(`/${item.link}`)}
                                    >
                                        {item.title}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="text-sm text-gray-300 space-y-3">
                            <h3 className="text-xl font-bold uppercase text-white mb-4">Contact Us</h3>
                            <p>Phone: <a href="tel:+919731734610" className="hover:underline">+91 97317 34610</a></p>
                            <p>Email: <a href="mailto:hi@mayuri.info" className="hover:underline">hi@mayuri.info</a></p>
                            <p>Working Hours: Mon - Sat (9am to 6pm)</p>
                        </div>

                        {/* Socials + Subscribe */}
                        <div className="space-y-6">
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

                            <div>
                                <h3 className="text-xl font-bold uppercase text-white mb-3">Subscribe</h3>
                                <p className="text-sm text-gray-300 mb-2">Get latest updates, offers & designs</p>
                                <form className="flex items-center space-x-2">
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        className="w-full px-3 py-2 bg-white/10 border border-white/20 text-sm text-white rounded-md placeholder:text-gray-300 focus:outline-none"
                                    />
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Strip */}
                    <div className="text-center text-sm text-gray-400 mt-10 border-t border-white/10 pt-4">
                        © 2024 <span className="text-white font-medium">Mayuri International</span> — All Rights Reserved.
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default FooterSection;
