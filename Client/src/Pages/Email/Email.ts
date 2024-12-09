import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  secure: false,
  auth: {
    user: import.meta.env.VITE_EMAIL,
    pass: import.meta.env.VITE_BREVO_API,
  },
});

export const sendEmail = (email: string) => {
  const mailOptions = {
    from: 'your-email@example.com',
    to: email,
    subject: 'Welcome to Our Platform!',
    html: `<h1>Welcome, ${email}!</h1>
           <p>Thanks for signing up. Let us know if you need any help!</p>`,
  };

  return transporter.sendMail(mailOptions);
};
