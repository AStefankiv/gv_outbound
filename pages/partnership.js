import { useEffect } from 'react';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import Head from 'next/head';
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../components/Layout/ScrollAnimationWrapper";

const Partnership = () => {
  useEffect(() => {

    const script = document.createElement('script');
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.async = true;

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID,
          formId: process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID_PARTNERSHIP,
          
          target: "#hubspotForm", // This is 'id' of the form container
          onFormReady: function (form) {
            console.log('New HubSpot form is ready');
          },
          onFormSubmitted: function () {
            alert('Form successfully submitted');
          }
        });
      }
    };

    document.body.appendChild(script);
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
      <Header />

      <main className="flex-grow mt-24 sm:mt-40 mb-6 w-full">
        <div className="w-full mt-8 mb-6 px-6 sm:px-4 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Header Section */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl lg:text-5xl font-medium leading-relaxed text-black-600 mb-6">
                Let's Partner Up!
              </h1>
              <p className="text-xl leading-relaxed mb-4">
                Do you represent a company in{' '}
                <a href="https:www.canada.ca/en/immigration-refugees-citizenship/services/canadians/international-experience-canada.html"
                className='text-blue-500 underline hover:text-blue-600'>
                one of the IEC framework nations
                </a>{' '}
                that offers excellent overseas experiences to Canadian youths? Work Learn Travel would love to hear from you and build a partnership to help you reach more people in Canada! Fill out our contact form and one of our staff will be in touch with you soon to discuss the opportunity for collaboration.
              </p>
            </div>

            {/* Right Section - HubSpot Form */}
            <div className="w-2/3 mx-auto">
              <ScrollAnimationWrapper className="w-full justify-end">
                <motion.div className="h-full w-full p-4">
                  <div className="my-12 text-center">
                    <h1 className="text-4xl text-center lg:text-5xl font-medium leading-relaxed text-black-600 mb-4">
                      Tell us about your company!
                    </h1>
                    <p className="text-lg text-black-500 mb-8">
                      Fill out the form below, and we'll get in touch with you soon.
                    </p>
                  </div>

                  <div id="hubspotForm"></div>

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

export default Partnership;