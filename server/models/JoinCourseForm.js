const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JoinCourseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    course: {
        type: String,
        enum: ["İngilis Dili", "Ielts", "Duolingo", "SAT", "YÖS", "Calculus", " IB Cambridge Math", "Alman Dili", "Rus Dili", "Ada School"],
        required: true
    }
});

const JoinCourseModel = mongoose.model('JoinCourseForm', JoinCourseSchema);


module.exports = JoinCourseModel;