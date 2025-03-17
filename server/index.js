const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

// ✅ Corrected CORS Setup
app.use(cors({
    origin: ['https://ingla.vercel.app', 'http://localhost:5173'], // Allow frontend & local dev
    credentials: true,
    methods: "GET, POST, PUT, DELETE, OPTIONS",
    allowedHeaders: "Content-Type, Authorization"
}));

// ✅ MongoDB Connection Debugging
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch((err) => {
        console.error('❌ MongoDB Connection Error:', err);
        process.exit(1);
    });

// ✅ Middleware
app.use(express.json());
app.use('/', require('./routes/authRoutes'));

// ✅ Ensure Port is Defined
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
