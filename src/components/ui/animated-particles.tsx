import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ParticleProps {
  x: number;
  y: number;
  size: number;
  delay: number;
  color: string;
}

function Particle({ x, y, size, delay, color }: ParticleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        y: [y, y - 100],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
      className="absolute rounded-full"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        backgroundColor: color,
        filter: 'blur(1px)',
      }}
    />
  );
}

export function AnimatedParticles() {
  const [particles, setParticles] = useState<ParticleProps[]>([]);

  useEffect(() => {
    const newParticles: ParticleProps[] = [];
    const colors = ['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981', '#F59E0B'];
    
    for (let i = 0; i < 20; i++) {
      newParticles.push({
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 4,
        color: colors[Math.floor(Math.random() * colors.length)] + '40',
      });
    }
    
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, index) => (
        <Particle key={index} {...particle} />
      ))}
    </div>
  );
}