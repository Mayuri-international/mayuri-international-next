

import WhyMayuriSubPart from "@/app/components/why-mayuri/SubPart";

const features = [
  {
    title: "30+ Years of Custom Furniture Expertise",
    description:
      "With over three decades of industry-leading experience, Mayuri International is a trusted name in premium furniture manufacturing and design, delivering timeless craftsmanship to homes, hotels, and commercial spaces across India."
  },
  {
    title: "Tailor-Made Furniture for Every Space",
    description:
      "Every furniture piece is customized to your exact needs — dimensions, colors, materials, and functionalities — ensuring the perfect fit for residential, hospitality, or office interiors."
  },
  {
    title: "Eco-Friendly & Sustainable Materials",
    description:
      "Committed to a greener future, we use sustainable wood, eco-friendly laminates, water-based finishes, and recyclable materials in all our furniture manufacturing processes."
  },
  {
    title: "Award-Winning Furniture Designs",
    description:
      "Recognized nationally for design innovation and functionality, our collections reflect modern trends while honoring timeless craftsmanship traditions."
  },
  {
    title: "Trusted by 1000+ Leading Brands & Institutions",
    description:
      "From top hotel chains and educational institutions to luxury homeowners, Mayuri International proudly serves a wide clientele base, delivering reliability, quality, and bespoke solutions."
  },
  {
    title: "State-of-the-Art Manufacturing Infrastructure",
    description:
      "Our advanced manufacturing units in Bangalore leverage German CNC machinery, laser cutting technology, and automated polishing lines for unmatched precision and finish quality."
  },
  {
    title: "Premium Quality Assurance & Certifications",
    description:
      "We adhere to strict quality control checks at every production stage and ensure ISO-certified standards, guaranteeing furniture that's durable, ergonomic, and superior in build."
  },
  {
    title: "On-Time Delivery with Professional Installation",
    description:
      "Our expert logistics and installation teams ensure your custom furniture is delivered and set up safely, securely, and within committed timelines, no matter the project size."
  },
  {
    title: "Innovative Design Consultation Services",
    description:
      "Collaborate directly with our in-house design experts to transform your vision into reality, whether you're furnishing luxury villas, cafes, hotels, or corporate offices."
  },
  {
    title: "Customer-Centric Support & Satisfaction Guarantee",
    description:
      "At Mayuri International, our journey doesn't end at delivery. We provide post-sales support, warranties, and maintenance tips to ensure lifelong satisfaction with our furniture."
  }
];


const WhyMayuriSection = () => {
  return (
    <section className="py-20 bg-white">

      {/* SEO Hidden Text Section */}
      <section className="sr-only">
        <div>
          <h2>Discover Our Furniture Expertise</h2>
          {features.map((feature, index) => (
            <div key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <WhyMayuriSubPart />

    </section>
  );
};

export default WhyMayuriSection;


