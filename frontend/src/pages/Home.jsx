import { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from '../components/BlogCard';
import BodyHome from '../components/BodyHome';
import ApiGenerator from '../components/ApiGenerator'; // Make sure the path is correct

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({ title: '', content: '', author: '' });

  // Fetch blogs from your backend API
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

  // Submit blog form
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
      {/* Blog submission form */}
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

      {/* Render BodyHome */}
      <BodyHome />

      {/* Render API Generator Section */}
    
      {/* Render blog cards */}
      <div className="space-y-4 mt-10">
        {blogs.map(blog => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
      <ApiGenerator />

    </div>
  );
};

export default Home;
