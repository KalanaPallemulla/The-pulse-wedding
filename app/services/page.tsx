"use client";
import Link from "next/link";
import React from "react";

const Services = () => {
  const openGoogleWedding = () => {
    window.open(
      "https://drive.google.com/drive/folders/1xeU9IuY1hPxP6WVfrqZnYbeJSWIBRrHg?usp=sharing",
      "_blank"
    );
  };
  const openGoogleEngagment = () => {
    window.open(
      "https://drive.google.com/drive/folders/1xeU9IuY1hPxP6WVfrqZnYbeJSWIBRrHg?usp=sharing",
      "_blank"
    );
  };

  return (
    <>
      <h1 className="font-mulish-black text-fonts-light_black md:text-4xl 2xl:text-5xl text-xl text-center md:mt-14 2xl:mt-20 mt-[22px] ">
        WHAT WE OFFER
      </h1>
      <h1 className="md:mt-4 font-mulish-boldItalic text-fonts-light_gray_2 text-center uppercase md:text-sm 2xl:text-lg text-[8px] mt-3">
        Drawing from 5 years of experience capturing celebrations across the
        island, our dedicated team is committed to making your special day the
        best it can be. We ensure your joy-filled moments are preserved in
        photos, reflecting the beauty and happiness of your unique celebration.
      </h1>

      <div className="md:grid md:grid-cols-3">
        <div className="bg-white rounded-2xl shadow-md flex flex-col md:mt-10 mt-5 text-center items-center lg:mx-5 md:mx-2 mx-10">
          <img
            className="w-full rounded-t-xl transition-transform transform delay-150 hover:scale-105"
            src="assests/weddings.png"
            alt="My Image"
            onClick={openGoogleWedding}
          />
          <h1 className="font-mulish-extraBold text-fonts-light_black md:text-lg text-base md:mt-5 mt-5 ">
            WEDDINGS
          </h1>
          <h1 className="font-mulish-semiBold text-fonts-light_gray lg:text-sm md:text-[10px] text-[9px] uppercase md:px-6 px-6 md:mt-2 mt-[6px] md:max-h-[96px]">
            Every love story is unique and should be described in its own
            special way. We are happy to add something special to your day of
            celebration
          </h1>
          <Link
            href="https://drive.google.com/drive/folders/1xeU9IuY1hPxP6WVfrqZnYbeJSWIBRrHg?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-background_custom-button_white rounded-full md:mt-10 md:mb-7 py-2 px-3 font-mulish-extraBold text-fonts-dark_gray 2xl:text-lg lg:text-base md:text-xs text-[7px] mt-6 mb-4">
              VIEW PACKAGE DETAILS
            </button>
          </Link>
        </div>
        <div className="bg-white rounded-2xl shadow-md flex flex-col md:mt-10  mt-5  text-center items-center lg:mx-5 md:mx-2 mx-10">
          <div className="w-full">
            <img
              className="w-full rounded-t-xl transition-transform transform delay-150 hover:scale-105"
              src="assests/engagements.png"
              alt="My Image"
              onClick={openGoogleEngagment}
            />
          </div>
          <h1 className="font-mulish-extraBold text-fonts-light_black md:text-lg text-base md:mt-5 mt-5 ">
            ENGAGEMENTS
          </h1>
          <h1 className="font-mulish-semiBold text-fonts-light_gray lg:text-sm md:text-[10px] text-[9px] uppercase md:px-6 px-6 md:mt-2 mt-[6px] md:max-h-[96px] ">
            A photoshoot is a wonderful way to remember the lovely time that you
            both had during your engagement And Bringing joy and love to life
            one frame at a time
          </h1>
          <Link
            href="https://drive.google.com/file/d/1P305B4NUYTnCvhaT1dssh_43Vpmk__5p/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-background_custom-button_white rounded-full md:mt-10 md:mb-7 py-2 px-3 font-mulish-extraBold text-fonts-dark_gray 2xl:text-lg lg:text-base md:text-xs text-[7px] mt-6 mb-4 bottom-2 right-2">
              VIEW PACKAGE DETAILS
            </button>
          </Link>
        </div>
        <div className="bg-white rounded-2xl shadow-md flex flex-col md:mt-10  mt-5  text-center items-center lg:mx-5 md:mx-2 mx-10">
          <img
            className="w-full rounded-t-xl transition-transform transform delay-150 hover:scale-105"
            src="assests/casualShoots.png"
            alt="My Image"
            onClick={openGoogleEngagment}
          />
          <h1 className="font-mulish-extraBold text-fonts-light_black md:text-lg text-base md:mt-5 mt-5 ">
            CASUAL SHOOTS
          </h1>
          <h1 className="font-mulish-semiBold text-fonts-light_gray lg:text-sm md:text-[10px] text-[9px] uppercase md:px-6 px-6 md:mt-2 mt-[6px] md:max-h-[96px]">
            A excellent method to get over your worry and nervousness about
            being in front of the camera on your wedding day is to do casual
            shoots celebration
          </h1>
          <Link
            href="https://drive.google.com/file/d/1P305B4NUYTnCvhaT1dssh_43Vpmk__5p/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-background_custom-button_white rounded-full md:mt-10 md:mb-7 py-2 px-3 font-mulish-extraBold text-fonts-dark_gray 2xl:text-lg lg:text-base md:text-xs text-[7px] mt-6 mb-4">
              VIEW PACKAGE DETAILS
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Services;
