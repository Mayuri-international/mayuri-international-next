import { useState } from "react";
import { Button } from "@/components/ui/button"; // Assuming you're using shadcn/ui or similar

export default function TagDetailedSection({ categoryName, desc2, tagNamedData }) {
  const [showAll, setShowAll] = useState(false);

  const displayedTags = showAll ? tagNamedData : tagNamedData.slice(0, 1);

  return (
    <section className="px-2 md:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-4">
        <h1 className="text-3xl text-start font-bold text-gray-800 mb-3">
          EXPLORE STYLISH {categoryName.toUpperCase()} COLLECTIONS
        </h1>
        <h2 className="text-2xl text-[#212529] text-start">
          Discover Mayuri International: Premier {categoryName} Manufacturers in Bangalore, India
        </h2>
      </div>

      <p className="text-gray-700 mx-auto mb-7 text-start">{desc2}</p>

      {/* Tag sections */}
      <div className="grid grid-cols-1 gap-8">
        {displayedTags.map((data, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{data.title}</h3>
            <p className="text-gray-600">{data.description}</p>
          </div>
        ))}
      </div>

      {/* View More / View Less Button */}
      {tagNamedData.length > 1 && (
        <div className="text-center mt-8">
          <Button onClick={() => setShowAll(!showAll)} className="px-6 py-2 text-lg text-white bg-[#490017] ">
            {showAll ? "View Less" : "View More"}
          </Button>
        </div>
      )}
    </section>
  );
}
