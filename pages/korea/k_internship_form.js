// pages/korea/k_internship_form.js
import { useState } from 'react';
import ButtonPrimary from '../../components/misc/ButtonPrimary';
import Link from 'next/link';
import LogoGV from '../../public/assets/Logo.svg';
import Footer from '../../components/Layout/Footer';
import Header from '../../components/Layout/Header';

const KoreaInternForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    // message_text: '',
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
      body: JSON.stringify({ ...formData, subject: 'Korea Internship Inquiry' }),
    });

    if (response.ok) {
      alert('Email sent successfully!');
      setFormData({
        email: '',
        name: '',
        phone: '',
        // message_text: '',
      });
    } else {
      alert('Failed to send email.');
    }
  };

  return (

    <div className="flex flex-col min-h-screen">
    <Header />

    <main className="flex-grow mt-24 mb-6 px-4 sm:px-6 lg:px-8">
    <div className="max-w-screen-lg mx-auto mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-medium leading-relaxed text-black-600 mb-4">
          Yes! I want to know how I can take part in an internship in Korea!
        </h1>
        {/* <p className="text-lg text-black-500 mb-8">
          Fill out the form below to apply for the internship program in Korea.
        </p> */}
      </div>

      {/* Form Section */}
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
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
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
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
          {/* <div>
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
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div> */}
          <div className="flex justify-center">
            <div className="flex justify-center">
              <ButtonPrimary addClass="px-8" type="submit">Send</ButtonPrimary>
            </div>
          </div>
        </form>
      </div>
    </div>
    </main>
    <Footer />
  </div>
  );
};

export default KoreaInternForm;
