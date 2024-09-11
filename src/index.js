import express from "express";
import { createTransport } from "nodemailer";
import cors from "cors";
import { json } from "body-parser";

const app = express();
app.use(cors({ origin: '*' }));
app.use(json());

// Configuración de Nodemailer para enviar correos a través de Gmail
const transporter = createTransport({
  service: "gmail",
  auth: {
    user: "leslierosazza@gmail.com", // Reemplaza con tu correo de Gmail
    pass: "L3sli33506", // Reemplaza con tu contraseña o contraseña de aplicación
  },
});

app.post("/send", (req, res) => {
  const { nombre, correo, telefono, asunto, mensaje } = req.body;

  const mailOptions = {
    from: correo,
    to: "leslierosazza@gmail.com",
    subject: `Nuevo mensaje de contacto: ${asunto}`,
    text: `
      Nombre: ${nombre}
      Correo: ${correo}
      Teléfono: ${telefono}
      Asunto: ${asunto}
      Mensaje: ${mensaje}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Mensaje enviado: " + info.response);
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
