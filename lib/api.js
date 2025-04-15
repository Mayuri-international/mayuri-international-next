
import axios from ".././app/providers/AxiosCall.js";

const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;

export const fetchCategories = async () => {
    const res = await axios.get(`/categories/get-all-categories`);
    console.log("res ka data ", res.data.data);
    return res.data.data;
};



export const fetchSubcategoryProducts = async ({ pageParam = 1, categoryId, subCategoryId }) => {

    console.log("inside fetchSubcategoryProducts ",categoryId, subCategoryId);

  try {
    const res = await axios.get(
      `products/pagination-of-products`,
      {
        params: {
          page: pageParam,
          limit: 12,
          categoryId,
          subCategoryId,
        },
      }
    );

    const data = res.data.data;

    console.log("res ka data ", data);

    return {
      products: data,
      nextPage: data.currentPage < data.totalPages ? data.currentPage + 1 : null,
    };
  } catch (error) {
    console.error("Error fetching subcategory products:", error);
    return {
      products: [],
      nextPage: null,
    };
  }
};





