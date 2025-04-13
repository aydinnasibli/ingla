const ContactFormSchema = require('../models/ContactForm');
const TrainingCenterForm = require('../models/TrainingCenterForm');
const JoinCourseSchema = require('../models/JoinCourseForm');
const JoinCoursePreschoolSchema = require('../models/JoinCoursePreschoolSchema');
const nodemailer = require('nodemailer');
require('dotenv').config();

const sendJoinCoursePreschoolForm = async (req, res) => {
    console.log("📩 Received form data:", req.body);
    try {
        const { name, course, phone, email, message } = req.body;
        if (!name) {
            return res.json({ error: "Name is required" });
        }
        if (!course) {
            return res.json({ error: "Course selection is required" });

        }
        if (!phone) {
            return res.json({ error: "Phone number is required" });
        }
        if (!email) {
            return res.json({ error: "Email is required" });
        }
        if (!message) {
            return res.json({ error: "Message is required" });
        }
        console.log("✅ Validation Passed. Attempting to save to database...");

        const form = await JoinCoursePreschoolSchema.create({
            name,
            course,
            phone,
            email,
            message
        });
        console.log("✅ Form Saved to Database:", form);

        const transporter = nodemailer.createTransport({
            service: 'gmail', // Use your preferred email service
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS  // Your email password or app password
            }
        });
        console.log("✅ transporter connect", form);

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'info@inglaschool.az', // Change to the recipient's email
            subject: 'Kursa Qoşulmaq Üçün Müraciət',
            html: `
            <h2>Kursa Qoşul </h2>
            <p><strong>Ad Soyad:</strong> ${name}</p>
            <p><strong>Kurs:</strong> ${course}</p>
            <p><strong>Telefon:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mesaj:</strong> ${message}</p>
        `
        };
        console.log('stuck')

        console.log("📩 Sending email...");
        await transporter.sendMail(mailOptions);
        console.log("✅ Email Sent!");
        return res.json({ message: "Form submitted successfully", form });

    } catch (error) {
        console.error("Error submitting form:", error);
        return res.status(500).json({ error: "Internal Server Error" });


    }
}



const sendTrainingCenterForm = async (req, res) => {
    console.log("📩 Received form data:", req.body);
    try {
        const { name, course, phone, email, message } = req.body;
        if (!name) {
            return res.json({ error: "Name is required" });
        }

        if (!phone) {
            return res.json({ error: "Phone number is required" });
        }
        if (!email) {
            return res.json({ error: "Email is required" });
        }
        if (!message) {
            return res.json({ error: "Message is required" });
        }
        console.log("✅ Validation Passed. Attempting to save to database...");

        const form = await TrainingCenterForm.create({
            name,
            course,
            phone,
            email,
            message
        });
        console.log("✅ Form Saved to Database:", form);

        const transporter = nodemailer.createTransport({
            service: 'gmail', // Use your preferred email service
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS  // Your email password or app password
            }
        });
        console.log("✅ transporter connect", form);

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'info@inglaschool.az', // Change to the recipient's email
            subject: 'Təlim Mərkəzi Üçün Müraciət',
            html: `
                <h2>Təlim Mərkəzi </h2>
                <p><strong>Ad Soyad:</strong> ${name}</p>
                <p><strong>Kurs:</strong> ${course}</p>
                <p><strong>Telefon:</strong> ${phone}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mesaj:</strong> ${message}</p>
            `
        };
        console.log('stuck')

        console.log("📩 Sending email...");
        await transporter.sendMail(mailOptions);
        console.log("✅ Email Sent!");
        return res.json({ message: "Form submitted successfully", form });

    } catch (error) {
        console.error("Error submitting form:", error);
        return res.status(500).json({ error: "Internal Server Error" });


    }
}




const sendJoinCourseForm = async (req, res) => {
    console.log("📩 Received form data:", req.body);
    try {
        const { name, course, phone, email, message } = req.body;
        if (!name) {
            return res.json({ error: "Name is required" });
        }
        if (!course) {
            return res.json({ error: "Course selection is required" });

        }
        if (!phone) {
            return res.json({ error: "Phone number is required" });
        }
        if (!email) {
            return res.json({ error: "Email is required" });
        }
        if (!message) {
            return res.json({ error: "Message is required" });
        }
        console.log("✅ Validation Passed. Attempting to save to database...");

        const form = await JoinCourseSchema.create({
            name,
            course,
            phone,
            email,
            message
        });
        console.log("✅ Form Saved to Database:", form);

        const transporter = nodemailer.createTransport({
            service: 'gmail', // Use your preferred email service
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS  // Your email password or app password
            }
        });
        console.log("✅ transporter connect", form);

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'info@inglaschool.az', // Change to the recipient's email
            subject: 'Kursa Qoşulmaq Üçün Müraciət',
            html: `
                <h2>Kursa Qoşul </h2>
                <p><strong>Ad Soyad:</strong> ${name}</p>
                <p><strong>Kurs:</strong> ${course}</p>
                <p><strong>Telefon:</strong> ${phone}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mesaj:</strong> ${message}</p>
            `
        };
        console.log('stuck')

        console.log("📩 Sending email...");
        await transporter.sendMail(mailOptions);
        console.log("✅ Email Sent!");
        return res.json({ message: "Form submitted successfully", form });

    } catch (error) {
        console.error("Error submitting form:", error);
        return res.status(500).json({ error: "Internal Server Error" });


    }
}






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
            subject: 'Əlaqə Formu Müraciəti',
            html: `
                <h2>Kontakt formu</h2>
                <p><strong>Ad Soyad:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Telefon:</strong> ${phone}</p>
                <p><strong>Əlaqə Üstünlüyü:</strong> ${preferredContact}</p>
                <p><strong>Mesaj:</strong> ${message}</p>
            `
        };
        await transporter.sendMail(mailOptions);
        return res.json({ message: "Form submitted successfully", form });

    } catch (error) {
        console.log(error);


    }
}


module.exports = { sendContactForm, sendJoinCourseForm, sendTrainingCenterForm, sendJoinCoursePreschoolForm };  