import React from "react";
import { images } from "../constants/index.js";
import { FaCheck } from "react-icons/fa6";

const ArticlesCard = ({ className = "" }) => {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-[0px_9px_30px_rgba(7,65,210,0.1)] ${className}`}
    >
      <img
        src={images.Post1Image}
        alt="Title "
        className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
      ></img>
      <div className="p-5"> 
        <h2 className="font-roboto font-bold text-xl text-sky-800 md:text-2xl lg:text-[28px]">
          Future Of Work
        </h2>
        <p className="text-gray-400 mt-3 text-sm md:text-lg">
          Majority of peole will work in jobs that don't exist today.
        </p>
      </div>

      {/* below post - Profile section ----------------------------------------------------------------------------------------------------- */}
      <div className="flex justify-between flex-nowrap items-center mt-6 p-4">
        <div className="flex flex-row gap-x-2 md:gap-x-2.5">
          <div className="flex items-center ">
            <img src={images.PostProfile} alt="profile photo" className="w-9 h-9 md:w-10 md:h-10 "></img>
          </div>
          <div className="flex flex-col ml-2">
            <h4 className="font-bold italic text-sky-950 text-sm md:text-base">
              Viola Manisa
            </h4>
            <div className="flex items-center gap-x-2">
              <span className="bg-[#36B37E]/20 w-fit  p-1.5 rounded-full">
                <FaCheck className="w-1.5 h-1.5 text-[#36B37E]" />
              </span>
              <span className="italic text-gray-400 text-xs md:text-sm ">
                Verified Writer
              </span>
            </div>
          </div>
        </div>
        <div>
          <span className="font-bold text-gray-400 italic-text text-sm md:text-base">
            02 May
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticlesCard;
