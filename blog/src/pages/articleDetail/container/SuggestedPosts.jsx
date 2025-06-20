import React from "react";
import { images } from "@/constants/index.js";
import { Link } from "react-router-dom";

const SuggestedPosts = ({ className, header, posts = [] , tags }) => {
  return (
    <div
      className={`w-full shadow-[0px_9px_30px_rgba(7,65,210,0.1) rounded-lg p-4 ${className}`}
    >
      <h2 className="font-roboto font-medium text-sky-950 md:text-xl ">{header}</h2>
      <div className="grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1">
        {posts.map((item) => (
          <div
            key={item._id}
            className="flex space-x-3 flex-nowrap items-center"
          >
             
            <img
              className="aspect-square object-cover rounded-lg w-1/5"
              src={item.image}
              alt="Laptop"
            />
            <div className="text-sm font-roboto text-sky-950 font-medium ">
              <h3 className="text-sm font-roboto text-sky-950 font-medium md:text-base lg:text-lg">{item.title}</h3>
              <span className="text-xs opacity-60">
                {new Date(item.createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
      <h2 className="font-roboto font-medium text-sky-950 mt-8 md:text-xl">Tags</h2>
      <div className="flex flex-wrap gap-x-2 gap-y-2 mt-4">
        {tags.map((item) => (
            <Link to="/" className="inline-block rounded-md px-3 py-1.5 bg-blue-500 font-roboto text-xs text-white">
                {item}
            </Link>
        ))}
      </div>
    </div>
  );
};

export default SuggestedPosts;
