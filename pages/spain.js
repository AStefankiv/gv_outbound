import Head from 'next/head';
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Image from "next/image"; // Import Next.js Image component

const SpainPage = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      
      <Head>
        <title>Work Opportunities in Spain | GV WLT</title>
        <meta
          name="description"
          content="Work opportunities in Spain are available for Canadians using a working holiday program through Global Village Work Learn Travel"
        />
        <meta name="keywords" content="Work Opportunities in Spain" />
        <meta name="author" content="GVWLT" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://worklearntravel.ca/spain" />
      </Head>

      <Header />
      <main className="flex-grow mt-24 mb-6 w-full">
        {/* Main Content Grid */}
        <div className="w-full mt-8 mb-6 px-4 sm:px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Section - Text */}
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl font-bold mb-6 text-center">
                Work Opportunities in Spain
              </h1>
              <p className="text-xl leading-relaxed mb-4">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;From Barcelona to Madrid to Seville, an overseas experience in Spain means the chance to immerse yourself in art, history, and a buzzing social scene. If those Canadian winters are getting too long and cold for you, Spain’s beautiful coastlines and picturesque towns provide the perfect escape for those who love sun and sand. The culture prioritizes leisure, allowing you to enjoy siestas, long lunches, and plenty of time to explore the country while taking advantage of work opportunities in Spain.
              </p>
              <p className="text-xl leading-relaxed">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For those looking to learn
                or improve their Spanish, there’s no better place to practice
                than in everyday conversations with locals. Plus, Spain is
                well-connected to the rest of Europe, making it easy to travel
                to neighboring countries on weekends or during time off.
                Whether for the cultural immersion, career opportunities, or
                stunning landscapes, Spain is an ideal choice for a working
                holiday.
              </p>
            </div>

            {/* Right Section - Links */}
            <div className="flex flex-col gap-4">
              {/* INTERNSHIP Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full"
              >
                <Link href="/spain/spain_internship" className="relative h-0 pb-56 block">
                  <img
                    src="/assets/internship_button.jpg"
                    alt="INTERNSHIP"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-4xl font-bold text-outline-white text-center"
                    style={{ color: "rgba(241,163,52,255)" }}
                  >
                    INTERNSHIP
                  </div>
                </Link>
              </motion.div>

              {/* LANGUAGE ASSISTANT Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full"
              >
                <Link
                  href="/spain/language_assistant_spain"
                  className="relative h-0 pb-56 block"
                >
                  <picture className="absolute inset-0 w-full h-full">
                    <source
                      srcSet="/assets/spain_language_assistant-desktop.jpg"
                      media="(min-width: 1024px)"
                    />
                    <img
                      src="/assets/spain_language_assistant-mobile.jpg"
                      alt="LANGUAGE ASSISTANT"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </picture>
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

export default SpainPage;