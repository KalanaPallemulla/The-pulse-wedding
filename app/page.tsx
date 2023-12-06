import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  return (
    <main>
      <nav className="top-0 w-full">
        <div className="hidden md:block">
          <div className="flex justify-between md:px-14  ">
            <div className=" ">
              <img src="assests/logo.png" alt="My Image" />
            </div>
            <div className="w-full flex items-center justify-end gap-x-10">
              <h1 className="font-mulish-extraBold text-fonts-light_gray_2 cursor-pointer md:text-base">
                HOME
              </h1>
              <h1 className="font-mulish-extraBold text-fonts-light_gray_2 cursor-pointer md:text-base">
                ABOUT US
              </h1>
              <h1 className="font-mulish-extraBold text-fonts-light_gray_2 cursor-pointer md:text-base">
                SERVICES
              </h1>
              <h1 className="font-mulish-extraBold text-fonts-light_gray_2 cursor-pointer md:text-base">
                OUR WORK
              </h1>
              <h1 className="font-mulish-extraBold text-fonts-light_gray_2 cursor-pointer md:text-base">
                CONTACT
              </h1>
            </div>
          </div>
        </div>
      </nav>
      <div className="md:px-14 px-7">
        <div className="md:grid md:grid-cols-2">
          <div className="flex flex-col justify-center items-center md:items-start md:pl-4">
            <img
              className="bg-blend-screen block lg:w-full"
              src="assests/homeImage1.png"
              alt="My Image"
            />
          </div>
          <div className="md:grid md:grid-flow-row-2 md:px-4">
            <img
              className="bg-blend-screen block lg:w-full "
              src="assests/homeImage2.png"
              alt="My Image"
            />

            <img
              className="bg-blend-screen block lg:w-full md:mt-2"
              src="assests/homeImage3.png"
              alt="My Image"
            />
          </div>
        </div>
        <h1 className="font-mulish-boldItalic text-fonts-light_gray_2 text-sm md:mt-7 text-center uppercase">
          We at Pulse Weddings look forward to making your special day a truly
          special one. We guarantee you a worry-free, carefree and fun
          experience with an amazing crew. Capturing the perfect poise or smile
          can only be done by having a smile
        </h1>
        <div className="md:grid md:grid-cols-2 md:mt-11">
          <img
            className="bg-blend-screen block md:pl-4 px-2 "
            src="assests/aboutUsImage.png"
            alt="My Image"
          />
          <div className="">
            <h1 className="font-mulish-black text-fonts-light_black text-4xl">
              THE
            </h1>
            <span className="font-mulish-black text-fonts-light_black text-4xl">
              PULSE WEDDINGS
            </span>
            <h1 className="font-mulish-regular text-fonts-light_gray_2 md:mt-4 md:text-[17px] text-justify">
              As a group of enthusiastic photographers, we at The Pulse Weddings
              feel blessed to have the opportunity to pursue our love as a
              career. We are mesmerised by elegant brides, soft lighting,
              natural settings and bubbly personalities of the bride and groom.
              We are the expert artisans who turn the beating heart of your
              wedding day into visual timepieces. Hearing your stories and
              vision about your special day is important to us and there is no
              such thing as too many details. Capturing the perfect poise or
              smile can only be done by having a professional photographer,
              therefore we ensure all our staff are properly trained and
              dispatched to photographic assignments fully equipped with the
              latest cameras, thereby ensuring we capture and immortalise your
              precious memories on photographs by using young, idiosyncratic and
              professional wedding photographers, bonded by talent, driven by
              passion to carry you apart from your manifestation. We are
              imaginative, energetic, and curious. We strive for quality in all
              we do, which has led us to where we are now.
            </h1>
          </div>
        </div>
        <h1 className="font-mulish-black text-fonts-light_black text-4xl text-center md:mt-14">
          WHAT WE OFFER
        </h1>
        <h1 className="md:mt-4 font-mulish-boldItalic text-fonts-light_gray_2 text-sm text-center uppercase">
          With 5 years of experience in capturing celebrations all around the
          island, our team is here to make sure you have the best day of your
          life filled with photos to reflect that
        </h1>
        <div className="md:grid md:grid-cols-3">
          <div className="bg-white rounded-xl shadow-md mx-1 flex flex-col md:mt-10  mt-5  text-center items-center md:mx-5 ">
            <img
              className="w-full rounded-t-xl"
              src="assests/weddings.png"
              alt="My Image"
            />
            <h1 className="font-mulish-extraBold text-fonts-light_black text-2xl md:mt-5">
              WEDDINGS
            </h1>
            <h1 className="font-mulish-semiBold text-fonts-light_gray text-sm uppercase md:px-6 md:mt-2">
              Every love story is unique and should be described in its own
              special way. We are happy to add something special to your day of
              celebration
            </h1>
            <Link href="https://drive.google.com/drive/folders/1xeU9IuY1hPxP6WVfrqZnYbeJSWIBRrHg?usp=sharing">
              <button className="bg-background_custom-button_white rounded-2xl md:mt-10 md:mb-7 md:h-[40px] md:w-[250px] font-mulish-extraBold text-fonts-dark_gray">
                VIEW PACKAGE DETAILS
              </button>
            </Link>
          </div>
          <div className=" bg-white rounded-xl shadow-md mx-1 flex flex-col md:md:mt-10  mt-5  text-center items-center md:mx-5 ">
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
            <Link href="https://drive.google.com/file/d/1P305B4NUYTnCvhaT1dssh_43Vpmk__5p/view?usp=drive_link">
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
            <Link href="https://drive.google.com/file/d/1P305B4NUYTnCvhaT1dssh_43Vpmk__5p/view?usp=drive_link">
              <button className="bg-background_custom-button_white rounded-2xl md:mt-10 md:mb-7 md:h-[40px] md:w-[250px] font-mulish-extraBold text-fonts-dark_gray">
                VIEW PACKAGE DETAILS
              </button>
            </Link>
          </div>
        </div>
        <h1 className="font-mulish-black text-fonts-light_black text-4xl text-center md:mt-14">
          OUR AMAZING WORK
        </h1>
        <h1 className="md:mt-4 font-mulish-boldItalic text-fonts-light_gray_2 text-sm text-center uppercase">
          We aim to capture the essence of your relationship, including the way
          your faces and hands join together. We want to capture the joyous
          moments, the heartfelt laughs, and everything in between
        </h1>
        <div className="md:grid md:grid-cols-2 md:mt-8">
          <div className="md:grid md:grid-cols-2 ">
            <div className="md:grid md:grid-row-3">
              <div className="md:grid md:grid-row-2 md:pl-3">
                <img
                  className="bg-blend-screen block lg:w-full"
                  src="assests/ourWorks/im1.png"
                  alt="My Image"
                />
              </div>

              <img
                className="bg-blend-screen block md:pl-3 lg:w-full md:h-full"
                src="assests/ourWorks/im2.png"
                alt="My Image"
              />
            </div>
            <div className="md:grid md:grid-row-3 md:pl-3 ">
              <img
                className="bg-blend-screen block lg:w-full"
                src="assests/ourWorks/im3.png"
                alt="My Image"
              />
              <img
                className="bg-blend-screen block md:mt-5 lg:w-full"
                src="assests/ourWorks/im4.png"
                alt="My Image"
              />

              <img
                className="bg-blend-screen block md:mt-5 lg:w-full "
                src="assests/ourWorks/im5.png"
                alt="My Image"
              />
            </div>
          </div>
          <div className="md:grid md:grid-cols-2">
            <div className="md:grid md:grid-row-3 ">
              <img
                className="bg-blend-screen block md:pl-3 lg:w-full "
                src="assests/ourWorks/im6.png"
                alt="My Image"
              />
              <div className="md:grid md:grid-row-2 md:pl-3">
                <img
                  className="bg-blend-screen block lg:w-full md:h-full"
                  src="assests/ourWorks/im7.png"
                  alt="My Image"
                />
              </div>
            </div>
            <img
              className="bg-blend-screen block md:pl-3 h-full lg:w-full"
              src="assests/ourWorks/im8.png"
              alt="My Image"
            />
          </div>
        </div>
      </div>
      <div className="bg-blend-screen block w-full relative md:mt-10">
        <img className=" " src="assests/contactUsImage.png" alt="My Image" />
        <h1 className="text-4xl absolute top-0 left-3 p-4 font-mulish-black text-white">
          CONTACT US
        </h1>
        <div className="md:w-[450px] bg-white rounded-lg shadow-md p-2 mx-1 flex flex-col md:mt-20 md:ml-6 mt-10 absolute top-0 left-0 md:p-6   ">
          <h1 className="font-mulish-black text-black text-sm">LOCATION</h1>
          <h1 className="font-mulish-semiBold text-black text-sm uppercase">
            759, the Pulse Weddings StuDio
          </h1>
          <h1 className="font-mulish-semiBold text-black text-sm uppercase">
            Colombo Rd, Ratnapura, Sri Lanka
          </h1>
          <h1 className="font-mulish-black text-black text-sm md:mt-5 ">
            PHONE
          </h1>
          <h1 className="font-mulish-semiBold text-black text-sm uppercase">
            (+94) 71 113 9749 - Chamitha Herath
          </h1>
          <h1 className="font-mulish-black text-black text-sm md:mt-5">
            E-MAIL
          </h1>
          <h1 className="font-mulish-semiBold text-black text-sm uppercase">
            info@thepulseweddings.com
          </h1>
          <h1 className="font-mulish-black text-black text-sm md:mt-5">
            FOLLOW US ON
          </h1>

          <div className="relative md:mt-2">
            <div className="flex flex-col   ">
              <div className="flex w-full">
                <Link href="https://www.facebook.com/ThePulse19/">
                  <img
                    src="/assests/socialmedia/facebook.png"
                    className="md:w-[18px] md:h-[18px] w-[17px] h-[17px] mr-2 cursor-pointer"
                  />
                </Link>
                <Link href="https://www.facebook.com/your-facebook-page">
                  <img
                    src="/assests/socialmedia/twitter.png"
                    className="md:w-[18px] md:h-[18px] w-[17px] h-[17px] mr-2 cursor-pointer"
                  />
                </Link>
                <Link href="https://www.facebook.com/your-facebook-page">
                  <img
                    src="/assests/socialmedia/linkedin.png"
                    className="md:w-[18px] md:h-[18px] w-[17px] h-[17px] mr-2 cursor-pointer"
                  />
                </Link>
                <Link href="https://www.facebook.com/your-facebook-page">
                  <img
                    src="/assests/socialmedia/tiktok.png"
                    className="md:w-[18px] md:h-[18px] w-[17px] h-[17px] mr-2 cursor-pointer"
                  />
                </Link>
                <Link href="https://instagram.com/the.pulseweddings">
                  <img
                    src="/assests/socialmedia/instagram.png"
                    className="md:w-[18px] md:h-[18px] w-[17px] h-[17px] mr-2 cursor-pointer"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2">
        <h1 className="font-mulish-bold text-black md:text-sm md:ml-4 md:mt-4 md:mb-3">
          © 2024 The Pulse Weddings. All Rights Reserved.
        </h1>
        <h1 className="font-mulish-bold text-black md:text-sm md:mr-4 md:mt-4 md:mb-3 text-right">
          Made by{" "}
          <span className="text-fonts-light_green_1 cursor-pointer">
            <Link href="https://torenshal.com/">Torenshal</Link>
          </span>
        </h1>
      </div>
    </main>
  );
}
