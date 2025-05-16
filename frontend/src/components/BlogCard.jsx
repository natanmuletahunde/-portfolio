import React, { useState } from 'react';
import axios from 'axios';

const BlogCard = ({ blog, onUpdate, onDelete }) => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    title: blog.title,
    content: blog.content,
    author: blog.author,
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleUpdate = async () => {
    try {
      const data = new FormData();
      data.append('title', formData.title);
      data.append('content', formData.content);
      data.append('author', formData.author);
      if (formData.image) {
        data.append('image', formData.image);
      }

      const res = await axios.put(
        `http://localhost:5000/api/blogs/${blog._id}`,
        data
      );
      onUpdate(res.data); // Notify parent
      setEditMode(false);
    } catch (err) {
      console.error('Error updating blog:', err);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${blog._id}`);
      onDelete(blog._id);
    } catch (err) {
      console.error('Error deleting blog:', err);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow w-full max-w-xl mb-4">
      {editMode ? (
        <>
          <input
            className="border p-2 w-full mb-2"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <textarea
            className="border p-2 w-full mb-2"
            name="content"
            value={formData.content}
            onChange={handleChange}
          />
          <input
            className="border p-2 w-full mb-2"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
          <input
            className="border p-2 w-full mb-2"
            type="file"
            name="image"
            onChange={handleChange}
          />
          <button onClick={handleUpdate} className="bg-green-500 text-white px-4 py-2 rounded mr-2">
            Save
          </button>
          <button onClick={() => setEditMode(false)} className="bg-gray-500 text-white px-4 py-2 rounded">
            Cancel
          </button>
        </>
      ) : (
        <>
          {blog.imageUrl && (
            <img src={`http://localhost:5000${blog.imageUrl}`} alt="blog" className="w-full h-64 object-cover mb-4" />
          )}
          <h2 className="text-xl font-bold">{blog.title}</h2>
          <p className="text-gray-700 mb-2">{blog.content}</p>
          <p className="text-sm text-gray-500">By {blog.author}</p>
          <div className="mt-4">
            <button onClick={() => setEditMode(true)} className="bg-yellow-500 text-white px-4 py-2 rounded mr-2">
              Edit
            </button>
            <button onClick={handleDelete} className="bg-red-600 text-white px-4 py-2 rounded">
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default BlogCard;
