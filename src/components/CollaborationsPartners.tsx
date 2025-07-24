import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: 'MHRD', logo: null },
  { name: 'AICTE', logo: null },
  { name: 'ARIIA', logo: null },
  { name: 'Startup India', logo: null },
];

const CollaborationsPartners: React.FC = () => (
  <motion.section
    className="max-w-4xl mx-auto my-16 px-4"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.05 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
  >
    <h3 className="text-2xl font-semibold mb-8 text-orange-700 text-center">Collaborations & Partners</h3>
    <div className="flex flex-wrap justify-center gap-8">
      {partners.map((partner, idx) => (
        <div key={idx} className="w-32 h-20 bg-white/70 rounded-lg flex items-center justify-center border border-slate-200/40 shadow backdrop-blur-sm">
          <span className="text-slate-500 font-medium">{partner.name}</span>
        </div>
      ))}
    </div>
  </motion.section>
);

export default CollaborationsPartners; 