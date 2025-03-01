import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import ERQuizProgramCTA from "../components/ERQuizProgramCTA";
import ScrollAnimationWrapper from "../components/Layout/ScrollAnimationWrapper";
import { useEffect } from "react";

const GV_Snow = () => {

  //Quiz URL
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

  // Load Google Tag Manager
  // useEffect(() => {
  //   const gtagScript = document.createElement("script");
  //   gtagScript.async = true;
  //   gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-16884794738";
  //   document.head.appendChild(gtagScript);

  //   gtagScript.onload = () => {
  //     window.dataLayer = window.dataLayer || [];
  //     function gtag() {
  //       window.dataLayer.push(arguments);
  //     }
  //     gtag("js", new Date());
  //     gtag("config", "AW-16884794738");
  //   };

  // }, []);

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
            <div className="flex flex-col justify-center">
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
  
                    {/* HubSpot form */}
                    <div id="hubspotForm"></div>
  
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
