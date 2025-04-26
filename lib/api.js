"use client"

import toast from "react-hot-toast";
import axios from ".././app/providers/AxiosCall.js";

// import { useDispatch } from "react-redux";

// import { setCatalogueData } from "@/store/slices/catalogueSlice.js";

const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;

// Fetch all categories
export const fetchCategories = async () => {

  // const dispatch = useDispatch();

  try {
    const res = await axios.get(`/categories/get-all-categories`);
    console.log("res ka data ", res.data.data);
    
    return res.data.data;

  } catch (error) {
    console.error("Error fetching categories:", error);
    toast.error("Failed to fetch categories");
    throw new Error("Failed to fetch categories");
  }
};



// Fetch products based on subcategory with pagination
export const fetchSubcategoryProducts = async ({ pageParam = 1, categoryId, subCategoryId }) => {
  console.log("inside fetchSubcategoryProducts ", categoryId, subCategoryId);

  try {
    const res = await axios.get(`products/pagination-of-products`, {
      params: {
        page: pageParam,
        limit: 12,
        categoryId,
        subCategoryId,
      },
    });

    const data = res.data.data;

    console.log("res ka data of pagination of products ", data);

    return {
      products: data,
      nextPage: data.currentPage < data.totalPages ? data.currentPage + 1 : null,
    };
  } catch (error) {
    console.error("Error fetching subcategory products:", error);
    toast.error("Failed to fetch products");
    throw new Error("Failed to fetch subcategory products");
  }
};

// Fetch product by its code
export const fetchProductByCode = async ({ categoryName, subCategoryName, code }) => {
  try {
    const result = await axios.post("/products/fetch-product-by-code", {
      categoryName,
      subCategoryName,
      code,
    });

    return result.data.data;
  } catch (error) {
    console.error("Error fetching product by code:", error);
    toast.error(error.response?.data?.message || "Failed to fetch product");
    throw new Error(error.response?.data?.message || "Failed to fetch product by code");
  }
};

// Create a new customer query
export const createCustomerQuery = async ({ data, productId, token }) => {
  try {
    const result = await axios.post(`${backend_url}/query/create-customer-query`, {
      ...data,
      productId,
      turnstileToken: token,
    });

    return result.data.data;
  } catch (error) {
    console.error("Error creating customer query:", error);
    toast.error(error.response?.data?.message || "Failed to submit query");
    throw new Error(error.response?.data?.message || "Failed to create customer query");
  }
};


export const fetchJobPostingData = async () => {

  try {

    const result = await axios.get(`${backend_url}/jobs/getAllJobs`);

    return result.data.data;

  } catch (error) {

    console.log(error);
    toast.error(error.response?.data?.message || "Failed to fetch job posting data");
    throw new Error(error.response?.data?.message || "Failed to fetch job posting data ");

  }

}




export const fetchSuggestedProducts = async ({ code }) => {

  try {

    const result = await axios.post(`/products/fetch-suggested-product`,{

      code
    });

    return result.data.data;

  } catch (error) {

    console.error("Error occur while fetching the suggested products :", error);
    toast.error(error.response?.data?.message || "Failed to submit query");
    throw new Error(error.response?.data?.message || "Failed to fetch the suggested products");

  }

}

