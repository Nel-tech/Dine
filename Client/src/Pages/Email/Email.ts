export const sendEmail = async (recipientEmail: string) => {
  const apiKey = import.meta.env.VITE_BREVO_API;
  const url = 'https://api.brevo.com/v3/sm:tp/email';

  const emailData = {
    sender: { email: import.meta.env.VITE_EMAIL, name: 'Dine Restaurant' },
    to: [{ email: recipientEmail }],
    subject: 'Welcome to Our Platform!',
    htmlContent: `
      <h1>Welcome, ${recipientEmail}!</h1>
      <p>Thanks for signing up. Let us know if you need any help!</p>
    `,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      throw new Error(`Error sending email: ${response.statusText}`);
    }

    const result = await response.json();
    console.log('Email sent successfully:', result);
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
