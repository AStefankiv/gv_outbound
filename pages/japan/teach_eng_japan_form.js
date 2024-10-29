// pages/korea/k_internship_form.js
import { useState } from 'react';
import ButtonPrimary from '../../components/misc/ButtonPrimary';
import Link from 'next/link';
import Footer from '../../components/Layout/Footer';
import Header from '../../components/Layout/Header';

const JapanTeachEngForm = () => {
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
      body: JSON.stringify({ ...formData, subject: 'Teach English Japan Inquiry' }),
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

    <div className="flex flex-col min-h-screen w-full">
    <Header />

    <main className="flex-grow mt-24 mb-6 w-full">
      <div className="w-full mt-8 mb-6 px-6 sm:px-4 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Header Section */}
        <div className="flex flex-col justify-center">
        <h1 className="text-4xl lg:text-5xl font-medium leading-relaxed text-black-600 mb-6">
                Teach English in Japan
              </h1>
              <ul className="text-lg text-black-500 space-y-4">
                <li><strong>Location:</strong> Varies</li>
                <li><strong>Length of stay:</strong> 1 year+</li>
                <li><strong>Requirements:</strong> Minimum 18 years old; high school diploma</li>
                <li><strong>Cost:</strong> Contact for details</li>
              </ul>
            </div>

            {/* Right Section - Form */}
            <div className="w-2/3 mx-auto">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                <div>
                <h1 className="text-4xl text-center lg:text-5xl font-medium leading-relaxed text-black-600 mb-4">
                Yes! I want to know how I can teach English in Japan!
                </h1>
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
                <div className="flex justify-center">
                  <ButtonPrimary addClass="px-8" type="submit">Send</ButtonPrimary>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JapanTeachEngForm;