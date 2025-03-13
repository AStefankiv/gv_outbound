import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import ERQuizProgramCTA from "../components/ERQuizProgramCTA";
import ScrollAnimationWrapper from "../components/Layout/ScrollAnimationWrapper";
import { useEffect } from "react";

const GV_Snow = () => {

  // Load external scripts
  useEffect(() => {
    // Create Virtual Adviser script element
    const vaScript = document.createElement("script");
    vaScript.src = "https://assets.virtualadviser.com/embed.js";
    vaScript.async = true;
    document.body.appendChild(vaScript);

    // Clean up on unmount
    return () => {
      if (document.body.contains(vaScript)) {
        document.body.removeChild(vaScript);
      }
    };
  }, []);

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
        <title>Work Overseas as a Ski Instructor | GV WLT</title>
        <meta
          name="description"
          content="Canadian looking for overseas work as a ski instructor? We can help you find the perfect experience!"
        />
        <meta name="keywords" content="Skiing Working Holiday" />
        <meta name="author" content="GVWLT" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://worklearntravel.ca/gv-snow" />
      </Head>

      <Header />

      <main className="flex-grow mt-40 mb-6 w-full">
        {/* Main Content Grid */}
        <div className="w-full mt-8 mb-6 px-4 sm:px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Section - Text */}
            <div className="flex flex-col">
              <h1 className="text-5xl font-bold mb-6 text-center">GV Snow</h1>
              <p className="text-xl leading-relaxed mb-10">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GV SNOW provides work placements for certified ski and snowboard instructors in beautiful destinations around the world. Each option is a world-class ski destination, and each offers unique benefits. Click through to see the opportunities, requirements, and inclusions/exclusions of the programs in each area. All placements include job guarantees, assistance with accommodation, and opportunities for further education, along with the cultural experiences each country offers.
              </p>
              <ERQuizProgramCTA  
              heading="Is a Travel/Work Experience as a Ski/Snowboard Instructor Right for You?"
              subHeading="Take the Global Village English “Ski/Snowboard Instructor Readiness Quiz”"
              quizUrl="https://cr-gve.virtualadviser.com/?lead_src=w-body&heading2=Take%20the%20Global%20Village%20English%20%E2%80%9CSki%2FSnowboard%20Instructor%20Readiness%20Quiz%E2%80%9D&heading=Is%20a%20Travel%2FWork%20Experience%20as%20a%20Ski%2FSnowboard%20Instructor%20Right%20for%20You%3F&sectionwrapper-bg=r2ncDU5lQl6yOqh9cdIu"
              linkText="Get Your Ski/Snowboard Instructor Readiness Score Now >>"
              />
            </div>

            {/* Right Section - Links */}
            <div className="flex flex-col gap-4">

              {/* GV SNOW - Spain */}
              {/* <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full"
              >
                <Link href="/gv-snow/gv-snow-spain" className="relative h-0 pb-56 block">
                  <img
                    src="/assets/ski-spain.jpg"
                    alt="SKI-SPAIN"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-4xl font-bold text-outline-white text-center"
                    style={{ color: "rgba(241,163,52,255)" }}
                  >
                    GV SNOW - Spain
                  </div>
                </Link>
              </motion.div> */}

              {/* GV SNOW - Japan */}
              {/* <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full"
              >
                <Link href="/gv-snow/gv-snow-japan" className="relative h-0 pb-56 block">
                  <img
                    src="/assets/ski-japan.jpg"
                    alt="SKI_JAPAN"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-4xl font-bold text-outline-white text-center"
                    style={{ color: "rgba(241,163,52,255)" }}
                  >
                    GV SNOW - Japan
                  </div>
                </Link>
              </motion.div> */}
              
              {/* GV SNOW - Switzerland */}
              {/* <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full"
              >
                <Link href="/gv-snow/gv-snow-switzerland" className="relative h-0 pb-56 block">
                  <img
                    src="/assets/ski-switzerland.jpg"
                    alt="SKI-SWITZERLAND"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-4xl font-bold text-outline-white text-center"
                    style={{ color: "rgba(241,163,52,255)" }}
                  >
                    GV SNOW - Switzerland
                  </div>
                </Link>
              </motion.div> */}

              {/* GV SNOW - Austria */}
              {/* <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full"
              >
                <Link href="/gv-snow/gv-snow-austria" className="relative h-0 pb-56 block">
                  <img
                    src="/assets/ski-austria.jpeg"
                    alt="SKI-AUSTRIA"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-4xl font-bold text-outline-white text-center"
                    style={{ color: "rgba(241,163,52,255)" }}
                  >
                    GV SNOW - Austria
                  </div>
                </Link>
              </motion.div> */}

              {/* Right Section - HubSpot Form */}
              <div className="w-full sm:w-3/4 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-auto">
                <ScrollAnimationWrapper className="w-full justify-end">
                  <motion.div className="h-full w-full p-4">
                    {/* Begin "🗒️ Get the Details! - Multistep Form" Form Embed */}
                    <div className="va-embed" data-src="https://gtd-multistep-gve.virtualadviser.com"></div>
                    {/* /End "🗒️ Get the Details! - Multistep Form" Form Embed */}
                  </motion.div>
                </ScrollAnimationWrapper>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GV_Snow;
