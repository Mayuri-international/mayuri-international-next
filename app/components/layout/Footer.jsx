import SocialMedia from "../footer/SocialMedia";
import { navbarData } from "@/lib";
import LinkDisplay from "../footer/LinkDisplay";
import Head from "next/head"; // Add Head if using Next.js

const FooterSection = () => {
  return (
    <>
      <footer className="bg-[#120008] text-white w-full py-14 font-sans" aria-labelledby="footer-heading">
        <div className="max-w-11/12 mx-auto">
          <div className="text-center relative w-full lg:text-left mx-auto px-6 sm:px-10">

            {/* Footer Branding */}
            <div className="mb-6">
              <h2 id="footer-heading" className="text-3xl sm:text-4xl font-extrabold tracking-wide uppercase text-white mb-2">
                Mayuri International
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 font-light">
                Premium Furniture Manufacturer & Exportera
              </p>
            </div>

            {/* Grid Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-10">

              {/* Address */}
              <section aria-labelledby="address-heading" className="text-sm text-gray-300 space-y-0.5">
                <h3 id="address-heading" className="text-xl font-bold uppercase text-white mb-4">
                  Address
                </h3>
                <address className="not-italic">
                  <p>Survey No.34</p>
                  <p>Kada Agrahara Village</p>
                  <p>Bidarahalli Hobli Doddagubbi Post</p>
                  <p>Bengaluru East Taluk</p>
                  <p>Bengaluru 560077</p>
                </address>
              </section>

              {/* Quick Links */}
              <nav aria-labelledby="quick-links-heading">
                <h3 id="quick-links-heading" className="text-xl font-bold uppercase text-white mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  {navbarData.map((item, index) => (
                    <LinkDisplay item={item} index={index} key={index} />
                  ))}
                </ul>
              </nav>

              {/* Contact Info */}
              <section aria-labelledby="contact-heading" className="text-sm text-gray-300 space-y-3">
                <h3 id="contact-heading" className="text-xl font-bold uppercase text-white mb-4">
                  Contact Us
                </h3>
                <p>
                  Phone:{" "}
                  <a href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE_NO}`} className="hover:underline">
                    {process.env.NEXT_PUBLIC_COMPANY_PHONE_NO}
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a href={`mailto:${process.env.NEXT_PUBLIC_COMPANY_EMAIL}`} className="hover:underline">
                    {process.env.NEXT_PUBLIC_COMPANY_EMAIL}
                  </a>
                </p>

                <p>Working Hours: Mon - Sat (9am to 6pm)</p>
              </section>

              {/* Socials & Subscribe */}
              <section aria-labelledby="social-heading" className="space-y-6">
                <h3 id="social-heading" className="sr-only">
                  Social Media and Subscription
                </h3>
                <SocialMedia />

                {/* Subscribe Form */}
                <div>
                  <h4 className="text-xl font-bold uppercase text-white mb-3">Subscribe</h4>
                  <p className="text-sm text-gray-300 mb-2">Get latest updates, offers & designs</p>
                  <form className="flex items-center space-x-2" aria-label="Subscribe to our newsletter">
                    <input
                      type="email"
                      placeholder="Your email"
                      aria-label="Email address"
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
              </section>

            </div>

            {/* Bottom Strip */}
            <div className="text-center text-sm text-gray-400 mt-10 border-t border-white/10 pt-4">
              © 2024 <span className="text-white font-medium">Mayuri International</span> — All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* JSON-LD Structured Data */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FurnitureStore",
              "name": "Mayuri International",
              "description": "Premium Furniture Manufacturer & Exporter",
              "url": "https://www.mayuri.info",
              "telephone": "+91 97317 34610",
              "email": "hi@mayuri.info",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Survey No.34, Kada Agrahara Village, Bidarahalli Hobli Doddagubbi Post",
                "addressLocality": "Bengaluru East Taluk",
                "addressRegion": "Karnataka",
                "postalCode": "560077",
                "addressCountry": "IN"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              }
            })
          }}
        />
      </Head>
    </>
  );
};

export default FooterSection;
