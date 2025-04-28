

import { ScrollArea, ScrollBar } from "../../../components/ui/scroll-area";

import Image from "next/image";

import { deliveredProjectsData } from "@/lib/data";

import { useRouter } from "next/navigation";

import { cleanAndLowercaseAddDash } from "@/lib/utils";

export default function HorizontalScrollingWithoutArrow() {

    const router = useRouter();

    function deliveredProjectsClickHandler(name) {

        router.push(`/delivered-projects/${cleanAndLowercaseAddDash(name)}`);

    }

    return (

        <ScrollArea className="relative w-full  whitespace-nowrap rounded-md border border-gray-200">
            <div className="flex w-full space-x-4 p-4">
                {deliveredProjectsData.map((data) => (
                    <figure key={data.name} className="shrink-0" onClick={()=>deliveredProjectsClickHandler(data.name)}>
                        <div className="overflow-hidden rounded-md cursor-pointer">
                            <Image
                                src={data.image}
                                alt={`Photo by ${data.name}`}
                                className="aspect-[3/2] h-fit w-fit object-cover cursor-pointer"
                                width={300}
                                height={200}
                            />
                        </div>
                        <figcaption className="pt-2 text-xs text-muted-foreground cursor-pointer">
                            Photo by{" "}
                            <span className="font-semibold text-foreground">
                                {data.name}
                            </span>
                        </figcaption>
                    </figure>
                ))}
            </div>
            <ScrollBar orientation="horizontal" className="" />
        </ScrollArea>
    )

}


