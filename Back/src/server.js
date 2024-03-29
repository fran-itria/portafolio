const express = require("express");
const cors = require("cors");
const transporter = require("./index");
const server = express();
const PORT = process.env.PORT;

server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  next();
});
server.use(express.json());

server.post("/contact", async (req, res) => {
  const { email, name, message } = req.body;
  try {
    const mail = {
      from: email,
      to: process.env.USER,
      subject: "Contacto",
      replyTo: email,
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
    res.status(200).json({ Message: "Correo enviado" });
  } catch (error) {
    res.status(400).json(error);
  }
});

server.get("/", (req, res) => {
  res.status(200).send("OK")
})

server.listen(PORT, () => console.log(`Correindo en el puerto ${PORT}`));
