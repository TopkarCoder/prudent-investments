const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const resourceRoutes = require('./routes/resourceRoutes');
const contactRoutes = require('./routes/contactRoute');

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  'https://prudent-investments.vercel.app', //Actual Frontend URL
  'http://localhost:5173',             //local development
  'https://www.prudentinv.com', // Production URL
  'http://localhost:3000', // Local development for React app
];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));


app.use(express.json());  //allows the user to accept JSON data as the req.body.

app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api', contactRoutes);

mongoose.connect(process.env.MONGO_URI) //promise
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));
