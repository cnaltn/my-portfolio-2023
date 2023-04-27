import React, { useEffect } from "react";
import img1 from "../../public/skill.jpg";
import ScrollReveal from "scrollreveal";

const MySkills = () => {
  useEffect(() => {
    ScrollReveal().reveal(".secondTag", {
      // delay: 100,
      reset: true,
      duration: 1200,
    });
  });

  return (
    <div className="h-screen flex" id="skills">
      <div className="container items-center z-20 flex lg:gap-x-5">
        <div className="w-full lg:w-[60%] gap-y-5 flex flex-col leading-snug">
          <h1 className="secondTag text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold ">
            My Skills
          </h1>

          <p className="secondTag text-xs sm:text-sm md:text-base lg:text-lg font-thin text-justify">
            As a developer with experience in web development, I have a strong
            technical skill set that enables me to create efficient and
            effective solutions. Here are some of the key technical skills that
            I possess
          </p>
          <div className="secondTag flex flex-col gap-y-2">
            <p className="font-thin md:text-base text-md">HTML</p>
            <div className="w-full h-4 md:h-6 bg-gray-700 rounded">
              <div className=" w-[90%] h-4 md:h-6 bg-orange-400 rounded items-center flex ">
                <span className="pr-2 text-right w-full md:text-base text-xs font-semibold">
                  90%
                </span>
              </div>
            </div>
          </div>
          <div className="secondTag flex flex-col gap-y-2">
            <p className="font-thin md:text-base text-md">CSS</p>
            <div className="w-full h-4 md:h-6 bg-gray-700 rounded">
              <div className=" w-[90%] h-4 md:h-6 bg-orange-400 rounded items-center flex ">
                <span className="pr-2 text-right w-full md:text-base text-xs font-semibold">
                  90%
                </span>
              </div>
            </div>
          </div>
          <div className="secondTag flex flex-col gap-y-2">
            <p className="font-thin md:text-base text-md">JavaScript</p>
            <div className="w-full h-4 md:h-6 bg-gray-700 rounded">
              <div className=" w-[80%] h-4 md:h-6 bg-orange-400 rounded items-center flex ">
                <span className="pr-2 text-right w-full md:text-base text-xs font-semibold">
                  80%
                </span>
              </div>
            </div>
          </div>
          <div className="secondTag flex flex-col gap-y-2">
            <p className="font-thin md:text-base text-md">ReactJS</p>
            <div className="w-full h-4 md:h-6 bg-gray-700 rounded">
              <div className=" w-[80%] h-4 md:h-6 bg-orange-400 rounded items-center flex ">
                <span className="pr-2 text-right w-full md:text-base text-xs font-semibold">
                  80%
                </span>
              </div>
            </div>
          </div>
          <div className="secondTag flex flex-col gap-y-2">
            <p className="font-thin md:text-base text-md">NodeJS</p>
            <div className="w-full h-4 md:h-6 bg-gray-700 rounded">
              <div className=" w-[75%] h-4 md:h-6 bg-orange-400 rounded items-center flex ">
                <span className="pr-2 text-right w-full md:text-base text-xs font-semibold">
                  75%
                </span>
              </div>
            </div>
          </div>
          <div className="secondTag flex flex-col gap-y-2">
            <p className="font-thin md:text-base text-md">MongoDB</p>
            <div className="w-full h-4 md:h-6 bg-gray-700 rounded">
              <div className=" w-[75%] h-4 md:h-6 bg-orange-400 rounded items-center flex ">
                <span className="pr-2 text-right w-full md:text-base text-xs font-semibold">
                  75%
                </span>
              </div>
            </div>
          </div>
          <div className="secondTag flex flex-col gap-y-2">
            <p className="font-thin md:text-base text-md">Firebase</p>
            <div className="w-full h-4 md:h-6 bg-gray-700 rounded">
              <div className=" w-[85%] h-4 md:h-6 bg-orange-400 rounded items-center flex ">
                <span className="pr-2 text-right w-full md:text-base text-xs font-semibold">
                  85%
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-0 lg:w-[40%] justify-end  items-center  flex">
          <img
            src={img1}
            className="secondTag w-[420px] rounded shadow-sm"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
