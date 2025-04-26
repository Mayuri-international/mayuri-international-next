
import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    selectedProduct: null,
    selectedEnqueryProductData: null,
    
}


const productSlice = createSlice({

    name: "product",
    initialState: initialState,
    reducers: {

        setSelectedProductData: (state, action) => {

            state.selectedProduct = action.payload;

        },

        setSelectedProductEnqueryData: (state, action) => {

            state.selectedEnqueryProductData = action.payload;
        }
    }
});

export const { setSelectedProductData } = productSlice.actions;

export default productSlice.reducer;


