import GlassCard from "./GlassCard";
import { Sparkles } from "lucide-react";

interface Prediction {
  id: number;
  result: "detected" | "clear";
  confidence: number;
  date: string;
}

const predictions: Prediction[] = [
  { id: 1, result: "detected", confidence: 87.3, date: "Mar 14, 2026" },
  { id: 2, result: "clear", confidence: 94.1, date: "Feb 28, 2026" },
  { id: 3, result: "clear", confidence: 91.7, date: "Feb 10, 2026" },
  { id: 4, result: "detected", confidence: 78.9, date: "Jan 22, 2026" },
  { id: 5, result: "clear", confidence: 98.4, date: "Jan 05, 2026" },
];

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
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase ${
                    p.result === "detected"
                      ? "bg-rose-100 text-rose-600"
                      : "bg-emerald-50 text-emerald-600"
                  }`}
                >
                  {p.result === "detected" ? "PCOS Detected" : "Clear"}
                </span>
              </div>
              <div className="text-right space-y-0.5">
                <p className="text-lg font-semibold text-foreground" style={{ fontVariantNumeric: 'tabular-nums' }}>
                  {p.confidence}%
                </p>
                <p className="text-xs text-muted-foreground font-medium">confidence</p>
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
