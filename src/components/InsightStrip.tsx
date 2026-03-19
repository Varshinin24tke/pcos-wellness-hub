import { Sparkles } from "lucide-react";

const insights = [
  { icon: "✨", text: "You're improving! Your confidence has increased recently", type: "positive" as const },
  { icon: "⚠️", text: "Slight increase detected — consider lifestyle balance", type: "warning" as const },
];

const InsightStrip = () => {
  // Pick insight based on latest data trend
  const insight = insights[0];

  return (
    <div
      className="relative overflow-hidden rounded-2xl px-5 py-4 animate-fade-up"
      style={{
        background: "linear-gradient(135deg, hsl(340 80% 95%), hsl(330 70% 92%), hsl(45 80% 93%))",
        boxShadow: "0 4px 20px -4px rgba(244, 114, 182, 0.15), 0 0 40px -10px rgba(244, 114, 182, 0.1)",
        animationDelay: "0.12s",
        animationFillMode: "backwards",
      }}
    >
      {/* Glow */}
      <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full pointer-events-none" style={{ background: "rgba(244,114,182,0.12)", filter: "blur(30px)" }} />
      <div className="relative flex items-center gap-3">
        <Sparkles className="w-4 h-4 text-primary shrink-0" />
        <p className="text-sm font-medium text-foreground/80">
          <span className="mr-1">{insight.icon}</span>
          {insight.text}
        </p>
      </div>
    </div>
  );
};

export default InsightStrip;
