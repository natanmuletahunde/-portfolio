function LoginPage() {
    return (
      <div className="p-6 max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-blue-600 text-center">Login</h2>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
          <input type="password" placeholder="Password" className="w-full border p-2 rounded" />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Login
          </button>
        </form>
      </div>
    );
  }
  
  export default LoginPage;
  