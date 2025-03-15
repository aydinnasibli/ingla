const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const contactFormSchema = new Schema({
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
    preferredContact: {
        type: String,
        enum: ["Email", "Telefon"],
        required: true
    }
});

const ContactFormModel = mongoose.model('ContactForm', contactFormSchema);


module.exports = ContactFormModel;