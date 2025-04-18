import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";
import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";
import Script from 'next/script';

const JobPlacement = () => {
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
      <main className="flex-grow mt-24 sm:mt-40 mb-6 w-full">
      <div className="w-full mx-auto mt-20 px-6 sm:px-8 lg:px-16" id="countryLinks">
      <div className="text-4xl text-center lg:text-5xl font-medium leading-relaxed text-black-600 mb-10">
      <h1>Job placement</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 mb-20">
        {/*KOREA TEACH ENGLISH Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full"
        >
          <Link href="/working-holiday-korea/teach_english_korea" className="relative h-0 pb-56 block">
            <img
              src="/assets/korea-image.jpeg"
              alt="TEACH ENGLISH"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-4xl font-bold text-outline-white text-center"
            style={{ color: "rgba(241,163,52,255)" }}>
              <span>TEACH ENGLISH</span>
              <span className="text-2xl mt-2">Korea</span>
            </div>
          </Link>
        </motion.div>

        {/* YACHT CREW Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full"
        >
          <Link href="/visa-for-croatia/work-on-yacht"
          className="relative h-0 pb-56 block"
          >
            <picture className="absolute inset-0 w-full h-full">
              <source
              srcSet="/assets/yacht-desktop.jpeg"
              media="(min-width: 1024px)"
            />
            <img
              src="/assets/yacht-mobile.jpeg"
              alt="CROATIA YACHT CREW"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
            </picture>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-4xl font-bold text-outline-white text-center"
            style={{ color: "rgba(241,163,52,255)" }}>
              <span>YACHT CREW TRAINING</span>
              <span className="text-2xl mt-2">Croatia</span>
            </div>
          </Link>
        </motion.div>
      </div>

          {/* Bottom row with centered Japan */}
          <div className="flex justify-center">
            {/*JAPAN TEACH Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full sm:w-1/2"
            >
              <Link href="/working-holiday-japan/teach_english_japan" className="relative h-0 pb-56 block">
                <img
                  src="/assets/japan-image.jpeg"
                  alt="TEACH JAPAN"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-4xl font-bold text-outline-white text-center"
                style={{ color: "rgba(241,163,52,255)" }}>
                  <span>TEACH ENGLISH</span>
                  <span className="text-2xl mt-2">Japan</span>
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

export default JobPlacement;