import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  isLoading: false, // 👈 Add loading state
};

const navbarCategorySlice = createSlice({
  name: "navbarCategory",
  initialState: initialState,
  reducers: {
    setNavbarCategoriesData: (state, action) => {
      state.data = action.payload;
      state.isLoading = false; // ⏳ Set loading false after data comes
    },
    setNavbarCategoriesLoading: (state, action) => {
      state.isLoading = action.payload; // action.payload should be true or false
    },
  },
});

export const { setNavbarCategoriesData, setNavbarCategoriesLoading } = navbarCategorySlice.actions;

export default navbarCategorySlice.reducer;
