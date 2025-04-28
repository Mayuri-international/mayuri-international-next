'use client'

import { deliveredProjectsData } from "@/lib/data";
import { cleanAndLowercase, cleanAndLowercaseAddSpace } from "@/lib/utils";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

export default function SpecificSubProjectImages() {
    const { slug } = useParams();
    const router = useRouter();

    const projectCategory = deliveredProjectsData.find(
        (item) => cleanAndLowercase(item.name) === cleanAndLowercase(slug[0])
    );

    console.log("slug name is at sub project images  ",cleanAndLowercase(slug[1]))

    const subProject = projectCategory?.subProjects.find(
        (item) => cleanAndLowercase(item.projectName) === cleanAndLowercase(slug[1])
    );

    if (!subProject) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center text-xl font-semibold">
                Project not found!
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen p-6 bg-gray-100">

            {/* Back Button */}
            <div className="pt-1.5 flex items-center gap-4 px-6">
                <button
                    onClick={() => window.history.back()}
                    className="bg-gray-800 hover:bg-gray-700 transition text-white py-2 cursor-pointer px-5 rounded-lg shadow-md"
                >
                    ← Back
                </button>
            </div>

            {/* Heading */}
            <div className="mt-8 px-6 text-center">
                <h1 className="text-3xl font-bold text-gray-800 uppercase">
                    {slug && slug.length >= 2 && (
                        <>
                            {slug[0].replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} &gt;{" "}
                            {slug[1].replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                        </>
                    )}
                </h1>
            </div>

            {/* Image Gallery */}
            <div className="max-w-7xl mt-10 mx-auto columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
                {subProject.projectImage?.map((img, idx) => {
                    const correctedImage = img.includes('open?id=')
                        ? img.replace('open?id=', 'uc?export=view&id=')
                        : img;

                    const randomHeight = idx % 5 === 0
                        ? "h-[500px]"
                        : idx % 3 === 0
                            ? "h-[400px]"
                            : "h-[300px]";

                    return (
                        <div
                            key={idx}
                            className={`relative w-full ${randomHeight} overflow-hidden rounded-2xl shadow-md break-inside-avoid group`}
                        >
                            <Image
                                src={correctedImage}
                                alt={`Project Image ${idx + 1}`}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    );
                })}
            </div>

        </div>
    );
}
