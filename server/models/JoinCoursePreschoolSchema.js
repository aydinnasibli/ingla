const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JoinCoursePreschoolSchema = new Schema({
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
        enum: ["Azərbaycan bölməsi məktəbəqədər qrupu", "Rus bölməsi məktəbəqədər qrupu", "IB/Cambridge məktəbəqədər", "Erkən inkişaf qrupları", "Tam gün bağça"],
        required: true
    }
});

const JoinCoursePreschoolModel = mongoose.model('JoinCoursePreschoolForm', JoinCoursePreschoolSchema);


module.exports = JoinCoursePreschoolModel;