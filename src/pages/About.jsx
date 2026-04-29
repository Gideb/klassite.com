import OtherHeroSection from "../components/props/OtherHeroSection";
import CTASection from "../components/props/CTASection";
import MarketReality from "../components/sections/aboutpage/MarketReality ";
import StrategicOrigin from "../components/sections/aboutpage/StrategicOrigin ";
import PerformanceFramework from "../components/sections/aboutpage/PerformanceFramework ";
import Differentiators from "../components/sections/aboutpage/Differentiators";
import Team from "../components/sections/aboutpage/Team";

const About = () => {
  return (
    <div>
      <OtherHeroSection />
      <MarketReality />
      <StrategicOrigin />
      <PerformanceFramework />
      <Differentiators />
      <Team />
      <CTASection />
    </div>
  );
};

export default About;
