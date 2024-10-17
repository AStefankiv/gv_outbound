import { useMemo } from "react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import ButtonPrimary from "./misc/ButtonPrimary";

const ContactForm = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const [formData, setFormData] = useState({
    email: '',
    first_name: '',
    last_name: '',
    phone: '',
    message_text: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...formData, subject: 'General Inquiry' }),
    });

    if (response.ok) {
      alert('Email sent successfully!');
      setFormData({
        email: '',
        first_name: '',
        last_name: '',
        phone: '',
        message_text: '',
      });
    } else {
      alert('Failed to send email.');
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center mx-auto mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
        {/* Left Column - Introductory Text */}
        <div className="flex flex-col justify-center text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 mb-4">
            Which experience is the best for me?
          </h2>
          <p className="text-base sm:text-lg lg:text-2xl text-black-600">
            You may not be sure exactly which path to take right now. That’s OK! Our skilled and knowledgeable staff members have plenty of experience living and working in other countries, and they can help you choose an option that will achieve your goals.
          </p>
          <br />
          <p className="text-base sm:text-lg lg:text-2xl text-black-600">
            Or maybe you’re interested in a destination or an experience that you don’t see here. We can work with you to find the perfect place to go – just fill out the form and let’s talk.
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

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6" id="contact">
              <div>
                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div>
                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={formData.last_name}
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
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div>
                <label htmlFor="message_text" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message_text"
                  name="message_text"
                  rows={4}
                  value={formData.message_text}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full resize-y"
                />
              </div>
              <div className="flex justify-center">
                <ButtonPrimary addClass="px-8" type="submit">
                  Send
                </ButtonPrimary>
              </div>
            </form>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default ContactForm;