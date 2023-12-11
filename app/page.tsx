"use client";
import AboutUs from "./aboutUs/page";
import Services from "./services/page";
import OurWork from "./ourWork/page";
import ContactUs from "./contactUs/page";
import Navbar from "./components/common/navbar/page";
import Footer from "./components/common/footer/page";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <div className="md:px-14 md:mt-4 2xl:mt-8 mt-2">
          <div id="home-section"></div>
          <div className="hidden md:block">
            <div className=" md:grid md:grid-cols-2 ">
              <div className="flex flex-col justify-center items-center md:items-start md:pl-4">
                <img
                  className="bg-blend-screen block 2xl:w-full 2xl:h-full md:h-full"
                  src="assests/homeImage1.png"
                  alt="My Image"
                />
              </div>
              <div className="md:grid md:grid-row-2 md:px-4">
                <img
                  className="2xl:w-full 2xl:h-full "
                  src="assests/homeImage2.jpg"
                  alt="My Image"
                />
                <img
                  className="2xl:w-full 2xl:h-full "
                  src="assests/homeImage3.png"
                  alt="My Image"
                />
              </div>
            </div>
          </div>
          <div className="block md:hidden w-full">
            <div className="flex flex-col justify-center items-center md:items-start">
              <img
                className="bg-blend-screen block "
                src="assests/homeImage2.jpg"
                alt="My Image"
              />
            </div>
            <div className=" grid grid-cols-2 justify-end">
              <img
                className="2xl:w-full 2xl:h-full  pr-1"
                src="assests/homeImage1.png"
                alt="My Image"
              />

              <div className=" flex justify-end">
                <img
                  className="2xl:w-full 2xl:h-full pl-1 "
                  src="assests/homeImage4.png"
                  alt="My Image"
                />
              </div>
            </div>
          </div>
          <div className="px-5">
            <h1 className="font-mulish-boldItalic text-fonts-light_gray_2 md:mt-7 mt-8 text-center uppercase md:text-sm 2xl:text-lg text-[8px]">
              We at Pulse Weddings look forward to making your special day a
              truly special one. We guarantee you a worry-free, carefree and fun
              experience with an amazing crew. Capturing the perfect poise or
              smile can only be done by having a smile
            </h1>
            <div id="about-section"></div>
            <AboutUs />
            <div id="service-section"></div>
            <Services />
            <div id="work-section"></div>
            <OurWork />
          </div>
        </div>
        <div id="contact-section"></div>
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}
