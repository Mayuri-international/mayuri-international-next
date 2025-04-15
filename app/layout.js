// app/layout.jsx

'use client'

import Topbar from './components/layout/TopBar';

import MegaMenuNavbar from './components/layout/Navbar';

import ReactQueryProvider from './providers/ReactQueryProvider';
import Image from 'next/image';
import { Toaster } from 'react-hot-toast'; // ✅ fixed import

import { BrowserRouter } from 'react-router-dom';

import "../styles/global.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Toaster position="top-right" /> {/* ✅ Correct usage */}
        <ReactQueryProvider>
          <Topbar />
          {/* <div className="flex w-screen mt-6 justify-center items-center">
            <Image
              src="http://www.jodhpurwoodcraft.com/images/logo.svg"
              alt="Jodhpur WoodCraft Logo"
              width={100}
              height={60}
              priority
            />
          </div> */}
          <MegaMenuNavbar />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
