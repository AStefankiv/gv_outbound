import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const countries = [
  {
    name: "Costa Rica",
    image: "/assets/costa_rica-image.jpg",
    link: "/jobs-in-costa-rica",
  },
  {
    name: "France",
    image: "/assets/france-image.jpg",
    link: "/work-holiday-france",
  },
  {
    name: "Italy",
    image: "/assets/italy-image.jpg",
    link: "/working-holiday-italy",
  },
  {
    name: "Korea",
    image: "/assets/korea-image.jpeg",
    link: "/working-holiday-korea",
  },
  {
    name: "Spain",
    image: "/assets/spain-image.jpeg",
    link: "/work-opportunities-spain",
  },
  {
    name: "Hong Kong",
    image: "/assets/hong_kong-image.jpg",
    link: "/work-opportunities-hong-kong",
  },
  {
    name: "Croatia",
    image: "/assets/croatia.jpg",
    link: "/visa-for-croatia",
  },
  {
    name: "Japan",
    image: "/assets/japan-image.jpeg",
    link: "/working-holiday-japan",
  },
  {
    name: "GV Snow",
    image: "/assets/snow-image.jpeg",
    link: "/gv-snow",
  },
];

const CountryCard = ({ name, image, link }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
  >
    <Link href={link}>
      <div>
        <div className="relative h-0 pb-56">
          <img
            src={image}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
            loading="lazy"
            srcSet={`${image}?w=400 400w, ${image}?w=800 800w, ${image}?w=1200 1200w`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ transition: "opacity 2s ease-in-out" }}
          />
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl font-bold text-center"
          style={{ color: "rgba(241,163,52,255)" }}
        >
          {name}
        </div>
      </div>
    </Link>
  </motion.div>
);

const CountryLinks = () => {
  return (
    <div
      className="w-full mx-auto mt-20 mb-6 px-6 sm:px-8 lg:px-16"
      id="countryLinks"
    >
      <div className="text-4xl text-center lg:text-5xl font-medium leading-relaxed text-black-600 mb-10">
        <h1>Destinations</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {countries.map((country) => (
          <CountryCard
            key={country.name}
            name={country.name}
            image={country.image}
            link={country.link}
          />
        ))}
      </div>
    </div>
  );
};

export default CountryLinks;