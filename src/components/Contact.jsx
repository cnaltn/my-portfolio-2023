import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Contact = () => {
  useEffect(() => {
    ScrollReveal().reveal(".mainTag", {
      reset: true,
      // delay: 200,
      duration: 1200,
    });
  });

  return (
    <div className="h-screen flex flex-col w-full " id="contact">
      <div className="container  gap-y-5 justify-center  h-screen z-20 flex flex-col ">
        <div className="w-[100%] gap-y-5  flex flex-col leading-snug">
          <h1 className=" mainTag text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
            Let's get in touch!
          </h1>

          <p className="mainTag text-xs sm:text-sm md:text-base lg:text-lg font-thin w-full sm:w-[70%] text-justify">
            Thank you for taking the time to visit my portfolio. If you have any
            questions or would like to discuss potential projects, please feel
            free to get in touch with me using the contact information.
          </p>
          <p className="mainTag text-xl font-thin"></p>
        </div>
        <div className="mainTag justify-center w-full sm:w-[500px]  items-center  rounded flex">
          <div className="w-full bg-stone-800 bg-opacity-40 h-max p-8 rounded border border-stone-700  shadow-md">
            <form className=" grid grid-cols-2 items-center gap-x-5 gap-y-5">
              <div className="flex flex-col gap-y-1">
                <label className=" text-sm">First Name</label>
                <input className="w-full p-2 font-light  text-sm rounded bg-stone-700 bg-opacity-40 focus:outline-none"></input>
              </div>
              <div className="flex flex-col gap-y-1">
                <label className=" text-sm">Last Name</label>
                <input className="w-full p-2 font-light  text-sm rounded bg-stone-700 bg-opacity-40 focus:outline-none"></input>
              </div>
              <div className="flex flex-col gap-y-1">
                <label className=" text-sm">Your E-mail</label>
                <input
                  type="mail"
                  className="w-full font-light  text-sm p-2 rounded bg-stone-700 bg-opacity-40 focus:outline-none"
                ></input>
              </div>
              <div className="flex flex-col gap-y-1">
                <label className=" text-sm">Phone Number</label>
                <input className="w-full font-light p-2 text-sm rounded bg-stone-700 bg-opacity-40 focus:outline-none"></input>
              </div>
              <div className="col-span-2 flex flex-col gap-y-1 ">
                <label className="  text-sm ">Your Message</label>
                <textarea
                  rows="6"
                  className="w-full font-light   text-sm resize-none focus:outline-none p-2 bg-stone-700 bg-opacity-40 rounded"
                ></textarea>
              </div>
              <div className=" col-span-2 flex justify-end">
                <p className="pl-6 pr-6 pt-1 pb-1 font-light shadow-md cursor-pointer bg-sky-600 w-max rounded ">
                  Send
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-stone-800 bg-opacity-40 w-full h-10 z-20 items-center flex justify-center">
        <h1 className="text-xs container w-full text-center font-thin">
          Can Altun - All rights reserved
        </h1>
      </div>
    </div>
  );
};

export default Contact;
