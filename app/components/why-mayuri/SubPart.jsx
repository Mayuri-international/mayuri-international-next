
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Leaf, Award, Users, Hammer, ShieldCheck, Truck, Lightbulb, Layers, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyMayuriSubPart() {

    const features = [
        {
            title: "30+ Years of Custom Furniture Expertise",
            icon: <Award className="h-8 w-8 text-primary" />,
            description:
                "With over three decades of industry-leading experience, Mayuri International is a trusted name in premium furniture manufacturing and design, delivering timeless craftsmanship to homes, hotels, and commercial spaces across India."
        },
        {
            title: "Tailor-Made Furniture for Every Space",
            icon: <Hammer className="h-8 w-8 text-primary" />,
            description:
                "Every furniture piece is customized to your exact needs — dimensions, colors, materials, and functionalities — ensuring the perfect fit for residential, hospitality, or office interiors."
        },
        {
            title: "Eco-Friendly & Sustainable Materials",
            icon: <Leaf className="h-8 w-8 text-primary" />,
            description:
                "Committed to a greener future, we use sustainable wood, eco-friendly laminates, water-based finishes, and recyclable materials in all our furniture manufacturing processes."
        },
        {
            title: "Award-Winning Furniture Designs",
            icon: <CheckCircle className="h-8 w-8 text-primary" />,
            description:
                "Recognized nationally for design innovation and functionality, our collections reflect modern trends while honoring timeless craftsmanship traditions."
        },
        {
            title: "Trusted by 1000+ Leading Brands & Institutions",
            icon: <Users className="h-8 w-8 text-primary" />,
            description:
                "From top hotel chains and educational institutions to luxury homeowners, Mayuri International proudly serves a wide clientele base, delivering reliability, quality, and bespoke solutions."
        },
        {
            title: "State-of-the-Art Manufacturing Infrastructure",
            icon: <Layers className="h-8 w-8 text-primary" />,
            description:
                "Our advanced manufacturing units in Bangalore leverage German CNC machinery, laser cutting technology, and automated polishing lines for unmatched precision and finish quality."
        },
        {
            title: "Premium Quality Assurance & Certifications",
            icon: <ShieldCheck className="h-8 w-8 text-primary" />,
            description:
                "We adhere to strict quality control checks at every production stage and ensure ISO-certified standards, guaranteeing furniture that's durable, ergonomic, and superior in build."
        },
        {
            title: "On-Time Delivery with Professional Installation",
            icon: <Truck className="h-8 w-8 text-primary" />,
            description:
                "Our expert logistics and installation teams ensure your custom furniture is delivered and set up safely, securely, and within committed timelines, no matter the project size."
        },
        {
            title: "Innovative Design Consultation Services",
            icon: <Lightbulb className="h-8 w-8 text-primary" />,
            description:
                "Collaborate directly with our in-house design experts to transform your vision into reality, whether you're furnishing luxury villas, cafes, hotels, or corporate offices."
        },
        {
            title: "Customer-Centric Support & Satisfaction Guarantee",
            icon: <ThumbsUp className="h-8 w-8 text-primary" />,
            description:
                "At Mayuri International, our journey doesn't end at delivery. We provide post-sales support, warranties, and maintenance tips to ensure lifelong satisfaction with our furniture."
        }
    ];

    return (

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

            {/* Section Heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                    Why Choose <span className="text-primary">Mayuri International</span> for Custom Furniture?
                </h1>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    Discover the legacy, innovation, and customer commitment that make Mayuri International the preferred choice for premium furniture solutions in Bangalore and across India.
                </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="rounded-2xl shadow-md hover:shadow-xl transition-all h-full">
                            <CardContent className="p-8 flex flex-col items-center text-center">
                                <div className="mb-5">{feature.icon}</div>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                                    {feature.title}
                                </h2>
                                <p className="text-base text-gray-600">{feature.description}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* CTA Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-20 text-center"
            >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Ready to Transform Your Space with Mayuri International?
                </h2>
                <a href="/" aria-label="View Mayuri International's Furniture Collections">
                    <button className="bg-primary text-black cursor-pointer px-8 py-4 rounded-full shadow hover:bg-primary/90 transition-all text-lg font-semibold">
                        Explore Our Collections
                    </button>
                </a>
            </motion.div>


        </div>
    )
}

