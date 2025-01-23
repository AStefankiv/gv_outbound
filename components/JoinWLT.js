import React, { lazy, useMemo } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const JoinWLT = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const carouselItems = useMemo(() => [
    {
      title: "Travel the World",
      description:
        "Beautiful places, new friends, and amazing cultural experiences await you. You'll discover a world of amazing possibilities and make connections that will last a lifetime. There really is no substitute for travel!",
    },
    {
      title: "Explore New Experiences",
      description:
        "If you're looking for a new perspective on life, an overseas experience is the perfect prescription. Discovering different cultures and new environments is a gateway to unlocking an entirely fresh outlook on the world.",
    },
    {
      title: "Flex Your Independence",
      description:
        "Ready to make it on your own? There's no better way than through a successful overseas work experience – new friends, new places, new languages, and new challenges, and all on your own terms.",
    },
    {
      title: "Work Abroad",
      description:
        "Take your career to new heights by gaining international work experience. Embrace the challenges of working in a different environment and enhance your skills while exploring new cultures.",
    },
    {
      title: "Push Yourself",
      description:
        "Living overseas provides you with a set of new challenges. Meeting each one – and succeeding! – will help you build flexibility, resilience, and positivity, and at every step, you'll have our friendly experts and partners to guide you.",
    },
  ], []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplaySpeed: 9000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    vertical: false,
    swipe: true,
    draggable: true,
    lazyLoad: "ondemand",
    adaptiveHeight: true,
  };

  return (
    <div className="w-full mt-24 px-0 mx-auto pt-24" id="join-wlt">

      {/* <div style={{ display: 'none' }}>
      <p>Working Holidays for Canadians are available from Global Village Work Learn Travel in a variety of international jobs and experiences.</p>
      </div> */}

      <ScrollAnimationWrapper>
        <motion.div className="w-full lg:py-0 sm:py-16" variants={scrollAnimation}>
          <Slider {...settings} className="w-full">
            {carouselItems.map((item, index) => (
              <div key={index} className="flex justify-center items-center min-h-[15vh] lg:min-h-[15vh] h-auto bg-gray-100 p-6">
                <div className="text-center flex flex-col justify-center items-center w-full">
                  <h2 className="text-4xl lg:text-2xl xl:text-4xl font-medium text-black-600 leading-normal">
                    {item.title}
                  </h2>
                  <p className="text-black-500 mt-4 mb-0 text-lg lg:text-xl">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default JoinWLT;