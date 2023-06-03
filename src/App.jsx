import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Works from "./components/Works";
import Arts from "./components/Arts";
import Navbar from "./components/Navbar";
import MySkills from "./components/MySkills";
import video2 from "../public/cc2.mp4";
import Maintenance from "./components/Maintenance";

const App = () => {
  const [count, setCount] = useState(0);
  const [maintenance, isMaintenance] = useState(false);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API

    console.log(count);
  });

  return (
    <div className="">
      <div className="fixed top-0 left-0 w-full  opacity-100 brightness-[25%] hue-rotate-[0deg] z-10">
        <video
          className="bg-video__content object-cover object-left  h-screen w-full"
          autoPlay={true}
          loop
          muted
        >
          <source src={video2} type="video/mp4" />
        </video>
      </div>

      <section className="h-screen text-white">
        <div>
          {maintenance !== false ? <Maintenance></Maintenance> : ""}
          <div className={maintenance === true ? "hidden" : ""}>
            <Navbar></Navbar>
            <Hero></Hero>
            <Arts></Arts>
            <MySkills></MySkills>
            <Works></Works>

            <Contact></Contact>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
