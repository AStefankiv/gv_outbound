import Head from 'next/head';
import { useEffect } from 'react';
import Footer from '../../components/Layout/Footer';
import Header from '../../components/Layout/Header';
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../../components/Layout/ScrollAnimationWrapper";
import ERQuizProgramCTA from '../../components/ERQuizProgramCTA';
import Script from 'next/script';

const KoreaTeachEnglish = () => {

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
        <title>Teach English in Korea | Global Village Work Learn Travel</title>
        <meta
          name="description"
          content="Teach English in Korea as a Canadian through GV Work Learn Travel! Job placements and work abroad opportunities available."
        />
        <meta name="keywords" content="Teach English in Korea" />
        <meta name="author" content="GVWLT" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://worklearntravel.ca/working-holiday-korea/teach_english_korea" />
        
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
                Teach English in Korea
              </h1>
              <p className="text-xl leading-relaxed mb-4">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In this work placement program, you’ll be participating in a working holiday in Korea, funding your valuable overseas work experience as you gain insight into local culture and make new friends. You will be employed full time teaching English, working in the classroom with a Korean co-teacher to deliver language lessons in a public elementary, middle, or high school. This placement not only provides you with a salaried work position, but also with valuable pre-departure and on-arrival training and orientation that ensures that you get the most out of your work experience. This working holiday in Korea program is ideal for Canadian youths eager to make a difference in students' lives while gaining firsthand experience in a new education system. The supportive environment and structured lesson plans provide a meaningful way to work, learn, and live in South Korea.
              </p>
              <p className="text-xl leading-relaxed mb-8">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The ideal participant for this position is healthy, has strong English language skills, and is curious and adaptable. Applicants who are accepted will be offered a position in one of the administrative regions of South Korea, and all contracts include a salary, medical insurance, a bonus package, and provide accommodations. This full-time position leaves your evenings and weekends free to enjoy the full range of Korean life and culture!
              </p>
              <ERQuizProgramCTA  
              heading="Is a Travel/Work Experience Teaching English in Korea Right for You?"
              subHeading="Take the Global Village English “Teaching English in Korea Readiness Quiz”"
              quizUrl="https://cr-gve.virtualadviser.com/?lead_src=w-body&heading2=Take%20the%20Global%20Village%20English%20%E2%80%9CTeaching%20English%20in%20Korea%20Readiness%20Quiz%E2%80%9D&heading=Is%20a%20Travel%2FWork%20Experience%20Teaching%20English%20in%20Korea%20Right%20for%20You%3F&sectionwrapper-bg=SV0b3z1bQyPa4l0KF2QA"
              linkText="Get Your Teaching English in Korea Readiness Score Now >>"
              />
              <ul className="text-lg text-black-500 space-y-4">
                <li><strong>Location:</strong> Varies; placement in one of the 17 administrative regions of South Korea</li>
                <li><strong>Length of stay:</strong> 1 year+</li>
                <li><strong>Requirements:</strong> bachelor’s degree and TESL certification, or bachelor’s degree in education; education received in English</li>
                <li><strong>Visa requirements:</strong> Canadian citizen age 18-35; see {' '}
                <a href="https://whic.mofa.go.kr/contents.do?menuNo=90&contentsNo=38"
                className='text-blue-500 underline hover:text-blue-600'>
                here 
                </a>{' '}for a summary; contact us for more details</li>
                <li><strong>Cost:</strong> $1499</li>
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

export default KoreaTeachEnglish;