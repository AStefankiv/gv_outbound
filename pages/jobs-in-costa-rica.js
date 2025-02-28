import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Script from "next/script";

const CostaRica = () => {
  
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'AW-16884794738');
  }, []);

  const gtag_report_conversion = (url) => {
    const callback = function () {
      if (typeof url !== "undefined") {
        window.location = url;
      }
    };
    window.gtag("event", "conversion", {
      send_to: "AW-16884794738/uY75CLi2uKAaEPKKpvM-",
      value: 1.0,
      currency: "CAD",
      event_callback: callback,
    });
    return false;
  };

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

        {/* Google Tag Manager */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16884794738"></Script>
      </Head>

      <Header />

      <main className="flex-grow mt-40 mb-6 w-full">
        <div className="w-full mt-8 mb-6 px-4 sm:px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Left Section - Text */}
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl font-bold mb-6 text-center">Experience Costa Rica</h1>
              <p className="text-xl leading-relaxed mb-4">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Costa Rica is an exceptional destination...
              </p>
            </div>

            {/* Right Section - Links */}
            <div className="flex flex-col gap-4">

              {/* NATURE CONSERVATION Button */}
              <motion.div whileHover={{ scale: 1.05 }} className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full">
                <Link href="/jobs-in-costa-rica/costa-rica-sea-conservation">
                  <img src="/assets/nature_conservation.jpg" alt="nature_conservation" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-4xl font-bold text-outline-white text-center" style={{ color: "rgba(241,163,52,255)" }}>
                    NATURE CONSERVATION
                  </div>
                </Link>
              </motion.div>

              {/* COMMUNITY DEVELOPMENT Button */}
              <motion.div whileHover={{ scale: 1.05 }} className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full">
                <Link href="/jobs-in-costa-rica/community_development">
                  <img src="/assets/community_development.png" alt="INTERNSHIP" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-4xl font-bold text-outline-white text-center" style={{ color: "rgba(241,163,52,255)" }}>
                    COMMUNITY DEVELOPMENT
                  </div>
                </Link>
              </motion.div>

              {/* TEACHING Button */}
              <motion.div whileHover={{ scale: 1.05 }} className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full">
                <Link href="/jobs-in-costa-rica/costa-rica-teacher-jobs">
                  <img src="/assets/teach_costa_rica.jpeg" alt="TEACHING" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-4xl font-bold text-outline-white text-center" style={{ color: "rgba(241,163,52,255)" }}>
                    TEACHING
                  </div>
                </Link>
              </motion.div>

              {/* Submit Button with Conversion Tracking */}
              <button onClick={() => gtag_report_conversion('https://your-link.com')} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                Submit
              </button>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CostaRica;
