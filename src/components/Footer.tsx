import React from 'react';

const Footer: React.FC = () => (
  <footer className="w-full bg-white/10 border-t border-slate-200/20 py-8 mt-16 backdrop-blur-md">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-slate-700 text-center md:text-left">
        <div className="font-bold text-lg text-blue-700 mb-2">IIC College</div>
        <div>Contact: <a href="mailto:iic@college.edu" className="text-blue-600 hover:underline">iic@college.edu</a></div>
        <div>123 Innovation Lane, City, State</div>
      </div>
      <div className="flex gap-6 items-center">
        <a href="#" className="text-slate-600 hover:text-blue-600 font-medium">Home</a>
        <a href="#" className="text-slate-600 hover:text-blue-600 font-medium">About</a>
        <a href="#" className="text-slate-600 hover:text-blue-600 font-medium">Events</a>
        <a href="#" className="text-slate-600 hover:text-blue-600 font-medium">Contact</a>
      </div>
      <div className="flex gap-4">
        <a href="#" aria-label="Twitter" className="text-slate-500 hover:text-blue-500"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.92 4.92 0 0 0 16.616 3c-2.73 0-4.942 2.21-4.942 4.932 0 .386.045.762.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.237-.616c-.054 2.281 1.581 4.415 3.949 4.89-.386.104-.793.16-1.213.16-.297 0-.583-.028-.862-.08.584 1.823 2.28 3.152 4.29 3.188A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"/></svg></a>
        <a href="#" aria-label="LinkedIn" className="text-slate-500 hover:text-blue-700"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg></a>
      </div>
    </div>
    <div className="text-center text-slate-400 text-xs mt-6">&copy; {new Date().getFullYear()} IIC College. All rights reserved.</div>
  </footer>
);

export default Footer; 