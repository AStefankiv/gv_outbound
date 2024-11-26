import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";

const VolunteeringAndConservation = () => {
  return (

    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <main className="flex-grow mt-24 mb-6 w-full">
    <div className="w-full mx-auto mt-20 px-6 sm:px-8 lg:px-16" id="countryLinks">
      <div className="text-4xl text-center lg:text-5xl font-medium leading-relaxed text-black-600 mb-10">
      <h1>Volunteering and conservation</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* NATURE CONSERVATION Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full"
        >
          <Link href="/jobs-in-costa-rica/costa-rica-sea-conservation" className="relative h-0 pb-56 block">
            <img
              src="/assets/nature_conservation.jpg"
              alt="nature_conservation"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-4xl font-bold text-outline-white text-center"
            style={{ color: "rgba(241,163,52,255)" }}>
              <span>NATURE CONSERVATION</span>
              <span className="text-2xl mt-2">Costa Rica</span>
            </div>
          </Link>
        </motion.div>

        {/* COMMUNITY DEVELOPMENT Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full"
        >
          <Link href="/jobs-in-costa-rica/community_development" className="relative h-0 pb-56 block">
            <img
              src="/assets/community_development.png"
              alt="INTERNSHIP"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-4xl font-bold text-outline-white text-center"
            style={{ color: "rgba(241,163,52,255)" }}>
              <span>COMMUNITY DEVELOPMENT</span>
              <span className="text-2xl mt-2">Costa Rica</span>
            </div>
          </Link>
        </motion.div>

        {/* TEACHING Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full"
        >
          <Link href="/jobs-in-costa-rica/teaching_costa_rica" className="relative h-0 pb-56 block">
            <img
              src="/assets/teach_costa_rica.jpeg"
              alt="TEACHING"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-4xl font-bold text-outline-white text-center"
            style={{ color: "rgba(241,163,52,255)" }}>
              <span>TEACHING</span>
              <span className="text-2xl mt-2">Costa Rica</span>
            </div>
          </Link>
        </motion.div>
        
      </div>
    </div>
    </main>
    <Footer />
  </div>
  );
};

export default VolunteeringAndConservation;