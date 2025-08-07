import React from 'react';
import { motion } from 'framer-motion';
import { HeroHighlight, Highlight } from './ui/hero-highlight';
import TypewriterText from './ui/typewriter-text';
import BlurText from './ui/blur-text';

const HeroSection: React.FC = () => (
  <HeroHighlight containerClassName="min-h-[90vh] pt-36 pb-16">
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: [20, -5, 0],
      }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      className="text-center"
    >
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
    </motion.div>
  </HeroHighlight>
);

export default HeroSection; 