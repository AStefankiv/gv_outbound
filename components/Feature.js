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



import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form here
    if (
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.email === "" ||
      formData.confirmEmail === "" ||
      formData.message === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }
    if (formData.email !== formData.confirmEmail) {
      alert("Emails do not match.");
      return;
    }
    // Submit form logic here
    console.log("Form submitted:", formData);
    // You can add code here to send the form data to your backend or handle it further
  };

  return (
    <div className="max-w-screen-sm mx-auto mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
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
            value={formData.confirmEmail}
            onChange={handleChange}
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
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div>
        <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;