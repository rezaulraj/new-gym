import React from "react";
import Navber from "./Navber";
import Footer from "./Footer";
import BgImage from "../assets/bgimages.png";

const Layout = ({ children }) => {
  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed", // Optional for parallax effect
      }}
    >
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] -z-10 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <Navber />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
