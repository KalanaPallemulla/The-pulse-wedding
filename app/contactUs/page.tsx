import Link from "next/link";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="hidden lg:block bg-blend-screen w-full relative md:mt-10 mt-9">
        <img
          className="w-full"
          src="assests/contactUsImage.png"
          alt="My Image"
        />
        <h1 className="md:text-4xl 2xl:text-[38px] text-xl absolute top-0 md:left-3 md:p-4 font-mulish-black text-white 2xl:mt-7 md:mt-3 2xl:ml-5 ">
          CONTACT US
        </h1>
        <div className="md:w-[450px] 2xl:w-[800px] 2xl:h-[500px] bg-white rounded-3xl shadow-md mx-1 flex flex-col 2xl:mt-40 md:mt-24  2xl:ml-12 md:ml-6 mt-10 ml-4 absolute top-0 left-0 md:p-6 2xl:p-12 p-2">
          <h1 className="font-mulish-black text-black md:md:text-sm 2xl:text-xl text-xs">
            LOCATION
          </h1>
          <h1 className="font-mulish-semiBold text-black md:text-sm 2xl:text-xl text-[10px] uppercase 2xl:mt-2 mt-[2px]">
            759, the Pulse Weddings StuDio
          </h1>
          <h1 className="font-mulish-semiBold text-black md:text-sm 2xl:text-xl text-[10px] uppercase">
            Colombo Rd, Ratnapura, Sri Lanka
          </h1>
          <h1 className="font-mulish-black text-black md:text-sm 2xl:text-xl text-xs md:mt-5 2xl:mt-10 mt-2">
            PHONE
          </h1>
          <h1 className="font-mulish-semiBold text-black md:text-sm 2xl:text-xl text-[10px] uppercase 2xl:mt-2 mt-[2px]">
            (+94) 71 113 9749 - Chamitha Herath
          </h1>
          <h1 className="font-mulish-black text-black md:text-sm 2xl:text-xl text-xs md:mt-5 2xl:mt-10 mt-2">
            E-MAIL
          </h1>
          <h1 className="font-mulish-semiBold text-black md:text-sm 2xl:text-xl text-[10px] uppercase 2xl:mt-2 mt-[2px]">
            info@thepulseweddings.com
          </h1>
          <h1 className="font-mulish-black text-black md:text-sm 2xl:text-xl text-xs md:mt-5 2xl:mt-10 mt-2">
            FOLLOW US ON
          </h1>

          <div className="relative md:mt-2 2xl:mt-2 mt-[2px]">
            <div className="flex flex-col   ">
              <div className="flex w-full">
                <Link
                  href="https://www.facebook.com/ThePulse19/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assests/socialmedia/facebook.png"
                    className="md:w-5 md:h-5 2xl:w-7 2xl:h-7 w-3 h-3 mr-2 cursor-pointer"
                  />
                </Link>
                <Link
                  href="https://www.facebook.com/your-facebook-page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assests/socialmedia/twitter.png"
                    className="md:w-5 md:h-5 2xl:w-7 2xl:h-7 w-3 h-3 mr-2 cursor-pointer"
                  />
                </Link>
                <Link
                  href="https://www.facebook.com/your-facebook-page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assests/socialmedia/linkedin.png"
                    className="md:w-5 md:h-5 2xl:w-7 2xl:h-7 w-3 h-3 mr-2 cursor-pointer"
                  />
                </Link>
                <Link
                  href="https://www.facebook.com/your-facebook-page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assests/socialmedia/tiktok.png"
                    className="md:w-5 md:h-5 2xl:w-7 2xl:h-7 w-3 h-3 mr-2 cursor-pointer"
                  />
                </Link>
                <Link
                  href="https://instagram.com/the.pulseweddings"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assests/socialmedia/instagram.png"
                    className="md:w-5 md:h-5 2xl:w-7 2xl:h-7 w-3 h-3 mr-2 cursor-pointer"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:hidden bg-blend-screen w-full relative mt-9 justify-center ">
        <img
          className="h-[270px] md:h-[360px] md:w-full"
          src="assests/contactUs1.jpg"
          alt="My Image"
        />
        <h1 className="text-xl absolute top-1 left-3 md:left-6 md:mt-1 font-mulish-black text-white">
          CONTACT US
        </h1>
        <div className=" bg-white rounded-3xl shadow-md flex flex-col mt-10 md:mt-12 absolute top-0 left-3 md:left-6 p-4 w-[300px] md:w-[450px]">
          <h1 className="font-mulish-black text-black md:md:text-sm 2xl:text-xl text-xs">
            LOCATION
          </h1>
          <h1 className="font-mulish-semiBold text-black md:text-sm 2xl:text-xl text-[10px] uppercase 2xl:mt-2 mt-[2px]">
            759, the Pulse Weddings StuDio
          </h1>
          <h1 className="font-mulish-semiBold text-black md:text-sm 2xl:text-xl text-[10px] uppercase">
            Colombo Rd, Ratnapura, Sri Lanka
          </h1>
          <h1 className="font-mulish-black text-black md:text-sm 2xl:text-xl text-xs md:mt-5 2xl:mt-10 mt-2">
            PHONE
          </h1>
          <h1 className="font-mulish-semiBold text-black md:text-sm 2xl:text-xl text-[10px] uppercase 2xl:mt-2 mt-[2px]">
            (+94) 71 113 9749 - Chamitha Herath
          </h1>
          <h1 className="font-mulish-black text-black md:text-sm 2xl:text-xl text-xs md:mt-5 2xl:mt-10 mt-2">
            E-MAIL
          </h1>
          <h1 className="font-mulish-semiBold text-black md:text-sm 2xl:text-xl text-[10px] uppercase 2xl:mt-2 mt-[2px]">
            info@thepulseweddings.com
          </h1>
          <h1 className="font-mulish-black text-black md:text-sm 2xl:text-xl text-xs md:mt-5 2xl:mt-10 mt-2">
            FOLLOW US ON
          </h1>

          <div className="relative md:mt-2 2xl:mt-2 mt-[4px]">
            <div className="flex flex-col">
              <div className="flex w-full">
                <Link
                  href="https://www.facebook.com/ThePulse19/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assests/socialmedia/facebook.png"
                    className="md:w-5 md:h-5 2xl:w-7 2xl:h-7 w-3 h-3 mr-2 cursor-pointer"
                  />
                </Link>
                <Link
                  href="https://www.facebook.com/your-facebook-page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assests/socialmedia/twitter.png"
                    className="md:w-5 md:h-5 2xl:w-7 2xl:h-7 w-3 h-3 mr-2 cursor-pointer"
                  />
                </Link>
                <Link
                  href="https://www.facebook.com/your-facebook-page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assests/socialmedia/linkedin.png"
                    className="md:w-5 md:h-5 2xl:w-7 2xl:h-7 w-3 h-3 mr-2 cursor-pointer"
                  />
                </Link>
                <Link
                  href="https://www.facebook.com/your-facebook-page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assests/socialmedia/tiktok.png"
                    className="md:w-5 md:h-5 2xl:w-7 2xl:h-7 w-3 h-3 mr-2 cursor-pointer"
                  />
                </Link>
                <Link
                  href="https://instagram.com/the.pulseweddings"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assests/socialmedia/instagram.png"
                    className="md:w-5 md:h-5 2xl:w-7 2xl:h-7 w-3 h-3 mr-2 cursor-pointer"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
