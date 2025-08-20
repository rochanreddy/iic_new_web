import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatedTabs } from "./ui/animated-tabs";
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Startup', path: '/startup' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About Us', path: '/about' },
  { label: 'Register', path: '/register' },
  { label: 'Contact Us', path: '/contact' },
];

const ieDropdownItems = [
  { label: 'Institute Innovation Ambassador', path: '/ie/ambassador' },
  { label: 'IIC Events', path: '/ie/events' },
  { label: 'IIC Coordinators', path: '/ie/coordinators' },
  { label: 'I&E Courses', path: '/ie/courses' },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isIEDropdownOpen, setIsIEDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownTimeoutRef = React.useRef<number | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        window.clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="w-full fixed top-0 left-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/20 shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/images/logo/logo.png" 
              alt="IIC Logo" 
              className="h-14 w-auto object-contain"
            />
            <img 
              src="/images/logo/iic_logo.png" 
              alt="IIC Logo" 
              className="h-14 w-auto object-contain"
            />
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
            <div 
              className="relative"
              onMouseEnter={() => {
                if (dropdownTimeoutRef.current) {
                  window.clearTimeout(dropdownTimeoutRef.current);
                }
                setIsIEDropdownOpen(true);
              }}
              onMouseLeave={() => {
                dropdownTimeoutRef.current = window.setTimeout(() => {
                  setIsIEDropdownOpen(false);
                }, 200);
              }}
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsIEDropdownOpen(!isIEDropdownOpen);
                }}
                className="flex items-center gap-1 text-sm font-medium transition-colors text-gray-700 hover:text-blue-600"
              >
                I&E
                <ChevronDown className={`w-4 h-4 transition-transform ${isIEDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isIEDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  onMouseEnter={() => {
                    if (dropdownTimeoutRef.current) {
                      window.clearTimeout(dropdownTimeoutRef.current);
                    }
                  }}
                  onMouseLeave={() => {
                    dropdownTimeoutRef.current = window.setTimeout(() => {
                      setIsIEDropdownOpen(false);
                    }, 200);
                  }}
                >
                  {ieDropdownItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (dropdownTimeoutRef.current) {
                          window.clearTimeout(dropdownTimeoutRef.current);
                        }
                        setIsIEDropdownOpen(false);
                      }}
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
      </nav>

      {/* Mobile Menu Overlay with Animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 top-0 left-0 w-full h-full bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              ref={mobileMenuRef}
              className="absolute top-0 left-0 w-full h-full bg-white shadow-2xl flex flex-col"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                duration: 0.4
              }}
            >
              {/* Mobile Menu Header */}
              <motion.div 
                className="flex items-center justify-between p-3 border-b border-gray-200"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <div className="flex items-center gap-3">
                  <img 
                    src="/images/logo/logo.png" 
                    alt="IIC Logo" 
                    className="h-10 w-auto object-contain"
                  />
                  <img 
                    src="/images/logo/iic_logo.png" 
                    alt="IIC Logo" 
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 transition-colors p-2"
                >
                  <X className="w-6 h-6" />
                </button>
              </motion.div>

              {/* Mobile Menu Content */}
              <motion.div 
                className="p-4 space-y-4 flex-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                {/* Home Link */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <Link
                    to="/"
                    className={`block text-base font-medium transition-colors hover:text-blue-600 py-2 ${
                      location.pathname === '/' 
                        ? 'text-blue-600 font-semibold' 
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </motion.div>
                
                {/* I&E Section */}
                <motion.div 
                  className="space-y-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <div className="text-base font-semibold text-gray-800 py-1">I&E</div>
                  <div className="ml-3 space-y-2">
                    {ieDropdownItems.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                      >
                        <Link
                          to={item.path}
                          className="block text-sm text-gray-600 hover:text-blue-600 transition-colors py-1.5"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                {/* Other Navigation Links */}
                {navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      to={link.path}
                      className={`block text-base font-medium transition-colors hover:text-blue-600 py-2 ${
                        location.pathname === link.path 
                          ? 'text-blue-600 font-semibold' 
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 