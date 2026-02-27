import React from "react";

const AboutHeroSection = () => {
  return (
    <div>
      <section
        id="aboutHero"
        className="scroll-mt-16 relative mt-10 sm:mt-5 w-full overflow-hidden bg-white py-10 sm:py-10 lg:py-24 "
        aria-label="Hero section"
      >
        {/* Main Content Container */}
        <div className="z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen flex items-center">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium w-fit mx-auto lg:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-600"></span>
            </span>
            Our Story
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHeroSection;
