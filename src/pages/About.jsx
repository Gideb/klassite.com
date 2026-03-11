import OtherHeroSection from "../components/OtherHeroSection";
import CTASection from "../components/CTASection";
import MarketReality from "../components/sections/aboutpage/MarketReality ";
import StrategicOrigin from "../components/sections/aboutpage/StrategicOrigin ";
import PerformanceFramework from "../components/sections/aboutpage/PerformanceFramework ";
import Differentiators from "../components/sections/aboutpage/Differentiators";



const About = () => {
  return (
    <div>
      <OtherHeroSection />
      <MarketReality />
      <StrategicOrigin />
      <PerformanceFramework />
      <Differentiators />
      <CTASection />
    </div>
  );
};

export default About;
