
'use client'

import React, { useState } from "react";

import { IoIosArrowUp } from "react-icons/io";

import { IoIosArrowDown } from "react-icons/io";

import { MdOutlineSegment } from "react-icons/md";

import { useRouter } from "next/navigation";

import { RxCrossCircled } from "react-icons/rx";

import { cleanAndLowercase, cleanAndLowercaseAddDash, cleanAndLowercaseAddSpace } from "@/lib/utils";

import { useDispatch } from "react-redux";

import { setClickedCategoryData, setSelectedCategory, setSelectedCategoryData } from "@/store/slices/categorySlice";

import Link from "next/link";

import Image from "next/image";


import { Sheet, SheetDescription, SheetTrigger, SheetContent } from "@/components/ui/sheet";

import { useRef, useEffect } from "react";

import toast from "react-hot-toast";

import { setCatalogueData } from "@/store/slices/catalogueSlice";

import FurnitureVideoSection from "../navbar/FurnitureVideoSection";


const MegaMenuNavbar = ({ catgoriesData }) => {

    const dispatch = useDispatch();

    const router = useRouter();

    const catalogueRef = useRef(null);

    const [cataloguePosition, setCataloguePosition] = useState({ left: 0, top: 0 });

    const [activeMenu, setActiveMenu] = useState(null);

    const [catelogueActiveMenu, setCatalogueActiveMenu] = useState(null);

    const [isThreeDotsClicked, setIsThreeDotsClicked] = useState(false);

    const [groupedCategories, setGroupedCategories] = useState(null);

    const [expandedMenus, setExpandedMenus] = useState({});
    const toggleMenu = (name) => {
        setExpandedMenus((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };



    useEffect(() => {
        if (Array.isArray(catgoriesData) && catgoriesData.length > 0) {
            const allCatalogueData = catgoriesData.map((category) => ({
                name: `${category.name} Catalogue`,
                image: category.images[0],

            }));

            dispatch(setCatalogueData(allCatalogueData));
        }
    }, [catgoriesData, dispatch]);


    useEffect(() => {

        if (catelogueActiveMenu && catalogueRef.current) {
            const rect = catalogueRef.current.getBoundingClientRect();
            setCataloguePosition({
                left: rect.left,
                top: rect.top + 10,
            });
        }
    }, [catelogueActiveMenu]);


    function mouseEnterHandler(categoryName, categoryId) {

        setCatalogueActiveMenu(null);

        const temp = {
            categoryId: categoryId,
            categoryName: categoryName,
        };

        setActiveMenu(temp);

        const filteredCategory = catgoriesData.find(
            (category) => category.name === categoryName
        );

        if (!filteredCategory) return;

        let mappedTaggedSubCategories = []; // <-- Use let here

        if (filteredCategory.tagsIncluded.length !== 0) {
            mappedTaggedSubCategories = filteredCategory.tagsIncluded.map((tag) => {

                let groupedSubCategories = [];

                if (tag.isCategory) {
                    const referencedCategory = catgoriesData.find(
                        (data) => cleanAndLowercase(data.name) === cleanAndLowercase(tag.tagName)
                    );

                    if (referencedCategory) {
                        groupedSubCategories = referencedCategory.subCategories || [];
                    }
                } else {
                    groupedSubCategories = filteredCategory.subCategories.filter((subCategory) =>
                        subCategory.tagsIncluded.includes(tag._id)
                    );
                }

                return {
                    tagName: tag.tagName,
                    subCategories: groupedSubCategories,
                };
            });
        } else {

            mappedTaggedSubCategories.push({
                tagName: filteredCategory.name,
                subCategories: filteredCategory.subCategories,
            });
        }

        setGroupedCategories(mappedTaggedSubCategories);
    }


    function CatalogueMouseEnterHandler() {

        setActiveMenu(null);
        setCatalogueActiveMenu("Catalogue");

    }


    function subCategoryClickHandler(link, group, actaulCategoryId) {

        let categoryId;

        if (actaulCategoryId) {

            categoryId = actaulCategoryId

        }

        else {

            categoryId = activeMenu.categoryId;

        }


        let categoryName;

        const filteredCategory = catgoriesData.find((data) => cleanAndLowercase(data.name) == cleanAndLowercase(group.tagName));

        if (!filteredCategory) {

            const tempCategory = catgoriesData.find((data) => data._id == categoryId);

            categoryName = tempCategory.name;
        }
        else {

            categoryName = group.tagName;
        }

        console.log("updated  category name is ", categoryName);

        let updatedCategoryId;

        if (link.tagsIncluded.length === 0) {

            updatedCategoryId = filteredCategory._id;

            dispatch(setSelectedCategory({
                categoryId: filteredCategory._id,
                subcategory: link._id,
            }))

        }

        else {

            // categoryName = activeMenu.categoryName;

            updatedCategoryId = categoryId;

            dispatch(setSelectedCategory({
                categoryId: categoryId,
                subcategory: link._id,
            }))

        }

        const selectedCategorySubCategoryData = catgoriesData.find((data) => data._id == updatedCategoryId);

        const tempData = {

            name: selectedCategorySubCategoryData.name,
            _id: selectedCategorySubCategoryData._id,
            subCategories: selectedCategorySubCategoryData.subCategories,
            images: selectedCategorySubCategoryData.images,

        }

        dispatch(setSelectedCategoryData(tempData));

        router.push(`/${cleanAndLowercaseAddDash(categoryName)}/${cleanAndLowercaseAddDash(link.name)}`);

        setActiveMenu(null);
    }


    // this is for the mobile view 

    function categoryClickedHandler(categoryName) {

        const filteredCategory = catgoriesData.find(
            (category) => category.name === categoryName
        );


        if (!filteredCategory) return;

        const temp = {
            categoryId: filteredCategory._id,
            categoryName: categoryName,
        };

        setActiveMenu(temp);

        const mappedTaggedSubCategories = filteredCategory.tagsIncluded.length
            ? filteredCategory.tagsIncluded.map((tag) => {

                let groupedSubCategories = [];

                if (tag.isCategory) {
                    const referencedCategory = catgoriesData.find(
                        (data) => cleanAndLowercase(data.name) === cleanAndLowercase(tag.tagName)
                    );

                    if (referencedCategory) {

                        groupedSubCategories = referencedCategory.subCategories || [];

                    }
                } else {
                    groupedSubCategories = filteredCategory.subCategories.filter((subCategory) =>
                        subCategory.tagsIncluded.includes(tag._id)
                    );
                }

                return {
                    tagName: tag.tagName,
                    subCategories: groupedSubCategories,
                };
            })
            : [
                {
                    tagName: filteredCategory.name,
                    subCategories: filteredCategory.subCategories,
                },
            ];

        dispatch(setClickedCategoryData(mappedTaggedSubCategories));
        router.push(`/${cleanAndLowercaseAddDash(categoryName)}`);
    }




    // Only render state update logic if menu is active

    const isCatalogueActive = catelogueActiveMenu === "Catalogue";

    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">

            {/* this is for desktop  */}

            <div
                className="w-screen mx-auto shadow-md px-6 hidden xl:block"
                onMouseLeave={() => setActiveMenu(null)}
            >
                <div className="flex justify-between items-center">
                    {/* Menu Labels */}
                    <Image
                        className="cursor-pointer"
                        src="https://www.mayuriinternational.com/images/logo.png"
                        width={180}
                        height={100}
                        onClick={() => router.push("/")}
                    />
                    <ul className="flex justify-between max-w-7xl space-x-4 text-sm font-medium text-gray-700 items-center">
                        {catgoriesData && catgoriesData.slice(0, 6).map((item, idx) => (
                            <li
                                key={idx}
                                className="relative py-4 cursor-pointer flex gap-1 justify-center items-center"
                                onMouseEnter={() => mouseEnterHandler(item.name, item._id)}
                            >
                                <p
                                    className="text-md capitalize text-black hover:text-[#75192F]"
                                    onClick={() => categoryClickedHandler(item.name)}
                                >
                                    {cleanAndLowercaseAddSpace(item.name)}
                                </p>
                            </li>
                        ))}
                        <li
                            ref={catalogueRef}
                            className="relative py-4 cursor-pointer flex gap-1 justify-center items-center"
                            onMouseEnter={CatalogueMouseEnterHandler}
                        >
                            <p className="text-md text-black capitalize">Catalogue</p>
                        </li>
                    </ul>

                    {/*  */}

                    <FurnitureVideoSection />

                </div>


                {/* Mega Menu Panel */}
                <div
                    className={`absolute top-[100%] z-[999] w-screen right-28 left-0 max-w-[100%] max-h-[500px] overflow-y-scroll bg-[#F2F2F2] border border-gray-200 shadow-xl grid grid-cols-6 gap-2 p-6 transition-all duration-300 ease-in-out
    ${activeMenu ? "opacity-100 visible translate-y-0 scale-100" : "opacity-0 invisible -translate-y-2 scale-95 pointer-events-none"}`}
                >
                    {groupedCategories && groupedCategories.map((group, index) => {
                        const isMetal = group.tagName.toLowerCase() === "metal-furniture";
                        return (
                            <div
                                key={index}
                                className={`${isMetal ? "absolute left-auto right-auto w-auto min-w-[200px]" : "w-full"} relative`}
                                style={isMetal ? { gridColumn: "span 1", top: 0 } : {}}
                            >
                                {/* Hide tagName only for 'metal-furniture' */}
                                {!isMetal && (
                                    <h3
                                        className="text-sm cursor-pointer uppercase text-[#2b2f32] font-medium mb-2 pb-1 px-3"
                                        onClick={() => {
                                            router.push(`/${categoryName}/${group.name}`);
                                        }}
                                    >
                                        {group.tagName}
                                    </h3>
                                )}

                                <ul className="space-y-1">
                                    {group.subCategories.map((link, i) => (
                                        <li
                                            key={i}
                                            className="text-black font-medium text-sm capitalize cursor-pointer py-2 px-3 rounded-b-md hover:text-[#58151c] hover:bg-[#EFEBEC]"
                                            onClick={() => subCategoryClickHandler(link, group)}
                                        >
                                            <p>{cleanAndLowercaseAddSpace(link.name)}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}

                </div>


                {/* Catalogue Dropdown */}
                <div
                    className={`absolute top-[100%] max-h-[500px] overflow-y-scroll bg-[#F2F2F2] border border-gray-200 shadow-xl grid grid-cols-1 gap-6 py-2 px-4 z-40 rounded-md transition-all duration-300 ease-in-out transform
        ${catelogueActiveMenu ? "opacity-100 visible translate-y-0 scale-100" : "opacity-0 invisible -translate-y-2 scale-95 pointer-events-none"}`}
                    style={{ left: `${cataloguePosition.left}px`, top: `${cataloguePosition.top}px` }}
                    onMouseLeave={() => setCatalogueActiveMenu(null)}
                >
                    {catelogueActiveMenu === "Catalogue" && (
                        <ul className="space-y-2 min-w-[240px]">
                            {catgoriesData.map((data, index) => (
                                <li
                                    key={index}
                                    className="text-black capitalize text-sm font-medium cursor-pointer px-4 py-2 rounded-md hover:bg-[#EFEBEC] transition-colors duration-200"
                                    onClick={() => {
                                        router.push(`/catalogue/${cleanAndLowercaseAddDash(data.name)}`);
                                        setCatalogueActiveMenu(null);
                                    }}
                                >
                                    {cleanAndLowercaseAddSpace(data.name)}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>


            {/* Mobile Navbar */}
            <div className="xl:hidden flex flex-col bg-[#F5F5F5] border-b border-gray-200 w-full">
                <div className="flex justify-between items-center py-3 px-4 bg-[#F5F5F5]">
                    <Image
                        className="cursor-pointer"
                        src="https://www.mayuriinternational.com/images/logo.png"
                        width={140}
                        height={80}
                        onClick={() => router.push("/")}
                        alt="Logo"
                    />
                    <Sheet className="bg-[#F5F5F5]">
                        <SheetTrigger className="border cursor-pointer">

                            <MdOutlineSegment className="text-3xl text-gray-700 border rounded-md cursor-pointer" />

                        </SheetTrigger>

                        <SheetContent side="left" className="w-[300px] bg-[#fef2f2] pt-4 sm:w-[300px] overflow-y-scroll">

                            <div className="flex flex-col">

                                <div className="px-3">

                                    <Image
                                        className="cursor-pointer"
                                        src="https://www.mayuriinternational.com/images/logo.png"
                                        width={140}
                                        height={80}
                                        onClick={() => router.push("/")}
                                        alt="Logo"
                                    />

                                </div>

                                <div className="pt-4 space-y-4">
                                    {catgoriesData && catgoriesData.map((category, idx) => (
                                        <div key={idx}>
                                            <div
                                                className="flex justify-between items-center cursor-pointer py-2 px-5 border-b border-gray-400"
                                                onClick={() => toggleMenu(category.name)}
                                            >
                                                <span
                                                    className="text-md text-black capitalize font-medium"
                                                    onClick={() => categoryClickedHandler(category.name)}
                                                >
                                                    {cleanAndLowercaseAddSpace(category.name)}
                                                </span>
                                                <span className="text-lg">
                                                    {expandedMenus[category.name] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                                </span>
                                            </div>

                                            <div className="max-h-32 overflow-y-scroll">

                                                {expandedMenus[category.name] && (() => {
                                                    const filteredCategory = catgoriesData.find(cat => cat.name === category.name);
                                                    if (!filteredCategory) return null;

                                                    let mappedTaggedSubCategories = [];

                                                    if (filteredCategory.tagsIncluded.length !== 0) {
                                                        mappedTaggedSubCategories = filteredCategory.tagsIncluded.map((tag) => {
                                                            let groupedSubCategories = [];

                                                            if (tag.isCategory) {
                                                                const refCat = catgoriesData.find(data => cleanAndLowercase(data.name) === cleanAndLowercase(tag.tagName));
                                                                if (refCat) groupedSubCategories = refCat.subCategories || [];
                                                            } else {
                                                                groupedSubCategories = filteredCategory.subCategories.filter(sub => sub.tagsIncluded.includes(tag._id));
                                                            }

                                                            return {
                                                                tagName: tag.tagName,
                                                                subCategories: groupedSubCategories
                                                            };
                                                        });
                                                    } else {
                                                        mappedTaggedSubCategories.push({
                                                            tagName: filteredCategory.name,
                                                            subCategories: filteredCategory.subCategories
                                                        });
                                                    }


                                                    return mappedTaggedSubCategories.map((group, i) => (
                                                        <div key={i} className="ml-3 mt-2">
                                                            <p className="text-sm font-semibold text-gray-700">{group.tagName}</p>
                                                            <ul className="pl-2 mt-1 space-y-1">
                                                                {group.subCategories.map((sub, j) => (
                                                                    <li
                                                                        key={j}
                                                                        className="text-sm text-gray-800 capitalize cursor-pointer hover:text-[#a52a59]"
                                                                        onClick={() => subCategoryClickHandler(sub, group, filteredCategory._id)}
                                                                    >
                                                                        {sub.name}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ));
                                                })()}

                                            </div>

                                        </div>
                                    ))}

                                    <div>
                                        <div
                                            className="flex px-4 justify-between items-center cursor-pointer py-2 border-b"
                                            onClick={() => toggleMenu("Catalogue")}
                                        >
                                            <span className="text-md text-black capitalize font-medium">Catalogue</span>
                                            <span className="text-lg">
                                                {expandedMenus["Catalogue"] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                            </span>
                                        </div>

                                        {expandedMenus["Catalogue"] && (
                                            <ul className="pl-4 mt-2 space-y-1">
                                                {catgoriesData.map((cat, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="text-sm text-gray-800 capitalize cursor-pointer hover:text-[#a52a59]"
                                                        onClick={() => {
                                                            router.push(`/catalogue/${cleanAndLowercaseAddDash(cat.name)}`);
                                                            setIsThreeDotsClicked(false);
                                                        }}
                                                    >
                                                        {cleanAndLowercaseAddSpace(cat.name)}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>

        </nav>
    );


};

export default MegaMenuNavbar;


