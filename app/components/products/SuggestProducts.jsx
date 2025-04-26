'use client';

import { useEffect, useRef, useState } from "react";
import { useRouter, useParams } from "next/navigation";

import { fetchSuggestedProducts } from "@/lib/api";
import { cleanAndLowercaseAddSpace } from "@/lib/utils";

import Image from "next/image";

const SuggestedProducts = () => {
    const [products, setProductsData] = useState(null);
    const router = useRouter();
    const { slug } = useParams();
    const productCode = Array.isArray(slug) && slug.length > 2 ? slug[2] : null;

    const scrollContainerRef = useRef(null);
    const [selectedProductIndex, setSelectedProductIndex] = useState(null);

    const scrollToCenter = (index) => {
        const container = scrollContainerRef.current;
        const productCard = container.children[index];
        const containerWidth = container.offsetWidth;
        const cardWidth = productCard.offsetWidth;

        const scrollLeft =
            productCard.offsetLeft - containerWidth / 2 + cardWidth / 2;

        container.scrollTo({
            left: scrollLeft,
            behavior: "smooth",
        });

        setSelectedProductIndex(index);
    };

    useEffect(() => {
        if (!productCode) return;

        const fetchData = async () => {
            const data = await fetchSuggestedProducts({ code: productCode });
            setProductsData(data);
        };

        fetchData();
    }, [productCode]);

    return (
        <div className="mt-12 relative w-full">
            {products && products.length > 0 ? (
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Suggested Products
                </h2>
            ) : (
                <div>No Products exist</div>
            )}

            <div
                ref={scrollContainerRef}
                className="flex relative w-full flex-wrap gap-6 overflow-x-auto no-scrollbar justify-center"
            >
                {products &&
                    products.map((product, index) => (
                        <div
                            key={product._id}
                            className={`flex flex-col items-center justify-start flex-shrink-0 bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 cursor-pointer ${
                                selectedProductIndex === index
                                    ? "w-[400px] h-[500px] z-10 transform scale-105"
                                    : "w-[300px] h-[400px]"
                            }`}
                            onClick={() => scrollToCenter(index)}
                        >
                            {/* Image only */}
                            <div
                                className="relative w-full h-[75%]"
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent triggering scroll center
                                }}
                            >
                                <Image
                                    src={product.images?.[0] || "/placeholder.jpg"}
                                    alt={product.name}
                                    fill
                                    className="object-cover rounded-lg transition-transform duration-500 hover:scale-110"
                                />
                            </div>

                            {/* Text Area */}
                            <div
                                className="w-full h-[25%] p-3 flex flex-col items-center justify-center"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    const currentPath = window.location.pathname;
                                    const newPath = currentPath.replace(/\/[^/]+$/, `/${product.code}`);
                                    router.push(newPath);
                                }}
                            >
                                <h3 className="text-base font-semibold text-gray-800 capitalize text-center">
                                    {cleanAndLowercaseAddSpace(product.subCategory.name)}
                                </h3>
                                <p className="text-sm text-gray-500 mt-1 text-center">
                                    Code: {product.code}
                                </p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default SuggestedProducts;
