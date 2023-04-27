import React, { useEffect } from "react";
import Navbar from "./Navbar";
import gandalf from "../../public/22.jpg";
import ScrollReveal from "scrollreveal";

const Hero = () => {
  useEffect(() => {
    ScrollReveal().reveal(".mainTag", {
      reset: true,
      // delay: 200,
      duration: 1200,
    });
    ScrollReveal().reveal(".pTag", { reset: true, duration: 1200 });
    ScrollReveal().reveal(".bTag", { reset: true, duration: 1200 });
    ScrollReveal().reveal(".imgTag", {
      reset: true,
      //delay: 200,
      duration: 1200,
    });
  });

  return (
    <div className="h-screen w-full flex " id="home">
      <div className="container items-center flex z-20 lg:gap-x-5">
        <div className="w-full lg:w-[60%] gap-y-3 flex flex-col leading-snug">
          <h1 className="mainTag text-3xl sm:text-6xl lg:text-8xl font-bold">
            Think. Make. Solve.
          </h1>

          <p className="pTag text-xs sm:text-sm md:text-base lg:text-lg font-thin text-justify pb-3">
            Welcome to my Portfolio! Here, you will find a collection of some of
            my recent projects that showcase my skills as a Front-end / Back-end
            developer. As a Jr. full stack developer, I am passionate about
            creating seamless and intuitive experiences for users.
          </p>
          <a
            href="#who"
            className="bTag text-xs sm:text-sm lg:text-base bg-amber-600 font-light w-max p-2 rounded "
          >
            About Me
          </a>
        </div>
        <div className="w-0 lg:w-[40%] justify-end  items-center  rounded flex">
          <img
            className="imgTag z-10 w-[420px] rounded lg:flex hidden"
            src={gandalf}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
