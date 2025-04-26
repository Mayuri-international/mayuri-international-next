'use client'

import { FaSlidersH, FaTruckMoving, FaThumbsUp, FaAward, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  { icon: <FaSlidersH size={50} />, title: "100%", desc: "Custom Furniture Manufacturing" },
  { icon: <FaTruckMoving size={50} />, title: "3000+", desc: "Delivered Projects Across India" },
  { icon: <FaThumbsUp size={50} />, title: "50K+", desc: "Satisfied Customers" },
  { icon: <FaAward size={50} />, title: "Lowest Price", desc: "Guarantee" },
  { icon: <FaHandshake size={50} />, title: "24 Months*", desc: "Warranty" },
];

const FeaturesSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-gray-100 to-white py-16 mt-3">
      <div className="max-w-11/12 mx-auto px-6 flex flex-wrap justify-center gap-5">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center bg-white p-8 rounded-3xl shadow-md w-60 hover:shadow-2xl transition-all group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.08 }}
          >
            <motion.div
              className="text-[#8b1c3c] mb-4"
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {feature.icon}
            </motion.div>
            <h3 className="font-bold text-2xl text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
