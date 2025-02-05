const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const cors = require('cors');


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    const mailOptions = {
       from: `${name} <${email}>`,
        to: process.env.EMAIL,
        subject: `Message from ${name}`,
        text: message,
        replyTo: email,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Message sent: ' + info.response);
    });
});
app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
