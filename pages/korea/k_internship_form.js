// pages/korea/k_internship_form.js
import { useState } from 'react';

const KoreaInternForm = () => {
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
      body: JSON.stringify(formData),
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
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-medium leading-relaxed text-black-600 mb-4">
          Korea Internship Application
        </h1>
        <p className="text-lg text-black-500 mb-8">
          Fill out the form below to apply for the internship program in Korea.
        </p>
      </div>

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
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send Email
          </button>
        </div>
      </form>
    </div>
  );
};

export default KoreaInternForm;
