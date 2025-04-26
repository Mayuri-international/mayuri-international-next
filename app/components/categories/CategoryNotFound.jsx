'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const CategoryNotFound = () => {
  const router = useRouter();

  return (
    <section className="flex items-center justify-center h-[80vh] bg-gradient-to-br from-white via-gray-100 to-gray-200 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-xl bg-white shadow-lg rounded-2xl p-10 border border-gray-200"
      >
        <div className="text-6xl mb-4">🪑</div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Oops! Category Not Found
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          The furniture category you're looking for doesn’t exist or may have been moved.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => router.push('/')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            <ArrowLeft size={18} />
            Back to Home
          </button>

          <button
            onClick={() => router.push('/categories')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-black text-black rounded-full hover:bg-black hover:text-white transition"
          >
            Browse Categories
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default CategoryNotFound;
