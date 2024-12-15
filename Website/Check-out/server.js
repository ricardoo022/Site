const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

// Route to handle GET requests to the root URL
app.get('/', (req, res) => {
    res.send('Server is running');
});

app.post('/send-email', (req, res) => {
    const { checkinDate, checkoutDate, totalNights, rooms, totalAmount, name, phone, email, taxNumber, country, extraInfo } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'japcanais@gmail.com', // Replace with your email
            pass: 'joao13122005'   // Replace with your email password
        }
    });

    const mailOptions = {
        from: 'japcanais@gmail.com', // Replace with your email
        to: 'pixel.webdesign.company@gmail.com',
        subject: 'Reservation Details',
        text: `
            Name: ${name}
            Phone: ${phone}
            Email: ${email}
            Tax Number: ${taxNumber}
            Country: ${country}
            Extra Info: ${extraInfo}
            Check-in Date: ${checkinDate}
            Check-out Date: ${checkoutDate}
            Total Nights: ${totalNights}
            Rooms: ${rooms.map(room => `${room.name} - €${room.totalPrice}`).join(', ')}
            Total Amount: €${totalAmount.toFixed(2)}
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.send('Email sent: ' + info.response);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});