import React, { useEffect } from "react";
import { useProductStore } from "../../store/ProudctStore";
import CategoryCard from "../../components/CategoryCard";

const Category = () => {
  const { fetchCategory, categorys, loading } = useProductStore();
  useEffect(() => {
    fetchCategory();
  }, [fetchCategory]);
  console.log("category", categorys);
  return (
    <div id="categorys" className="p-2">
      <div className="flex rounded-full border-2 border-white/50 overflow-hidden max-w-md mx-auto px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 192.904 192.904"
          width="18px"
          class="fill-white"
        >
          <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
        </svg>
        <input
          type="text"
          placeholder="Search By Product/treatment"
          className="w-full outline-none text-sm px-5 py-3 text-white"
        />
      </div>
      {/* Category */}
      <div className=" ">
        <h1 className="text-center text-2xl sm:text-3xl md:text-5xl font-bold text-white my-6">
          Shop By
          <span className="pl-2 bg-gradient-to-r from-[#C1842D] to-[#ECC974] text-transparent bg-clip-text">
            Category
          </span>
        </h1>
        {/* Category card */}
        <CategoryCard categorys={categorys} loading={loading} />
      </div>
    </div>
  );
};

export default Category;
