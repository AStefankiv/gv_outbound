import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";

const InternationalInternship = () => {
  return (

    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <main className="flex-grow mt-24 mb-6 w-full">
    <div className="w-full mx-auto mt-20 px-6 sm:px-8 lg:px-16" id="countryLinks">
      <div className="text-4xl text-center lg:text-5xl font-medium leading-relaxed text-black-600 mb-10">
      <h1>International internship</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-20">

        {/*KOREA INTERNSHIP Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full"
        >
          <Link href="/korea/k_internship_form" className="relative h-0 pb-56 block">
            <img
              src="/assets/korea-image.jpeg"
              alt="INTERNSHIP"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-4xl font-bold text-center" style={{ color: "rgba(241,163,52,255)" }}>
              <span>INTERNSHIP</span>
              <span className="text-2xl mt-2">Korea</span>
            </div>
          </Link>
        </motion.div>

        {/*SPAIN INTERNSHIP Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full"
        >
          <Link href="/spain/spain_internship" className="relative h-0 pb-56 block">
            <img
              src="/assets/spain-image.jpeg"
              alt="INTERNSHIP"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-4xl font-bold text-center" style={{ color: "rgba(241,163,52,255)" }}>
              <span>INTERNSHIP</span>
              <span className="text-2xl mt-2">Spain</span>
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

export default InternationalInternship;