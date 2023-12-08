import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="md:grid md:grid-cols-2 sm:flex sm:flex-row sm:justify-center text-center md:mb-0 mb-1">
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
  );
};

export default Footer;
