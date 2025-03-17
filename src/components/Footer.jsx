import { Facebook, Instagram, Mail, Send } from "lucide-react";
import React from "react";
import conpany from "../assets/company.png";
import logo2 from "../assets/logo2.png";
import branding from "../assets/Branding.png";
const Footer = () => {
  const footerNavs = [
    {
      label: "Quick Links",
      items: [
        {
          href: "javascript:void()",
          name: "Partners",
        },
        {
          href: "javascript:void()",
          name: "Blog",
        },
        {
          href: "javascript:void()",
          name: "Team",
        },
        {
          href: "javascript:void()",
          name: "Careers",
        },
        {
          href: "javascript:void()",
          name: "Contact",
          eamil: "hello@rizzpharma.com",
        },
      ],
    },
    {
      label: "Our Company",
      items: [
        {
          href: "javascript:void()",
          name: "contact",
        },
        {
          href: "javascript:void()",
          name: "Support",
        },
        {
          href: "javascript:void()",
          name: "Docs",
        },
        {
          href: "javascript:void()",
          name: "Pricing",
        },
      ],
    },
  ];

  return (
    <footer
      id="contact"
      className="text-gray-500 bg-gradient-to-b from-[#3D55CCB2]/70 to-[#1F1F1F1A]/10 px-4 py-5 md:px-8"
    >
      <div className="container max-w-5xl mx-auto">
        <div className="gap-20 md:flex justify-between">
          <div className="p-4 border border-white/50 rounded-2xl space-y-6">
            <div className="max-w-xs text-center">
              <h3 className="leading-relaxed mt-2 text-xl text-white font-semibold">
                Let’s Stay In Touch
              </h3>
              <p className="text-gray-400">
                Keep up to date with our latest news &
              </p>
              <p className="text-gray-400">special offers.</p>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="max-w-sm flex items-center border rounded-md p-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2.5 outline-none text-gray-300"
                />
                <Send className="text-white" />
              </div>
            </form>
          </div>
          <div className="mt-10 space-y-6 items-start justify-start gap-x-20 sm:flex md:space-y-0 md:mt-0">
            {footerNavs.map((item, idx) => (
              <ul className="space-y-4 " key={idx}>
                <h4 className="text-gray-300 font-medium">{item.label}</h4>
                {item.items.map((el, idx) => (
                  <li key={idx} className="hover:text-gray-300">
                    <a
                      href={el.href}
                      className={`hover:text-gray-300 ${
                        el.name === "Contact" ? "font-bold text-white" : ""
                      }`}
                    >
                      {el.name}
                    </a>

                    {el.eamil && (
                      <>
                        <br />
                        <a href={el.href} className="hover:text-gray-300">
                          {el.eamil}
                        </a>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="my-8 sm:flex items-center justify-between">
          <img src={conpany} alt="" className="size-30" />
          <div className="flex flex-col space-y-6">
            <div className="flex gap-2">
              <Facebook className="bg-white/30 text-white p-1 rounded-full" />
              <Instagram className="bg-white/30 text-white p-1 rounded-full" />
            </div>
            <div className="md:flex gap-x-8 items-center justify-center">
              <img src={logo2} alt="" className="size-12" />
              <div className="flex flex-col flex-wrap">
                <p>Copyright © 2024 Rizz Pharma All Right </p>
                <p>Reserved - Built by Business Web Social</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img src={branding} alt="" />
        </div>
      </div>
      <style jsx>{`
        .svg-icon path,
        .svg-icon polygon,
        .svg-icon rect {
          fill: currentColor;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
