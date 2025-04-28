

import ContactButtons from "@/app/components/about/ContactButtons";

const AboutUs = () => {

    const aboutSections = [
        {
            title: "Craftsmanship",
            description:
                "At Mayuri International, we take pride in our unparalleled craftsmanship, blending traditional techniques with modern innovation to create furniture of exceptional quality.",
        },
        {
            title: "Dining Delight",
            description:
                "Experience the joy of dining with our Dining Delight collection. Designed to elevate your dining experience, our range of dining tables, chairs, and sideboards combine functionality with exquisite design. Whether hosting intimate dinners or grand gatherings, our dining furniture sets the perfect stage for memorable moments with family and friends.",
        },
        {
            title: "Innovation",
            description:
                "We are committed to pushing the boundaries of furniture design, constantly innovating to bring fresh and creative concepts to life in our products.",
        },
        {
            title: "Quality",
            description:
                "Quality is the cornerstone of our brand. From the materials we source to the finishes we apply, we ensure that every piece of furniture meets the highest standards of durability and excellence.",
        },
        {
            title: "Variety",
            description:
                "Our extensive range of furniture caters to diverse tastes and preferences. Whether you're furnishing a home, hotel, educational institution, cafe, or outdoor space, we have the perfect solution for you.",
        },
        {
            title: "Personalized Service",
            description:
                "We believe in providing personalized service to our customers, guiding them through every step of the furniture selection process to ensure their needs are met with precision and care.",
        },
        {
            title: "Reliability",
            description:
                "With years of experience in the industry, Mayuri International has earned a reputation for reliability and trustworthiness. Customers can rely on us to deliver top-notch furniture solutions on time and within budget.",
        },
        {
            title: "Sustainability",
            description:
                "We are committed to sustainability and environmental responsibility. Our manufacturing processes prioritize eco-friendly practices, ensuring that our furniture is as sustainable as possible.",
        },
    ];


    return (
        <section className="bg-white text-gray-800 py-16 px-6 md:px-16">
            <div className="max-w-full mx-auto grid md:grid-cols-2 items-center gap-10">

                {/* Left Section */}
                <div data-aos="fade-right flex">
                    <h2 className="text-4xl font-bold leading-tight text-gray-900">
                        Discover <span className="text-blue-600">Mayuri International</span>:
                        <br /> Premier Furniture Manufacturer
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                        Mayuri International is one of the leading home furniture manufacturers in Bangalore, India.
                        We are committed to excellence in craftsmanship and creative design, offering a wide selection of
                        furniture pieces including beds, dining tables, wardrobes, and more.
                    </p>

                    {/* Contact Buttons */}

                    <ContactButtons />


                </div>

                {/* Right Section - Image */}
                <div className="relative">
                    <img
                        src="https://www.mayuriinternational.com/images/about.png"
                        alt="Customer interaction"
                        className="rounded-xl shadow-lg"
                        data-aos="fade-left"
                    />
                </div>
            </div>

            {/* Additional Sections */}
            <div className="mt-12 max-w-full mx-auto">
                <h3 className="text-2xl font-semibold text-gray-900">Why Choose Us?</h3>
                <p className="mt-2 text-gray-600">
                    We blend **traditional techniques** with **modern innovation** to craft high-quality, durable, and aesthetically
                    pleasing furniture tailored to suit every space.
                </p>
                <div className="max-w-full mx-auto mt-10 grid md:grid-cols-2 gap-8">
                    {aboutSections.map((section, index) => (
                        <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                            <p className="mt-2 text-gray-600">{section.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
