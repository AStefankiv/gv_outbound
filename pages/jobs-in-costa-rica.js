import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import { useEffect } from "react";

const CostaRica = () => {

    // Load Google Tag Manager
    useEffect(() => {
      const gtagScript = document.createElement("script");
      gtagScript.async = true;
      gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-16884794738";
      document.head.appendChild(gtagScript);
  
      gtagScript.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "AW-16884794738");
      };
  
    }, []);

  return (
    <div className="flex flex-col min-h-screen w-full">

      <Head>
        <title>Volunteering in Costa Rica | Global Village Work Learn Travel</title>
        <meta
          name="description"
          content="Looking to volunteer in Costa Rica? Global Village Work Learn Travel can connect you with the ultimate volunteer experience!"
        />
        <meta name="keywords" content="Volunteer in Costa Rica" />
        <meta name="author" content="GVWLT" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://worklearntravel.ca/jobs-in-costa-rica" />
        
      </Head>

      <Header />

      <main className="flex-grow mt-40 mb-6 w-full">
        {/* Main Content Grid */}
        <div className="w-full mt-8 mb-6 px-4 sm:px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Section - Text */}
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl font-bold mb-6 text-center">Experience Costa Rica</h1>
              <p className="text-xl leading-relaxed mb-4">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Costa Rica is an exceptional destination for Canadians seeking international opportunities,offering a unique combination of environmental conservation, vibrant culture, and adventure. Known for its lush rainforests, stunning beaches, and rich biodiversity, Costa Rica provides a dynamic backdrop for people interested in making a positive impact while exploring one of the most eco-conscious countries in the world. Costa Ricans, or "Ticos," are known for their friendliness, and for the national ethos of "pura vida," which translates to "pure life" or "simple life." This laid-back and positive attitude permeates daily life, making it easy for new arrivals to feel at home while experiencing authentic cultural immersion.
              </p>
              <p className="text-xl leading-relaxed">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As one of the most biodiverse countries on Earth, Costa Rica is well known for its deep commitment to sustainability and conservation. It offers numerous opportunities for Canadians to contribute to vital environmental projects from wildlife rehabilitation to reforestation efforts. If you are passionate about protecting nature, you will find Costa Rica an ideal place for your international experience.
              </p>
              <p className="text-xl leading-relaxed">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As part of your international experience, Costa Rica offers plenty of opportunities for adventure and leisure. The country’s diverse landscape provides a wealth of locations to explore, whether you are keen to hike active volcanoes, zip-line through cloud forests, or surf along its Pacific and Caribbean coasts. Costa Rica is a perfect destination for those eager to balance meaningful work with adventure and fun.
              </p>
            </div>

            {/* Right Section - Links */}
            <div className="flex flex-col gap-4">

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
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-4xl font-bold text-outline-white text-center"
                    style={{ color: "rgba(241,163,52,255)" }}
                  >
                    NATURE CONSERVATION
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
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-4xl font-bold text-outline-white text-center"
                    style={{ color: "rgba(241,163,52,255)" }}
                  >
                    COMMUNITY DEVELOPMENT
                  </div>
                </Link>
              </motion.div>
              
              {/* TEACHING Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full"
              >
                <Link href="/jobs-in-costa-rica/costa-rica-teacher-jobs" className="relative h-0 pb-56 block">
                  <img
                    src="/assets/teach_costa_rica.jpeg"
                    alt="TEACHING"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-4xl font-bold text-outline-white text-center"
                    style={{ color: "rgba(241,163,52,255)" }}
                  >
                    TEACHING
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

export default CostaRica;
