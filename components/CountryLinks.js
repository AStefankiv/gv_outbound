import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CountryLinks = () => {
  return (
    <div className="w-full mx-auto mt-20 mb-6 px-6 sm:px-8 lg:px-16" id="countryLinks">
      <div className="text-4xl text-center lg:text-5xl font-medium leading-relaxed text-black-600 mb-10">
      <h1>Destinations</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Costa Rica Link */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
        >
          <Link href="/costa_rica">
            <div>
              <div className="relative h-0 pb-56">
                <img
                  src="/assets/costa_rica-image.jpg"
                  alt="Costa Rica"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  loading="lazy"
                  srcSet="/assets/costa_rica-image.jpg?w=400 400w, /assets/costa_rica-image.jpg?w=800 800w, /assets/costa_rica-image.jpg?w=1200 1200w"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ transition: 'opacity 2s ease-in-out' }}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl font-bold text-outline-white text-center"
              style={{ color: "rgba(241,163,52,255)" }}>
                Costa Rica
              </div>
            </div>
          </Link>
        </motion.div>

        {/* France Link */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
        >
          <Link href="/france">
            <div>
              <div className="relative h-0 pb-56">
                <img
                  src="/assets/france-image.jpg"
                  alt="France"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  loading="lazy"
                  srcSet="/assets/france-image.jpg?w=400 400w, /assets/france-image.jpg?w=800 800w, /assets/france-image.jpg?w=1200 1200w"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ transition: 'opacity 2s ease-in-out' }}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl font-bold text-outline-white text-center"
              style={{ color: "rgba(241,163,52,255)" }}>
                France
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Italy Link */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
        >
          <Link href="/italy">
            <div>
              <div className="relative h-0 pb-56">
                <img
                  src="/assets/italy-image.jpg"
                  alt="Italy"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  loading="lazy"
                  srcSet="/assets/italy-image.jpg?w=400 400w, /assets/italy-image.jpg?w=800 800w, /assets/italy-image.jpg?w=1200 1200w"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ transition: 'opacity 2s ease-in-out' }}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl font-bold text-outline-white text-center"
              style={{ color: "rgba(241,163,52,255)" }}>
                Italy
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Korea Link */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
        >
          <Link href="/korea">
            <div>
              <div className="relative h-0 pb-56">
                <img
                  src="/assets/korea-image.jpeg"
                  alt="Korea"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  loading="lazy"
                  srcSet="/assets/korea-image.jpeg?w=400 400w, /assets/korea-image.jpeg?w=800 800w, /assets/korea-image.jpeg?w=1200 1200w"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ transition: 'opacity 2s ease-in-out' }}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl font-bold text-outline-white text-center"
              style={{ color: "rgba(241,163,52,255)" }}>
                Korea
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Spain Link */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
        >
          <Link href="/spain">
            <div>
              <div className="relative h-0 pb-56">
                <img
                  src="/assets/spain-image.jpeg"
                  alt="Spain"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  loading="lazy"
                  srcSet="/assets/spain-image.jpeg?w=400 400w, /assets/spain-image.jpeg?w=800 800w, /assets/spain-image.jpeg?w=1200 1200w"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ transition: 'opacity 2s ease-in-out' }}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl font-bold text-outline-white text-center"
              style={{ color: "rgba(241,163,52,255)" }}>
                Spain
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Hong Kong Link */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
        >
          <Link href="/hong_kong">
            <div>
              <div className="relative h-0 pb-56">
                <img
                  src="/assets/hong_kong-image.jpg"
                  alt="Hong Kong"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  loading="lazy"
                  srcSet="/assets/hong_kong-image.jpg?w=400 400w, /assets/hong_kong-image.jpg?w=800 800w, /assets/hong_kong-image.jpg?w=1200 1200w"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ transition: 'opacity 2s ease-in-out' }}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl font-bold text-outline-white text-center"
              style={{ color: "rgba(241,163,52,255)" }}>
                Hong Kong
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Empty Link */}
        <motion.div className="relative overflow-hidden rounded-lg shadow-md cursor-pointer invisible"></motion.div>

        {/* Croatia Link */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
        >
          <Link href="/croatia">
            <div>
              <div className="relative h-0 pb-56">
                <img
                  src="/assets/croatia.jpg"
                  alt="Croatia"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  loading="lazy"

                  srcSet="/assets/croatia.jpg?w=400 400w, /assets/croatia.jpg?w=800 800w, /assets/croatia.jpg?w=1200 1200w"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ transition: 'opacity 2s ease-in-out' }}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl font-bold text-outline-white text-center"
              style={{ color: "rgba(241,163,52,255)" }}>
                Croatia
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CountryLinks;