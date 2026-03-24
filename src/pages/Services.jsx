import CTASection from "../components/CTASection.jsx";
import OtherHeroSection from "../components/OtherHeroSection.jsx";
import FeaturedProjects from "../components/sections/servicesections/FeaturedProjects.jsx";
import ServiceHero from "../components/sections/servicesections/ServiceHero.jsx";
import ServiceItems from "../components/sections/servicesections/ServiceItems.jsx";

const Services = () => {
  return (
    <div>
      <OtherHeroSection pageName="Services" />
      <ServiceHero />
      <ServiceItems />
      <FeaturedProjects />
      <CTASection />
    </div>
  );
};

export default Services;
