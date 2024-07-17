// import Image from "next/image";
// import React, { useMemo } from "react";
// import { motion } from "framer-motion";
// import getScrollAnimation from "../utils/getScrollAnimation";
// import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

// const features = [
//   "Powerfull online protection.",
//   "Internet without borders.",
//   "Supercharged VPN",
//   "No specific time limits."
// ]

// const Feature = () => {
//   const scrollAnimation = useMemo(() => getScrollAnimation(), []);

//   return (
//     <div
//       className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
//       id="feature"
//     >
//       <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
//         <ScrollAnimationWrapper className="flex w-full justify-end">
//           <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
//             <Image
//               src="/assets/Illustration2.png"
//               alt="VPN Illustrasi"
//               layout="responsive"
//               quality={100}
//               height={414}
//               width={508}
//             />
//           </motion.div>
//         </ScrollAnimationWrapper>
//         <ScrollAnimationWrapper>

//         <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
//           <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
//             We Provide Many Features You Can Use
//           </h3>
//           <p className="my-2 text-black-500">
//             You can explore the features that we provide with fun and have their
//             own functions each feature.
//           </p>
//           <ul className="text-black-500 self-start list-inside ml-8">
//             {features.map((feature, index) => (
//               <motion.li
//                 className="relative circle-check custom-list"
//                 custom={{duration: 2 + index}}
//                 variants={scrollAnimation}
//                 key={feature}
//                 whileHover={{
//                 scale : 1.1,
//                 transition: {
//                   duration: .2
//                 }
//                 }}>
//                   {feature}
//               </motion.li>
//               )
//             )}
//           </ul>
//         </motion.div>
//         </ScrollAnimationWrapper>
//       </div>
//     </div>
//   );
// };

// export default Feature;


import { useMemo } from "react";
import React, { useState } from "react";
import emailjs from "emailjs-com";

import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import ButtonPrimary from "./misc/ButtonPrimary";

const ContactForm = () => {

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !confirmEmail || !message) {
      alert("Please fill in all fields.");
      return;
    }

    if (email !== confirmEmail) {
      alert("Emails do not match. Please enter the same email twice.");
      return;
    }

    const serviceId = "service_hizq2mc";
    const templateId = "template_obvqisx";
    const publicKey = "A2etVtVHjvnfOMjaj";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Work learn travel",
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setName("");
        setEmail("");
        setConfirmEmail("");
        setMessage("");
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.log("FAILED...", error);
        alert("Email failed to send!");
      });
  };

  return (
    <div className="max-w-screen-sm mx-auto mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16">

      <ScrollAnimationWrapper className="flex w-full justify-end">
        <motion.div className="h-full w-full p-4" variants={scrollAnimation}>

      <div className="my-12 text-center">
        <h1 className="text-4xl lg:text-5xl font-medium leading-relaxed text-black-600 mb-4">
          Send us a message
        </h1>
        <p className="text-lg text-black-500 mb-8 text-center">
          We are here to help and answer any question you might have. We look forward to hearing from you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6" id='contact'>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
          <label htmlFor="confirmEmail" className="block text-sm font-medium text-gray-700">
            Confirm Email
          </label>
          <input
            type="email"
            id="confirmEmail"
            name="confirmEmail"
            autoComplete="no-confirm-email"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="flex justify-center">
          <ButtonPrimary addClass="px-8" type="submit">Send</ButtonPrimary>
        </div>
      </form>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default ContactForm;