const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Blog = require('../models/Blog');

// Image upload config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

// GET all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST a new blog
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const newBlog = new Blog({
      title,
      content,
      author,
      imageUrl: req.file ? `/uploads/${req.file.filename}` : null,
    });
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    res.status(400).json({ error: 'Error creating blog' });
  }
});

// PUT update blog
router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const updatedData = {
      title,
      content,
      author,
    };
    if (req.file) {
      updatedData.imageUrl = `/uploads/${req.file.filename}`;
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    res.json(updatedBlog);
  } catch (err) {
    res.status(400).json({ error: 'Error updating blog' });
  }
});

// DELETE blog
router.delete('/:id', async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.json({ message: 'Blog deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Error deleting blog' });
  }
});

module.exports = router;
