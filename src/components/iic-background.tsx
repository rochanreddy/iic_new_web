import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

// Utility for className merging (Tailwind best practice)
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

// Noise component for subtle texture overlay
function Noise({
  patternSize = 100,
  patternScaleX = 1,
  patternScaleY = 1,
  patternRefreshInterval = 1,
  patternAlpha = 30,
  intensity = 0.8,
}: {
  patternSize?: number;
  patternScaleX?: number;
  patternScaleY?: number;
  patternRefreshInterval?: number;
  patternAlpha?: number;
  intensity?: number;
}) {
  const grainRef = useRef<HTMLCanvasElement>(null);
  const canvasCssSizeRef = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = grainRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frame = 0;
    const patternCanvas = document.createElement('canvas');
    patternCanvas.width = patternSize;
    patternCanvas.height = patternSize;

    const patternCtx = patternCanvas.getContext('2d');
    if (!patternCtx) return;

    const patternData = patternCtx.createImageData(patternSize, patternSize);
    const patternPixelDataLength = patternSize * patternSize * 4;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      let newCssWidth = window.innerWidth;
      let newCssHeight = window.innerHeight;

      if (canvas.parentElement) {
        const parentRect = canvas.parentElement.getBoundingClientRect();
        newCssWidth = parentRect.width;
        newCssHeight = parentRect.height;
      }
      
      canvasCssSizeRef.current = { width: newCssWidth, height: newCssHeight };

      canvas.width = newCssWidth * dpr;
      canvas.height = newCssHeight * dpr;
      
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const updatePattern = () => {
      for (let i = 0; i < patternPixelDataLength; i += 4) {
        const value = Math.random() * 255 * intensity;
        patternData.data[i] = value;
        patternData.data[i + 1] = value;
        patternData.data[i + 2] = value;
        patternData.data[i + 3] = patternAlpha;
      }
      patternCtx.putImageData(patternData, 0, 0);
    };

    const drawGrain = () => {
      const { width: cssWidth, height: cssHeight } = canvasCssSizeRef.current;
      if (cssWidth === 0 || cssHeight === 0) return;

      ctx.clearRect(0, 0, cssWidth, cssHeight);
      ctx.save();
      
      const safePatternScaleX = Math.max(0.001, patternScaleX);
      const safePatternScaleY = Math.max(0.001, patternScaleY);
      ctx.scale(safePatternScaleX, safePatternScaleY);

      const fillPattern = ctx.createPattern(patternCanvas, 'repeat');
      if (fillPattern) {
        ctx.fillStyle = fillPattern;
        ctx.fillRect(0, 0, cssWidth / safePatternScaleX, cssHeight / safePatternScaleY);
      }
      
      ctx.restore();
    };

    let animationFrameId: number;
    const loop = () => {
      if (canvasCssSizeRef.current.width > 0 && canvasCssSizeRef.current.height > 0) {
        if (frame % patternRefreshInterval === 0) {
          updatePattern();
          drawGrain();
        }
      }
      frame++;
      animationFrameId = window.requestAnimationFrame(loop);
    };

    window.addEventListener('resize', resize);
    resize();
    if (patternRefreshInterval > 0) {
      loop();
    } else {
      updatePattern();
      drawGrain();
    }

    return () => {
      window.removeEventListener('resize', resize);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [patternSize, patternScaleX, patternScaleY, patternRefreshInterval, patternAlpha, intensity]);

  return <canvas className="absolute inset-0 w-full h-full pointer-events-none opacity-40" ref={grainRef} />;
}

// Floating geometric shapes component
function FloatingShape({
  className,
  delay = 0,
  width = 200,
  height = 200,
  rotate = 0,
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
        rotate: rotate - 20,
      }}
      animate={{
        opacity: 0.6,
        scale: 1,
        rotate: rotate,
      }}
      transition={{
        duration: 3,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [rotate, rotate + 5, rotate],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/10 shadow-2xl" />
        <div className="absolute inset-2 bg-gradient-to-tr from-white/5 to-transparent rounded-xl" />
      </motion.div>
    </motion.div>
  );
}

// Interactive grid dots component
function InteractiveGrid() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const gridSize = 40;
  const rows = Math.ceil(window.innerHeight / gridSize);
  const cols = Math.ceil(window.innerWidth / gridSize);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: rows * cols }).map((_, i) => {
        const row = Math.floor(i / cols);
        const col = i % cols;
        const x = col * gridSize;
        const y = row * gridSize;
        
        const distance = Math.sqrt(
          Math.pow(mousePosition.x - x, 2) + Math.pow(mousePosition.y - y, 2)
        );
        const maxDistance = 150;
        const proximity = Math.max(0, 1 - distance / maxDistance);
        const opacity = 0.18 + proximity * 0.18; // base 0.5, up to 1.0 when close
        const scale = 1 + proximity * 1.2; // base 1, up to 2.2 when close

        return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
            style={{
              left: x,
              top: y,
              opacity,
              transform: `scale(${scale})`,
              boxShadow: proximity > 0.7 ? '0 0 8px 2px #3b82f6aa' : undefined,
            }}
            transition={{ duration: 0.18 }}
          />
        );
      })}
    </div>
  );
}

// Main background component
function StudentInnovationBackground({
  children
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("relative w-full min-h-screen flex flex-col items-stretch justify-start overflow-x-hidden")}> 
      {/* Background Layer */}
      <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
        {/* Subtle radial gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-blue-100/60 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-purple-100/60 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-indigo-50/50 to-transparent rounded-full blur-3xl" />
        {/* Interactive grid dots */}
        <InteractiveGrid />
        {/* Floating geometric shapes */}
        <FloatingShape delay={0.5} width={120} height={120} rotate={15} className="top-20 left-20" />
        <FloatingShape delay={1} width={80} height={80} rotate={-25} className="top-40 right-32" />
        <FloatingShape delay={1.5} width={100} height={100} rotate={45} className="bottom-32 left-40" />
        <FloatingShape delay={2} width={60} height={60} rotate={-15} className="bottom-20 right-20" />
        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 0,200 Q 400,100 800,200 T 1600,200"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, delay: 1 }}
          />
          <motion.path
            d="M 0,400 Q 600,300 1200,400 T 2400,400"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, delay: 1.5 }}
          />
        </svg>
        {/* Subtle noise texture */}
        <Noise
          patternSize={100}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={3}
          patternAlpha={25}
          intensity={0.7}
        />
        {/* Content overlay with proper z-index */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/20 pointer-events-none z-10" />
      </div>
      {/* Children content area */}
      <main className="relative z-20 w-full flex flex-col items-stretch justify-start">
        {children}
      </main>
    </div>
  );
}

export default StudentInnovationBackground;