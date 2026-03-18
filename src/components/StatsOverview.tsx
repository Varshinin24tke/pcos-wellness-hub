import { BarChart3, CalendarDays, Heart } from "lucide-react";
import GlassCard from "./GlassCard";

const stats = [
  { icon: BarChart3, label: "Total Predictions", value: "12", color: "text-rose-400" },
  { icon: CalendarDays, label: "Last Check", value: "Mar 14", color: "text-rose-400" },
  { icon: Heart, label: "Health Status", value: "Low Risk", color: "text-emerald-500" },
];

const StatsOverview = () => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
    {stats.map((stat, i) => (
      <GlassCard key={stat.label} className="p-6 md:p-8" delay={0.08 + i * 0.06}>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white/80 flex items-center justify-center shrink-0 shadow-sm">
            <stat.icon className={`w-5 h-5 ${stat.color}`} />
          </div>
          <div>
            <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide">{stat.label}</p>
            <p className="text-2xl md:text-3xl font-medium tracking-tight tabular-nums mt-1 text-foreground">
              {stat.value}
            </p>
          </div>
        </div>
      </GlassCard>
    ))}
  </div>
);

export default StatsOverview;
