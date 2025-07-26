import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatedTabs } from "./ui/animated-tabs";

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/#about' },
  { label: 'Events', path: '/#events' },
  { label: 'Initiatives', path: '/#initiatives' },
  { label: 'Team', path: '/#team' },
  { label: 'Achievements', path: '/#achievements' },
  { label: 'Gallery', path: '/#gallery' },
  { label: 'Contact Us', path: '/contact' },
];

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="w-full fixed top-0 left-0 z-20 bg-white/10 backdrop-blur-md border-b border-slate-200/20">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="font-bold text-lg text-blue-700 tracking-wide hover:text-blue-800 transition-colors">
          IIC College
        </Link>
        <div className="hidden md:flex gap-6">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                location.pathname === link.path 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Mobile menu placeholder */}
        <div className="md:hidden">
          {/* Add mobile menu button here if needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 