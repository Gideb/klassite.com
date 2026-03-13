
import OtherHeroSection from "../components/OtherHeroSection.jsx";
import ContactFAQ from "../components/sections/contactpage/ContactFAQ.jsx";
import ContactSection from "../components/sections/contactpage/ContactSection.jsx";
import SocialProofSection from "../components/sections/homepage/SocialProofSection.jsx";
import TestimonialSection from "../components/sections/homepage/TestimonialSection.jsx";

const Contact = () => {
  return (
    <div>
      <OtherHeroSection pageName="Contact" />
      <ContactSection /> 
      <ContactFAQ />
      <SocialProofSection />
      <TestimonialSection />
  
    </div>
  );
};

export default Contact;
