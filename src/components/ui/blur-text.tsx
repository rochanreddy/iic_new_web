import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

type BlurTextProps = {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
};

const BlurText: React.FC<BlurTextProps> = ({
  text = '',
  delay = 100,
  className = '',
  animateBy = 'words',
  direction = 'top',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');

  useEffect(() => {
    // Trigger animation after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={className}>
      {elements.map((segment, index) => (
        <motion.span
          key={index}
          initial={{ 
            opacity: 0, 
            y: direction === 'top' ? -20 : 20,
            filter: 'blur(4px)'
          }}
          animate={isVisible ? { 
            opacity: 1, 
            y: 0, 
            filter: 'blur(0px)'
          } : { 
            opacity: 0, 
            y: direction === 'top' ? -20 : 20,
            filter: 'blur(4px)'
          }}
          transition={{
            duration: 0.5,
            delay: (index * delay) / 1000,
            ease: "easeOut"
          }}
          style={{
            display: 'inline-block',
            marginRight: animateBy === 'words' ? '0.25em' : '0',
          }}
        >
          {segment === ' ' ? '\u00A0' : segment}
          {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </div>
  );
};

export default BlurText; 