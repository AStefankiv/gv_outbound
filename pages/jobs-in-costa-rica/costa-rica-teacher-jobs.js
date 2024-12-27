import Head from 'next/head';
import { useEffect } from 'react';
import Footer from '../../components/Layout/Footer';
import Header from '../../components/Layout/Header';
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../../components/Layout/ScrollAnimationWrapper";

const TeachingCostaRica = () => {

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
        <title>Teacher Jobs in Costa Rica | GV Work Learn Travel</title>
        <meta
          name="description"
          content="Looking for a teaching job in Costa Rica? Global Village Work Learn Travel can connect you with the ultimate teaching experience!"
        />
        <meta name="keywords" content="Teacher Jobs in Costa Rica" />
        <meta name="author" content="GVWLT" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://worklearntravel.ca/costa_rica" />
      </Head>

      <Header />
      <main className="flex-grow mt-24 mb-6 w-full">
        <div className="w-full mt-8 mb-6 px-6 sm:px-4 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Header Section */}
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl font-bold mb-6 text-center">Teaching in Costa Rica</h1>
              <p className="text-xl leading-relaxed mb-4">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In this unique teaching experience, you’ll be working in a community-focused private school in a beautiful beachside town on the Pacific coast of Costa Rica. This locally founded K-6 school has been in operation for more than a decade, and is designed to give an outstanding bilingual educational opportunity to the region’s children so that they can share their learning with the community and live meaningful lives. You’ll bring your skill and knowledge in teaching to the classroom in your area of expertise: designing and delivering lessons, and working with the children in a variety of activities as a teacher.
              </p>
              <p className="text-xl leading-relaxed mb-8">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;An ideal participant is adventurous, independent, and keen to put their teaching skills to use with children in a cross-cultural environment. Accommodations can be locally arranged as an add-on, and teachers will follow a basic teaching schedule throughout the school year.
              </p>
              <ul className="text-lg text-black-500 space-y-4">
                <li><strong>Location:</strong> Samara (western Costa Rica)</li>
                <li><strong>Length of stay:</strong> 1 year+</li>
                <li><strong>Dates:</strong> School year starts at the end of October</li>
                <li><strong>Requirements:</strong> native speaker of English or Spanish, teaching certification or degree</li>
                <li><strong>Visa requirements:</strong> Canadian citizen age 18-35; see {' '}
                <a href="https://www.visitcostarica.com/en/costa-rica/planning-your-trip/entry-requirements"
                className='text-blue-500 underline hover:text-blue-600'>
                here 
                </a>{' '}for a summary, and contact us for more details</li>
                <li><strong>Cost:</strong> $1,499 CAD</li>
              </ul>
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

export default TeachingCostaRica;