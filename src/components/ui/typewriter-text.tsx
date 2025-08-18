import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  loop?: boolean;
  pauseTime?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  speed = 100, 
  delay = 1000,
  className = "",
  loop = false,
  pauseTime = 2000
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Start typing after initial delay
    const startTimer = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!isTyping && !isDeleting) return;

    if (isTyping && currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (isTyping && currentIndex >= text.length) {
      // Finished typing, pause then start deleting if loop is enabled
      if (loop) {
        const pauseTimer = setTimeout(() => {
          setIsTyping(false);
          setIsDeleting(true);
        }, pauseTime);
        return () => clearTimeout(pauseTimer);
      }
    } else if (isDeleting && displayText.length > 0) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1));
      }, speed / 2); // Delete faster than typing

      return () => clearTimeout(timer);
    } else if (isDeleting && displayText.length === 0) {
      // Finished deleting, reset and start typing again
      setCurrentIndex(0);
      setIsDeleting(false);
      setIsTyping(true);
    }
  }, [currentIndex, text, speed, isTyping, isDeleting, displayText, loop, pauseTime]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterText; 