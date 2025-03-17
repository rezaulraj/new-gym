import React from "react";
import SkeletonLoading from "./SkeletonLoading";

const CategoryCard = ({ categorys, loading }) => {
  if (loading) {
    return <SkeletonLoading />;
  }

  return (
    <div className="container max-w-5xl mx-auto mt-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] m-2">
        {categorys?.map((category, index) => (
          <div
            key={category.id}
            className={`p-4 rounded-lg shadow-lg flex flex-col items-center justify-center hover:transition-transform hover:scale-105 duration-500 relative ${
              index % 3 === 0 || index % 3 === 2
                ? "md:row-span-2"
                : "md:row-span-1"
            }`}
            style={{
              background: `linear-gradient(to bottom left, ${category.first_color}, ${category.second_color})`,
            }}
          >
            {/* Title */}
            <h2 className="absolute top-6 left-6 text-xl font-bold text-center text-white">
              {category.name}
            </h2>
            {/* Image */}
            <img
              src={category.image}
              alt={category.name}
              className="overflow-hidden h-full w-full object-cover rounded-md mb-4 "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
