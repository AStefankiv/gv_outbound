// // pages/korea/k_internship_form.js
// import { useState } from 'react';
// import ButtonPrimary from '../../components/misc/ButtonPrimary';
// import Link from 'next/link';
// import LogoGV from '../../public/assets/Logo.svg';
// import Footer from '../../components/Layout/Footer';
// import Header from '../../components/Layout/Header';

// const KoreaTeachEngForm = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     name: '',
//     phone: '',
//     // message_text: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch('/api/send-email', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ ...formData, subject: 'Teach English Korea Inquiry' }),
//     });

//     if (response.ok) {
//       alert('Email sent successfully!');
//       setFormData({
//         email: '',
//         name: '',
//         phone: '',
//         // message_text: '',
//       });
//     } else {
//       alert('Failed to send email.');
//     }
//   };

//   return (

//     <div className="flex flex-col min-h-screen w-full">
//     <Header />

//     <main className="flex-grow mt-24 mb-6 w-full">
//       <div className="w-full mt-8 mb-6 px-6 sm:px-4 lg:px-16">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//         {/* Header Section */}
//         <div className="flex flex-col justify-center">
//         <h1 className="text-4xl lg:text-5xl font-medium leading-relaxed text-black-600 mb-6">
//                 Teach English in Korea
//               </h1>
//               <ul className="text-lg text-black-500 space-y-4">
//                 <li><strong>Location:</strong> Varies</li>
//                 <li><strong>Length of stay:</strong> 1 year+</li>
//                 <li><strong>Requirements:</strong> Minimum 18 years old; high school diploma</li>
//                 <li><strong>Cost:</strong> Contact for details</li>
//               </ul>
//             </div>

//             {/* Right Section - Form */}
//             <div className="w-2/3 mx-auto">
//               <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
//                 <div>
//                 <h1 className="text-4xl text-center lg:text-5xl font-medium leading-relaxed text-black-600 mb-4">
//                 Yes! I want to know how I can teach English in Korea!
//                 </h1>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
//                     Phone
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                     className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//                   />
//                 </div>
//                 <div className="flex justify-center">
//                   <ButtonPrimary addClass="px-8" type="submit">Send</ButtonPrimary>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </main>
      
//       <Footer />
//     </div>
//   );
// };

// export default KoreaTeachEngForm;


import { useEffect } from 'react';
import Footer from '../../components/Layout/Footer';
import Header from '../../components/Layout/Header';
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "../../components/Layout/ScrollAnimationWrapper";

