import { LogOut } from "lucide-react";
import { toast } from "sonner";
import GlassCard from "./GlassCard";

const HeroProfile = () => (
  <GlassCard className="p-8 md:p-10 relative shadow-lg hover:shadow-2xl transition-shadow duration-300" delay={0}>
    {/* Glow effect */}
    <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none" style={{ background: 'rgba(253, 164, 175, 0.2)', filter: 'blur(100px)' }} />
    <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full pointer-events-none" style={{ background: 'rgba(253, 230, 196, 0.3)', filter: 'blur(80px)' }} />

    <div className="relative flex flex-col sm:flex-row items-center gap-6 md:gap-8">
      {/* Avatar */}
      <div className="relative shrink-0 animate-scale-in">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center text-primary-foreground text-2xl font-display font-semibold"
          style={{
            background: 'linear-gradient(135deg, hsl(340 80% 76%), hsl(330 81% 70%))',
            outline: '4px solid white',
            boxShadow: '0 0 20px rgba(244, 114, 182, 0.2)',
          }}
        >
          S
        </div>
      </div>

      {/* Info */}
      <div className="text-center sm:text-left">
        <h1 className="text-2xl md:text-3xl font-display font-semibold text-foreground tracking-tight">
          Welcome back, Sarah
        </h1>
        <p className="text-muted-foreground text-sm mt-1">sarah.johnson@email.com</p>
        <p className="text-sm mt-3 text-foreground/70 italic">
          ✨ Your personalized PCOS wellness journey
        </p>
      </div>

      {/* CTA */}
      <button className="sm:ml-auto bg-primary text-primary-foreground px-6 py-3 rounded-2xl font-medium text-sm transition-all duration-200 hover:scale-105 active:scale-95 shrink-0"
        style={{ boxShadow: '0 8px 25px -5px rgba(244, 114, 182, 0.3)' }}
      >
        New Check ✦
      </button>
    </div>
  </GlassCard>
);

export default HeroProfile;
