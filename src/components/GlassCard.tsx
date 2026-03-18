import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "subtle";
  delay?: number;
}

const GlassCard = ({ children, className = "", variant = "default", delay = 0 }: GlassCardProps) => (
  <div
    className={`${variant === "default" ? "glass-card" : "glass-card-subtle"} animate-fade-up ${className}`}
    style={{ animationDelay: `${delay}s`, animationFillMode: "backwards" }}
  >
    {children}
  </div>
);

export default GlassCard;
