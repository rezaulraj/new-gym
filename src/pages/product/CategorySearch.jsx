import { MoveRight } from "lucide-react";
import React, { useState } from "react";

const CategorySearch = ({ categoryItem }) => {
  const [visibleItems, setVisibleItems] = useState(3);

  const handleShowMore = () => {
    setVisibleItems((prev) => prev + 3);
  };

  return (
    <div className="flex items-center flex-wrap justify-center gap-4 p-1">
      <a className="px-4 py-2 text-sm border rounded-full bg-[#E1C06E] hover:scale-105 transition-transform duration-500 cursor-pointer">
        ALL
      </a>
      <a className="px-4 py-2 text-sm border border-white text-white hover:bg-[#E1C06E] hover:border-[#E1C06E] hover:text-black rounded-full hover:scale-105 transition-transform duration-500 cursor-pointer">
        Best Selling Products
      </a>
      {categoryItem.slice(0, visibleItems).map((item, index) => (
        <a
          key={index}
          className="px-4 py-2 text-sm border border-white text-white hover:bg-[#E1C06E] hover:border-[#E1C06E] hover:text-black rounded-full hover:scale-105 transition-transform duration-500 cursor-pointer"
        >
          {item.name}
        </a>
      ))}
      {visibleItems < categoryItem.length && (
        <a
          onClick={handleShowMore}
          className="px-4 py-2 text-sm border border-white text-white hover:bg-[#E1C06E] hover:border-[#E1C06E] hover:text-black rounded-full hover:scale-105 transition-transform duration-500 cursor-pointer"
        >
          <MoveRight />
        </a>
      )}
    </div>
  );
};

export default CategorySearch;
