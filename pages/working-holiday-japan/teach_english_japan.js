import Head from 'next/head';
import { useEffect } from 'react';
import Footer from '../../components/Layout/Footer';
import Header from '../../components/Layout/Header';
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../../components/Layout/ScrollAnimationWrapper";
import ERQuizProgramCTA from '../../components/ERQuizProgramCTA';
import Script from 'next/script';

const JapanTeachEnglish = () => {

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
        <title>Teach English in Japan | Global Village Work Learn Travel</title>
        <meta
          name="description"
          content="Teach English in Japan as a Canadian through GV Work Learn Travel! Job placements and work abroad opportunities available."
        />
        <meta name="keywords" content="Teach English in Japan" />
        <meta name="author" content="GVWLT" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://worklearntravel.ca/working-holiday-japan/teach_english_japan" />
        
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
        <div className="w-full mt-8 mb-6 px-6 sm:px-4 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Header Section */}
            <div className="flex flex-col">
              <h1 className="text-4xl lg:text-5xl font-medium leading-relaxed text-black-600 mb-6">
                Teach English in Japan
              </h1>
              <p className="text-xl leading-relaxed mb-4">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This placement program offers young adults the opportunity to teach English in Japanese public schools through paid positions. Participants work as co-teachers, collaborating with Japanese educators to develop engaging lessons and foster students’ language skills. You will be fully supported as you work in an elementary, junior high, or high school in Japan, giving you an outstanding chance to be immersed in a local community while gaining teaching experience. This program offers a rewarding way to live and work in Japan while making a meaningful impact on the lives of young people.
              </p>
              <p className="text-xl leading-relaxed mb-8">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The ideal participant for this position has strong English language skills, and is flexible and resilient. Applicants who are accepted will be offered a position in one of the regions of Japan. All contracts include a salary, medical insurance, and accommodations or accommodation assistance. This full-time position leaves your evenings and weekends free to enjoy the full range of Japanese life and culture!
              </p>
              <ERQuizProgramCTA  
              heading="Is a Travel/Work Experience as an Assistant English Language Teacher Right for You?"
              subHeading="Take the Global Village English “Teaching English in Japan Readiness Quiz”"
              quizUrl='https://cr-gve.virtualadviser.com/?lead_src=w-body&heading2=Take%20the%20Global%20Village%20English%20%E2%80%9CTeaching%20English%20in%20Japan%20Readiness%20Quiz%E2%80%9D&heading=Is%20a%20Travel%2FWork%20Experience%20as%20an%20Assistant%20English%20Language%20Teacher%20Right%20for%20You%3F&sectionwrapper-bg=2hQ7iO3JT69yU0EZjxQw'
              linkText='Get Your Teaching English in Japan Readiness Score Now >>'
              />
              <ul className="text-lg text-black-500 space-y-4">
                <li><strong>Location:</strong> Varies; placement in one of the 47 prefectures of Japan</li>
                <li><strong>Length of stay:</strong> 1 year+</li>
                <li><strong>Requirements:</strong> bachelor’s degree (education preferred but not required); currently resident in Canada; holds a Canadian drivers’ license</li>
                <li><strong>Visa requirements:</strong> Canadian citizen age 18-35; see {' '}
                <a href="https://www.ca.emb-japan.go.jp/itpr_en/visa.html"
                className='text-blue-500 underline hover:text-blue-600'>
                here 
                </a>{' '}for a summary; contact us for more details</li>
                <li><strong>Cost:</strong> $799</li>
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

export default JapanTeachEnglish;