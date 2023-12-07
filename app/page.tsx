"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const navRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const nav = navRef.current;

      if (nav) {
        if (scrollTop > nav.offsetTop) {
          nav.classList.add("fixed", "top-0", "z-50");
        } else {
          nav.classList.remove("fixed", "top-0", "z-50");
        }
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const nav = navRef.current;

      if (nav && !nav.contains(event.target as Node)) {
        // Clicked outside the menu, so close it
        setIsOpen(false);
      }
    };

    const handleDocumentClick = (event: MouseEvent) => {
      // Check if the clicked element is not within the menu or toggle button
      const nav = navRef.current;
      const toggleButton = document.getElementById("toggleButton");

      if (
        nav &&
        !nav.contains(event.target as Node) &&
        toggleButton !== event.target
      ) {
        // Clicked outside the menu and toggle button, so close it
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClickOutside);
    document.addEventListener("click", handleDocumentClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClickOutside);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    // Access the document object only on the client side
    const slider = document.getElementById("out_slider");
    slider?.addEventListener("click", () => {
      setIsOpen(false);
      // Additional logic to handle the change
    });

    const innerSlider = document.getElementById("inner_slider");
    innerSlider?.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  }, []);
  const handleNavLinkClick = (id: string) => {
    const targetElement = document.getElementById(id);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }

    // Close the mobile menu when a link is clicked
    setIsOpen(false);
  };

  return (
    <main>
      <nav ref={navRef} className="top-0 w-full bg-black shadow-md ">
        <div className="hidden md:block">
          <div className="flex justify-between 2xl:px-25 md:px-14 px-4 2xl:py-3 md:py-2 py-2">
            <div className="2xl:h-[50px] 2xl:w-[200px] md:h-[40px] md:w-[150px] cursor-pointer ">
              <img
                src="assests/logo.png"
                alt="My Image"
                onClick={() => handleNavLinkClick("home-section")}
              />
            </div>
            <div className="w-full flex items-center justify-end gap-x-10">
              <h1
                onClick={() => handleNavLinkClick("home-section")}
                className="font-mulish-extraBold text-background_custom-button_white cursor-pointer md:text-sm 2xl:text-xl text-[6px]"
              >
                HOME
              </h1>
              <h1
                onClick={() => handleNavLinkClick("about-section")}
                className="font-mulish-extraBold text-fonts-light_gray_2 cursor-pointer md:text-sm 2xl:text-xl text-[6px]"
              >
                ABOUT US
              </h1>
              <h1
                onClick={() => handleNavLinkClick("service-section")}
                className="font-mulish-extraBold text-fonts-light_gray_2 cursor-pointer md:text-sm 2xl:text-xl text-[6px]"
              >
                SERVICES
              </h1>
              <h1
                onClick={() => handleNavLinkClick("work-section")}
                className="font-mulish-extraBold text-fonts-light_gray_2 cursor-pointer md:text-sm 2xl:text-xl text-[6px]"
              >
                OUR WORK
              </h1>
              <h1
                onClick={() => handleNavLinkClick("contact-section")}
                className="font-mulish-extraBold text-fonts-light_gray_2 cursor-pointer md:text-sm 2xl:text-xl text-[6px]"
              >
                CONTACT
              </h1>
            </div>
          </div>
        </div>
        <div className="block md:hidden ">
          <div className="flex justify-between px-7  items-center">
            <div className="py-2 h-[50px] w-[120px]">
              <img
                src="assests/logo.png"
                alt="My Image"
                onClickCapture={() => handleNavLinkClick("home-section")}
              />
            </div>
            <div className="h-[30px] w-[30px] p-1">
              <img
                src="assests/hamburger.png"
                alt="My Image"
                onClickCapture={toggle}
              />
            </div>
          </div>
        </div>
        <div>
          <div
            className={`transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            <div
              id="out_slider"
              className="w-screen h-screen inset-0 bg-[#545454B3] fixed"
            >
              <div
                id="inner_slider"
                className="w-60 top-0 right-0 h-screen fixed bg-global-white p-8"
              >
                <h1
                  onClickCapture={() => handleNavLinkClick("home-section")}
                  className="font-mulish-extraBold text-fonts-light_gray_2  cursor-pointer text-xs "
                >
                  HOME
                </h1>
                <h1
                  onClickCapture={() => handleNavLinkClick("about-section")}
                  className="font-mulish-extraBold text-fonts-light_gray_2 cursor-pointer text-xs mt-5"
                >
                  ABOUT US
                </h1>
                <h1
                  onClickCapture={() => handleNavLinkClick("service-section")}
                  className="font-mulish-extraBold text-fonts-light_gray_2 cursor-pointer text-xs mt-5"
                >
                  SERVICES
                </h1>
                <h1
                  onClickCapture={() => handleNavLinkClick("work-section")}
                  className="font-mulish-extraBold text-fonts-light_gray_2 cursor-pointer text-xs mt-5"
                >
                  OUR WORK
                </h1>
                <h1
                  onClickCapture={() => handleNavLinkClick("contact-section")}
                  className="font-mulish-extraBold text-fonts-light_gray_2 cursor-pointer text-xs mt-5"
                >
                  CONTACT
                </h1>
              </div>
            </div>
          </div>
        </div>
      </nav>
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
                src="assests/homeImage2.png"
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
              src="assests/homeImage2.png"
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
          <h1 className="font-mulish-boldItalic text-fonts-light_gray_2 md:mt-7 mt-8 text-center uppercase md:text-sm 2xl:text-lg text-[7px]">
            We at Pulse Weddings look forward to making your special day a truly
            special one. We guarantee you a worry-free, carefree and fun
            experience with an amazing crew. Capturing the perfect poise or
            smile can only be done by having a smile
          </h1>
          <div id="about-section"></div>
          <div className="md:grid md:grid-cols-3 2xl:grid-cols-3 md:mt-11 2xl:mt-20 mt-6">
            <img
              className="bg-blend-screen block md:pl-4 md:col-span-1 2xl:col-span-1 2xl:ml-6 sm:px-2 px-12"
              src="assests/aboutUsImage.png"
              alt="My Image"
            />
            <div className="md:col-span-2 2xl:col-span-2 md:mt-0 mt-5 md:ml-4 2xl:ml-0">
              <div className="hidden md:block">
                <h1 className="font-mulish-black text-fonts-light_black md:text-4xl 2xl:text-5xl text-xl">
                  THE
                </h1>
                <h1 className="font-mulish-black text-fonts-light_black md:text-4xl 2xl:text-5xl text-xl">
                  PULSE WEDDINGS
                </h1>
              </div>
              <div className="block md:hidden w-full text-center">
                <h1 className="font-mulish-black text-fonts-light_black text-xl">
                  THE PULSE WEDDINGS
                </h1>
              </div>
              <h1 className="font-mulish-regular text-fonts-light_gray_2 md:mt-4 text-justify md:text-xs 2xl:text-xl text-xs mt-[6px]">
                As a tightly-knit group of passionate photographers, we, at The
                Pulse Weddings, consider ourselves truly fortunate to transform
                our love for photography into a fulfilling career. Our
                fascination lies in the enchanting world of elegant brides, soft
                lighting, natural backdrops, and the vibrant personalities of
                couples on their special day. We take pride in being skilled
                artisans, adept at turning the heartbeat of your wedding into
                timeless visual masterpieces. Your stories and unique vision for
                your special day are not just details to us; they are the
                building blocks of our creative process. We believe in the power
                of understanding the nuances of your narrative, leaving no room
                for too many details. We cherish the opportunity to capture the
                perfect poise, the genuine smiles, and the heartfelt moments
                that make your wedding day extraordinary. We recognize that
                achieving this requires the expertise of a professional
                photographer, and thus, we prioritize the training of our staff.
                Every member is dispatched to photographic assignments fully
                equipped with the latest cameras and technology, ensuring that
                we freeze-frame and immortalize your cherished memories through
                the lens of our skilled, young, and professional wedding
                photographers. Imagination, energy, and curiosity drive our
                every endeavor. We constantly strive for excellence in all
                aspects of our work, The Pulse Weddings is more than a
                photography service; we are a dedicated team committed to
                turning your wedding day into a visual masterpiece. Through our
                imaginative approach, boundless energy, and insatiable
                curiosity, we strive for nothing short of excellence in every
                photograph we capture. Our journey is fueled by a deep passion
                for storytelling, and we are honored to be part of your special
                day, preserving the magic and emotion in photographs that will
                last a lifetime.
              </h1>
            </div>
          </div>
          <div id="service-section"></div>

          <h1 className="font-mulish-black text-fonts-light_black md:text-4xl 2xl:text-5xl text-xl text-center md:mt-14 2xl:mt-20 mt-[22px] ">
            WHAT WE OFFER
          </h1>
          <h1 className="md:mt-4 font-mulish-boldItalic text-fonts-light_gray_2 text-center uppercase md:text-sm 2xl:text-lg text-[7px] mt-4">
            Drawing from 5 years of experience capturing celebrations across the
            island, our dedicated team is committed to making your special day
            the best it can be. We ensure your joy-filled moments are preserved
            in photos, reflecting the beauty and happiness of your unique
            celebration.
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
                special way. We are happy to add something special to your day
                of celebration
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
                A photoshoot is a wonderful way to remember the lovely time that
                you both had during your engagement And Bringing joy and love to
                life one frame at a time
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
          <div id="work-section"></div>

          <h1 className="font-mulish-black text-fonts-light_black md:text-4xl text-xl text-center md:mt-14 mt-9">
            OUR AMAZING WORK
          </h1>
          <h1 className="md:mt-4 mt-4 font-mulish-boldItalic text-fonts-light_gray_2 text-center uppercase md:text-sm 2xl:text-lg text-[7px]">
            We aim to capture the essence of your relationship, including the
            way your faces and hands join together. We want to capture the
            joyous moments, the heartfelt laughs, and everything in between
          </h1>
          <div className="md:grid md:grid-cols-2 md:mt-8 hidden">
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
          <div className="block md:hidden mt-5">
            <img
              className="bg-blend-screen block "
              src="assests/amazing.png"
              alt="My Image"
            />
          </div>
        </div>
      </div>
      <div id="contact-section"></div>
      <div className="hidden md:block bg-blend-screen w-full relative md:mt-10 mt-9">
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
      <div className="flex md:hidden bg-blend-screen w-full relative mt-9 justify-center ">
        <img
          className="h-[270px]"
          src="assests/contactUsMobile.jpg"
          alt="My Image"
        />
        <h1 className="text-xl absolute top-1 left-3 font-mulish-black text-white">
          CONTACT US
        </h1>
        <div className=" bg-white rounded-3xl shadow-md flex flex-col mt-10 absolute top-0 left-3 p-4 w-[250px]">
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
      <div className="md:grid md:grid-cols-2 sm:flex sm:flex-row sm:justify-center text-center">
        <h1 className="font-mulish-bold text-black md:text-sm text-[10px] md:ml-4 md:mt-4 md:mb-3 md:text-left sm:text-center">
          © 2024 The Pulse Weddings. All Rights Reserved.
        </h1>

        <h1 className="font-mulish-bold text-black md:text-sm text-[10px] md:mr-4 md:mt-4 md:mb-3 md:text-right sm:text-center">
          Made by{" "}
          <span className="text-fonts-light_green_1 cursor-pointer">
            <Link
              href="https://torenshal.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Torenshal
            </Link>
          </span>
        </h1>
      </div>
    </main>
  );
}
