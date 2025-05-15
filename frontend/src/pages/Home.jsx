import { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from '../components/BlogCard';
import BodyHome from './BodyHome'; // Import your new component

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({ title: '', content: '', author: '' });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/blogs', form);
      setForm({ title: '', content: '', author: '' });
      fetchBlogs();
    } catch (err) {
      console.error('Error posting blog:', err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Home Page</h1>

      {/* Your existing blog form */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input
          type="text"
          placeholder="Title"
          className="w-full border p-2 rounded"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
          required
        />

        <textarea
          placeholder="Content"
          className="w-full border p-2 rounded"
          value={form.content}
          onChange={e => setForm({ ...form, content: e.target.value })}
          required
        />

        <input
          type="text"
          placeholder="Author"
          className="w-full border p-2 rounded"
          value={form.author}
          onChange={e => setForm({ ...form, author: e.target.value })}
          required
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Post Blog
        </button>
      </form>

      {/* Existing blog list */}
      <div className="space-y-4 mb-10">
        {blogs.map(blog => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
      <BodyHome />
    </div>
  );
};

export default Home;
