import React, { useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const ContactForm = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.async = true;

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID,
          formId: process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID_HOMEFORM,
          target: "#hubspotForm",
          onFormReady: function (form) {
            console.log('New HubSpot form is ready');
          },
          onFormSubmitted: function () {
            alert('Form successfully submitted');
          }
        });
      } else {
        console.error('HubSpot forms script loaded, but hbspt is not defined.');
      }
    };

    script.onerror = () => {
      console.error('Error loading the HubSpot forms script.');
    };

    document.body.appendChild(script);

    // Cleanup script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center mx-auto mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
        {/* Left Column - Introductory Text */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-medium text-black-600 mb-10">
            Which experience is the best for me?
          </h2>
          <p className="text-base sm:text-lg lg:text-2xl text-black-600">
          You may not be sure exactly which path to take right now. That’s OK! Our skilled and knowledgeable staff members have plenty of experience in international work opportunities, and they can help you choose an option that will achieve your goals.
          </p>
          <br />
          <p className="text-base sm:text-lg lg:text-2xl text-black-600">
          Or maybe you’re interested in a destination or an experience that you don’t see here. We can work with you to find the perfect work abroad programs – just fill out the form and let’s talk.
          </p>
        </div>

        {/* Right Column - Contact Form */}
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <div className="my-12 text-center">
              <h1 className="text-4xl lg:text-5xl font-medium leading-relaxed text-black-600 mb-4">
                Send us a message
              </h1>
              <p className="text-lg text-black-500 mb-8">
                We are here to help and answer any question you might have. We look forward to hearing from you.
              </p>
            </div>

            <div id="hubspotForm"></div>

          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default ContactForm;
