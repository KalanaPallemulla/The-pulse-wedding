import React from "react";

const OurWork = () => {
  return (
    <>
      <h1 className="font-mulish-black text-fonts-light_black md:text-4xl text-xl text-center md:mt-14 mt-9">
        OUR AMAZING WORK
      </h1>
      <h1 className="md:mt-4 mt-4 font-mulish-boldItalic text-fonts-light_gray_2 text-center uppercase md:text-sm 2xl:text-lg text-[8px]">
        We aim to capture the essence of your relationship, including the way
        your faces and hands join together. We want to capture the joyous
        moments, the heartfelt laughs, and everything in between
      </h1>
      <div className="md:grid md:grid-cols-2 md:mt-8 hidden">
        <div className="md:grid md:grid-cols-2 ">
          <div className="md:grid md:grid-row-3">
            <div className="md:grid md:grid-row-2 md:pl-3">
              <img
                className="bg-blend-screen block lg:w-full transition-transform transform delay-150 hover:scale-105"
                src="assests/ourWorks/im1.jpg"
                alt="My Image"
              />
            </div>

            <img
              className="bg-blend-screen block md:pl-3 lg:w-full md:h-full transition-transform transform delay-150 hover:scale-105"
              src="assests/ourWorks/im2.jpg"
              alt="My Image"
            />
          </div>
          <div className="md:grid md:grid-row-3 md:pl-3 ">
            <img
              className="bg-blend-screen block lg:w-full transition-transform transform delay-150 hover:scale-105"
              src="assests/ourWorks/im3.png"
              alt="My Image"
            />
            <img
              className="bg-blend-screen block md:mt-5 lg:w-full transition-transform transform delay-150 hover:scale-105"
              src="assests/ourWorks/im4.jpg"
              alt="My Image"
            />

            <img
              className="bg-blend-screen block md:mt-5 lg:w-full transition-transform transform delay-150 hover:scale-105"
              src="assests/ourWorks/im5.png"
              alt="My Image"
            />
          </div>
        </div>
        <div className="md:grid md:grid-cols-2">
          <div className="md:grid md:grid-row-3 ">
            <img
              className="bg-blend-screen block md:pl-3 lg:w-full transition-transform transform delay-150 hover:scale-105"
              src="assests/ourWorks/im6.jpg"
              alt="My Image"
            />
            <div className="md:grid md:grid-row-2 md:pl-3">
              <img
                className="bg-blend-screen block lg:w-full md:h-full transition-transform transform delay-150 hover:scale-105"
                src="assests/ourWorks/im7.jpg"
                alt="My Image"
              />
            </div>
          </div>
          <img
            className="bg-blend-screen block md:pl-3 h-full lg:w-full transition-transform transform delay-150 hover:scale-105"
            src="assests/ourWorks/im8.png"
            alt="My Image"
          />
        </div>
      </div>
      <div className="block md:hidden mt-5">
        <img
          className="bg-blend-screen block "
          src="assests/ourWorks/amazing.png"
          alt="My Image"
        />
      </div>
    </>
  );
};

export default OurWork;
