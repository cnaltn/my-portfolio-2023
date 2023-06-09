import React, { useEffect, Component } from "react";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web6 from "../../public/web6.png";
import ScrollReveal from "scrollreveal";
import { Link } from "react-router-dom";

import Slider from "react-slick";

const Works = () => {
  useEffect(() => {
    ScrollReveal().reveal(".mainTag", {
      reset: true,
      // delay: 200,
      duration: 1200,
    });
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className=" xl:h-screen flex mb-24 lg:mb-0" id="works">
      <div className=" container justify-center z-20 items-center flex flex-col gap-y-12">
        <div className="w-full gap-y-5 flex flex-col leading-snug ">
          <h1 className="mainTag text-big md:text-biggest font-bold w-full lg:w-[70%]">
            A Selection of My Works
          </h1>

          <p className="mainTag text-small md:text-normal text-justify  font-thin w-full lg:w-[70%]">
            As a creative professional, I have had the privilege of working on a
            variety of projects that have allowed me to showcase my skills and
            passion. Here is a selection of some of my recent demo / full works
          </p>
        </div>
        <div className="w-full items-center  rounded flex">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 ">
            <Link
              className=" flex h-max"
              to="https://aliminarium.netlify.app"
              target="_blank"
            >
              <div className="mainTag gap-y-4 bg-stone-800 border flex flex-col  border-stone-700 bg-opacity-40  pl-5 pr-5 pt-5 pb-5 hover:scale-105 transition duration-300 shadow-xl rounded">
                <img className=" flex rounded " src={web1}></img>
                <div className="pt-2 gap-y-2 flex flex-col">
                  <h2 className="text-h3">Aliminarium</h2>
                  <p className=" text-smallest text-justify font-[300]">
                    Aliminarium is a brand that specializes in creating
                    high-quality products made from aluminum.
                  </p>
                </div>
                <div className="flex  text-smallest font-thin gap-x-2 h-full items-end">
                  <p className=" text-emerald-300 ">#vue.js</p>
                  <p className=" text-sky-300 ">#tailwind.css</p>
                  <p className=" text-yellow-300 ">#javascript</p>
                </div>
              </div>
            </Link>
            <Link
              className=" flex h-max"
              to="https://canguitar.netlify.app"
              target="_blank"
            >
              <div className="mainTag gap-y-4 bg-stone-800 border flex flex-col  border-stone-700 bg-opacity-40  pl-5 pr-5 pt-5 pb-5  hover:scale-105 transition duration-300 shadow-xl rounded">
                <img className=" flex rounded " src={web2}></img>
                <div className="pt-2 gap-y-2 flex flex-col">
                  <h2 className="text-h3">Rhythm (Front-end Demo)</h2>
                  <p className=" text-smallest text-justify font-[300]">
                    Memovigation is a brand that aims to simplify the delivery
                    process for businesses and individuals alike.
                  </p>
                </div>
                <div className="flex  text-smallest font-thin gap-x-2 h-full items-end">
                  <p className=" text-emerald-300 ">#next.js</p>
                  <p className=" text-sky-300 ">#tailwind.css</p>
                  <p className=" text-yellow-300 ">#javascript</p>
                </div>
              </div>
            </Link>
            <Link
              className="flex h-max"
              to="https://memovigation.netlify.app"
              target="_blank"
            >
              <div className="mainTag gap-y-4 bg-stone-800 border flex flex-col h-full border-stone-700 bg-opacity-40  p-5  hover:scale-105 transition duration-300 shadow-xl rounded">
                <img className="w-full flex rounded " src={web3}></img>
                <div className="pt-2 gap-y-2 flex flex-col">
                  <h2 className="text-h3">Memovigation (Front-end Demo)</h2>
                  <p className=" text-smallest text-justify font-[300]">
                    Memovigation is a brand that aims to simplify the delivery
                    process for businesses and individuals alike.
                  </p>
                </div>
                <div className="flex  text-smallest font-thin gap-x-2 h-full items-end">
                  <p className=" text-emerald-300 ">#html</p>
                  <p className=" text-sky-300 ">#css</p>
                  <p className=" text-yellow-300 ">#javascript</p>
                </div>
              </div>
            </Link>
            {/* <Link
              className="w-max flex h-[350px]"
              to="https://hediyeosmanli.netlify.app"
              target="_blank"
            >
              <div className="mainTag bg-stone-800 border flex flex-col h-full border-stone-700 bg-opacity-40  pl-5 pr-5 pt-5 pb-5 w-[245px] hover:scale-105 transition duration-300 shadow-xl rounded">
                <img className="w-full flex rounded " src={web4}></img>
                <div className="pt-2 gap-y-2 flex flex-col">
                  <h2 className="text-h3">TLRH (Front-end Project)</h2>
                  <p className=" text-smallest text-justify font-[300]">
                    TLRH is a brand that specializes in creating unique and
                    innovative NFTs (Non-Fungible Tokens).
                  </p>
                </div>
                <div className="flex text-smallest font-thin gap-x-2 h-full items-end">
                  <p className=" text-emerald-300 ">#react.js</p>
                  <p className=" text-sky-300 ">#tailwind.css</p>
                  <p className=" text-yellow-300 ">#javascript</p>
                </div>
              </div>
            </Link> */}
            {/* <Link
              className="w-max flex h-[350px]"
              to="https://hediyeosmanli.netlify.app"
              target="_blank"
            >
              <div className="mainTag bg-stone-800 border flex flex-col h-full border-stone-700 bg-opacity-40  pl-5 pr-5 pt-5 pb-5 w-[245px] hover:scale-105 transition duration-300 shadow-xl rounded">
                <img className="w-full flex rounded " src={web6}></img>
                <div className="pt-2 gap-y-2 flex flex-col">
                  <h2 className="text-h3">
                    Hediye Osmanlı (Full Stack Project)
                  </h2>
                  <p className=" text-smallest text-justify font-[300]">
                    Hediye Osmanlı is a brand that specializes in beauty
                    treatments and services.
                  </p>
                </div>
                <div className="flex  text-smallest font-thin gap-x-2 h-full items-end">
                  <p className=" text-emerald-300 ">#react.js</p>
                  <p className=" text-sky-300 ">#tailwind.css</p>
                  <p className=" text-yellow-300 ">#javascript</p>
                </div>
                <div className="flex  text-smallest font-thin gap-x-2  items-end">
                  <p className=" text-indigo-300 ">#node.js</p>
                  <p className=" text-rose-300 ">#firebase</p>
                </div>
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
