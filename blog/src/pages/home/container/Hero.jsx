import React from "react";
import { images } from "../../../constants";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Hero = () => {
    return (
        <div className="container mx-auto flex flex-col px-5 py-5 lg:flex-row">
            <div className="mt-10 lg:w-1/2">
                <h1 className="font-roboto text-3xl text-center font-bold text-sky-900 md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]">
                    Read the most interesting articles
                </h1>
                <p className="text-gray-400 mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <div className="flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative ">
                    <div className="flex flex-row">
                        <FaMagnifyingGlass className="absolute left-3 top-1/6 md:top-1/6 lg:top-23/100 w-6 h-6 text-[#959EAD]" />
                        <input type="text" className="placeholder:folt-bold font-semibold text-[#959EAD] placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none  shadow-[0px_9px_20px_rgba(13,38,76,0.19)] md:py-4 " placeholder="Search Articles" />
                    </div>
                    <div className="flex items-center">
                        <button className="w-full bg-blue-500 text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-43/100 lg-top-0 md:-translate-y-1/2 md:w-fit md:py-2">search</button>
                    </div>
                </div>
                <div className="flex mt-4 flex-col lg:flex-row lg:items-start  lg:flex-nowrap lg:gap-x-4 lg:mt-7">
                    <span className="text-sky-900 font-semibold italic mt-1 lg:text-sm xl:text-base">Popular Tags : </span>
                    <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 lg:text-m xl:text-base ">
                        <li className="rounded-lg bg-blue-500/10  px-3 py-1.5 text-blue-500 font-semibold">Design</li>
                        <li className="rounded-lg bg-blue-500/10 bg-opacity-10 px-3 py-1.5 text-blue-500 font-semibold">User Experience</li>
                        <li className="rounded-lg bg-blue-500/10 px-3 py-1.5 text-blue-500 font-semibold">User Interface</li>
                    </ul>
                </div>

            </div>
            <div className="hidden lg:block lg:1/2">
                <img className="w-full"   src={images.HeroImage} alt="Users are reading articles" />
            </div>
        </div>
    );
};

export default Hero;