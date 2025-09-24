const Contact = require('../models/Contact');

// Save a new contact message
const submitContact = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(201).json({ message: "Contact submitted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all contact messages (for admin)
const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { submitContact, getContacts };
