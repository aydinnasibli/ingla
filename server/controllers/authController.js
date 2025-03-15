const ContactFormSchema = require('../models/ContactForm');
const nodemailer = require('nodemailer');
require('dotenv').config();











const sendContactForm = async (req, res) => {
    try {
        const { name, email, message, phone, preferredContact } = req.body;
        if (!name) {
            return res.json({ error: "Name is required" });
        }
        if (!email || email.length < 4) {
            return res.json({ error: "Email is required" });

        }
        if (!message) {
            return res.json({ error: "Message is required" });
        }
        if (!phone) {
            return res.json({ error: "Phone number is required" });
        }
        if (!preferredContact) {
            return res.json({ error: "Choose contact method" });
        }
        const form = await ContactFormSchema.create({
            name,
            email,
            message,
            phone,
            preferredContact
        });
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Use your preferred email service
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS  // Your email password or app password
            }
        });
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'info@inglaschool.az', // Change to the recipient's email
            subject: 'New Contact Form Submission',
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Preferred Contact:</strong> ${preferredContact}</p>
                <p><strong>Message:</strong> ${message}</p>
            `
        };
        await transporter.sendMail(mailOptions);
        return res.json({ message: "Form submitted successfully", form });

    } catch (error) {
        console.log(error);


    }
}


module.exports = { sendContactForm };  