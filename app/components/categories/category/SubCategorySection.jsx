'use client';

import { useEffect, useState, useCallback } from 'react';
import { fetchSpecificCategorySubCategoriesData } from '@/utils';
import SubcategoryBox from './SubCategoryBox';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

import { useSelector } from 'react-redux';

import { cleanAndLowercase } from '@/lib/utils';

export default function SubCategorySection({ categoryName }) {
    const [subCategoryData, setSubCategoryData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const pathname = usePathname();
    const router = useRouter();

    const categoryData = useSelector((state)=>state.navbarCategory.data);

    // This useEffect listens to changes in categoryName and pathname
    useEffect(() => {
        
        async function fetchData() {
            setLoading(true);
            try {

                if(categoryData.length > 0){

                    const filteredCategoryData = categoryData.find((data)=>cleanAndLowercase(data.name) === cleanAndLowercase(categoryName));

                    setSubCategoryData(filteredCategoryData.subCategories);

                }

                else{

                    // Fetch subcategories data based on categoryName
                    const data = await fetchSpecificCategorySubCategoriesData(categoryName);
                    setSubCategoryData(data?.subCategories || []);
                    setError(null);

                }

            } catch (err) {
                console.error('Error fetching subcategories:', err);
                setError('Failed to load subcategories');
            } finally {
                setLoading(false);
            }
        }

        if (categoryName) {
            fetchData();
        }
    }, [categoryName, pathname]); // Re-fetch data on pathname/category change

    // Handle category click
    const clickHandler = useCallback((name) => {
        const newPath = `${pathname}/${name}`;

        // This triggers a full page navigation (no shallow routing)
        router.push(newPath);

    }, [pathname, router]);

    // If loading, show loading indicator
    if (loading) {
        return <div>Loading...</div>;
    }

    // If there's an error fetching the data, show error message
    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="px-6 py-8 w-full max-w-screen mx-auto bg-[#EAE4D7]">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-gray-800">
                Explore Subcategories of <span className="text-primary capitalize">{categoryName}</span>
            </h2>

            <div className="flex justify-center">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-7">
                    {subCategoryData?.slice(0, 14).map((data, index) => (
                        <SubcategoryBox
                            key={index}
                            label={data.name}
                            imageSrc={data.images[0] || "https://mayuriinternational.com/images/cane-furniture/gallery-icon/cane-arm-chairs.png"}
                            clickHandler={clickHandler}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
