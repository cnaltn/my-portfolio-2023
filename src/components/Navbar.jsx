import React from "react";
import CV from "../../public/Can_Altun_CV_2023.pdf";

const Navbar = () => {
  return (
    <div className="text-white tracking-tight z-50 bg-stone-900 shadow-xl bg-opacity-20 flex z-99 h-14 w-full fixed">
      <div className="flex items-center justify-between  container">
        <div className="flex  items-center gap-x-12">
          <div className="flex items-center">
            <h1 className=" ">
              <span className="text-2xl  md:text-3xl font-medium">Can</span>{" "}
              <span className="text-2xl md:text-3xl font-extralight">
                Altun
              </span>
            </h1>
          </div>
          <div>
            <ul className="hidden lg:flex items-center gap-x-5 font-thin ">
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
        <div className="md:flex items-center gap-x-4 hidden">
          <a
            href={CV}
            download
            className="bg-sky-600 rounded pb-1 pt-1 pl-3 pr-3 cursor-pointer font-thin"
          >
            Download My CV
          </a>
          <a
            href="#contact"
            className="bg-amber-600 rounded pb-1 pt-1 pl-3 pr-3 cursor-pointer font-thin"
          >
            Hire Me!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
