const jwt = require('jsonwebtoken');
const Client = require('../models/Client');

exports.adminLogin = (req, res) => {
  const { email, password } = req.body;

  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    return res.json({ token });
  }

  return res.status(401).json({ message: 'Invalid admin credentials' });
};

exports.searchClients = async (req, res) => {
  const { query } = req.query;
  if (!query) return res.status(400).json({ message: 'Missing search query' });

  try {
    const regex = new RegExp(query, 'i');
    const results = await Client.find({
      $or: [{ name: regex }, { pan: regex }],
    });

    res.json(results);
  } catch (err) {
    res.status(500).json({ message: 'Search failed', error: err.message });
  }
};

exports.addClient = async (req, res) => {
  try {
    const newClient = new Client(req.body);
    await newClient.save();
    res.status(201).json({ message: 'Client added successfully' });
  } catch (err) {
    console.error('❌ Add Client Error:', err);
    res.status(500).json({ message: 'Failed to add client', error: err.message });
  }
};

exports.updateClientDate = async (req, res) => {
  const { dateUpdated } = req.body;
  try {
    const updated = await Client.findByIdAndUpdate(
      req.params.id,
      { dateUpdated },
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ message: 'Client not found' });
    }
    res.json(updated);
  } catch (err) {
    console.error('❌ Update Client Date Error:', err);
    res.status(500).json({ message: 'Failed to update date', error: err.message });
  }
};