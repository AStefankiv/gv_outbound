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
    name: '',
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
      body: JSON.stringify({ ...formData, subject: 'Teach English Korea Inquiry' }),
    });

    if (response.ok) {
      alert('Email sent successfully!');
      setFormData({
        email: '',
        name: '',
        phone: '',
        message_text: '',
      });
    } else {
      alert('Failed to send email.');
    }
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

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6" id="contact">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
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
  );
};

export default ContactForm;
