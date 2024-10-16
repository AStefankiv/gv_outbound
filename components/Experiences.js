import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Experiences = () => {
  return (
    <div className="w-full mx-auto mt-8 mb-6 px-6 sm:px-8 lg:px-16" id="experiences">
      <div className="text-4xl text-center lg:text-5xl font-medium leading-relaxed text-black-600 mb-10">
        <br />
      <h1>Experiences</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* CULTURAL EXCHANGE Link */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
        >
          <Link href="/experiences/cultural_exchange">
            <div>
              <div className="relative h-0 pb-56">
                <img
                  src="https://www.simplypsychology.org/wp-content/uploads/collectivist-culture.jpeg"
                  alt="Japan"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl font-bold text-outline-white text-center"
              style={{ color: "rgba(241,163,52,255)" }}>
                CULTURAL EXCHANGE
              </div>
            </div>
          </Link>
        </motion.div>

        {/* INTERNATIONAL INTERNSHIP Link */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
        >
          <Link href="/experiences/international_internship">
            <div>
              <div className="relative h-0 pb-56">
                <img
                  src="https://www.bertelsmann-stiftung.de/fileadmin/files/_processed_/1/c/csm_1607452561shutterstock_1823014877_Premier_ST-CO_a01010db3b.jpg"
                  alt="Korea"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl font-bold text-outline-white text-center"
              style={{ color: "rgba(241,163,52,255)" }}>
                INTERNATIONAL INTERNSHIP
              </div>
            </div>
          </Link>
        </motion.div>

        {/* JOB PLACEMENT Link */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
        >
          <Link href="/experiences/job_placement">
            <div>
              <div className="relative h-0 pb-56">
                <img
                  src="https://media.istockphoto.com/id/1365436662/photo/successful-partnership.jpg?s=612x612&w=0&k=20&c=B1xspe9Q5WMsLc7Hc9clR8MWUL4bsK1MfUdDNVNR2Xg="
                  alt="Job Placement"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl font-bold text-outline-white text-center"
              style={{ color: "rgba(241,163,52,255)" }}>
                JOB PLACEMENT
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Empty Link */}
        <motion.div className="relative overflow-hidden rounded-lg shadow-md cursor-pointer invisible"></motion.div>

        {/* VOLUNTEERING AND CONSERVATION Link */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
        >
          <Link href="/experiences/volunteering_and_conservation" className="relative h-0 pb-56 block">
            <div>
              <div className="relative h-0 pb-56">
                <img
                  src="https://rs.projects-abroad.ie/v1/hero/product-5b5b1a87cdf25.[1600].jpeg"
                  alt="France"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl font-bold text-outline-white text-center"
              style={{ color: "rgba(241,163,52,255)" }}>
                VOLUNTEERING AND CONSERVATION
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Experiences;