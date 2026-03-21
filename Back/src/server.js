const express = require("express");
const cors = require("cors");
const transporter = require("./index");
const { Resend } = require("resend");
const server = express();

try {
  process.loadEnvFile()
} catch (error) { }

const PORT = process.env.PORT;

const resend = new Resend(process.env.RESEND_API_KEY);

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
    const data = await resend.emails.send(
      {
        from: "Franco Itria Portafolio <contacto@mail.francoitria.com>",
        to: ["francoitria2001@gmail.com"],
        html: `
                        <p style="color: black"> 
                        ${message}
                        </p>
                        <h4 style="color: black">
                          Atentamente, ${name}
                        </h4>
                      `,
        subject: "Nuevo mensaje de contacto",
        replyTo: email
      })
    res.status(200).json({ message: "Email sent successfully", data });
  } catch (error) {
    res.status(500).json({ message: "Error sending email", error });
  }
});

server.get("/", (req, res) => {
  res.status(200).send("OK")
})

server.listen(PORT, () => console.log(`Correindo en el puerto ${PORT}`));
