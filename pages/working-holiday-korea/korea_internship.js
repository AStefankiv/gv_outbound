import Head from 'next/head';
import { useEffect } from 'react';
import Footer from '../../components/Layout/Footer';
import Header from '../../components/Layout/Header';
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../../components/Layout/ScrollAnimationWrapper";
import ERQuizProgramCTA from '../../components/ERQuizProgramCTA';
import Script from 'next/script';

const KoreaInternship = () => {

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
        <title>Internships in Korea | Global Village Work Learn Travel</title>
        <meta
          name="description"
          content="Internships in Korea through GV Work Learn Travel offer a variety of companies and sectors to fit your goals."
        />
        <meta name="keywords" content="Internships in Korea" />
        <meta name="author" content="GVWLT" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://worklearntravel.ca/working-holiday-korea/korea_internship" />
        
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
                Internships in Korea
              </h1>
              <p className="text-xl leading-relaxed mb-4">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In this personalized internship program for a working holiday in Korea, you’ll be getting valuable business insights and building your network as part of a successful South Korean company. We’ll work with you to explore your career goals and interests, and then connect you with a short-term unpaid internship position, selecting the ideal company for you from among hundreds of partners. Whether you want to focus on green tech, finance, media, tourism, design, or one of many other sectors, we can find the perfect professional environment for you to grow relevant skills while experiencing Korean workplace culture! Wherever you’re placed, you’ll have tasks and responsibilities tailored to what you’re looking for, whether it’s administration, public relations, marketing, content creation, or something else. This program is ideal for those eager to broaden their professional horizons and gain valuable insights into South Korea’s business landscape.
              </p>
              <p className="text-xl leading-relaxed mb-8">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The ideal participant for this internship opportunity is open-minded and ambitious. Your specific internship requests will determine where, when, and what exactly you do, but all participants will be provided with one-to-one consultation and guidance throughout the project, and all necessary information will be provided well in advance. Accommodation is available on request.
              </p>
              <ERQuizProgramCTA  
              heading="Is an Internship in Korea Right for You?"
              subHeading="Take the Global Village English “Korean Internship Readiness Quiz”"
              quizUrl="https://cr-gve.virtualadviser.com/?lead_src=w-body&heading2=Take%20the%20Global%20Village%20English%20%E2%80%9CKorean%20Internship%20Readiness%20Quiz%E2%80%9D&heading=Is%20an%20Internship%20in%20Korea%20Right%20for%20You%3F&sectionwrapper-bg=cSMRgmhnSr2nbeQElPtD"
              linkText="Get Your Korean Internship Readiness Score Now >>"
              />
              <ul className="text-lg text-black-500 space-y-4">
                <li><strong>Location:</strong> Varies; placement in a major South Korean city</li>
                <li><strong>Length of stay:</strong> 2-6 months</li>
                <li><strong>Requirements:</strong> high school diploma; some placements may have additional requirements</li>
                <li><strong>Visa requirements:</strong> Canadian citizen age 18-35; see {' '}
                <a href="https://whic.mofa.go.kr/contents.do?menuNo=90&contentsNo=38"
                className='text-blue-500 underline hover:text-blue-600'>
                here 
                </a>{' '}for a summary; contact us for more details</li>
                <li><strong>Cost:</strong> varies based on position; contact us for details</li>
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

export default KoreaInternship;