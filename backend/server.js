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
  'https://your-frontend.vercel.app', // ✅ Replace with your actual Vercel frontend URL
  'http://localhost:5173'             // ✅ Keep this for local development
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  //credentials: true // Only enable if you use cookies or HTTP-only tokens
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
