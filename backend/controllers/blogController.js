const Blog = require('../models/Blog');
const fs = require('fs');
const path = require('path');

// Create
exports.createBlog = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const image = req.file?.filename;
    const newBlog = new Blog({ title, content, author, image });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Read All
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Not found' });

    // Delete image file if exists
    if (blog.image) {
      const imgPath = path.join(__dirname, '../uploads', blog.image);
      fs.unlink(imgPath, () => {});
    }

    await blog.deleteOne();
    res.json({ message: 'Blog deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update
exports.updateBlog = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Not found' });

    blog.title = title;
    blog.content = content;
    blog.author = author;

    if (req.file) {
      // Delete old image
      if (blog.image) {
        const imgPath = path.join(__dirname, '../uploads', blog.image);
        fs.unlink(imgPath, () => {});
      }
      blog.image = req.file.filename;
    }

    await blog.save();
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
