/* eslint-disable no-undef */
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const cors = require('cors');

// CORS middleware
const corsHandler = cors({ origin: true });

// OAuth2 setup
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  'https://developers.google.com/oauthplayground' // Redirect URI
);

oauth2Client.setCredentials({
  refresh_token: process.env.GMAIL_REFRESH_TOKEN,
});

async function createTransporter() {
  const accessTokenResponse = await oauth2Client.getAccessToken();
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'ptpipn.serwis@gmail.com',
      clientId: process.env.GMAIL_CLIENT_ID,
      clientSecret: process.env.GMAIL_CLIENT_SECRET,
      refreshToken: process.env.GMAIL_REFRESH_TOKEN,
      accessToken: accessTokenResponse.token,
    },
  });

  return transporter;
}


exports.sendEmail = functions.https.onRequest(async (req, res) => {
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
        from: 'ptpipn.serwis@gmail.com',
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
