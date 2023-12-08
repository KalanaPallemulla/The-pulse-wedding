import Link from "next/link";
import React from "react";

const Services = () => {
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
        <div className="bg-white rounded-2xl shadow-md flex flex-col md:mt-10  mt-5  text-center items-center md:mx-5 mx-10">
          <img
            className="w-full rounded-t-xl transition-transform transform delay-150 hover:scale-105"
            src="assests/weddings.png"
            alt="My Image"
          />
          <h1 className="font-mulish-extraBold text-fonts-light_black md:text-2xl text-base md:mt-5 mt-5 ">
            WEDDINGS
          </h1>
          <h1 className="font-mulish-semiBold text-fonts-light_gray md:text-sm text-[9px] uppercase md:px-6 px-6 md:mt-2 mt-[6px] ">
            Every love story is unique and should be described in its own
            special way. We are happy to add something special to your day of
            celebration
          </h1>
          <Link
            href="https://drive.google.com/drive/folders/1xeU9IuY1hPxP6WVfrqZnYbeJSWIBRrHg?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-background_custom-button_white rounded-2xl md:mt-10 md:mb-7 md:h-[40px] md:w-[250px] w-[175px] h-[36px] font-mulish-extraBold text-fonts-dark_gray md:text-lg text-[9px] mt-6 mb-4">
              VIEW PACKAGE DETAILS
            </button>
          </Link>
        </div>
        <div className="bg-white rounded-2xl shadow-md flex flex-col md:mt-10  mt-5  text-center items-center md:mx-5 mx-10">
          <img
            className="w-full rounded-t-xl transition-transform transform delay-150 hover:scale-105"
            src="assests/engagements.png"
            alt="My Image"
          />
          <h1 className="font-mulish-extraBold text-fonts-light_black md:text-2xl text-base md:mt-5 mt-5 ">
            ENGAGEMENTS
          </h1>
          <h1 className="font-mulish-semiBold text-fonts-light_gray md:text-sm text-[9px] uppercase md:px-6 px-6 md:mt-2 mt-[6px] ">
            A photoshoot is a wonderful way to remember the lovely time that you
            both had during your engagement And Bringing joy and love to life
            one frame at a time
          </h1>
          <Link
            href="https://drive.google.com/file/d/1P305B4NUYTnCvhaT1dssh_43Vpmk__5p/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-background_custom-button_white rounded-2xl md:mt-10 md:mb-7 md:h-[40px] md:w-[250px] w-[175px] h-[36px] font-mulish-extraBold text-fonts-dark_gray md:text-lg text-[9px] mt-6 mb-4">
              VIEW PACKAGE DETAILS
            </button>
          </Link>
        </div>
        <div className="bg-white rounded-2xl shadow-md flex flex-col md:mt-10  mt-5  text-center items-center md:mx-5 mx-10">
          <img
            className="w-full rounded-t-xl transition-transform transform delay-150 hover:scale-105"
            src="assests/casualShoots.png"
            alt="My Image"
          />
          <h1 className="font-mulish-extraBold text-fonts-light_black md:text-2xl text-base md:mt-5 mt-5 ">
            CASUAL SHOOTS
          </h1>
          <h1 className="font-mulish-semiBold text-fonts-light_gray md:text-sm text-[9px] uppercase md:px-6 px-6 md:mt-2 mt-[6px] ">
            A excellent method to get over your worry and nervousness about
            being in front of the camera on your wedding day is to do casual
            shoots celebration
          </h1>
          <Link
            href="https://drive.google.com/file/d/1P305B4NUYTnCvhaT1dssh_43Vpmk__5p/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-background_custom-button_white rounded-2xl md:mt-10 md:mb-7 md:h-[40px] md:w-[250px] w-[175px] h-[36px] font-mulish-extraBold text-fonts-dark_gray md:text-lg text-[9px] mt-6 mb-4">
              VIEW PACKAGE DETAILS
            </button>
          </Link>
        </div>
        {/* <div className=" bg-white rounded-xl shadow-md mx-1 flex flex-col md:md:mt-10  mt-5  text-center items-center md:mx-5 ">
              <img
                className="w-full rounded-t-xl"
                src="assests/engagements.png"
                alt="My Image"
              />
              <h1 className="font-mulish-extraBold text-fonts-light_black text-2xl md:mt-5">
                ENGAGEMENTS
              </h1>
              <h1 className="font-mulish-semiBold text-fonts-light_gray text-sm uppercase md:px-6 md:mt-2">
                A photoshoot is a wonderful way to remember the lovely time that
                you both had during your engagement And Bringing joy and love to
                life one frame at a time
              </h1>
              <Link
                href="https://drive.google.com/file/d/1P305B4NUYTnCvhaT1dssh_43Vpmk__5p/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-background_custom-button_white rounded-2xl md:mt-10 md:mb-7 md:h-[40px] md:w-[250px] font-mulish-extraBold text-fonts-dark_gray">
                  VIEW PACKAGE DETAILS
                </button>
              </Link>
            </div>
            <div className=" bg-white rounded-xl shadow-md mx-1 flex flex-col md:mt-10  mt-5 text-center items-center md:mx-5 ">
              <img
                className="w-full rounded-t-xl"
                src="assests/casualShoots.png"
                alt="My Image"
              />
              <h1 className="font-mulish-extraBold text-fonts-light_black text-2xl  md:mt-5">
                CASUAL SHOOTS
              </h1>
              <h1 className="font-mulish-semiBold text-fonts-light_gray text-sm uppercase md:px-6 md:mt-2">
                A excellent method to get over your worry and nervousness about
                being in front of the camera on your wedding day is to do casual
                shoots celebration
              </h1>
              <Link
                href="https://drive.google.com/file/d/1P305B4NUYTnCvhaT1dssh_43Vpmk__5p/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-background_custom-button_white rounded-2xl md:mt-10 md:mb-7 md:h-[40px] md:w-[250px] font-mulish-extraBold text-fonts-dark_gray">
                  VIEW PACKAGE DETAILS
                </button>
              </Link>
            </div> */}
      </div>
    </>
  );
};

export default Services;