import React from "react";
import addimage from "../../assets/tow.png";
import { Play } from "lucide-react";

const Add = () => {
  return (
    <div
      className="relative w-full md:h-screen bg-cover bg-center mt-20"
      style={{
        backgroundImage: `url(${addimage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute w-[100%] h-[108%] -top-[5%] bg-[#1C1C1C]/30 z-1"></div>
      <div className="absolute w-[50%] h-[100%] rounded-full bg-[#F73F7C1A]/10 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex md:flex-row flex-col md:items-start items-center justify-center md:gap-40 gap-2 h-full text-white font-bold md:pt-20 p-2">
        <h1 className="flex flex-col md:text-6xl sm:text-4xl text-2xl text-center">
          100% Online,<span> 100% Convenient</span>
        </h1>
        <div className="text-gray-300">
          <li className="flex items-center ">
            <Play className="pr-2" />
            Chat with a provider 24/7
          </li>
          <li className="flex items-center ">
            <Play className="pr-2" />
            Fast, discreet shipping
          </li>
          <li className="flex items-center ">
            <Play className="pr-2" />
            Clinically proven ingredients and FDA-approved treatments.
          </li>
        </div>
      </div>
    </div>
  );
};

export default Add;
