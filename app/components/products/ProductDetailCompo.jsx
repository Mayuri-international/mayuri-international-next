'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import { fetchProductByCode } from '@/lib/api';

import { setSelectedProductData } from '@/store/slices/productSlice';

import { format } from 'date-fns';

import { useRouter } from 'next/navigation';
import SuggestedProducts from './SuggestProducts';
import FeaturesSection from '../common/FeaturesSection';
import toast from 'react-hot-toast';

import LoadingScreen from '../Loader';

import { cleanAndLowercase } from '@/lib/utils';

const ProductDetailPageCard = () => {
    const dispatch = useDispatch();
    const { slug } = useParams();

    const router = useRouter();

    const categoryName = slug?.[0];
    const subCategoryName = slug?.[1];

    const productCode = slug?.[2];

    const selectedProductData = useSelector(state => state.product.selectedProduct);
    const [loading, setLoading] = useState(false);


    const handleClick = () => {
        window.open(`https://wa.me/${cleanAndLowercase(process.env.NEXT_PUBLIC_COMPANY_PHONE_NO)}`, "_blank");
    };


    // 🔁 Fetch product if not available in Redux
    useEffect(() => {
        const loadProduct = async () => {
            if (productCode) { // no need to check selectedProductData
                try {
                    setLoading(true);
                    dispatch(setSelectedProductData(null));
                    const data = await fetchProductByCode({
                        categoryName: categoryName,
                        subCategoryName: subCategoryName,
                        code: productCode
                    });
                    dispatch(setSelectedProductData(data));
                } catch (error) {
                    console.error('Error fetching product by code:', error);
                    toast.error(error.message);
                } finally {
                    setLoading(false);
                }
            }
        };
        loadProduct();
    }, [productCode, categoryName, subCategoryName, dispatch]);


    if (loading || !selectedProductData?.product) {
        return (

            <LoadingScreen />

        );
    }

    const images =
        selectedProductData.product.images?.map((img) => {
            const url = img.startsWith('http') ? img : `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${img}`;
            return {
                original: url,
                thumbnail: url,
            };
        }) || [];

    return (

        <div className="w-full relative">

            <div className="pt-5 flex items-center gap-4 px-6">
                <button
                    onClick={() => window.history.back()}
                    className="bg-gray-800 hover:bg-gray-700 transition text-white py-2 cursor-pointer px-5 rounded-lg shadow-md"
                >
                    ← Back
                </button>
            </div>

            <div className=' relative w-full flex flex-col py-10 px-4 sm:px-6 lg:px-8'>

                <div>

                    <h1 className="text-2xl max-w-11/12 mx-auto font-bold text-gray-800 mb-6 capitalize">
                        {selectedProductData.product.name} ({selectedProductData.product.code})
                    </h1>

                    <div className="flex flex-col md:flex-row items-center w-full gap-8">
                        {/* Product Image Gallery */}
                        <div className="w-full md:w-1/2 h-auto bg-gray-100 rounded-lg">
                            <ImageGallery items={images} showPlayButton={false} showFullscreenButton={true} />
                        </div>

                        {/* Product Details */}
                        <div className="w-full md:w-1/2 h-full p-6 flex flex-col self-start">
                            {/* <h1 className="text-3xl font-bold text-gray-800 mb-2 capitalize">{selectedProductData.product.name || selectedProductData.name}</h1> */}
                            {/* <p className="text-gray-600 mb-4">{selectedProductData.product.description || selectedProductData.product.description || "No description available."}</p> */}
                            <ul className="space-y-2 capitalize">
                                <li><strong>Code:</strong> {selectedProductData.product.code || selectedProductData.code}</li>
                                <li>
                                    <strong>Category:</strong>{" "}
                                    {selectedProductData.categoryName || selectedProductData?.product?.category?.name || selectedProductData?.product?.category || selectedProductData?.category?.name}
                                </li>
                                <li>
                                    <strong>Subcategory:</strong>{" "}
                                    {selectedProductData.subCategoryName || selectedProductData?.product?.subCategory?.name || selectedProductData?.product?.subCategory || selectedProductData?.subCategory?.name}
                                </li>
                                <li><strong>Dimensions:</strong> {"Customizable"}</li>
                                {selectedProductData.material && <li><strong>Material:</strong> {selectedProductData.material}</li>}
                                {selectedProductData.warranty && <li><strong>Warranty:</strong> {selectedProductData.warranty} Months</li>}
                                <li><strong>Created At:</strong> {format(new Date(selectedProductData.product.updatedAt), 'dd MMM yyyy')} </li>
                            </ul>

                            <div className="mt-6 flex flex-wrap gap-4">
                                <button
                                    className="px-5 py-2 bg-[#8b1c3c] cursor-pointer text-white rounded-md shadow-md hover:bg-[#a52a59] transition-colors duration-300"
                                    onClick={() => router.push(`/product-enquery-form/${selectedProductData.product._id}`)}
                                >
                                    📩 Send Enquiry

                                </button>
                                <button
                                    className="px-5 py-2 bg-green-600 cursor-pointer text-white rounded-md shadow-md hover:bg-green-700 transition-colors duration-300"
                                    onClick={handleClick}
                                >
                                    💬 Chat on WhatsApp
                                </button>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Suggested Products  */}

                <div className='relative w-full h-full'>

                    <SuggestedProducts ></SuggestedProducts>

                </div>

            </div>

            <FeaturesSection></FeaturesSection>


        </div>
    );
};

export default ProductDetailPageCard;
