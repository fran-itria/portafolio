const nodemailer = require ("nodemailer");
require("dotenv").config();
const {NM_USER, NM2_PASSWORD} = process.env
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: NM_USER,
    pass: NM2_PASSWORD,
  },
});

module.exports = transporter