import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wallet, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Wallet className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold tracking-wider text-primary">ZORA</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-primary transition-colors">Services</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-primary transition-colors">Pricing</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors">Contact</Link>
          </div>

          {/* Desktop Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-primary text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 transition-colors"
          >
            Get Started
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden pb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-100 rounded-lg transition-colors"
            >
              Home
            </Link>
            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-100 rounded-lg transition-colors"
            >
              Services
            </Link>
            <Link
              to="/pricing"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-100 rounded-lg transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-100 rounded-lg transition-colors"
            >
              Contact
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-4 bg-primary text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 transition-colors"
            >
              Get Started
            </motion.button>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
