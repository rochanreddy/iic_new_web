import React from 'react';
import { motion } from 'framer-motion';

const events = [
  {
    title: 'Startup Bootcamp',
    date: 'July 15, 2024',
    description: 'A hands-on workshop to help aspiring entrepreneurs turn ideas into startups.',
    registrationLink: '#',
  },
  {
    title: 'Innovation Hackathon',
    date: 'August 10, 2024',
    description: 'Collaborate, innovate, and solve real-world problems in our annual hackathon.',
    registrationLink: '#',
  },
];

const FeaturedEvents: React.FC = () => (
  <motion.section
    className="max-w-4xl mx-auto my-16 px-4"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.05 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
  >
    <h3 className="text-2xl font-semibold mb-8 text-indigo-700 text-center">Upcoming Events</h3>
    <div className="grid gap-8 md:grid-cols-2">
      {events.map((event, idx) => (
        <div key={idx} className="bg-white/60 rounded-xl shadow p-6 flex flex-col items-start border border-slate-200/40 backdrop-blur-sm">
          <h4 className="text-xl font-bold mb-2 text-blue-800">{event.title}</h4>
          <span className="text-sm text-slate-500 mb-2">{event.date}</span>
          <p className="text-slate-700 mb-4">{event.description}</p>
          <a href={event.registrationLink} className="mt-auto inline-block bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors duration-200">
            Register
          </a>
        </div>
      ))}
    </div>
  </motion.section>
);

export default FeaturedEvents; 