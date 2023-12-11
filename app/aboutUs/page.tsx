import React from "react";

const AboutUs = () => {
  return (
    <div className="md:grid lg:grid-cols-3 2xl:grid-cols-3 md:mt-11 2xl:mt-20 mt-6">
      <div className="md:flex md:justify-center">
        <img
          className="bg-blend-screen block lg:pl-4 lg:col-span-1 2xl:col-span-1 2xl:ml-6 sm:px-2 px-12"
          src="assests/aboutUsImage.png"
          alt="My Image"
        />
      </div>
      <div className="lg:col-span-2 2xl:col-span-2 lg:mt-0 mt-5 md:ml-4 2xl:ml-0">
        <div className="hidden lg:block">
          <h1 className="font-mulish-black text-fonts-light_black lg:text-4xl 2xl:text-5xl text-xl">
            THE
          </h1>
          <h1 className="font-mulish-black text-fonts-light_black md:text-4xl 2xl:text-5xl text-xl">
            PULSE WEDDINGS
          </h1>
        </div>
        <div className="block lg:hidden w-full text-center">
          <h1 className="font-mulish-black text-fonts-light_black text-xl md:text-3xl">
            THE PULSE WEDDINGS
          </h1>
        </div>
        <h1 className="font-mulish-regular text-fonts-light_gray_2 md:mt-2 lg:mt-4 text-justify md:text-xs lg:text-xs 2xl:text-xl text-xs mt-[6px]">
          As a tightly-knit group of passionate photographers, we, at The Pulse
          Weddings, consider ourselves truly fortunate to transform our love for
          photography into a fulfilling career. Our fascination lies in the
          enchanting world of elegant brides, soft lighting, natural backdrops,
          and the vibrant personalities of couples on their special day. We take
          pride in being skilled artisans, adept at turning the heartbeat of
          your wedding into timeless visual masterpieces. Your stories and
          unique vision for your special day are not just details to us; they
          are the building blocks of our creative process. We believe in the
          power of understanding the nuances of your narrative, leaving no room
          for too many details. We cherish the opportunity to capture the
          perfect poise, the genuine smiles, and the heartfelt moments that make
          your wedding day extraordinary. We recognize that achieving this
          requires the expertise of a professional photographer, and thus, we
          prioritize the training of our staff. Every member is dispatched to
          photographic assignments fully equipped with the latest cameras and
          technology, ensuring that we freeze-frame and immortalize your
          cherished memories through the lens of our skilled, young, and
          professional wedding photographers. Imagination, energy, and curiosity
          drive our every endeavor. We constantly strive for excellence in all
          aspects of our work, The Pulse Weddings is more than a photography
          service; we are a dedicated team committed to turning your wedding day
          into a visual masterpiece. Through our imaginative approach, boundless
          energy, and insatiable curiosity, we strive for nothing short of
          excellence in every photograph we capture. Our journey is fueled by a
          deep passion for storytelling, and we are honored to be part of your
          special day, preserving the magic and emotion in photographs that will
          last a lifetime.
        </h1>
      </div>
    </div>
  );
};

export default AboutUs;
