import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { HeroHighlight, Highlight } from './ui/hero-highlight';
import TypewriterText from './ui/typewriter-text';
import BlurText from './ui/blur-text';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  
  return (
  <HeroHighlight containerClassName="min-h-[90vh] pt-20 sm:pt-28 md:pt-36 pb-16">
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
      
      {/* Register Here Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.8,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="mb-8"
      >
        <Button 
          size="lg"
          onClick={() => navigate('/register')}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          Register Here
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </motion.div>
    </motion.div>
  </HeroHighlight>
  );
};

export default HeroSection; 