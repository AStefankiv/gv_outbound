import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link as LinkScroll } from "react-scroll";

const Hero = ({
  listUser = [
    {
      name: "years helping young people",
      number: "25",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "countries",
      number: "5+",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "cities",
      number: "20+",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const images = [
    { src: "https://res.cloudinary.com/vacationscostarica-com/image/upload/v1650823626/tamarindo_diria_beachfront_overview_guanacaste_7945a0a8c0.jpg", name: "Costa Rica - Tamarindo" },
    { src: "/assets/city_2.jpg", name: "Seoul" },
    { src: "https://www.francecomfort.com/l/en/library/download/urn:uuid:4744970e-a11a-4ad1-b94c-76c3f3f7a251/marseille+1+zuid+frankrijk+middellandse+zee+strand+vakantie+villa+oude+haven+vieux+port.jpg?scaleType=3&width=1600&height=1000", name: "France - Marseille" },
    { src: "https://cdn.prod.website-files.com/6551f8b152816a8f57a9bfb5/6598156104acc4f9d71e4c27_barcelona.webp", name: "Madrid" },
    { src: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_4000,h_2670/https://www.yourownitaly.com/wp-content/uploads/images/excursions/the-colosseum-ancient-roman-forum.jpg", name: "Italy - Rome" },
    { src: "https://cdn.britannica.com/15/194815-050-08B5E7D1/Nativity-facade-Sagrada-Familia-cathedral-Barcelona-Spain.jpg", name: "Spain - Barcelona" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div
      className="w-full mt-0 px-8 xl:px-16 mx-auto"//was: max-w-screen-xl
      id="about"
    >
      <ScrollAnimationWrapper>
          <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 sm:py-16"
            variants={scrollAnimation}>
            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              <strong>Work Learn Travel</strong> helps Canadians find work and culture experiences overseas
              </h1>
              <p className="text-black-500 mt-4 mb-6">
                Explore the world with a new job and a new perspective.
              </p>
              <LinkScroll
                to="countryLinks"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-100}
              >
                <ButtonPrimary>Yes, I want an exciting international experience!</ButtonPrimary>
              </LinkScroll>
            </div>



            <div className="w-full">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index}>
                  <div className="relative w-full h-96 overflow-hidden flex flex-col items-center">
                    <img
                      key={index} //added
                      src={image.src}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

            {/* <div className="flex w-full">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                <Image
                  src="/assets/Illustration1.png"
                  alt="illustration"
                  quality={100}
                  width={612}
                  height={383}
                  layout="responsive"
                />
              </motion.div>
            </div> */}
          </motion.div>
      </ScrollAnimationWrapper>
      
      <div className="relative w-full flex">
        <ScrollAnimationWrapper
          className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{duration: 2 + index}}
              variants={scrollAnimation}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                  <img src={listUsers.icon} className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
       </ScrollAnimationWrapper>
       <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
       ></div>
      </div>
    </div>
  );
};

export default Hero;