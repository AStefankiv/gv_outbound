// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { email, name, phone, message_text } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'stefankif35@gmail.com',
        pass: 'fipj eyiv iedo iesw',
      },
    });

    const mailOptions = {
      from: 'stefankif35@gmail.com',
      to: 'stefankif35@gmail.com',
      subject: 'New Form Submission',
      text: `Email: ${email}\nName: ${name}\nPhone: ${phone}\nMessage: ${message_text}`,
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
