import { BadgePercent, Banknote, Headset, Truck } from "lucide-react";
import React from "react";

const Support = () => {
  return (
    <div className=" bg-[#31418C4D]/30 my-10 py-10">
      <div className="container max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 items-center justify-center">
        <div className="flex items-center justify-center space-x-3 text-white/70">
          <Banknote className="text-amber-300/55" />
          <h3 className="text-white/70">Secure Payment</h3>
        </div>
        <div className="flex items-center justify-center space-x-3 text-white/70">
          <Headset className="text-amber-300/55" />
          <h3 className="text-white/70">Online Supports</h3>
        </div>
        <div className="flex items-center justify-center space-x-3 text-white/70">
          <Truck className="text-amber-300/55" />
          <h3 className="text-white/70">Free Shipping</h3>
        </div>
        <div className="flex items-center justify-center space-x-3 text-white/70">
          <BadgePercent className="text-amber-300/55" />
          <h3 className="text-white/70">Best Value</h3>
        </div>
      </div>
    </div>
  );
};

export default Support;
