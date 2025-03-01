import Head from 'next/head';
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Script from 'next/script';

const JapanPage = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">

      <Head>
        <title>Canadian Working Holiday in Japan | GV Work Learn Travel</title>
        <meta
          name="description"
          content="A Working Holiday in Japan available for Canadians looking for overseas experiences."
        />
        <meta name="keywords" content="Working Holiday in Japan" />
        <meta name="author" content="GVWLT" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://worklearntravel.ca/working-holiday-japan" />
        <link rel="apple-touch-icon" href="/favicon/GV-English-Favicon.ico" />

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
        {/* Main Content Grid */}
        <div className="w-full mt-8 mb-6 px-4 sm:px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Section - Text */}
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl font-bold mb-6 text-center">Working Holiday in Japan for Canadians</h1>
              <p className="text-xl leading-relaxed mb-4">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Japan is an extraordinary destination for Canadians seeking an overseas working holiday that combines adventure, cultural enrichment, and personal growth. Known for its harmonious blend of ancient traditions and cutting-edge innovation, Japan offers a unique experience for anyone looking to make a change. Whether you’re captivated by the serene beauty of historic temples, the buzzing energy of world-class cities, or beautiful island landscapes, Japan has something for everyone. The country’s safe environment and world-class public transportation make it easy to explore every corner of this fascinating nation.
              </p>
              <p className="text-xl leading-relaxed">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Japan’s dedication to craftsmanship and quality can also be inspiring for visitors. From exquisite cuisine and tea ceremonies to traditional arts like calligraphy and flower arranging, there’s always something to discover. Work in Japan offers not only professional experience but also a deep connection to a culture that values respect, community, and innovation—making it a once-in-a-lifetime adventure.
              </p>
            </div>

            {/* Right Section - Links */}
            <div className="flex flex-col gap-4 justify-center items-center">
              
              {/* TEACH ENGLISH Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full"
              >
                <Link href="/working-holiday-japan/teach_english_japan" className="relative h-0 pb-56 block">
                  <img
                    src="/assets/teach_korea.jpeg"
                    alt="TEACH ENGLISH"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-4xl font-bold text-outline-white text-center"
                    style={{ color: "rgba(241,163,52,255)" }}
                  >
                    TEACH ENGLISH
                  </div>
                </Link>
              </motion.div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JapanPage;
