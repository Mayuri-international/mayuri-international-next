
import { createSlice } from "@reduxjs/toolkit";

const intialState = {

    selectedCategory: null,
    selectedCategoryData:null,
    clickedCategoryData:null,
    
}


const categorySlice = createSlice({

    name:"category",
    initialState: intialState,
    reducers:{

        setSelectedCategory:(state,action) => {

            state.selectedCategory = action.payload
        },

        setSelectedCategoryData : (state,action)=>{

            state.selectedCategoryData =  action.payload;

        },

        setClickedCategoryData :(state,action)=>{

            state.clickedCategoryData = action.payload;

        }
    }
})

export const {setSelectedCategory,setSelectedCategoryData,setClickedCategoryData} = categorySlice.actions
export default categorySlice.reducer;

