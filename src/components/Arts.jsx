import React, { useEffect } from "react";
import portfolio from "../../public/pr.jpg";
import ScrollReveal from "scrollreveal";
import CV from "../../public/Can_Altun_CV_2023.pdf";

const Arts = () => {
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
    <div className="h-screen w-full flex " id="who">
      <div className="container justify-center gap-y-10 lg:gap-y-0 items-center flex flex-col-reverse lg:flex-row  z-20 gap-x-5">
        <div className="w-full lg:w-[60%] gap-y-5 flex flex-col leading-snug">
          <h1 className="mainTag text-big md:text-biggest font-bold">
            Who am I
          </h1>

          <p className="pTag text-small md:text-[0.938rem] font-thin text-justify ">
            My name is Can Altun. I am a driven and motivated individual with a
            passion for technology and software development. With over 3 years
            of experience in front-end development and 1.5 years in back-end
            development, I possess a deep understanding of a range of
            technologies, including ReactJs, NodeJs, JavaScript, HTML5, CSS,
            MongoDB, Firebase, and more.
          </p>
          <p className="pTag hidden md:flex text-[0.938rem] font-thin text-justify ">
            Furthermore, I have a solid grasp of Linux/Kali security
            engineering, which has allowed me to develop a deep appreciation for
            the importance of security in the development process.
          </p>
          <p className="pTag hidden md:flex text-[0.938rem] font-thin text-justify pb-3">
            Additionally, I have a strong command of the English language, with
            a proficiency level of B2 (intermediate). I am constantly seeking
            new challenges and opportunities to further my knowledge and skill
            set, and I am excited to see where my career will take me next.
          </p>
          <a
            href={CV}
            target="_blank"
            className="bTag text-[0.813rem] cursor-pointer bg-amber-600 font-light w-max p-2 rounded"
          >
            Download My CV
          </a>
        </div>
        <div className=" w-[60%] md:w-[40%] justify-center md:justify-end  items-center   flex">
          <img
            className="imgTag z-10 w-[320px]  rounded-full "
            src={portfolio}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Arts;
