import HeroProfile from "@/components/HeroProfile";
import InsightStrip from "@/components/InsightStrip";
import StatsOverview from "@/components/StatsOverview";
import HealthTrendChart from "@/components/HealthTrendChart";
import PredictionHistory from "@/components/PredictionHistory";

const Index = () => (
  <div className="min-h-screen aura-bg relative overflow-hidden">
    {/* Background blobs */}
    <div className="pointer-events-none absolute top-20 -left-32 w-96 h-96 rounded-full opacity-30" style={{ background: "hsl(340 80% 90%)", filter: "blur(120px)" }} />
    <div className="pointer-events-none absolute top-[50%] -right-40 w-[500px] h-[500px] rounded-full opacity-20" style={{ background: "hsl(330 81% 85%)", filter: "blur(140px)" }} />
    <div className="pointer-events-none absolute bottom-20 left-1/3 w-72 h-72 rounded-full opacity-20" style={{ background: "hsl(45 90% 88%)", filter: "blur(100px)" }} />

    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-16 space-y-6 md:space-y-8">
      <HeroProfile />
      <InsightStrip />
      <StatsOverview />
      <HealthTrendChart />
      <PredictionHistory />
    </div>
  </div>
);

export default Index;
