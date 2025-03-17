import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL ||
    "https://67d6992d286fdac89bc262e0.mockapi.io/api",
});

export default axiosInstance;
// https://67d6992d286fdac89bc262e0.mockapi.io/api/gym/products
// https://67d6992d286fdac89bc262e0.mockapi.io/api/gym/category
