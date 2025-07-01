const express = require('express');
const { Resend } = require('resend');
const router = express.Router();

const resend = new Resend(process.env.RESEND_API_KEY);

router.post('/send-message', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message)
        return res.status(400).json({ message: 'All fields are required' });

    try {
        await resend.emails.send({
            from: 'support@prudentinv.com',
            to: 'myprudent2025@gmail.com',
            subject: `New message from ${name}`,
            html: `
                <h3>Contact Message</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });
        res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send message' });
    }
});

module.exports = router;