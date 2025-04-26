'use client'

import { Ban } from "lucide-react";
import { motion } from "framer-motion";

export default function NoCatalogueDataFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center  mt-9 justify-center h-72 text-center bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-md mx-auto p-6 max-w-4xl"
    >
      <div className="bg-red-100 p-4 rounded-full mb-4 shadow-sm">
        <Ban className="w-8 h-8 text-red-500" />
      </div>
      <h2 className="text-xl font-semibold text-gray-800">No Catalogue Data Found</h2>
      <p className="text-sm text-gray-500 mt-2">
        Looks like this section is empty for now. Try exploring a different category.
      </p>
      <button
        onClick={() => window.location.href = '/'}
        className="mt-6 px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-xl text-sm font-medium transition"
      >
        Go to Homepage
      </button>
    </motion.div>
  );
}
