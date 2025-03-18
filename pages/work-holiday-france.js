import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Script from "next/script";
import { useEffect } from "react";

const France = () => {

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
        <title>Working Holiday in France | Global Village Work Learn Travel</title>
        <meta
          name="description"
          content="Canadians can work abroad in France as a language assistant. Enjoy a working holiday experience in France!"
        />
        <meta name="keywords" content="Work Holiday in France" />
        <meta name="author" content="GVWLT" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://worklearntravel.ca/work-holiday-france" />
      </Head>

      <Header />
      <main className="flex-grow mt-24 sm:mt-40 mb-6 w-full">
        {/* Main Content Grid */}
        <div className="w-full mt-8 mb-6 px-4 sm:px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Section - Text */}
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl font-bold mb-6 text-center">Working Holiday in France for Canadians</h1>
              <p className="text-xl leading-relaxed mb-4">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;France offers a unique and exciting opportunity for Canadians interested in international experiences. One of the world's leading economies, France also offers a unique cultural heritage and rich lifestyle. Whether you're interested in fashion, technology, hospitality, or international business, France is a hub for many global industries. And culturally, from the bustling streets of Paris to the picturesque villages of Provence, you’ll experience lovely scenery, world-renowned cuisine, and an emphasis on work-life balance that is rare in many other countries. 
              </p>
              <p className="text-xl leading-relaxed">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In addition, living in France provides the chance to improve your French language skills—an asset that can boost your employability at home in Canada or many places around the world. France's central location in Europe makes it easy to travel and explore other countries on weekends, giving you both professional experience and the adventure of a lifetime.
              </p>
            </div>

            {/* Right Section - Links */}
            <div className="flex flex-col gap-4 justify-center items-center">
              
              {/* LANGUAGE ASSISTANT Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full"
              >
                <Link href="/work-holiday-france/teach-english-france" className="relative h-0 pb-56 block">
                  <img
                    src="/assets/france_language_assistant.png"
                    alt="TEACH IN FRANCE"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-4xl font-bold text-outline-white text-center"
                    style={{ color: "rgba(241,163,52,255)" }}
                  >
                    LANGUAGE ASSISTANT
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

export default France;
