import React from "react";
import SkeletonLoading from "./SkeletonLoading";
import { MoveLeft, MoveRight, ShoppingCart } from "lucide-react";

const ProductCard = ({ products, loading, addToCart }) => {
  console.log("product", products);
  if (loading) {
    return <SkeletonLoading />;
  }
  return (
    <div className="container max-w-5xl mx-auto mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] m-2">
        {products &&
          products.map((product) => (
            <div
              key={product.id}
              className="bg-[#31418C4D]/60 relative rounded-2xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-500"
            >
              <div className="flex items-center justify-center gap-x-3 pt-8">
                <img src={product.image} alt="" className="size-28" />
                <h2 className="bg-gradient-to-r from-[#C1842D] to-[#ECC974] text-transparent bg-clip-text font-medium">
                  {product.name}
                </h2>
              </div>
              <span
                className="absolute top-0 right-0 rounded-tr-2xl rounded-bl-2xl p-1 text-gray-100 "
                style={{ backgroundColor: `${product?.batch_color}` }}
              >
                {product.batch}
              </span>
              <div className="bg-[#1F1F1F4D] w-full py-2 flex items-center justify-between px-4 rounded-b-2xl">
                <p className="text-white/60 text-sm">
                  {product.price}$ per month
                </p>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-gradient-to-r from-[#C1842D] to-[#ECC974] py-2 px-4 hover:scale-105 transition-transform duration-500 rounded-lg cursor-pointer"
                >
                  <ShoppingCart className="text-black/70" />
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className="flex items-center justify-center mt-8 gap-x-6">
        <a className="px-4 py-2 text-sm border rounded-full bg-[#E1C06E] hover:border-white hover:bg-transparent hover:text-white hover:scale-105 transition-transform duration-500 cursor-pointer">
          <MoveLeft />
        </a>
        <a className="px-4 py-2 text-sm border rounded-full bg-[#E1C06E] hover:border-white hover:bg-transparent hover:text-white hover:scale-105 transition-transform duration-500 cursor-pointer">
          <MoveRight />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
