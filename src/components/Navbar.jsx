import React from "react";
import CV from "../../public/Can_Altun_CV_2023.pdf";

const Navbar = () => {
  return (
    <div className="text-white tracking-tight z-50 bg-stone-800 shadow-xl bg-opacity-30 flex z-99 h-[3rem] md:h-[4rem] w-full fixed">
      <div className="flex items-center justify-between  container">
        <div className="flex  items-center gap-x-12">
          <div className="flex items-center">
            <h1 className=" ">
              <span className="text-h2 md:text-big font-medium">Can</span>{" "}
              <span className="text-h2 md:text-big md:text-3xl font-extralight">
                Altun
              </span>
            </h1>
          </div>
          <div>
            <ul className="hidden lg:flex text-normal items-center gap-x-5 font-thin ">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#who">About Me</a>
              </li>
              <li>
                <a href="#skills">My Skills</a>
              </li>
              <li>
                <a href="#works">Works</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:flex text-normal items-center gap-x-4 hidden">
          <a
            href={CV}
            download
            className="bg-sky-600 rounded p-2 cursor-pointer font-thin"
          >
            Download My CV
          </a>
          <a
            href="#contact"
            className="bg-amber-600 rounded p-2 cursor-pointer font-thin"
          >
            Hire Me!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
