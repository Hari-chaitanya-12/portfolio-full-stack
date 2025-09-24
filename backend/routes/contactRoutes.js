const express = require('express');
const router = express.Router();
const { submitContact, getContacts } = require('../controllers/contactController');

// Submit contact form
router.post('/', submitContact);

// Get all contacts (admin)
router.get('/', getContacts);

module.exports = router;
