import Head from 'next/head';
import { useEffect } from 'react';
import Footer from '../../components/Layout/Footer';
import Header from '../../components/Layout/Header';
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../../components/Layout/ScrollAnimationWrapper";
import Script from 'next/script';

const FranceLanguageAssistant = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.async = true;

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID,
          formId: process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID_COUNTRIES,
          target: "#hubspotForm",
          onFormReady: function(form) {
            console.log('onFormReady called');

            setTimeout(() => {
              // Field internal names
              const step1Fields = ['firstname', 'lastname', 'email', 'phone'];
              const step2Fields = ['work_situation', 'situation_satisfied', 'what_change', 'other_programs', 'other_programs_consider', 'how_motivated', 'main_goals'];
              const step3Fields = ['are_you_a_canadian_citizen_', 'your_age', 'level_of_education', 'finance'];

              const step2RequiredFields = ['work_situation', 'how_motivated'];

              // Function to hide fields by their names
              const hideFields = (fields) => {
                fields.forEach(fieldName => {
                  const fieldElements = form.querySelectorAll(`[name="${fieldName}"]`);
                  fieldElements.forEach(fieldElement => {
                    const fieldWrapper = fieldElement.closest('.hs-form-field');
                    if (fieldWrapper) fieldWrapper.style.display = 'none';
                  });
                });
              };

              // Function to show fields by their names
              const showFields = (fields) => {
                fields.forEach(fieldName => {
                  const fieldElements = form.querySelectorAll(`[name="${fieldName}"]`);
                  fieldElements.forEach(fieldElement => {
                    const fieldWrapper = fieldElement.closest('.hs-form-field');
                    if (fieldWrapper) fieldWrapper.style.display = '';
                  });
                });
              };

              // Initially hide Step 2 and Step 3 fields
              hideFields([...step2Fields, ...step3Fields]);

              // Function to check if fields are filled
              const areFieldsFilled = (fields) => {
                return fields.every(fieldName => {
                  const fieldElements = form.querySelectorAll(`[name="${fieldName}"]`);
                  let isFilled = false;

                  fieldElements.forEach(fieldElement => {
                    if (fieldElement.type === 'radio' || fieldElement.type === 'checkbox') {
                      if (form.querySelector(`[name="${fieldName}"]:checked`)) {
                        isFilled = true;
                      }
                    } else {
                      if (fieldElement.value.trim() !== '') {
                        isFilled = true;
                      }
                    }
                  });

                  return isFilled;
                });
              };

              // Function to insert 'Next' button after the last field of a step
              const insertNextButton = (afterFieldName, stepNumber) => {
                const fieldElements = form.querySelectorAll(`[name="${afterFieldName}"]`);
                const lastFieldElement = fieldElements[fieldElements.length - 1];
                const fieldWrapper = lastFieldElement.closest('.hs-form-field');

                const nextButton = document.createElement('button');
                nextButton.textContent = 'Next';
                nextButton.className = `next-button step${stepNumber}-next hs-button primary large`;
                nextButton.type = 'button';

                fieldWrapper.parentNode.insertBefore(nextButton, fieldWrapper.nextSibling);
              };

              // Insert 'Next' buttons after Step 1 and Step 2 fields
              insertNextButton('phone', 1); // After 'phone' field in Step 1
              insertNextButton('main_goals', 2); // After 'main_goals' field in Step 2

              // Hide the 'Next' button for Step 2 initially
              const step2NextButton = form.querySelector('.step2-next');
              if (step2NextButton) step2NextButton.style.display = 'none';

              // Hide the submit button initially
              const submitButton = form.querySelector('input[type="submit"], button[type="submit"]');
              if (submitButton) submitButton.style.display = 'none';

              // Attach click event handler to Step 1 'Next' button
              const step1NextButton = form.querySelector('.step1-next');
              if (step1NextButton) {
                step1NextButton.addEventListener('click', function() {
                  if (areFieldsFilled(step1Fields)) {
                    // Hide Step 1 fields and 'Next' button
                    hideFields(step1Fields);
                    this.style.display = 'none';
                    // Show Step 2 fields and 'Next' button
                    showFields(step2Fields);
                    if (step2NextButton) step2NextButton.style.display = '';
                  } else {
                    alert('Please fill in all required fields in Step 1.');
                  }
                });
              }

              // Attach click event handler to Step 2 'Next' button
              if (step2NextButton) {
                step2NextButton.addEventListener('click', function() {
                  if (areFieldsFilled(step2RequiredFields)) {
                    // Hide Step 2 fields and 'Next' button
                    hideFields(step2Fields);
                    this.style.display = 'none';
                    // Show Step 3 fields and submit button
                    showFields(step3Fields);
                    if (submitButton) submitButton.style.display = '';
                  } else {
                    alert('Please fill in all required fields in Step 2.');
                  }
                });
              }
            }, 500); // Adjust the delay if needed
          },
          onFormSubmitted: function() {
            // Display the alert message after successful submission
            alert('Successfully submitted form');
          }
        });
      }
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full">

      <Head>
        <title>Teach English in France | Global Village Work Learn Travel</title>
        <meta
          name="description"
          content="Canadians can work in France teaching English with Global Village Work Learn Travel."
        />
        <meta name="keywords" content="Teach English in France" />
        <meta name="author" content="GVWLT" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://worklearntravel.ca/work-holiday-france/teach-english-france" />

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
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl lg:text-5xl font-medium leading-relaxed text-black-600 mb-6">
                Teaching English in France for Canadians
              </h1>
              <ul className="text-lg text-black-500 space-y-4">

              <div className="flex flex-col justify-center">
              <p className="text-xl leading-relaxed mb-4">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In this cultural exchange and learning project, you’ll have the chance to build relationships and immerse yourself in French language and culture. We’ll place you with a host family in France, where you’ll live for the duration of the program, sharing meals and activities with them. At the same time, you’ll be acting as an English tutor for the family members (often the children), using methods and a schedule that you’ll work out with them ahead of time. In your free time, you will be able to enjoy and explore all that France has to offer. Plus, since you’re able to stay in France for the duration of your visa, this project makes it the perfect launching point to set off on your own self-guided French adventure. 
              </p>
              <p className="text-xl leading-relaxed mb-4">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;An ideal participant is flexible, open-minded, and adaptable! Your key responsibility will be teaching and tutoring, so you’ll need to be well prepared with study tools before you arrive. Previous teaching experience is not a requirement, but is a plus. Room and board are provided with a local family, who might be located anywhere throughout France. Once we match you with a family, you’ll coordinate with them about the specific form and schedule of lessons, but your teaching time will always be about 15 hours/week.
              </p>
              </div>

                <li className="text-xl leading-relaxed mb-4"><strong>Location:</strong> Varies</li>
                <li className="text-xl leading-relaxed mb-4"><strong>Length of stay:</strong> 1-3 months+</li>
                <li className="text-xl leading-relaxed mb-4"><strong>Requirements:</strong> native English speaker, high school diploma, some knowledge of French, interest in teaching</li>
                <li className="text-xl leading-relaxed mb-4"><strong>Visa requirements:</strong> Canadian citizen age 18-35; no previous participation in French Working Holiday program; see {' '}
                <a href="https://france-visas.gouv.fr/web/france-visas/jeune-voyageur-vacances-travail"
                className='text-blue-500 underline hover:text-blue-600'>
                here 
                </a>{' '}for a summary, and contact us for more details</li>
                <li className="text-xl leading-relaxed mb-4"><strong>Cost:</strong> $2299</li>
              </ul>
              <marquee className="text-2xl font-semibold text-orange-500 mt-4" direction="left" scrollamount="7">
                Scholarships up to $1,000 are available for qualifying students! Talk to your advisor about whether you qualify for a scholarship.
              </marquee>
            </div>

            {/* Right Section - HubSpot Form */}
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-auto">
            <ScrollAnimationWrapper className="w-full justify-end">
              <motion.div className="h-full w-full p-4">

                {/* HubSpot form */}
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

export default FranceLanguageAssistant;