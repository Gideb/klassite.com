import React from 'react'
import CTASection from '../components/CTASection'
import OtherHeroSection from '../components/OtherHeroSection'
import Pricing from '../components/sections/PricingPage/Pricing';

const Pricings = () => {
  return (
    <div>
      <OtherHeroSection pageName="Pricing" />
      <Pricing />
      <CTASection />
    </div>
  );
}

export default Pricings

