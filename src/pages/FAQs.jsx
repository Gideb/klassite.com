import React from 'react'
import CTASection from '../components/CTASection'
import OtherHeroSection from '../components/OtherHeroSection'
import KlassKonceptFAQ from '../components/sections/KlassKonceptFAQ';

const FAQs = () => {
  return (
    <div>
      <OtherHeroSection pageName="FAQs" />
      <KlassKonceptFAQ />
      <CTASection />
    </div>
  );
}

export default FAQs