import axios from "axios";

const axiosInstance = axios.create({
  //   baseURL:
  //     import.meta.mode === "development" ? "http://localhost:4000/api" : "/api",
  baseURL: "https://67d6992d286fdac89bc262e0.mockapi.io/api",
  //   withCredentials: true,
});

export default axiosInstance;
// https://67d6992d286fdac89bc262e0.mockapi.io/api/gym/products
// https://67d6992d286fdac89bc262e0.mockapi.io/api/gym/category
