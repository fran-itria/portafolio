const express = require("express");
const cors = require("cors");
const server = express();
const PORT = 3001;
const nodemailer = require("nodemailer");

server.use(express.json());
server.use(cors());
server.post("/contact", async (req, res) => {
  const { email, name, message } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.USER_APLICATION,
        pass: process.env.PASSWORD_APLICATION,
      },
    });
    await transporter.verify();
    const mail = {
      from: email,
      to: process.env.USER_APPLICATION,
      subject: "Suspensión de cuenta",
      html: `
          <p style="color: black"> 
          ${message}
          </p>
          <h4 style="color: black">
            Atentamente, ${name}
          </h4>
            `,
    };
    await transporter.sendMail(mail);
    res.status(200).json("Email enviado");
  } catch (error) {
    res.status(400).json(error);
  }
});

server.listen(PORT, () => console.log(`Correindo en el puerto ${PORT}`))
