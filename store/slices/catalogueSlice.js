
import { createSlice } from "@reduxjs/toolkit";

const  initialState ={

    catalogueData :null,

}


const catalogueSlice = createSlice({

    name:"catalogue",
    initialState:initialState,
    reducers:{

        setCatalogueData:(state,action)=>{

            state.catalogueData = action.payload;

        }
    }
})

export const {setCatalogueData} = catalogueSlice.actions;

export default catalogueSlice.reducer;

