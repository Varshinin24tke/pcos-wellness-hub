// PCOS Nourish AI Dashboard
import HeroProfile from "@/components/HeroProfile";
import StatsOverview from "@/components/StatsOverview";
import PredictionHistory from "@/components/PredictionHistory";

const Index = () => (
  <div className="min-h-screen aura-bg">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-16 space-y-8 md:space-y-10">
      <HeroProfile />
      <StatsOverview />
      <PredictionHistory />
    </div>
  </div>
);

export default Index;
