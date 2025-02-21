import Head from 'next/head';
import { useEffect } from 'react';
import Footer from '../../components/Layout/Footer';
import Header from '../../components/Layout/Header';
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../../components/Layout/ScrollAnimationWrapper";
import Script from 'next/script';

const SpainInternship = () => {

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
        <title>Internships in Spain | Global Village Work Learn Travel</title>
        <meta
          name="description"
          content="Join an internship in Spain via a working holiday with Global Village Work Learn Travel. We work with you to select the perfect company."
        />
        <meta name="keywords" content="Internships in Spain" />
        <meta name="author" content="GVWLT" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://worklearntravel.ca/work-opportunities-spain/internship" />
        
        {/* Google Tag Manager */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16884794738"></Script>
        <Script>window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)};
          gtag('js', new Date());
          gtag('config', 'AW-16884794738');
        </Script>
      </Head>

      <Header />

      <main className="flex-grow mt-40 mb-6 w-full">
        <div className="w-full mt-8 mb-6 px-6 sm:px-4 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Header Section */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl lg:text-5xl font-medium leading-relaxed text-black-600 mb-6">
                Internships in Spain
              </h1>
              <p className="text-xl leading-relaxed mb-4">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In this carefully tailored internship placement program, Canadians are able to take advantage of work opportunities in Spain by being placed into paid or unpaid short-term roles in Spanish businesses. We offer customized positions that match participants' career interests, such as marketing, finance, hospitality, or tech. You’ll gain hands-on experience while working directly with local professionals, contributing to real projects, and immersing yourself in the Spanish work environment. With a strong focus on career development, the program helps participants build practical skills and improve language proficiency. Living and working in Spain provides unique opportunities for cultural exchange and professional growth, making this program ideal for those seeking meaningful work experience abroad and a deeper understanding of Spanish business culture.
              </p>
              <p className="text-xl leading-relaxed mb-8">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;An ideal participant is adaptable and motivated. The specific details of what, where, and when you are working will depend on your final selection, but all information will be clearly communicated well in advance. Spanish language skills are not a requirement, but more placements may be available to those who speak some Spanish. Language courses as well as accommodation, if not provided by the host company, are available on request.
              </p>

              <ul className="text-lg text-black-500 space-y-4">
                <li><strong>Location:</strong> All over Spain</li>
                <li><strong>Length of stay:</strong> 3 months+</li>
                <li><strong>Requirements:</strong> high school diploma; some placements may have additional requirements</li>
                <li><strong>Visa requirements:</strong> Canadian citizen age 18-35 currently residing in Canada; see {' '}
                <a href="https://www.exteriores.gob.es/Consulados/toronto/en/ServiciosConsulares/Paginas/Consular/Youth-mobility-visa.aspx"
                className='text-blue-500 underline hover:text-blue-600'>
                here 
                </a>{' '}for a summary; contact us for more details</li>
                <li><strong>Cost:</strong> $2599</li>
              </ul>
              <marquee className="text-2xl font-semibold text-orange-500 mt-4" direction="left" scrollamount="7">
                Scholarships up to $1,000 are available for qualifying students! Talk to your advisor about whether you qualify for a scholarship.
              </marquee>
            </div>

            {/* Right Section - HubSpot Form */}
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-2/3 xl:w-2/3 mx-auto">
              <ScrollAnimationWrapper className="w-full justify-end">
                <motion.div className="h-full w-full p-4">
                  <div className="my-12 text-center">
                    <p className="text-lg text-black-500 mb-8">
                      Fill out the form below, and we'll send you all the details.
                    </p>
                  </div>

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

export default SpainInternship;