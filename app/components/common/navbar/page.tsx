"use client";

import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);

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
      setActiveLink(null);
    });
  }, []);
  const handleNavLinkClick = (id: string, link: string) => {
    const targetElement = document.getElementById(id);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }

    setActiveLink(link);

    // Close the mobile menu when a link is clicked
    setIsOpen(false);
  };

  return (
    <>
      <nav ref={navRef} className="top-0 w-full bg-black shadow-md ">
        <div className="hidden md:block">
          <div className="flex justify-between 2xl:px-25 md:px-14 px-4 2xl:py-3 md:py-2 py-2">
            <div className="2xl:h-[50px] 2xl:w-[200px] md:h-[40px] md:w-[150px] cursor-pointer ">
              <img
                src="assests/logo.png"
                alt="My Image"
                onClick={() => handleNavLinkClick("home-section", "home")}
                className={`font-mulish-extraBold text-fonts-light_gray_2 cursor-pointer md:text-sm 2xl:text-xl text-[6px] ${
                  activeLink === "home" && "text-white"
                }`}
              />
            </div>
            <div className="w-full flex items-center justify-end gap-x-10">
              <h1
                onClick={() => handleNavLinkClick("home-section", "home")}
                className={`font-mulish-extraBold text-fonts-light_gray_2 cursor-pointer md:text-sm 2xl:text-xl text-[6px] ${
                  activeLink === "home" && "text-white"
                }`}
              >
                HOME
              </h1>
              <h1
                onClick={() => handleNavLinkClick("about-section", "about")}
                className={`font-mulish-extraBold text-fonts-light_gray_2 cursor-pointer md:text-sm 2xl:text-xl text-[6px] ${
                  activeLink === "about" && "text-white"
                }`}
              >
                ABOUT US
              </h1>
              <h1
                onClick={() => handleNavLinkClick("service-section", "service")}
                className={`font-mulish-extraBold text-fonts-light_gray_2 cursor-pointer md:text-sm 2xl:text-xl text-[6px] ${
                  activeLink === "service" && "text-white"
                }`}
              >
                SERVICES
              </h1>
              <h1
                onClick={() => handleNavLinkClick("work-section", "work")}
                className={`font-mulish-extraBold text-fonts-light_gray_2 cursor-pointer md:text-sm 2xl:text-xl text-[6px] ${
                  activeLink === "work" && "text-white"
                }`}
              >
                OUR WORK
              </h1>
              <h1
                onClick={() => handleNavLinkClick("contact-section", "contact")}
                className={`font-mulish-extraBold text-fonts-light_gray_2 cursor-pointer md:text-sm 2xl:text-xl text-[6px] ${
                  activeLink === "contact" && "text-white"
                }`}
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
                onClickCapture={() =>
                  handleNavLinkClick("home-section", "home")
                }
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
                  onClickCapture={() =>
                    handleNavLinkClick("home-section", "home")
                  }
                  className="font-mulish-extraBold text-fonts-light_gray_2  cursor-pointer text-xs "
                >
                  HOME
                </h1>
                <h1
                  onClickCapture={() =>
                    handleNavLinkClick("about-section", "about")
                  }
                  className="font-mulish-extraBold text-fonts-light_gray_2 cursor-pointer text-xs mt-5"
                >
                  ABOUT US
                </h1>
                <h1
                  onClickCapture={() =>
                    handleNavLinkClick("service-section", "service")
                  }
                  className="font-mulish-extraBold text-fonts-light_gray_2 cursor-pointer text-xs mt-5"
                >
                  SERVICES
                </h1>
                <h1
                  onClickCapture={() =>
                    handleNavLinkClick("work-section", "work")
                  }
                  className="font-mulish-extraBold text-fonts-light_gray_2 cursor-pointer text-xs mt-5"
                >
                  OUR WORK
                </h1>
                <h1
                  onClickCapture={() =>
                    handleNavLinkClick("contact-section", "contact")
                  }
                  className="font-mulish-extraBold text-fonts-light_gray_2 cursor-pointer text-xs mt-5"
                >
                  CONTACT
                </h1>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
