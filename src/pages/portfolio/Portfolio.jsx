import React from 'react'
import PortfolioSection from '../../components/PortfolioSection'
import OtherHeroSection from '../../components/OtherHeroSection'
import AboutFounder from '../../components/AboutFounder'

const Portfolio = () => {
  return (
    <div>
      <OtherHeroSection pageName="Portfolio" />
      <AboutFounder />
      <PortfolioSection />
    </div>
  );
}

export default Portfolio