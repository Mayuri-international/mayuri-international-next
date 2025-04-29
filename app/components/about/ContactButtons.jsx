'use client'

import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactButtons() {

    return (

        <div className="mt-6 flex gap-4">
            <a
                href="tel:+919731734610"
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
                <FaPhoneAlt /> {process.env.NEXT_PUBLIC_COMPANY_PHONE_NO}
            </a>
            <a
                href="mailto:info@mayuriinternational.com"
                className="flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-3 rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition"
            >
                <FaEnvelope /> {process.env.NEXT_PUBLIC_COMPANY_EMAIL}
            </a>
        </div>
    )
}

