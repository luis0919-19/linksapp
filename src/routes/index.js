const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');

router.get("/", (req, res) => {
  res.render('index');
});

router.post('/send', async (req, res)=>{
    const { name, email, phone, message } = req.body;
    
    const contenido = contentHTML = ` 
        <h1>Información del Usuario - Links App</h1>
        <ul>
            <li><h3>Nombre: ${name}</h3></li>
            <li><h3>Email: ${email}</h3></</li>
            <li><h3>Celular: ${phone}</h3></li>
        </ul>
        <h2>Aporte</h2>
        <p>${message}</p>
    `;

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'linksapphn2021@gmail.com',
        pass: '09abril2019'
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const info = await transporter.sendMail({
      from: 'Links App <linksapphn2021@gmail.com>',
      to: 'luisenriquech0919@gmail.com',
      subject: 'Aporte a la aplicación',
      html: contenido
    });

    res.redirect('/profile')
})



module.exports = router;
