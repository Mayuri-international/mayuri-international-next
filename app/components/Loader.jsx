
"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f9f7f5] text-[#333]">
      {/* Company Logo or Icon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        className="mb-6"
      >
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="text-[#7c5c46]">
          <path d="M2 12h20M2 16h20M6 8h12M8 4h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* Loading Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="text-lg font-medium tracking-wider uppercase"
      >
        Loading your experience...
      </motion.div>
    </div>
  );
}

