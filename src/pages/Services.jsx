import CTASection from "../components/CTASection.jsx";
import OtherHeroSection from "../components/OtherHeroSection.jsx";
import AllServices from "../components/sections/servicesections/AllServices.jsx";

const Services = () => {
  return (
    <div>
      <OtherHeroSection pageName="Services" />
      <AllServices />
      <CTASection />
    </div>
  );
};

export default Services;
