import HeroSection from "../components/sections/homepage/HeroSection.jsx";
import TestimonialSection from "../components/sections/homepage/TestimonialSection.jsx";
import SocialProofSection from "../components/sections/homepage/SocialProofSection.jsx";
import ServicesSection from "../components/sections/homepage/ServicesSection.jsx";
import WhyUs from "../components/sections/homepage/WhyUs.jsx";
import ProblemStatement from "../components/sections/homepage/ProblemStatement.jsx";
import Transition from "../components/ui/Transition.jsx";
import CTASection from "../components/CTASection.jsx";

import FeaturedProjects from "../components/sections/servicesections/FeaturedProjects.jsx";


const Home = () => {
  return (
    <>
     
      <HeroSection />
      <ProblemStatement />
      <Transition />
      <ServicesSection />
      <FeaturedProjects />
      <SocialProofSection />
      <WhyUs />
      <TestimonialSection />
      <CTASection />
    </>
  );
};

export default Home;
