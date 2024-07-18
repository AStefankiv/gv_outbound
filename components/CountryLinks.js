import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CountryLinks = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-8 mb-6 px-6 sm:px-8 lg:px-16">
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
                  src="/assets/japan-image.jpeg" // Replace with your actual image path
                  alt="Japan"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl font-bold" style={{color: "white"}}>
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
            <a className="relative h-0 pb-56">
              <div>
                <img
                  src="/assets/korea-image.jpeg" // Replace with your actual image path
                  alt="Korea"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl font-bold" style={{color: "white"}}>
                Korea
              </div>
            </a>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CountryLinks;
