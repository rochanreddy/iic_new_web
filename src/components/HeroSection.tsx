import React from 'react';
import TypewriterText from './ui/typewriter-text';
import BlurText from './ui/blur-text';

const HeroSection: React.FC = () => (
  <section className="flex flex-col items-center justify-center min-h-[90vh] pt-36 pb-16 text-center">
    <div className="mb-6">
      <BlurText
        text="Innovation"
        className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900"
        delay={70}
        animateBy="letters"
        direction="top"
      />
      <BlurText
        text="Incubation Council"
        className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight text-blue-600"
        delay={150}
        animateBy="words"
        direction="bottom"
      />
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