const nodemailer = require ("nodemailer");
require("dotenv").config();
const {USER, PASSWORD} = process.env

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: USER,
    pass: PASSWORD,
  },
});

module.exports = transporter