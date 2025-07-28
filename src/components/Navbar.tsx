import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatedTabs } from "./ui/animated-tabs";
import { ChevronDown, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Startup', path: '/startup' },
  { label: 'Team', path: '/teams' },
  { label: 'Achievements', path: '/achievements' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact Us', path: '/contact' },
];

const ieDropdownItems = [
  { label: 'Institute Innovation Ambassador', path: '/ie/ambassador' },
  { label: 'IIC Events', path: '/ie/events' },
  { label: 'I&E Courses', path: '/ie/courses' },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isIEDropdownOpen, setIsIEDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-20 bg-white/10 backdrop-blur-md border-b border-slate-200/20">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="font-bold text-lg text-blue-700 tracking-wide hover:text-blue-800 transition-colors">
          IIC College
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          {/* Home Link */}
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-blue-600 ${
              location.pathname === '/' 
                ? 'text-blue-600 font-semibold' 
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Home
          </Link>
          
          {/* I&E Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsIEDropdownOpen(!isIEDropdownOpen)}
              onBlur={() => setTimeout(() => setIsIEDropdownOpen(false), 150)}
              className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-600 text-gray-700 hover:text-blue-600"
            >
              I&E
              <ChevronDown className={`w-4 h-4 transition-transform ${isIEDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isIEDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                {ieDropdownItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsIEDropdownOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          {/* Other Navigation Links */}
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
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-slate-200/20">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {/* Home Link */}
            <Link
              to="/"
              className={`block text-sm font-medium transition-colors hover:text-blue-600 ${
                location.pathname === '/' 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            {/* I&E Section */}
            <div className="space-y-2">
              <div className="text-sm font-medium text-gray-700">I&E</div>
              <div className="ml-4 space-y-2">
                {ieDropdownItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Other Navigation Links */}
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={`block text-sm font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === link.path 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 