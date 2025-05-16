import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from '../components/BlogCard';
import BodyHome from '../components/BodyHome';
import ApiGenerator from '../components/ApiGenerator';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({ title: '', content: '', author: '' });
  const [imageFile, setImageFile] = useState(null);

  // Fetch blogs from the server
  const fetchBlogs = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/blogs');
      setBlogs(res.data);
    } catch (err) {
      console.error('Error fetching blogs:', err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', form.title);
      formData.append('content', form.content);
      formData.append('author', form.author);
      if (imageFile) {
        formData.append('image', imageFile);
      }

      await axios.post('http://localhost:5000/api/blogs', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setForm({ title: '', content: '', author: '' });
      setImageFile(null);
      fetchBlogs();
    } catch (err) {
      console.error('Error posting blog:', err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Blog submission form */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-6" encType="multipart/form-data">
        <input
          type="text"
          placeholder="Title"
          className="w-full border p-2 rounded"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />

        <textarea
          placeholder="Content"
          className="w-full border p-2 rounded"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          required
        />

        <input
          type="text"
          placeholder="Author"
          className="w-full border p-2 rounded"
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
          required
        />

        <input
          type="file"
          accept="image/*"
          className="w-full border p-2 rounded"
          onChange={(e) => setImageFile(e.target.files[0])}
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Post Blog
        </button>
      </form>

      {/* BodyHome section */}
      <BodyHome />

      {/* Blog cards section */}
      <div className="space-y-4 mt-10">
        {blogs.map((blog) => (
          <BlogCard
            key={blog._id}
            blog={blog}
            onDelete={(id) => setBlogs(blogs.filter((b) => b._id !== id))}
            onUpdate={(updatedBlog) =>
              setBlogs(blogs.map((b) => (b._id === updatedBlog._id ? updatedBlog : b)))
            }
          />
        ))}
      </div>

      {/* API Generator section */}
      <ApiGenerator />
    </div>
  );
};

export default Home;
