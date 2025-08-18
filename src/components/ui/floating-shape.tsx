import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingShapeProps {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
  children?: React.ReactNode;
}

export function FloatingShape({
  className,
  delay = 0,
  width = 200,
  height = 60,
  rotate = 0,
  gradient = "from-blue-500/[0.1]",
  children,
}: FloatingShapeProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -100,
        rotate: rotate - 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 10, 0],
          rotate: [rotate, rotate + 2, rotate],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[1px] border border-white/[0.1]",
            "shadow-[0_4px_16px_0_rgba(255,255,255,0.05)]",
          )}
        />
        {children && (
          <div className="absolute inset-0 flex items-center justify-center">
            {children}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}