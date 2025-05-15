import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 shadow-md">
      <ul className="flex gap-6 justify-center font-semibold text-lg">
        <li>
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-yellow-300 transition">About</Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-yellow-300 transition">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
