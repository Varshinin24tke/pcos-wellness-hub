import GlassCard from "./GlassCard";
import { Sparkles, TrendingUp, TrendingDown, Minus } from "lucide-react";

interface Prediction {
  id: number;
  result: "detected" | "clear";
  confidence: number;
  date: string;
  trend: "up" | "down" | "stable";
  tags: string[];
}

const predictions: Prediction[] = [
  { id: 1, result: "detected", confidence: 87.3, date: "Mar 14, 2026", trend: "down", tags: ["Moderate Risk"] },
  { id: 2, result: "clear", confidence: 94.1, date: "Feb 28, 2026", trend: "up", tags: ["High Confidence", "Stable"] },
  { id: 3, result: "clear", confidence: 91.7, date: "Feb 10, 2026", trend: "up", tags: ["High Confidence"] },
  { id: 4, result: "detected", confidence: 78.9, date: "Jan 22, 2026", trend: "down", tags: ["Moderate Risk"] },
  { id: 5, result: "clear", confidence: 98.4, date: "Jan 05, 2026", trend: "stable", tags: ["High Confidence", "Stable"] },
];

const trendIcons = {
  up: <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />,
  down: <TrendingDown className="w-3.5 h-3.5 text-primary" />,
  stable: <Minus className="w-3.5 h-3.5 text-muted-foreground" />,
};

const tagColors: Record<string, string> = {
  "High Confidence": "bg-emerald-50 text-emerald-600",
  "Moderate Risk": "bg-rose-50 text-rose-500",
  "Stable": "bg-secondary text-muted-foreground",
};

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-up">
    <div className="w-16 h-16 rounded-3xl flex items-center justify-center mb-6" style={{ background: 'rgba(244, 114, 182, 0.1)' }}>
      <Sparkles className="w-7 h-7 text-primary" />
    </div>
    <p className="text-lg font-display font-medium text-foreground">No health insights yet 💖</p>
    <p className="text-sm text-muted-foreground mt-2 max-w-xs">
      Start your first check to see results and begin tracking your wellness journey.
    </p>
  </div>
);

const PredictionHistory = ({ showEmpty = false }: { showEmpty?: boolean }) => {
  if (showEmpty) return <EmptyState />;

  return (
    <div>
      <h2
        className="text-xl md:text-2xl font-display font-semibold text-foreground tracking-tight mb-6 animate-fade-up"
        style={{ animationDelay: '0.35s', animationFillMode: 'backwards' }}
      >
        Your Health History
      </h2>

      <div className="space-y-3">
        {predictions.map((p, i) => (
          <GlassCard
            key={p.id}
            variant="subtle"
            className={`p-5 md:p-6 border-l-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
              p.result === "detected"
                ? "border-l-primary"
                : "border-l-emerald-500"
            }`}
            delay={0.4 + i * 0.06}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-2.5">
                <span
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase w-fit ${
                    p.result === "detected"
                      ? "bg-rose-100 text-rose-600"
                      : "bg-emerald-50 text-emerald-600"
                  }`}
                >
                  {p.result === "detected" ? "PCOS Detected" : "Clear"}
                </span>
                {/* Smart Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wide ${tagColors[tag] || "bg-secondary text-muted-foreground"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-right space-y-1.5 shrink-0">
                <div className="flex items-center justify-end gap-1.5">
                  <p className="text-lg font-semibold text-foreground" style={{ fontVariantNumeric: 'tabular-nums' }}>
                    {p.confidence}%
                  </p>
                  {trendIcons[p.trend]}
                </div>
                <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">confidence</p>
                {/* Progress bar */}
                <div className="w-24 h-1.5 rounded-full bg-secondary overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{
                      width: `${p.confidence}%`,
                      background: p.result === "detected"
                        ? "linear-gradient(90deg, hsl(330 81% 70%), hsl(340 80% 60%))"
                        : "linear-gradient(90deg, hsl(150 60% 50%), hsl(160 60% 45%))",
                    }}
                  />
                </div>
                <p className="text-xs text-muted-foreground">{p.date}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default PredictionHistory;
