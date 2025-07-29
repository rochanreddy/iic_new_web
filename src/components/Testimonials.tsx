import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'IIC has been a game-changer for my entrepreneurial journey!',
    author: 'Priya S., Student',
  },
  {
    quote: 'The mentorship and resources at IIC are top-notch.',
    author: 'Dr. R. Kumar, Faculty',
  },
  {
    quote: 'A vibrant community fostering innovation and growth.',
    author: 'Amit P., Guest Speaker',
  },
];

const Testimonials: React.FC = () => (
  <motion.section
    className="max-w-4xl mx-auto my-16 px-4"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.05 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
  >
    <h3 className="text-2xl font-semibold mb-8 text-pink-700 text-center">Testimonials</h3>
    <div className="grid gap-8 md:grid-cols-3">
      {testimonials.map((t, idx) => (
        <div key={idx} className="bg-white/70 rounded-xl shadow p-6 border border-slate-200/40 backdrop-blur-sm flex flex-col items-center">
          <p className="text-slate-700 italic mb-4">"{t.quote}"</p>
          <span className="text-slate-500 text-sm font-medium">- {t.author}</span>
        </div>
      ))}
    </div>
  </motion.section>
);

export default Testimonials; 