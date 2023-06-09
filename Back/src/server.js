const express = require("express");
const cors = require("cors");
const transporter = require("./index");
const server = express();
const PORT = 3001;
const URL_BASE = "https://francoitria.vercel.app" || "http://localhost:3000"

server.use(express.json());
server.use(
  cors({
    origin: URL_BASE,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

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

server.listen(PORT, () => console.log(`Correindo en el puerto ${PORT}`));
