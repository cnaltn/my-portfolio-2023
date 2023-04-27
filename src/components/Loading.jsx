import React from "react";

const Loading = () => {
  return (
    <div className="h-screen w-full flex " id="home">
      <div className="container items-center flex z-20 gap-x-5">
        <div className="w-full  gap-y-3 flex flex-col leading-snug">
          <h1 className="mainTag text-3xl text-center animate-pulse sm:text-6xl lg:text-8xl font-bold">
            Loading
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Loading;
