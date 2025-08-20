import Schedule from "@/components/Schedule";
import SnowAnimation from "@/components/SnowAnimation";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <SnowAnimation />
      <div className="relative z-20">
        <Schedule />
      </div>
    </div>
  );
};

export default Index;
