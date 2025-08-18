import React from 'react';

const Footer: React.FC = () => (
  <footer className="w-full bg-white/10 border-t border-slate-200/20 py-12 mt-16 backdrop-blur-md">
    <div className="container mx-auto px-4">
      {/* Main Footer Content */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-8">
        {/* Brand Section */}
        <div className="text-center lg:text-left">
          <div className="font-bold text-2xl text-blue-700 mb-3">IIC MLRITM</div>
          <div className="text-slate-600 space-y-1">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a href="mailto:iic@mlritm.ac.in" className="text-blue-600 hover:text-blue-700 hover:underline transition-colors">
                iic@mlritm.ac.in
              </a>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <a href="https://maps.app.goo.gl/w5RRcUVcQyK6ZduLA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 hover:underline transition-colors">
                MLRITM, Dundigal, Hyderabad
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          <a 
            href="https://www.linkedin.com/company/tiic-mlritm/posts/?feedView=all" 
            aria-label="LinkedIn" 
            className="text-slate-500 hover:text-blue-700 transition-colors duration-200 p-2 rounded-full hover:bg-blue-50"
            target="_blank" rel="noopener noreferrer"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
            </svg>
          </a>
          <a 
            href="https://www.instagram.com/iic_mlritm/" 
            aria-label="Instagram" 
            className="text-slate-500 hover:text-pink-500 transition-colors duration-200 p-2 rounded-full hover:bg-pink-50"
            target="_blank" rel="noopener noreferrer"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
      </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-200/30 mb-6"></div>

      {/* Team / Credits (LinkedIn anchors) */}
      <div className="text-center mb-2 text-sm font-semibold text-black">
        <span className="relative inline-block">
          <span className="block">Developed by</span>
          <span aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-white to-black bg-[length:200%_100%] bg-clip-text text-transparent animate-shine">Developed by</span>
        </span>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-4 text-sm">
        <a
          href="https://www.linkedin.com/in/rochan-reddy"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative text-black transition-all duration-300 transform hover:-translate-y-0.5 animate-showcase"
          style={{ animationDelay: '0s' }}
        >
          <span className="relative">
            <span className="block">Rochan</span>
            <span aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-white to-black bg-[length:200%_100%] bg-clip-text text-transparent opacity-100 animate-shine">Rochan</span>
          </span>
          <span className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">Connect on LinkedIn?</span>
        </a>
        <a
          href="https://www.linkedin.com/in/thanay-525924243"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative text-black transition-all duration-300 transform hover:-translate-y-0.5 animate-showcase"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="relative">
            <span className="block">Thanay</span>
            <span aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-white to-black bg-[length:200%_100%] bg-clip-text text-transparent opacity-100 animate-shine">Thanay</span>
          </span>
          <span className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">Say hi on LinkedIn?</span>
        </a>
        <a
          href="https://www.linkedin.com/in/meghanadha-reddy"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative text-black transition-all duration-300 transform hover:-translate-y-0.5 animate-showcase"
          style={{ animationDelay: '0.4s' }}
        >
          <span className="relative">
            <span className="block">Meghanadha</span>
            <span aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-white to-black bg-[length:200%_100%] bg-clip-text text-transparent opacity-100 animate-shine">Meghanadha</span>
          </span>
          <span className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">View profile?</span>
        </a>
        <a
          href="https://www.linkedin.com/in/mithresh-uttarwar-23bb39307"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative text-black transition-all duration-300 transform hover:-translate-y-0.5 animate-showcase"
          style={{ animationDelay: '0.6s' }}
        >
          <span className="relative">
            <span className="block">Mithresh</span>
            <span aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-white to-black bg-[length:200%_100%] bg-clip-text text-transparent opacity-100 animate-shine">Mithresh</span>
          </span>
          <span className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">Open LinkedIn?</span>
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} IIC MLRITM. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer; 