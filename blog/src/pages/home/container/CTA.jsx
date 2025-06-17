import React from "react";
import { images } from "@/constants";


const CTA = () => {
  return (
    <>
      <svg
        className="w-full h-auto max-h-40"
        preserveAspectRatio="none"
        viewBox="0 0 2160 263"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Wave"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z"
          fill="#0c4a6e" // This is Tailwind's `sky-950` color
        />
      </svg>

      <section className="relative bg-[#0c4a6e] px-5">
        <div className="container grid grid-cols-12 mx-auto py-10 md:pb-20 lg:place-items-center ">
          <div className="col-span-12 lg:col-span-6">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-white font-roboto font-bold text-2xl mb-4 md:text-4xl md:text-center md:leading-normal lg:text-left">
                Get our stories delivered to your inbox weekly.
              </h2>
            </div>
            <div className="w-full max-w-[494px] mt-12 space-y-3 mx-auto md:space-y-0 md:flex md:items-center md:space-x-2 lg:mx-0">
              <input 
                type="text"
                placeholder="Your E-mail"
                className="px-4 py-3 rounded-lg w-full bg-white placeholder:text-[#5A7184]"
              />
              <button className="px-4 py-3 rounded-lg w-full bg-blue-500 text-white font-bold md:w-fit md:whitespace-nowrap">
                Get Started
              </button>
            </div>
            <p className="text-gray-400 text-sm leading-7 mt-6 md:text-center md:text-base lg:text-left ">
              <b className="text-[#B3BAC5] italic md:non-italic md:font-normal md:text-gray-400 ">Get a response tomorrow </b>{" "}
              if you submit by 9pm today. If we received after 9pm will get a
              reponse the following day.
            </p>
          </div>
          <div className="col-span-12  hidden mb-[70px] md:block md:order-first lg:col-span-6 lg:order-last ">
            <div className="w-3/4 mx-auto relative ">
                <div className="w-1/2 h-1/2 bg-[#Fc5A5A] rounded-lg absolute top-[10%] -right-[8%]"/>
                <div className="w-1/2 h-1/2 bg-white rounded-lg opacity-[.06] absolute -bottom-[10%] -left-[8%]"/>
              <div className="rounded-xl w-full bg-white p-3 z-[1] relative ">
                <img
                  src={images.CTAimage}
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
