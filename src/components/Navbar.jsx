import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wallet } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Wallet className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold tracking-wider neon-glow">ZORA</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-primary transition-colors">Services</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-primary transition-colors">Pricing</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors">Contact</Link>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-dark font-bold py-2 px-6 rounded-full hover:bg-white transition-colors"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
