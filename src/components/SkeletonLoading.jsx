import React from "react";

const SkeletonLoading = () => {
  return (
    <div className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="bg-zinc-700 animate-pulse rounded-lg shadow-lg"
        ></div>
      ))}
    </div>
  );
};

export default SkeletonLoading;
