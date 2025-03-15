const express = require('express');
const router = express.Router();
const cors = require('cors');
const { sendContactForm } = require('../controllers/authController');

router.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

router.post('/kontakt', sendContactForm);

module.exports = router;