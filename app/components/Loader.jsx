"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react"; // Using premium loader icon

export default function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f9f7f5] text-[#4a3d35]">
      
      {/* Animated Elegant Loader */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
        className="mb-8"
      >
        <Loader2 size={64} className="text-[#7c5c46] animate-spin" />
      </motion.div>

      {/* Stylish Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
        className="text-xl font-semibold tracking-wide uppercase text-center px-6"
      >
        Preparing your premium furniture experience...
      </motion.div>

      {/* Sub Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
        className="mt-2 text-sm text-gray-500"
      >
        One moment, styling elegance just for you.
      </motion.div>
    </div>
  );
}
