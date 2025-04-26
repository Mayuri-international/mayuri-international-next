import Topbar from './components/layout/TopBar';
import MegaMenuNavbar from './components/layout/Navbar';
import ReactQueryProvider from './providers/ReactQueryProvider';
import { Toaster } from 'react-hot-toast';
import { ReduxProvider } from './provider';
import { fetchCategories } from '@/utils';
import "../styles/global.css";
import FooterSection from './components/layout/Footer';
import Initializer from './providers/Initializer';

export const metadata = {

  title: "Furniture Manufacturers in Bangalore | Mayuri International - Hotel, Office, and Custom Furniture",
  description:
    "Mayuri International, based in Bangalore, is a leading manufacturer of hotel furniture, office furniture, home furniture, metal and wooden furniture. Bulk orders, custom designs, and pan-India delivery. Call +91 9731734610 for B2B inquiries.",
  keywords: [
    "Furniture Manufacturers in Bangalore",
    "Hotel Furniture Bangalore",
    "Office Furniture Bangalore",
    "Bulk Furniture Suppliers India",
    "Home Furniture Manufacturers",
    "Custom Sofa Sets Bangalore",
    "Metal Furniture Manufacturers",
    "Educational Furniture Bangalore",
    "Outdoor Furniture Manufacturers",
    "Wooden Furniture Manufacturers Bangalore",
    "Luxury Hotel Furniture India",
    "Institutional Furniture Bangalore"
  ],
  openGraph: {
    title: "Furniture Manufacturers in Bangalore | Mayuri International",
    description:
      "Discover premium furniture solutions for hotels, offices, homes, and institutions. Mayuri International offers custom furniture manufacturing and bulk supply across India.",
    url: "https://www.mayuriinternational.com/",
    siteName: "Mayuri International",
    images: [
      {
        url: "https://www.mayuriinternational.com/images/slider-icon/hotel-furniture.jpg",
        width: 1200,
        height: 630,
        alt: "Mayuri International Hotel Furniture Bangalore",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Furniture Manufacturers in Bangalore | Mayuri International",
    description:
      "Top manufacturer of hotel, office, and home furniture in Bangalore. Bulk orders and custom designs available.",
    images: ["https://www.mayuriinternational.com/images/slider-icon/hotel-furniture.jpg"],
    site: "@mayuriinternational", // If you have a Twitter account; otherwise remove
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  verification: {
    google: "AfyRbgag-9PG3Zl14exK5QorfbnLq-xon5GcRqNHIcI",
    facebook: "c4r308uxf4jzk62inhf3exf3qrtpge",
  },
  icons: {
    icon: "/images/favicon.png", // make sure the path is correct
  },
};




export default async function RootLayout({ children }) {
  const categories = await fetchCategories();

  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased no-scrollbar">
        <Toaster position="top-center" />
        <ReduxProvider>
          <ReactQueryProvider>
            <Initializer categories={categories} />

            {/* Topbar: scrolls normally */}
            <Topbar />

            {/* ONLY MegaMenuNavbar sticky */}
            {/* <div className="sticky top-0 z-50 bg-white shadow-md"> */}
            <MegaMenuNavbar catgoriesData={categories} />
            {/* </div> */}

            {/* Content */}
            {children}

            <FooterSection />
          </ReactQueryProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
