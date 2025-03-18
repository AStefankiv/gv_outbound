import Head from 'next/head';
import { useEffect } from 'react';
import Footer from '../../components/Layout/Footer';
import Header from '../../components/Layout/Header';
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../../components/Layout/ScrollAnimationWrapper";
import ERQuizProgramCTA from "../../components/ERQuizProgramCTA";
import Script from 'next/script';

const HongKongInternship = () => {

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

  return (
    <div className="flex flex-col min-h-screen w-full">

      <Head>
        <title>Hong Kong Internships | Global Village Work Learn Travel</title>
        <meta
          name="description"
          content="Work in a Hong Kong internship - options for recent graduates with Global Village Work Learn Travel."
        />
        <meta name="keywords" content="Hong Kong Internship" />
        <meta name="author" content="GVWLT" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://worklearntravel.ca/work-opportunities-hong-kong/internship" />

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
        <div className="w-full mt-8 mb-6 px-6 sm:px-4 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Header Section */}
            <div className="flex flex-col">
              <h1 className="text-4xl lg:text-5xl font-medium leading-relaxed text-black-600 mb-6">
              Work Opportunities in Hong Kong
              </h1>
              <p className="text-xl leading-relaxed mb-4">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This paid internship placement experience offers Canadian participants the chance to gain practical experience in Hong Kong’s dynamic hospitality and tourism industry. In this work opportunity in Hong Kong, interns are placed in top hotels and resorts, travel agencies, and event planning companies, where they engage in hands-on roles that align with their career goals. From guest relations to marketing and event coordination, interns work directly with industry professionals and contribute to real projects, enhancing their skills in a fast-paced, multicultural setting. This experience also provides an inside look at Hong Kong's unique blend of Eastern and Western hospitality practices, making it ideal for those pursuing global careers in tourism and hospitality.
              </p>
              <p className="text-xl leading-relaxed mb-8">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;An ideal participant is adaptable and interested in Asian culture. Your internship placement could be in a variety of places in Hong Kong, but all internships offer assistance with a working holiday visa in Hong Kong, accommodation, medical insurance, and a range of additional benefits depending on host selection. When off-duty, enjoy the rich multicultural heritage of Hong Kong, and easy travel access to a variety of nearby Asian destinations!
              </p>
              <ERQuizProgramCTA  
              heading="Is a Travel/Work Experience in Hospitality Right for You?"
              subHeading="Take the Global Village English “Hospitality Internship Readiness Quiz”"
              quizUrl="https://cr-gve.virtualadviser.com/?lead_src=w-body&heading2=Take%20the%20Global%20Village%20English%20%E2%80%9CHospitality%20Internship%20Readiness%20Quiz%E2%80%9D&heading=Is%20a%20Travel%2FWork%20Experience%20in%20Hospitality%20Right%20for%20You%3F&sectionwrapper-bg=es6FJvP1QoeWkVtQlvk7"
              linkText="Get Your Hospitality Internship Readiness Score Now >>"
              />
              <ul className="text-lg text-black-500 space-y-4">
                <li><strong>Location:</strong> Hong Kong</li>
                <li><strong>Length of stay:</strong> 6 months - 1 year</li>
                <li><strong>Requirements:</strong> currently enrolled in college or university in a related degree</li>
                <li><strong>Visa requirements:</strong> Canadian citizen age 18-30; see {' '}
                <a href="https://www.whs.gov.hk/en/hk-working-holiday-guide.php"
                className='text-blue-500 underline hover:text-blue-600'>
                here 
                </a>{' '}for a summary; contact us for more details</li>
                <li><strong>Cost:</strong> $2999</li>
              </ul>
              <marquee className="text-2xl font-semibold text-orange-500 mt-4" direction="left" scrollamount="7">
                Scholarships up to $1,000 are available for qualifying students! Talk to your advisor about whether you qualify for a scholarship.
              </marquee>
            </div>

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
      </main>

      <Footer />
    </div>
  );
};

export default HongKongInternship;