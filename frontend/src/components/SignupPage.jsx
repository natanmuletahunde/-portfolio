import React, { useState } from 'react';
import axios from 'axios';

function SignupPage() {
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/auth/signup', formData);
      setLoading(false);
      setSuccess('Account created! You can now log in.');
      setFormData({ email: '', password: '', name: '' });
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <>
      <h2 className="text-3xl font-bold mb-6 text-blue-600 text-center">Sign Up</h2>
      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
      {success && <p className="text-green-500 mb-4 text-center">{success}</p>}
      <form className="space-y-5" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name (optional)"
          className="w-full border p-3 rounded"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-3 rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-3 rounded"
          value={formData.password}
          onChange={handleChange}
          required
          minLength={6}
        />
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded text-white font-semibold ${
            loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          } transition-colors`}
        >
          {loading ? 'Creating account...' : 'Sign Up'}
        </button>
      </form>
    </>
  );
}

export default SignupPage;
