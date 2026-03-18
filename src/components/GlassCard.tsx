import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "subtle";
  delay?: number;
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.2, 0, 0, 1], delay },
  }),
};

const GlassCard = ({ children, className = "", variant = "default", delay = 0 }: GlassCardProps) => (
  <motion.div
    variants={item}
    initial="hidden"
    animate="show"
    custom={delay}
    className={`${variant === "default" ? "glass-card" : "glass-card-subtle"} ${className}`}
  >
    {children}
  </motion.div>
);

export default GlassCard;
