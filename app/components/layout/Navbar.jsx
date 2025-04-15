
'use client'

import React, { useState } from "react";

import { IoIosArrowUp } from "react-icons/io";

import { IoIosArrowDown } from "react-icons/io";

import { MdOutlineSegment } from "react-icons/md";

import { fetchCategories } from "@/lib/api";

import { useQueries } from "@tanstack/react-query";

import { useRouter } from "next/navigation";

import { RxCrossCircled } from "react-icons/rx";


import Link from "next/link";

import Image from "next/image";

import { IoVideocamOutline } from "react-icons/io5";

import { Sheet, SheetDescription, SheetTrigger, SheetContent } from "@/components/ui/sheet";


const MegaMenuNavbar = () => {

    const [activeMenu, setActiveMenu] = useState(null);

    const [isThreeDotsClicked, setIsThreeDotsClicked] = useState(false);

    const [groupedCategories, setGroupedCategories] = useState(null);

    const [expandedMenus, setExpandedMenus] = useState({});
    const toggleMenu = (name) => {
        setExpandedMenus((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };

    const router = useRouter();

    const results = useQueries({
        queries: [
            {
                queryKey: ["categories"],
                queryFn: fetchCategories,
                staleTime: 1000 * 60 * 5,
                refetchInterval: 1000 * 60 * 5,
            },
        ],
    });

    const [categoriesQuery] = results;
    const isLoading = categoriesQuery.isLoading;
    const isError = categoriesQuery.isError;

    if (isError) {

        toast.error(categoriesQuery.error?.message || "Failed to load data.");
        return (
            <div className="flex justify-center items-center min-h-screen text-lg font-medium text-red-600">
                Failed to load data.
            </div>
        );
    }

    if (isLoading) {

        return (
            <div className="flex justify-center items-center min-h-screen text-lg font-medium text-red-600">
                Loading...
            </div>
        );
    }

    const catgoriesData = categoriesQuery.data || [];

    console.log("catgories data is in navbar  ", catgoriesData);



    function mouseEnterHandler(categoryName) {
        setActiveMenu(categoryName);

        const filteredCategory = catgoriesData.find(
            (category) => category.name === categoryName
        );

        if (!filteredCategory) return;

        console.log("mouse enter handler ke andar ", filteredCategory);

        const mappedTaggedSubCategories = filteredCategory.tagsIncluded.map((tag) => {
            const filteredGroup = filteredCategory.subCategories.filter((subCategory) =>
                subCategory.tagsIncluded.includes(tag._id)
            );

            return {
                tagName: tag.tagName,
                subCategories: filteredGroup,
            };
        });

        console.log("mappedTagSubCategries ", mappedTaggedSubCategories);

        setGroupedCategories(mappedTaggedSubCategories);
    }




    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">

            {/* this is for desktop  */}


            <div
                className="w-screen mx-auto px-6 hidden  xl:block"
                onMouseLeave={() => setActiveMenu(null)}
            >

                <div className=" flex justify-between items-center">

                    {/* Menu Labels */}


                    <Image

                        className="cursor-pointer"
                        src="https://www.mayuriinternational.com/images/logo.png"
                        width={180}
                        height={100}

                    >

                    </Image>

                    <ul className="flex justify-between max-w-7xl space-x-4 text-sm font-medium text-gray-700 items-center">


                        {catgoriesData && catgoriesData.map((item, idx) => (

                            <li
                                key={idx}
                                className="relative py-4 cursor-pointer flex gap-1 justify-center items-center"
                                onMouseEnter={() => mouseEnterHandler(item.name)}
                            >

                                <p className="text-md font-semibold" onClick={() => {

                                    router.push(`/categories/${item.name}`);

                                }}>{item.name}</p>

                            </li>
                        ))}


                    </ul>

                    <div className="hidden md:flex justify-center px-4 py-2 cursor-pointer capitalize rounded-full items-center font-light gap-2 bg-[#933552] text-white text-base hover:text-primary hover:text-white transition" onClick={() => {

                        window.location.href = "https://www.youtube.com/channel/UC-mulr98cjwzNRvavWew8Ww";

                    }}>
                        <IoVideocamOutline className="text-xl" size={30} />
                        <span>Furniture Videos</span>

                    </div>

                </div>



                {/* Mega Menu Panel */}

                <div
                    className={`absolute top-[100%] w-screen right-0 left-0 max-w-[100%] max-h-[500px] overflow-y-scroll bg-[#F2F2F2] border border-gray-200 shadow-xl grid grid-cols-5 gap-6 p-6 z-40 transition-all duration-300 ease-in-out
                    ${activeMenu ? "opacity-100 visible translate-y-0 scale-100" : "opacity-0 invisible -translate-y-2 scale-95 pointer-events-none"}`}

                >


                    {
                        groupedCategories && groupedCategories.map((group, index) => (

                            <div key={index} className="">

                                <h3 className="text-sm font-semibold cursor-pointer text-gray-900 border-b border-gray-200 mb-2 pb-1" onClick={() => {

                                    router.push(`/categories/${activeMenu}/${group.name}`);
                                }}>
                                    {group.tagName}

                                </h3>

                                <ul className="space-y-1">
                                    {group.subCategories.map((link, i) => (
                                        <li key={i} className="text-gray-600 hover:text-gray-900">

                                            <p onClick={() => {

                                                // router.push(`/categories/${activeMenu}/${group.name}/${link.code}`);

                                            }}>{link.name}</p>

                                        </li>
                                    ))}
                                </ul>

                            </div>
                        ))}

                </div>

            </div>

            {/* this is for the mobile  */}

            {/* this is for the mobile  */}
            {/* <div className="lg:hidden flex justify-end w-full px-4 py-2">
                <div
                    onClick={() => setIsThreeDotsClicked(!isThreeDotsClicked)}
                    className="cursor-pointer"
                >
                    <MdOutlineSegment size={30} />
                </div>

                {isThreeDotsClicked && (
                    <div className="absolute right-0 top-full w-screen max-h-[80vh] overflow-y-scroll bg-white border border-gray-200 shadow-xl grid grid-cols-2 sm:grid-cols-3 gap-6 p-6 z-40 transition-all duration-300 ease-in-out">
                        {menuItems.map((item, idx) => (
                            <div key={idx}>
                                <h3 className="text-sm font-semibold text-gray-900 border-b border-gray-200 mb-2 pb-1">
                                    {item.label}
                                </h3>
                                {item.submenu.map((group, index) => (
                                    <div key={index}>
                                        <h4 className="text-xs font-semibold text-gray-800 border-b border-gray-100 mb-1 pb-1">
                                            {group.heading}
                                        </h4>
                                        <ul className="space-y-1">
                                            {group.links.map((link, i) => (
                                                <li key={i} className="text-gray-600 hover:text-gray-900 text-sm">
                                                    <a href="#">{link}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                )}
            </div> */}

            {/* Mobile Navbar */}
            <div className="xl:hidden flex justify-between items-center px-4 py-3 bg-white border-b border-gray-200">
                <Sheet className="bg-yellow-50">

                    <Image
                        className="cursor-pointer"
                        src="https://www.mayuriinternational.com/images/logo.png"
                        width={150}
                        height={80}
                        alt="Logo"
                        onClick={() => router.push("/")}
                    />

                    <SheetContent side="left" className="w-[85%] max-w-sm bg-[#fef2f2] transition-all duration-500 ease-in-out">

                        <div className="p-2">

                            <Image
                                className="cursor-pointer"
                                src="https://www.mayuriinternational.com/images/logo.png"
                                width={180}
                                height={60}
                                alt="Logo"

                                onClick={() => router.push("/")}
                            />

                        </div>

                        <div className="space-y-4 py-4 pt-1">
                            {catgoriesData.map((item, idx) => {
                                const isExpanded = expandedMenus[item.name];

                                const filteredCategory = catgoriesData.find(cat => cat.name === item.name);
                                const mappedTaggedSubCategories = filteredCategory?.tagsIncluded.map((tag) => {
                                    const filteredGroup = filteredCategory.subCategories.filter((subCategory) =>
                                        subCategory.tagsIncluded.includes(tag._id)
                                    );
                                    return {
                                        tagName: tag.tagName,
                                        subCategories: filteredGroup,
                                    };
                                }) || [];

                                return (
                                    <div key={idx} className="border-b border-gray-200 pb-2">

                                        <div
                                            className="flex items-center px-4 justify-between cursor-pointer text-lg font-semibold text-gray-800"
                                            onClick={() => toggleMenu(item.name)}
                                        >
                                            <span>{item.name}</span>
                                            {isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                        </div>

                                        {isExpanded && (
                                            <div className="mt-2 ml-2 space-y-3 max-h-40 overflow-y-scroll px-5">

                                                {mappedTaggedSubCategories.map((group, index) => (
                                                    <div key={index}>
                                                        <p className="text-sm text-gray-700 font-semibold mb-1">
                                                            {group.tagName}
                                                        </p>
                                                        <ul className="space-y-1 pl-3">
                                                            {group.subCategories.map((link, i) => (
                                                                <li
                                                                    key={i}
                                                                    className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer"
                                                                    onClick={() =>
                                                                        router.push(`/categories/${item.name}/${group.tagName}/${link.code}`)
                                                                    }
                                                                >
                                                                    {link.name}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </SheetContent>

                    <SheetTrigger>
                        <div className="rounded-md p-1 border cursor-pointer">

                            <MdOutlineSegment size={35} className="text-gray-700" />

                        </div>

                    </SheetTrigger>

                </Sheet>

            </div>

        </nav>
    );
};

export default MegaMenuNavbar;
