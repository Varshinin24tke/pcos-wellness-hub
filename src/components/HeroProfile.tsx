import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

const HeroProfile = () => (
  <GlassCard className="p-8 md:p-10 relative" delay={0}>
    {/* Glow effect */}
    <div className="absolute -top-20 -right-20 w-64 h-64 bg-rose-200/20 blur-[100px] rounded-full pointer-events-none" />
    <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-peach-200/30 blur-[80px] rounded-full pointer-events-none" />

    <div className="relative flex flex-col sm:flex-row items-center gap-6 md:gap-8">
      {/* Avatar */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.2, 0, 0, 1], delay: 0.1 }}
        className="relative shrink-0"
      >
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-300 to-rose-400 flex items-center justify-center text-primary-foreground text-2xl font-display font-semibold"
          style={{
            outline: '4px solid white',
            boxShadow: '0 0 20px rgba(244, 114, 182, 0.2)',
          }}
        >
          S
        </div>
      </motion.div>

      {/* Info */}
      <div className="text-center sm:text-left">
        <h1 className="text-2xl md:text-3xl font-display font-semibold text-foreground tracking-tight">
          Welcome back, Sarah
        </h1>
        <p className="text-muted-foreground text-body text-sm mt-1">sarah.johnson@email.com</p>
        <p className="text-sm mt-3 text-foreground/70 font-body italic">
          ✨ Your personalized PCOS wellness journey
        </p>
      </div>

      {/* CTA */}
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="sm:ml-auto bg-primary text-primary-foreground px-6 py-3 rounded-2xl font-medium text-sm shadow-lg shadow-rose-300/20 hover:shadow-rose-300/40 transition-shadow shrink-0"
      >
        New Check ✦
      </motion.button>
    </div>
  </GlassCard>
);

export default HeroProfile;
