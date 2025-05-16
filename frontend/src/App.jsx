import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Auth from './components/Auth'; // Import the new Auth wrapper component
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Auth />} /> {/* Auth wrapper for Login & Signup */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
