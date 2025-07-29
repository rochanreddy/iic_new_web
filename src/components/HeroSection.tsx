import React from 'react';
import TypewriterText from './ui/typewriter-text';

const HeroSection: React.FC = () => (
  <section className="flex flex-col items-center justify-center min-h-[90vh] pt-36 pb-16 text-center">
    <div className="mb-6">
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600">
        Innovation
      </h1>
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
        Incubation Council
      </h2>
    </div>
    <div className="text-sm sm:text-base md:text-lg text-slate-600 mb-8 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4 min-h-[2rem]">
      <TypewriterText 
        text="Empowering the next generation of innovators"
        speed={50}
        delay={1500}
        loop={true}
        pauseTime={3000}
        className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-light tracking-wide"
      />
    </div>
  </section>
);

export default HeroSection; 