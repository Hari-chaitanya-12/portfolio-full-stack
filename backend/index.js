const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes'); // <- import routes AFTER requires

require('dotenv').config();

const app = express(); // <-- app must be initialized before using it
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contacts', contactRoutes);

// Test route
app.get('/', (req, res) => {
    res.send('Portfolio Backend is running');
});

// Start server
app.listen(PORT, () => {
    console.log(`Portfolio Backend is running on port: ${PORT}`);
});
