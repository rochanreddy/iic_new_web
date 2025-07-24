import React from 'react';
import { AnimatedTabs } from "./ui/animated-tabs";

const navLinks = [
  { label: 'Home' },
  { label: 'About Us' },
  { label: 'Events' },
  { label: 'Initiatives' },
  { label: 'Team' },
  { label: 'Achievements' },
  { label: 'Gallery' },
  { label: 'Contact Us' },
];

const Navbar: React.FC = () => (
  <nav className="w-full fixed top-0 left-0 z-20 bg-white/10 backdrop-blur-md border-b border-slate-200/20">
    <div className="container mx-auto flex items-center justify-between px-4 py-3">
      <span className="font-bold text-lg text-blue-700 tracking-wide">IIC College</span>
      <div className="hidden md:flex gap-6">
        <AnimatedTabs tabs={navLinks} />
      </div>
      {/* Mobile menu placeholder */}
      <div className="md:hidden">
        {/* Add mobile menu button here if needed */}
      </div>
    </div>
  </nav>
);

export default Navbar; 