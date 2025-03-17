import React, { useEffect } from "react";
import { useProductStore } from "../../store/ProudctStore";
import CategorySearch from "./CategorySearch";
import ProductCard from "../../components/ProductCard";
import { useCartStore } from "../../store/useCartStore";

const Products = () => {
  const { categorys, products, fetchAllProducts, loading } = useProductStore();
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  return (
    <div id="products" className="container max-w-5xl mx-auto space-y-6 p-2 md:p-0">
      <h1 className="md:text-4xl text-2xl font-bold text-white text-center tracking-tighter">
        Solutions for Your <span className="text-[#C1842D]">Unique</span> Health
        Goals
      </h1>
      <CategorySearch categoryItem={categorys} loading={loading} />
      <ProductCard
        products={products}
        loading={loading}
        addToCart={addToCart}
      />
    </div>
  );
};

export default Products;
