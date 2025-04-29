

export async function fetchCatalogueData(slug) {
    const res = await fetch(`http://localhost:4000/api/catalogue/get-specific-category-cataLogue/${slug}`, {
        cache: 'force-cache',
    });

    const result = await res.json();

    return result.data;
}




export async function fetchSpecificCategorySubCategoriesData(slug) {

    const res = await fetch(`http://localhost:4000/api/categories/get-all-category-specific-SubCategoriesData/${slug}`, {
        cache: 'reload',
    });

    const result = await res.json();


    return result.data;

}


export const fetchCategories = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/categories/get-all-categories`, {
            next: { revalidate: 60 }, // Enables ISR (good for SEO)
        });

        if (!res.ok) throw new Error("Failed to fetch categories");

        const result = await res.json();
        return result.data;

        
    } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
    }
};




