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
          <h1 className=" mainTag text-big md:text-biggest font-bold">
            Let's get in touch!
          </h1>

          <p className="mainTag text-small md:text-normal font-thin w-full sm:w-[70%] text-justify">
            Thank you for taking the time to visit my portfolio. If you have any
            questions or would like to discuss potential projects, please feel
            free to get in touch with me using the contact information.
          </p>
          <p className="mainTag text-xl font-thin"></p>
        </div>
        <div className="mainTag justify-center  w-full sm:w-[500px]  items-center  rounded flex">
          <div className="w-full bg-stone-800 bg-opacity-40 h-max p-4 md:p-8 rounded border border-stone-700  shadow-md">
            <form className=" grid grid-cols-2 items-center gap-x-5 gap-y-5">
              <div className="flex flex-col gap-y-1">
                <label className=" text-small">First Name</label>
                <input className="w-full p-1 font-light  text-small rounded bg-stone-700 bg-opacity-40 focus:outline-none"></input>
              </div>
              <div className="flex flex-col gap-y-1">
                <label className=" text-small">Last Name</label>
                <input className="w-full p-1 font-light  text-small rounded bg-stone-700 bg-opacity-40 focus:outline-none"></input>
              </div>
              <div className="flex flex-col gap-y-1">
                <label className=" text-small">Your E-mail</label>
                <input
                  type="mail"
                  className="w-full font-light  text-small p-1 rounded bg-stone-700 bg-opacity-40 focus:outline-none"
                ></input>
              </div>
              <div className="flex flex-col gap-y-1">
                <label className=" text-small">Phone Number</label>
                <input className="w-full font-light p-1 text-small rounded bg-stone-700 bg-opacity-40 focus:outline-none"></input>
              </div>
              <div className="col-span-2 flex flex-col gap-y-1 ">
                <label className="  text-small ">Your Message</label>
                <textarea
                  rows="5"
                  className="w-full font-light   text-small resize-none focus:outline-none p-2 bg-stone-700 bg-opacity-40 rounded"
                ></textarea>
              </div>
              <div className=" col-span-2 flex justify-end">
                <p className="pl-4 pr-4 pt-1 pb-1 font-light text-small shadow-md cursor-pointer bg-sky-600 w-max rounded ">
                  Send
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-stone-800 bg-opacity-40 w-full h-10 z-20 items-center flex justify-center">
        <h1 className="text-normal container w-full text-center font-thin">
          <span className="font-semibold">Can</span> Altun
        </h1>
      </div>
    </div>
  );
};

export default Contact;
