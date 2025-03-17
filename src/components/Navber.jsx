// components/Navbar.js
import React, { useState } from "react";
import {
  ChevronDown,
  Facebook,
  Instagram,
  ShoppingCart,
  X,
} from "lucide-react";
import Logo from "../assets/Logo.png";
import { useCartStore } from "../store/useCartStore";
import { useProductStore } from "../store/ProudctStore";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const totalItems = useCartStore((state) => state.totalItems());
  const { categorys, products } = useProductStore();
  const [isCategoryOpen, setIsCategoryOpen] = useState(false); // For category dropdown
  const [isProductsOpen, setIsProductsOpen] = useState(false); // For products dropdown

  return (
    <nav className="">
      <div className="container max-w-5xl z-10 mx-auto flex justify-between items-center p-4">
        <a href="#" className="text-white text-2xl font-bold">
          <img src={Logo} alt="Logo" className="md:size-28 size-16" />
        </a>
        <div className="flex md:flex-col gap-y-6 items-end">
          <div className="hidden md:flex space-x-6">
            <a href="#homepage" className="text-white hover:text-gray-200">
              Home
            </a>
            <div className="relative">
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="text-white hover:text-gray-200 flex items-center gap-1"
              >
                Category <ChevronDown className="w-4 h-4" />
              </button>
              {isCategoryOpen && (
                <div className="absolute top-full left-0 mt-2 z-[9990] w-48 bg-zinc-800 rounded-lg shadow-lg">
                  {categorys.map((category) => (
                    <a
                      key={category.id}
                      onClick={(category) => setIsCategoryOpen(!category)}
                      href="#categorys"
                      className="block px-4 py-2 text-white hover:bg-zinc-700"
                    >
                      {category.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="text-white hover:text-gray-200 flex items-center gap-1"
              >
                Top Products <ChevronDown className="w-4 h-4" />
              </button>
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 z-[9990] w-48 bg-zinc-800 rounded-lg shadow-lg">
                  {products.slice(0, 5).map((product) => (
                    <a
                      key={product.id}
                      href="#products"
                      onClick={(product) => setIsProductsOpen(!product)}
                      className="block px-4 py-2 text-white hover:bg-zinc-700"
                    >
                      {product.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href="#contact" className="text-white hover:text-gray-200">
              Contact Us
            </a>
            <a href="#faqs" className="text-white hover:text-gray-200">
              FAQs
            </a>

            <div className="flex">
              <a href="#" className="text-white">
                <Instagram />
              </a>
              <a href="#" className="text-white">
                <Facebook />
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="rounded-full drop-shadow-md py-1 px-4 hover:bg-none hover:border border-white hover:text-white bg-gradient-to-r from-[#C1842D] to-[#ECC974] text-zinc-950 flex items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              Sign Up
            </a>
            <a
              href="#"
              className="border rounded-full shadow-xl drop-shadow-md py-1 px-4 hover:border-[#C1842D] hover:bg-gradient-to-r from-[#C1842D] to-[#ECC974] text-white hover:text-zinc-950 flex items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              Login
            </a>
            {/* Cart Icon with Total Items */}
            <a className="text-white cursor-pointer relative">
              <ShoppingCart />
              <span className="absolute border-2 rounded-full w-5 h-5 -top-3 -right-2 text-xs flex items-center justify-center text-amber-200">
                {totalItems} {/* Display total items in the cart */}
              </span>
            </a>
          </div>

          <div className="md:hidden pl-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-zinc-800 w-full h-screen overflow-y-auto p-4">
          <div className="flex items-center justify-between pt-2">
            <a href="#" onClick={(open) => setIsOpen(!open)}>
              <img src={Logo} alt="Logo" className="md:size-28 size-16" />
            </a>
            <button onClick={(open) => setIsOpen(!open)} className="text-white">
              <X />
            </button>
          </div>

          <div className="">
            <a
              href="#homepage"
              onClick={(open) => setIsOpen(!open)}
              className="block text-white hover:text-gray-200 py-2"
            >
              Home
            </a>
            <a
              href="#categorys"
              onClick={(open) => setIsOpen(!open)}
              className="block text-white hover:text-gray-200 py-2"
            >
              Category
            </a>
            <a
              href="#products"
              onClick={(open) => setIsOpen(!open)}
              className="block text-white hover:text-gray-200 py-2"
            >
              Top Products
            </a>
 
            <a
              href="#contact"
              onClick={(open) => setIsOpen(!open)}
              className="block text-white hover:text-gray-200 py-2"
            >
              Contact Us
            </a>
            <a
              href="#faqs"
              onClick={(open) => setIsOpen(!open)}
              className="block text-white hover:text-gray-200 py-2"
            >
              FAQs
            </a>
            <div className="flex mt-6">
              <a
                href="#"
                onClick={(open) => setIsOpen(!open)}
                className="text-white"
              >
                <Instagram />
              </a>
              <a
                href="#"
                onClick={(open) => setIsOpen(!open)}
                className="text-white"
              >
                <Facebook />
              </a>
            </div>
            <div className="flex flex-col space-y-3 mt-2">
              <a
                onClick={(open) => setIsOpen(!open)}
                href="#"
                className="w-full rounded-full drop-shadow-md py-1 px-4 hover:bg-none hover:border border-white hover:text-white bg-gradient-to-r from-[#C1842D] to-[#ECC974] text-zinc-950 flex items-center justify-center transition-transform duration-300 hover:scale-105"
              >
                Sign Up
              </a>
              <a
                onClick={(open) => setIsOpen(!open)}
                href="#"
                className="w-full border rounded-full shadow-xl drop-shadow-md py-1 px-4 hover:border-[#C1842D] hover:bg-gradient-to-r from-[#C1842D] to-[#ECC974] text-white hover:text-zinc-950 flex items-center justify-center transition-transform duration-300 hover:scale-105"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
