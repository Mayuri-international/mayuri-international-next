
'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
// import SuggestedProducts from "@/components/product/SuggestedProduct";

import FeaturesSection from "@/app/components/common/FeaturesSection";

import axios from "axios";
import toast from "react-hot-toast";

import { Turnstile } from "@marsidev/react-turnstile";
import { useState } from "react";
import { createCustomerQuery } from "@/lib/api";

import { useSelector } from "react-redux";

import Image from "next/image";

import { useParams } from "next/navigation";

import { useRef } from "react";

import { useRouter } from "next/navigation";

import B2BFormSubmittingLoader from "@/app/components/loader/TempLoader";


const ProductEnqueryForm = () => {

  const isSubmittingRef = useRef(false);

  const router = useRouter();

  const { productId } = useParams();

  const selectedProductData = useSelector((state) => state.product.selectedProduct);

  const [token, setToken] = useState("");

  const [loading,setLoading] = useState(false);

  const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;

  const site_Key = process.env.NEXT_PUBLIC_SITE_KEY;

  // Validation schema using zod
  const schema = zod.object({
    name: zod.string().min(1, "Name is required"),
    phoneNo: zod
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .regex(/^\d+$/, "Phone number must contain only digits"),
    email: zod.string().email("Invalid email format"),
    message: zod.string().optional(),
  });


  // React Hook Form setup

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    
  } = useForm({
    resolver: zodResolver(schema),
  });

  // Submit handler
  const onSubmit = async (data) => {

    if(isSubmittingRef.current){

      toast.error("Please try after 5s !");

      return;
    }

    isSubmittingRef.current = true;

    try {

      setLoading(true);

      const result = await createCustomerQuery({ data, productId: productId[0], token });
      
      toast.success("Product query submitted successfully!");

      // ✅ Clear form fields after successful submission
      reset();
      setToken(""); // Clear the Turnstile token as well

    } catch (error) {

      toast.error(error.message);
    }
    finally{

      
      setTimeout(()=>{
        
        isSubmittingRef.current = false;
        setLoading(false);

      },5000)

    }
  };

  if(loading){

    return (

      <B2BFormSubmittingLoader />
    )
  }

  return (

    <>

      <div className="flex flex-col gap-5 relative w-full">

        <div className="max-w-7xl relative mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Product Enquiry Form
          </h2>

          {/* Back Button */}
          <button
            onClick={() => router.back()} // Navigate to the previous page
            className="mb-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-md shadow-md hover:bg-gray-300 transition-colors duration-300"
          >
            ← Back
          </button>

          <div className="flex relative w-full flex-col md:flex-row gap-8">
            {/* Product Details Section */}
            {selectedProductData ? (
              <div className="md:w-1/2 flex flex-col relative bg-gray-100 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold relative text-gray-800 mb-4">Product Details</h3>

                <div className="relative w-full h-full flex flex-col">

                  <div className="flex relative w-full h-full flex-col items-center">

                    <Image
                      src={selectedProductData.product.images[0]}
                      alt={selectedProductData.product.name || selectedProductData.name}
                      fill
                      className="w-full max-h-72 object-cover rounded-md mb-4"
                    />
                  </div>
                  <div className="flex flex-col">

                    <p className="text-sm text-gray-600 mt-2">
                      <strong>Category:</strong> {selectedProductData.categoryName || selectedProductData?.product?.category?.name || selectedProductData?.product?.category || selectedProductData?.category?.name}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      <strong>Subcategory:</strong>
                      {selectedProductData.subCategoryName || selectedProductData?.product?.subCategory?.name || selectedProductData?.product?.subCategory || selectedProductData?.subCategory?.name}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      <strong>Code:</strong> {selectedProductData.product.code || selectedProductData.code}
                    </p>

                  </div>

                </div>

              </div>
            ) : (
              <div className="md:w-1/2 bg-gray-100 p-4 rounded-lg shadow-md text-center">
                <p className="text-gray-500">Product details not available.</p>
              </div>
            )}

            {/* Enquiry Form Section */}
            <div className="md:w-[600px] relative w-full">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-[#8b1c3c] focus:border-[#8b1c3c] ${errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                {/* Phone Number Field */}
                <div>
                  <label htmlFor="phoneNo" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phoneNo"
                    {...register("phoneNo")}
                    className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-[#8b1c3c] focus:border-[#8b1c3c] ${errors.phoneNo ? "border-red-500" : "border-gray-300"
                      }`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phoneNo && (
                    <p className="text-red-500 text-sm mt-1">{errors.phoneNo.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-[#8b1c3c] focus:border-[#8b1c3c] ${errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                    placeholder="Enter your email"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    {...register("message")}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#8b1c3c] focus:border-[#8b1c3c]"
                    placeholder="Enter your message"
                    rows="4"
                  ></textarea>
                </div>

                <Turnstile

                  siteKey={site_Key}
                  onSuccess={(data) => {

                    setToken(data)

                  }}

                />

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#8b1c3c] text-white py-2 px-4 rounded-md shadow-md hover:bg-[#a52a59] transition-colors duration-300"
                  >
                    Submit Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div>
          <FeaturesSection />
        </div>
      </div>

    </>
  );
};

export default ProductEnqueryForm;

