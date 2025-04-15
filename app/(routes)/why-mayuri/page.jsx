
'use client'

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Leaf, Award, Users, Hammer } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "30+ Years of Expertise",
    icon: <Award className="h-8 w-8 text-primary" />,
    description:
      "A legacy of excellence in custom furniture manufacturing and design."
  },
  {
    title: "Custom-Built Furniture",
    icon: <Hammer className="h-8 w-8 text-primary" />,
    description:
      "Tailor-made furniture designed to meet every client's unique needs."
  },
  {
    title: "Eco-Friendly Materials",
    icon: <Leaf className="h-8 w-8 text-primary" />,
    description:
      "Committed to sustainability with environment-friendly raw materials."
  },
  {
    title: "Award-Winning Designs",
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    description:
      "Recognized for innovative, stylish, and functional design solutions."
  },
  {
    title: "Trusted by Leading Brands",
    icon: <Users className="h-8 w-8 text-primary" />,
    description:
      "Serving 1000+ businesses across hospitality, commercial & residential."
  }
];

const WhyMayuriSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose Mayuri International?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the values, craftsmanship, and excellence that set us apart in the furniture industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="rounded-2xl shadow-md hover:shadow-xl transition-all h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Ready to Experience Excellence?
          </h3>
          <a href="/products">
            <button className="bg-primary text-white px-6 py-3 rounded-full shadow hover:bg-primary/90 transition-all">
              Explore Our Products
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMayuriSection;

