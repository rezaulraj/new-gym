import { create } from "zustand";

import axiosInstance from "../lib/axios";

export const useProductStore = create((set) => ({
  products: [],
  categorys: [],
  loading: false,

  setProducts: (products) => set({ products }),
  setCategory: (categorys) => set({ categorys }),

  fetchAllProducts: async () => {
    set({ loading: true });
    try {
      const response = await axiosInstance.get("/gym/products");
      set({ products: response?.data, loading: false });
      console.log("response?.data", response?.data);
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to fetch AllProducts",
      });
    } finally {
      set({ loading: false });
    }
  },

  fetchCategory: async () => {
    set({ loading: true });
    try {
      const response = await axiosInstance.get("/gym/category");
      set({ categorys: response?.data });
      console.log("category arer", response?.data);
    } catch (error) {
      set({
        error: error.response?.data?.message || "Failed to fetch Category",
      });
    } finally {
      set({ loading: false });
    }
  },
}));
