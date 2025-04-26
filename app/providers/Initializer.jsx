'use client'

import { useDispatch } from "react-redux";
import { setNavbarCategoriesData, setNavbarCategoriesLoading } from "@/store/slices/navbarCategorySlice";
import { useEffect } from "react";

export default function Initializer({ categories }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (categories) {
      dispatch(setNavbarCategoriesLoading(true)); // 👈 First set loading true
      dispatch(setNavbarCategoriesData(categories)); // 👈 Then set data (loading becomes false inside reducer)
    }
  }, [categories, dispatch]);

  return null; // This component does not render anything
}


