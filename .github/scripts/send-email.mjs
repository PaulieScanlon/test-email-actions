import nodemailer from 'nodemailer';
import 'dotenv/config';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'pauliescanlon@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

(async () => {
  // Neon API logic went here, and returned some values
  let branch_id = 'little-salad-123';
  let days = 3;

  try {
    await transporter.sendMail({
      from: '"DevOps | GitHub Actions" <pauliescanlon@gmail.com>',
      to: 'paul@neon.tech',
      subject: 'Stale Branch Detected',
      html: `Branch: <b>${branch_id}</b> will be deleted in <b>${days}</b> days`,
    });
  } catch (error) {
    console.error(error);
  }
})();
