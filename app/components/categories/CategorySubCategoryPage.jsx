'use client';

import { useParams, useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useState, useCallback } from 'react';
import { fetchSubcategoryProducts } from '@/lib/api';
import { cleanAndLowercaseAddSpace, cleanAndLowercaseAddDash } from '@/lib/utils';
import SingleProductCard from '@/app/components/products/SingleProductCard';
import ProductDetailPageCard from '@/app/components/products/ProductDetailCompo';
import HorizontalSlider from '@/app/components/landing/HorizontalSlider';
import { CategoryPage } from '@/app/components/categories/CategoryPage';

import InfiniteScroll from 'react-infinite-scroll-component';

import LoadingScreen from '@/app/components/Loader';

import SkeletonHorizontalSlider from '@/app/components/loader/SkeletonHorizontalSlider';

import SkeletonProductCard from '@/app/components/loader/SkeletonProductCard';

import BreadcrumbSchema from '../seo/BreadcrumbSchema';

const CategoriesSubCategoriesPage = () => {
    const { slug } = useParams();
    const router = useRouter();

    const [selectedProductData, setSelectedProductData] = useState(null);

    const navbarCategoryData = useSelector((state) => state.navbarCategory.data);

    let categoryName = slug?.[0]?.replace(".html", "");
    const subCategoryName = slug?.[1];
    const productCode = slug?.[2];

    const filteredCategoriesData = navbarCategoryData?.find(
        (data) => cleanAndLowercaseAddSpace(data.name) === cleanAndLowercaseAddSpace(categoryName)
    );

    const preparedData = filteredCategoriesData?.subCategories?.map((data) => ({
        name: data.name,
        image: data.images[0] || "https://lh3.googleusercontent.com/d/1h-BOx4lxyvZYabI6U4mGBQONMZC4YMF6=w1920-h1080",
        _id: data._id
    })) || [];

    const subCategoryId = preparedData.find(item => cleanAndLowercaseAddDash(item.name) === subCategoryName)?._id;

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey: ['subcategory-products', categoryName, subCategoryId],
        queryFn: ({ pageParam = 1 }) =>
            fetchSubcategoryProducts({
                pageParam,
                categoryId: filteredCategoriesData?._id,
                subCategoryId: subCategoryId,
            }),
        getNextPageParam: (lastPage) => lastPage.nextPage,
        enabled: !!categoryName && !!subCategoryId && !!filteredCategoriesData, // Enable only when ready
    });

    // ✅ No hooks inside conditions now.

    // --- Rendering Phase (Safe) ---

    if (!navbarCategoryData || navbarCategoryData.length === 0) {
        return (
            <div className="w-full min-h-screen p-8">
                <SkeletonHorizontalSlider />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                    {[...Array(8)].map((_, idx) => (
                        <SkeletonProductCard key={idx} />
                    ))}
                </div>
            </div>
        );
    }


    if (!filteredCategoriesData) {
        return (
            <div className="flex justify-center items-center min-h-screen text-gray-500">
                Category not found.
            </div>
        );
    }

    if (categoryName && !subCategoryName && !productCode) {

        return <CategoryPage categoryName={categoryName} />;

    }

    if (categoryName && subCategoryName && !productCode) {
        return (

            <>

                <BreadcrumbSchema categoryName={categoryName} subCategoryName={subCategoryName} />

                <div className="w-screen min-h-screen bg-white">
                    <div className="relative w-full h-full">
                        <HorizontalSlider preparedData={preparedData} currentSubCategory={subCategoryName} clickHandler={(name) => {
                            router.push(`/categories/${categoryName}/${cleanAndLowercaseAddDash(name)}`);
                        }} />
                    </div>

                    <div className="flex items-center justify-center gap-4 py-8">
                        <hr className="w-14 border-t border-gray-600" />
                        <h1 className="text-sm lg:text-2xl font-semibold text-[#67152f] text-center uppercase cursor-pointer">
                            {cleanAndLowercaseAddSpace(subCategoryName)} Products
                        </h1>
                        <hr className="w-14 border-t border-gray-600" />
                    </div>

                    <div className="relative w-full h-full mx-auto px-4 sm:px-8">
                        <InfiniteScroll
                            dataLength={data?.pages?.flatMap(p => p.products)?.length || 0}
                            next={fetchNextPage}
                            hasMore={!!hasNextPage}
                            loader={<p className="text-center py-4 text-gray-500">Loading more products...</p>}
                            endMessage={<p className="text-center py-4 text-gray-400">No more products.</p>}
                        >
                            <div className="grid relative w-full h-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {data?.pages?.flatMap(page => {
                                    const sortedData = page.products.products.sort((a, b) => {
                                        const numA = parseInt(a.code.split("-")[1]);
                                        const numB = parseInt(b.code.split("-")[1]);
                                        return numA - numB;
                                    });
                                    return sortedData.map(product => (
                                        <SingleProductCard
                                            key={product._id}
                                            product={product}
                                            subCategoryName={subCategoryName}
                                            categoryName={categoryName}
                                        />
                                    ));
                                })}
                            </div>
                        </InfiniteScroll>

                        {isFetchingNextPage && (
                            <div className="text-center py-6 text-sm text-gray-500">Fetching more products...</div>
                        )}
                    </div>
                </div>

            </>
        );
    }

    if (categoryName && subCategoryName && productCode) {
        return (
            <div className="w-screen h-full">
                <ProductDetailPageCard />
            </div>
        );
    }

    return null;
};

export default CategoriesSubCategoriesPage;
