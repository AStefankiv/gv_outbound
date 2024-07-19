// components/Form.js
import { useState } from 'react';

const Form = () => {
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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Message:</label>
        <textarea
          name="message_text"
          value={formData.message_text}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Send Email</button>
    </form>
  );
}

export default Form;