import React, { useState, useEffect, lazy, Suspense } from "react";
import { Link as LinkScroll } from "react-scroll";

const ButtonPrimary = lazy(() => import("./misc/ButtonPrimary"));
const ScrollAnimationWrapper = lazy(() => import("./Layout/ScrollAnimationWrapper"));

const Hero = ({
  listUser = [
    {
      name: "years helping young people",
      number: "25",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "countries",
      number: "7+",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "cities",
      number: "20+",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  const images = [
    { src: "https://res.cloudinary.com/vacationscostarica-com/image/upload/v1650823626/tamarindo_diria_beachfront_overview_guanacaste_7945a0a8c0.jpg", name: "Costa Rica - Tamarindo" },
    { src: "/assets/city_2.jpg", name: "Seoul" },
    { src: "https://static.b-europe.com/-/media/MediaRepository/Images_LowRes/Blog/CityGuides/Marseilles/1440x980_vallon_des_auffes_marseille.ashx?h=980&w=1440&hash=31E79FFEE38A5324BB4FC7FF969389D1", name: "France - Marseille" },
    { src: "https://cdn.prod.website-files.com/6551f8b152816a8f57a9bfb5/6598156104acc4f9d71e4c27_barcelona.webp", name: "Madrid" },
    { src: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_4000,h_2670/https:/www.yourownitaly.com/wp-content/uploads/images/excursions/the-colosseum-ancient-roman-forum.jpg", name: "Italy - Rome" },
    { src: "https://lp-cms-production.imgix.net/2021-10/Kayaking%20in%20the%20Caribbean%20Sea%20Antionio%20Busiello%20GettyImages-1167011568%20rfc.jpg", name: "Caribbean" },
    { src: "https://m.media-amazon.com/images/I/71hl5VtcGHL.jpg", name: "Paris" },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Image changes every 6 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full mt-0 px-8 xl:px-16 mx-auto" id="about">
      <Suspense fallback={<div>Loading...</div>}>
        <ScrollAnimationWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 sm:py-16">
            <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                <strong>Global Village Work Learn Travel</strong> provides Canadians with work placements and culture exchanges overseas.
              </h1>
              <p className="text-black-500 mt-4 mb-6">
                Explore the world with a new job and a new perspective.
              </p>
              <LinkScroll to="experiences" spy={true} smooth={true} duration={1000} offset={-100}>
                <ButtonPrimary>Yes, I want an exciting international experience!</ButtonPrimary>
              </LinkScroll>
            </div>

            {/* Image Slideshow */}
            <div className="relative w-full h-96 overflow-hidden flex flex-col items-center">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.name}
                  loading="lazy"
                  srcSet={`${image.src}?w=400 400w, ${image.src}?w=800 800w, ${image.src}?w=1200 1200w`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentImage === index ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transition: 'opacity 2s ease-in-out' }}
                />
              ))}
            </div>
          </div>
        </ScrollAnimationWrapper>
      </Suspense>

      <div className="relative w-full flex">
        <Suspense fallback={<div>Loading stats...</div>}>
          <ScrollAnimationWrapper className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
            {listUser.map((listUsers, index) => (
              <div
                className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
                key={index}
              >
                <div className="flex mx-auto w-40 sm:w-auto">
                  <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                    <img src={listUsers.icon} className="h-6 w-6" alt={listUsers.name} loading="lazy" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xl text-black-600 font-bold">{listUsers.number}</p>
                    <p className="text-lg text-black-500">{listUsers.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </ScrollAnimationWrapper>
        </Suspense>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 rounded-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;