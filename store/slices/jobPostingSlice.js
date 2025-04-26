
import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    jobPostingData : null,

}


const jobPostingSlice = createSlice({

    name:"job",
    initialState:initialState,
    reducers:{

        setJobPostingData :(state,action)=>{

            state.jobPostingData = action.payload;

        }
    }
})

export const { setJobPostingData } = jobPostingSlice.actions;

export default jobPostingSlice.reducer;


