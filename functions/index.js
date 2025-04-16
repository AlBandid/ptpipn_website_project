import functions from 'firebase-functions';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const corsHandler = cors({ origin: true });

// eslint-disable-next-line no-undef
const gmailEmail = process.env.GMAIL_EMAIL;
// eslint-disable-next-line no-undef
const gmailPass = process.env.GMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPass
  }
});

export const sendEmail = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    const { to, subject, message } = req.body;

    try {
      await transporter.sendMail({
        from: gmailEmail,
        to,
        subject,
        text: message
      });
      res.status(200).send({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).send({ success: false, error });
    }
  });
});