const KoreaTeachEngForm = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.async = true;

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "7792441",
          formId: "4606ebf8-3709-4d5b-b4ef-93c2bc8b47ac",
          target: "#hubspotForm",
          onFormReady: function(form) {
            console.log('onFormReady called');

            setTimeout(() => {
              // Field internal names
              const step1Fields = ['firstname', 'lastname', 'email', 'phone'];
              const step2Fields = ['work_situation', 'situation_satisfied', 'what_change', 'other_programs', 'other_programs_consider', 'how_motivated', 'main_goals'];
              const step3Fields = ['are_you_a_canadian_citizen_', 'your_age', 'level_of_education', 'finance'];

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
              insertNextButton('main_goals', 2); // After 'work_situation' field in Step 2

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
                  if (areFieldsFilled(step2Fields)) {
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
      <Header />

      <main className="flex-grow mt-24 mb-6 w-full">
        <div className="w-full mt-8 mb-6 px-6 sm:px-4 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Header Section */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl lg:text-5xl font-medium leading-relaxed text-black-600 mb-6">
                Teach English in Korea
              </h1>
              <ul className="text-lg text-black-500 space-y-4">
                <li><strong>Location:</strong> Varies</li>
                <li><strong>Length of stay:</strong> 1 year+</li>
                <li><strong>Requirements:</strong> Minimum 18 years old; high school diploma</li>
                <li><strong>Cost:</strong> Contact for details</li>
              </ul>
            </div>

            {/* Right Section - HubSpot Form */}
            <div className="w-2/3 mx-auto">
              <ScrollAnimationWrapper className="w-full justify-end">
                <motion.div className="h-full w-full p-4">
                  <div className="my-12 text-center">
                    <h1 className="text-4xl lg:text-5xl font-medium leading-relaxed text-black-600 mb-4">
                      Yes! I want to know how I can teach English in Korea!
                    </h1>
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

export default KoreaTeachEngForm;

{/* <div class="hs_work_situation hs-work_situation hs-fieldtype-radio field hs-form-field"><label id="label-work_situation-4606ebf8-3709-4d5b-b4ef-93c2bc8b47ac" class="" placeholder="Enter your What is your current work situation?" for="work_situation-4606ebf8-3709-4d5b-b4ef-93c2bc8b47ac"><span>What is your current work situation?</span></label><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><ul role="checkbox" class="inputs-list multi-container"><li class="hs-form-radio" role="radio"><label for="work_situation0-4606ebf8-3709-4d5b-b4ef-93c2bc8b47ac" class="hs-form-radio-display"><input id="work_situation0-4606ebf8-3709-4d5b-b4ef-93c2bc8b47ac" class="hs-input" type="radio" name="work_situation" value="In school or training"><span>In school or training</span></label></li><li class="hs-form-radio" role="radio"><label for="work_situation1-4606ebf8-3709-4d5b-b4ef-93c2bc8b47ac" class="hs-form-radio-display"><input id="work_situation1-4606ebf8-3709-4d5b-b4ef-93c2bc8b47ac" class="hs-input" type="radio" name="work_situation" value="Employed, not looking for work"><span>Employed, not looking for work</span></label></li><li class="hs-form-radio" role="radio"><label for="work_situation2-4606ebf8-3709-4d5b-b4ef-93c2bc8b47ac" class="hs-form-radio-display"><input id="work_situation2-4606ebf8-3709-4d5b-b4ef-93c2bc8b47ac" class="hs-input" type="radio" name="work_situation" value="Employed, looking for work"><span>Employed, looking for work</span></label></li><li class="hs-form-radio" role="radio"><label for="work_situation3-4606ebf8-3709-4d5b-b4ef-93c2bc8b47ac" class="hs-form-radio-display"><input id="work_situation3-4606ebf8-3709-4d5b-b4ef-93c2bc8b47ac" class="hs-input" type="radio" name="work_situation" value="Not employed or in training, looking for work"><span>Not employed or in training, looking for work</span></label></li></ul></div></div> */}
{/* <div class="hs_are_you_a_canadian_citizen_ hs-are_you_a_canadian_citizen_ hs-fieldtype-radio field hs-form-field"><label id="label-are_you_a_canadian_citizen_-4606ebf8-3709-4d5b-b4ef-93c2bc8b47ac" class="" placeholder="Enter your Are you a Canadian citizen?" for="are_you_a_canadian_citizen_-4606ebf8-3709-4d5b-b4ef-93c2bc8b47ac"><span>Are you a Canadian citizen?</span></label><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><ul role="checkbox" class="inputs-list multi-container"><li class="hs-form-radio" role="radio"><label for="are_you_a_canadian_citizen_0-4606ebf8-3709-4d5b-b4ef-93c2bc8b47ac" class="hs-form-radio-display"><input id="are_you_a_canadian_citizen_0-4606ebf8-3709-4d5b-b4ef-93c2bc8b47ac" class="hs-input" type="radio" name="are_you_a_canadian_citizen_" value="Yes"><span>Yes</span></label></li><li class="hs-form-radio" role="radio"><label for="are_you_a_canadian_citizen_1-4606ebf8-3709-4d5b-b4ef-93c2bc8b47ac" class="hs-form-radio-display"><input id="are_you_a_canadian_citizen_1-4606ebf8-3709-4d5b-b4ef-93c2bc8b47ac" class="hs-input" type="radio" name="are_you_a_canadian_citizen_" value="No"><span>No</span></label></li></ul></div></div> */}