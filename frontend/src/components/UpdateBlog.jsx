import { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateBlog = ({ blogId, onSuccess }) => {
  const [form, setForm] = useState({ title: '', content: '', author: '' });

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await axios.get(`http://localhost:5000/api/blogs/${blogId}`);
      setForm(res.data);
    };
    if (blogId) fetchBlog();
  }, [blogId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/blogs/${blogId}`, form);
    onSuccess(); // callback to refresh blog list or close modal
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        className="w-full border p-2 rounded"
      />
      <textarea
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
        className="w-full border p-2 rounded"
      />
      <input
        type="text"
        value={form.author}
        onChange={(e) => setForm({ ...form, author: e.target.value })}
        className="w-full border p-2 rounded"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
    </form>
  );
};

export default UpdateBlog;
