const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const blogRoutes = require('./routes/blogRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Simplified MongoDB connection — no options needed in Mongoose 6+
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB connection error:', err));

app.use('/api/blogs', blogRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
