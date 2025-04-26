import Image from "next/image";

export const CatalogueBox = ({ name, pdImage, pdfUrl }) => {
  // Fallback image in case the provided pdImage is broken or missing
  const validImage =
    pdImage?.startsWith("http")
      ? pdImage
      : "https://www.mayuriinternational.com/images/catalogue-icon/beroom-bliss.jpg";

  return (
    <a
      href={pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="relative m-4 gap-2 px-2 fade-in w-full h-96 overflow-hidden rounded-2xl shadow-lg transition-transform transform group-hover:scale-105">
        <Image
          src={validImage}
          alt={name || "Catalogue image"}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xl font-semibold py-4 px-6">
          {name}
        </div>
      </div>
    </a>
  );
};
