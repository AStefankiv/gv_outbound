import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CountryLinks = () => {
  return (
    <div className="w-full mx-auto mt-8 mb-6 px-6 sm:px-8 lg:px-16"
    id="countryLinks">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Japan Link */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
        >
          <Link href="/japan">
            <a>
              <div className="relative h-0 pb-56">
                <img
                  src="/assets/japan-image.jpeg"
                  alt="Japan"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl font-bold" style={{color: "rgba(241,163,52,255)"}}>
                Japan
              </div>
            </a>
          </Link>
        </motion.div>

        {/* Korea Link */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
        >
          <Link href="/korea">
            <a>
              <div className="relative h-0 pb-56">
                <img
                  src="/assets/korea-image.jpeg"
                  alt="Korea"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl font-bold" style={{color: "rgba(241,163,52,255)"}}>
                Korea
              </div>
            </a>
          </Link>
        </motion.div>

        {/* Costa Rica Link */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
        >
          <Link href="/costa_rica">
            <a>
              <div className="relative h-0 pb-56">
                <img
                  src="/assets/costa_rica-image.jpg"
                  alt="Costa Rica"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl font-bold" style={{color: "rgba(241,163,52,255)"}}>
                Costa Rica
              </div>
            </a>
          </Link>
        </motion.div>

        {/* France Link */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
        >
          <Link href="/france">
            <a>
              <div className="relative h-0 pb-56">
                <img
                  src="/assets/france-image.jpg"
                  alt="France"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl font-bold" style={{color: "rgba(241,163,52,255)"}}>
                France
              </div>
            </a>
          </Link>
        </motion.div>

        {/* Italy Link */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
        >
          <Link href="/italy">
            <a>
              <div className="relative h-0 pb-56">
                <img
                  src="/assets/italy-image.jpg"
                  alt="Italy"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl font-bold" style={{color: "rgba(241,163,52,255)"}}>
                Italy
              </div>
            </a>
          </Link>
        </motion.div>

        {/* Spain Link */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
        >
          <Link href="/spain">
            <a>
              <div className="relative h-0 pb-56">
                <img
                  src="/assets/spain-image.jpeg"
                  alt="Spain"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl font-bold" style={{color: "rgba(241,163,52,255)"}}>
                Spain
              </div>
            </a>
          </Link>
        </motion.div>

        {/* Global Link */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
        >
          <Link href="/global">
            <a>
              <div className="relative h-0 pb-56">
                <img
                  src="/assets/global-image.jpg"
                  alt="Global"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl font-bold" style={{color: "rgba(241,163,52,255)"}}>
                Global
              </div>
            </a>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CountryLinks;
