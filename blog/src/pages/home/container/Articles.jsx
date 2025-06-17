import React from "react";
import ArticlesCard from "../../../components/ArticlesCard";
import { FaArrowRight } from "react-icons/fa6";

const Articles = () => {
  return (
    <section className="container mx-auto flex flex-wrap md:gap-x-5 gap-y-5 px-5 py-10">
      <div className="flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
        <ArticlesCard className="w-full md:w-[calc(50%-10px)] lg:w-[calc(33.33%-15px)]" />
        <ArticlesCard className="w-full md:w-[calc(50%-10px)] lg:w-[calc(33.33%-15px)]" />
        <ArticlesCard className="w-full md:w-[calc(50%-10px)] lg:w-[calc(33.33%-15px)]" />
        <ArticlesCard className="w-full md:w-[calc(50%-10px)] lg:w-[calc(33.33%-15px)]" /> 
        <ArticlesCard className="w-full md:w-[calc(50%-10px)] lg:w-[calc(33.33%-15px)]" />
        <ArticlesCard className="w-full md:w-[calc(50%-10px)] lg:w-[calc(33.33%-15px)]" />

      </div>
      <button className="mx-auto flex items-center gap-x-2 font-bold text-blue-500 border-2 border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500  hover:text-white transition duration-300">
        <span>More articles</span>
        <FaArrowRight className="w-3 h-3" />
      </button>
    </section>
  );
};

export default Articles;
 