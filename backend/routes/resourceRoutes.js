const express = require('express');
const Resource = require('../models/Resource');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const resources = await Resource.find().sort({ date: -1 }); // Sort by date in descending order
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching resources', error });
  }
});

module.exports = router;