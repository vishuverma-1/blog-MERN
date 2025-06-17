import React from "react";
import { images } from "../constants/index.js";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-[#0c4a6e] ">
      <footer className="container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-5 md:pt-2- md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10">
        <div className="col-span-5 md:col-span-4 lg:col-span-2 ">
          <h3 className="text-gray-400 font-bold md:text-lg">Product</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li> <a href="/">Landing Page</a></li>
            <li> <a href="/">Features</a></li>
            <li> <a href="/">Documentation</a></li>
            <li> <a href="/">Referral Program</a></li>
            <li> <a href="/">Pricing</a></li>
          </ul> 
        </div>

        <div className="col-span-5 md:col-span-4 lg:col-span-2 ">
          <h3 className="text-gray-400 font-bold md:text-lg">Services</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li> <a href="/"></a></li>
            <li> <a href="/">Design</a></li>
            <li> <a href="/">Themes</a></li>
            <li> <a href="/">Illustrations</a></li>
            <li> <a href="/">UI Kit</a></li>
          </ul> 
        </div>

        <div className="col-span-5 md:col-span-4 md:col-start-5 lg:col-span-2 lg:col-start-auto">
          <h3 className="text-gray-400 font-bold">Company</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li> <a href="/">About</a></li>
            <li> <a href="/">Terms</a></li>
            <li> <a href="/">Privacy Policy</a></li>
            <li> <a href="/">Careers</a></li>
          </ul> 
        </div>
        
        <div className="col-span-5 md:col-span-4 lg:col-span-2 ">
          <h3 className="text-gray-400 font-bold">More</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li> <a href="/">Documentation</a></li>
            <li> <a href="/">License</a></li>
            <li> <a href="/">Changelog</a></li>
          </ul> 
        </div>

        <div className="col-span-10 md:order-first md:col-span-4 lg:col-span-2">
        <img src={images.Logo} alt="logo" className= " invert brightness-200 mx-auto md:mx-0" />  
        <p className="text-sm text-gray-400 text-center mt-4  md:text-left md:text-base lg:text-sm">Buils a modern and creative website with crealand</p>
          <ul className="flex justify-center items-center mt-5 space-x-4 text-gray-300 md:justify-start">
            <li className=""><a href="/"><FaTwitter  className="w-6 h-auto"/></a></li>
            <li className=""><a href="/"><FaFacebook  className="w-6 h-auto"/></a></li>
            <li className=""><a href="/"><FaYoutube  className="w-6 h-auto"/></a></li>
            <li className=""><a href="/"><FaInstagram className="w-6 h-auto" /></a></li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col items-center space-y-4 md:col-span-12 lg:col-span-10">
          <div className="text-white bg-blue-500 p-3 rounded-full">
            <FaHeart className="w-7 h-auto"/>
          </div>
          <div>
          <p className="inline-flex items-center gap-x-1 font-bold italic text-gray-400 ">
            Copyright <FaRegCopyright /> 2023. Crafted with love.
             </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
