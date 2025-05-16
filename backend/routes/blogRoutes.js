// routes/blogs.js
const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');
const upload = require('../middleware/upload'); // Import the multer middleware
const path = require('path');

// GET all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
});

// POST a new blog with image upload
router.post('/', upload.single('image'), async (req, res) => {
  const { title, content, author } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';
  try {
    const newBlog = new Blog({ title, content, author, imageUrl });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create blog' });
  }
});

module.exports = router;
