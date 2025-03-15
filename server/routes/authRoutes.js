const express = require('express');
const router = express.Router();
const cors = require('cors');
const { sendContactForm } = require('../controllers/authController');



router.post('/kontakt', sendContactForm);

module.exports = router;