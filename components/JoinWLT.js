import React, { useMemo } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const JoinWLT = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const carouselItems = [
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
      title: "Build Your Resume",
      description:
        "Nothing sets you apart like the experience of navigating another culture independently. Plus, Work Learn Travel offers you destinations and work placements tailored to your goals and needs.",
    },
    {
      title: "Flex Your Independence",
      description:
        "Ready to make it on your own? There's no better way than through a successful overseas work experience – new friends, new places, new languages, and new challenges, and all on your own terms.",
    },
    {
      title: "Pivot to a New Career",
      description:
        "Opportunities abound with Work Learn Travel! Whether you're interested in education, hospitality, new media, or just in building personal and leadership skills for a different field, we've got you covered.",
    },
    {
      title: "Push Yourself",
      description:
        "Living overseas provides you with a set of new challenges. Meeting each one – and succeeding! – will help you build flexibility, resilience, and positivity, and at every step, you'll have our friendly experts and partners to guide you.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    vertical: true,
    swipe: true,
    draggable: true,
  };

  return (
    <div className="w-full mt-24 px-0 mx-auto" id="join-wlt">
      <ScrollAnimationWrapper>
        <motion.div className="w-full lg:py-0 sm:py-16" variants={scrollAnimation}>
          <Slider {...settings} className="w-full">
            {carouselItems.map((item, index) => (
              <div key={index} className="flex justify-center items-center min-h-[35vh] lg:min-h-[20vh] h-auto bg-gray-100 p-6">
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