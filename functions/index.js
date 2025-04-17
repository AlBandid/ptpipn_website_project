// eslint-disable-next-line no-undef
const functions = require('firebase-functions');
// eslint-disable-next-line no-undef
const nodemailer = require('nodemailer');
// eslint-disable-next-line no-undef
const { google } = require('googleapis');
// eslint-disable-next-line no-undef
const cors = require('cors');

// CORS middleware
const corsHandler = cors({ origin: true });

// OAuth2 setup
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  // eslint-disable-next-line no-undef
  process.env.GMAIL_CLIENT_ID,
  // eslint-disable-next-line no-undef
  process.env.GMAIL_CLIENT_SECRET,
  'https://developers.google.com/oauthplayground' // Redirect URI
);

oauth2Client.setCredentials({
  // eslint-disable-next-line no-undef
  refresh_token: process.env.GMAIL_REFRESH_TOKEN,
});

async function createTransporter() {
  const accessTokenResponse = await oauth2Client.getAccessToken();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'your-email@gmail.com',
      // eslint-disable-next-line no-undef
      clientId: process.env.GMAIL_CLIENT_ID,
      // eslint-disable-next-line no-undef
      clientSecret: process.env.GMAIL_CLIENT_SECRET,
      // eslint-disable-next-line no-undef
      refreshToken: process.env.GMAIL_REFRESH_TOKEN,
      accessToken: accessTokenResponse.token,
    },
  });

  return transporter;
}

// eslint-disable-next-line no-undef
exports.sendEmail = functions.https.onRequest(async (req, res) => {
  console.log('Received request method:', req.method);
  corsHandler(req, res, async () => {
    if (req.method !== 'POST') {
      return res.status(405).send({ error: 'Only POST requests are allowed' });
    }

    const { to, subject, message } = req.body;

    if (!to || !subject || !message) {
      return res.status(400).send({ error: 'Missing required fields' });
    }

    try {
      const transporter = await createTransporter();

      const mailOptions = {
        from: 'your-email@gmail.com',
        to,
        subject,
        text: message,
      };

      await transporter.sendMail(mailOptions);
      return res.status(200).send({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).send({ success: false, error: error.toString() });
    }
  });
});
