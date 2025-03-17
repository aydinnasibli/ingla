const express = require('express');
const router = express.Router();
const cors = require('cors');
const { sendContactForm } = require('../controllers/authController');
const { sendJoinCourseForm } = require('../controllers/authController');
const { sendTrainingCenterForm } = require('../controllers/authController');

router.post('/kontakt', sendContactForm);
router.post('/joincourse', sendJoinCourseForm);
router.post('/trainingcenter', sendTrainingCenterForm);
module.exports = router;