const express = require('express');
const { adminLogin, searchClients } = require('../controllers/adminController');
const { addClient, updateClientDate } = require('../controllers/adminController');
const { verifyAdmin } = require('../middleware/verifyAdmin');


const router = express.Router();

// Admin routes
router.post('/login', adminLogin);
router.post('/add-client', verifyAdmin, addClient);
router.get('/search-clients', verifyAdmin, searchClients);
router.patch('/client-date/:id', verifyAdmin, updateClientDate);

module.exports = router;
