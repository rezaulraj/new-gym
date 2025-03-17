import React from "react";

import img1 from "../../assets/PLAYERS.png";
const HeroPage = () => {
  return (
    <div id="homepage" className="px-4 py-12 relative">
      <div className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Content Sections */}
        <div className="col-span-5 flex flex-col items-start justify-start">
          <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-tight">
            Prescription
            <span className="block">Treatments For</span>
            <span className="block">Your</span>
            <span className="text-[#ECC974] block">Health Goals</span>
          </h1>
          <div className="mt-8">
            <a
              className="group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] text-white focus:ring-3 focus:outline-none"
              href="#"
            >
              <span className="block rounded-full bg-zinc-800 px-8 py-3 text-sm font-medium hover:bg-zinc-700 transition-colors">
                Find My Treatment
              </span>
            </a>
          </div>
        </div>

        {/* Images Section */}
        <div className="col-span-7">
          <div className="">
            <img
              src={img1}
              alt="Treatment illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
