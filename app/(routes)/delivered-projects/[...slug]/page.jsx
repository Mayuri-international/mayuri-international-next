'use client'

import { useParams } from "next/navigation";
import { deliveredProjectsData } from "@/lib/data";
import { cleanAndLowercase, cleanAndLowercaseAddDash } from "@/lib/utils";
import Image from "next/image";

import SpecificSubProjectImages from "@/app/components/delivered-projects/SubProjectSection";

import { useRouter } from "next/navigation";

import FeaturesSection from "@/app/components/common/FeaturesSection";

export default function DeliveredProjects() {
    const { slug } = useParams();
    const router = useRouter();

    const projectCategory = slug[0];

    const subProject = slug[1];

    const filteredData = deliveredProjectsData.filter(
        item => cleanAndLowercase(item.name) === cleanAndLowercase(slug[0])
    );

    if (!filteredData.length) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center text-xl font-semibold">
                No project found!
            </div>
        );
    }

    const project = filteredData[0];

    if (projectCategory && !subProject) {

        return (
            <div className="w-full relative min-h-screen p-6 bg-gray-100">
                {/* Top Section - Main Project */}
                {/* Top Section - Main Project */}
                <div className="w-[90%] mx-auto text-center mb-14">
                    <h1 className="text-4xl font-bold mb-6 text-gray-800">{project.name}</h1>
                    {project.image && (
                        <div className="relative w-full h-[400px] mx-auto rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src={project.image}
                                alt={project.name}
                                fill
                                className="object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    )}
                </div>


                {/* Sub Projects Section */}
                <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {project.subProjects.map((sub, index) => {
                        const randomImage =
                            sub.projectImage && sub.projectImage.length > 0
                                ? sub.projectImage[Math.floor(Math.random() * sub.projectImage.length)]
                                : null;

                        const correctedImage = randomImage
                            ? randomImage.includes('open?id=')
                                ? randomImage.replace('open?id=', 'uc?export=view&id=')
                                : randomImage
                            : null;

                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-5 flex flex-col justify-between group cursor-pointer"

                                onClick={() => {

                                    router.push(`/delivered-projects/${cleanAndLowercaseAddDash(projectCategory)}/${cleanAndLowercaseAddDash(sub.projectName).replaceAll(",", "")}`)
                                }}
                            >
                                <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center cursor-pointer uppercase">{sub.projectName}</h2>

                                {correctedImage && (
                                    <div className="relative w-full h-56 rounded-lg overflow-hidden">
                                        <Image
                                            src={correctedImage}
                                            alt={sub.projectName}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <FeaturesSection></FeaturesSection>

            </div>
        );

    }

    if (projectCategory && subProject) {

        return (

            <div className="flex flex-col gap-3">

                <SpecificSubProjectImages />
                <FeaturesSection></FeaturesSection>

            </div>

        )
    }

}
