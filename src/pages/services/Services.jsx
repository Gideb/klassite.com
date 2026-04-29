import CTASection from "../../components/props/CTASection.jsx";
import OtherHeroSection from "../../components/props/OtherHeroSection.jsx";
import FeaturedProjects from "../../components/sections/servicesections/FeaturedProjects.jsx";
import ServiceHero from "../../components/sections/servicesections/ServiceHero.jsx";
import ServiceItems from "../../components/sections/servicesections/ServiceItems.jsx";
import Stats from "../../components/props/Stats.jsx";

const Services = () => {
  return (
    <div>
      <OtherHeroSection pageName="Services" />
      <ServiceHero />
      <ServiceItems />
      <FeaturedProjects />
      <div className="max-w-7xl mx-auto">
        <Stats />
      </div>
      <CTASection />
    </div>
  );
};

export default Services;
