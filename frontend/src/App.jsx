import { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from './components/BlogCard';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({ title: '', content: '', author: '' });

  const fetchBlogs = async () => {
    const res = await axios.get('http://localhost:5000/api/blogs');
    setBlogs(res.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/blogs', form);
    setForm({ title: '', content: '', author: '' });
    fetchBlogs();
  };
  
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">My Blog</h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input type="text" placeholder="Title"
          className="w-full border p-2 rounded"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })} required />

        <textarea placeholder="Content"
          className="w-full border p-2 rounded"
          value={form.content}
          onChange={e => setForm({ ...form, content: e.target.value })} required />

        <input type="text" placeholder="Author"
          className="w-full border p-2 rounded"
          value={form.author}
          onChange={e => setForm({ ...form, author: e.target.value })} required />

        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Post Blog</button>
      </form>

      <div className="space-y-4">
        {blogs.map(blog => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default App;
