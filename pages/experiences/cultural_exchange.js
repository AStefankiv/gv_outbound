import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";
import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";
import Script from 'next/script';

const CulturalExchange = () => {
  return (

    <div className="flex flex-col min-h-screen w-full">

      <Head>
        {/* Google Tag Manager */}
        {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16884794738"></Script>
        <Script>window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)};
          gtag('js', new Date());
          gtag('config', 'AW-16884794738');
        </Script> */}
      </Head>

      <Header />
      <main className="flex-grow mt-40 mb-6 w-full">
      <div className="w-full mx-auto mt-20 px-6 sm:px-8 lg:px-16" id="countryLinks">
      <div className="text-4xl text-center lg:text-5xl font-medium leading-relaxed text-black-600 mb-10">
      <h1>Cultural exchange</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 mb-20">

        {/*FRANCE LANGUAGE ASSISTANT Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full"
        >
          <Link href="/work-holiday-france/teach-english-france" className="relative h-0 pb-56 block">
            <img
              src="/assets/france-image.jpg"
              alt="TEACH IN FRANCE"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-4xl font-bold text-outline-white text-center"
            style={{ color: "rgba(241,163,52,255)" }}>
              <span>LANGUAGE ASSISTANT</span>
              <span className="text-2xl mt-2">France</span>
            </div>
          </Link>
        </motion.div>

          {/* ITALY LANGUAGE ASSISTANT Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full"
          >
            <Link href="/working-holiday-italy/teach-english-italy" className="relative h-0 pb-56 block">
              <img
                src="/assets/italy-image.jpg"
                alt="TEACH IN ITALY"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-4xl font-bold text-outline-white text-center"
            style={{ color: "rgba(241,163,52,255)" }}>
              <span>LANGUAGE ASSISTANT</span>
              <span className="text-2xl mt-2">Italy</span>
              </div>
            </Link>
          </motion.div>
          </div>

          <div className="flex justify-center">
          {/* SPAIN LANGUAGE ASSISTANT Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full sm:w-1/2"
          >
            <Link href="/work-opportunities-spain/language_assistant_spain" className="relative h-0 pb-56 block">
              <img
                src="/assets/spain-image.jpeg"
                alt="TEACH ALIORE SPAIN"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-4xl font-bold text-outline-white text-center"
            style={{ color: "rgba(241,163,52,255)" }}>
              <span>LANGUAGE ASSISTANT</span>
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

export default CulturalExchange;