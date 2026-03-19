import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";
import GlassCard from "./GlassCard";

const data = [
  { date: "Jan 05", confidence: 98.4 },
  { date: "Jan 22", confidence: 78.9 },
  { date: "Feb 10", confidence: 91.7 },
  { date: "Feb 28", confidence: 94.1 },
  { date: "Mar 14", confidence: 87.3 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div
      className="rounded-2xl px-4 py-3 text-xs shadow-lg border border-border/50"
      style={{
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(16px)",
      }}
    >
      <p className="font-medium text-foreground">{label}</p>
      <p className="text-primary font-semibold mt-0.5">{payload[0].value}% confidence</p>
    </div>
  );
};

const HealthTrendChart = () => (
  <div>
    <h2
      className="text-xl md:text-2xl font-display font-semibold text-foreground tracking-tight mb-6 animate-fade-up"
      style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}
    >
      Health Trend
    </h2>
    <GlassCard className="p-6 md:p-8" delay={0.35}>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="pinkGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(330, 81%, 70%)" stopOpacity={0.35} />
              <stop offset="100%" stopColor="hsl(330, 81%, 70%)" stopOpacity={0.02} />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(340, 30%, 92%)" vertical={false} />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 11, fill: "hsl(340, 10%, 50%)" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={[60, 100]}
            tick={{ fontSize: 11, fill: "hsl(340, 10%, 50%)" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: "hsl(330, 81%, 70%)", strokeWidth: 1, strokeDasharray: "4 4" }} />
          <Area
            type="monotone"
            dataKey="confidence"
            stroke="hsl(330, 81%, 70%)"
            strokeWidth={2.5}
            fill="url(#pinkGradient)"
            filter="url(#glow)"
            animationDuration={1200}
            animationEasing="ease-out"
          />
        </AreaChart>
      </ResponsiveContainer>
    </GlassCard>
  </div>
);

export default HealthTrendChart;
