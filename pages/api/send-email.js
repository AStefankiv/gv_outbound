// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { email, first_name, last_name, phone, message_text, subject } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let emailText = `Email: ${email}\nFirst name: ${first_name}\nLast name: ${last_name}\nPhone: ${phone}\nMessage: ${message_text}`;
    if (!message_text && !last_name) {
      emailText = `Email: ${email}\nName: ${first_name}\nPhone: ${phone}`;
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: subject || 'New Email from Website',
      text: emailText,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
