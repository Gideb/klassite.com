import { memo } from "react";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import Team from "../../../assets/images/serviceSpecific/teamWorking.jpg";

const AboutHeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Hero Image - 40vh with opacity */}
      <div className="relative h-[50vh] sm:h-[55vh] lg:h-[60vh] w-full">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={Team} 
            alt="Our team at work"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-purple-800/60 mix-blend-multiply"></div>

          {/* Techy overlay pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        {/* Content - Centered on image */}
        <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-10">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
           {/*  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-400"></span>
              </span>
              About Klass Koncepts
            </div> */}

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 mt-10">
              We Build Digital
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-fuchsia-300 to-purple-200">
                Experiences That Matter
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
              A team of passionate developers, designers, and strategists on a
              mission to transform ideas into powerful digital solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span>Start a Conversation</span>
                <FaArrowRight className="text-sm group-hover:translate-x-1.5 transition-transform" />
              </Link>

              <button
                onClick={() => {
                  /* Open video modal */
                }}
                className="group inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 border border-white/20"
              >
                <FaPlay className="text-xs" />
                <span>Watch Our Story</span>
              </button>
            </div>

            {/* Cute/Humorous Touch */}
            <p className="text-xs text-purple-200/70 mt-6">
              ✨ No robots here — just humans who speak JavaScript
            </p>
          </div>
        </div>
      </div>

      {/* Optional: Decorative wave or gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-white to-transparent"></div>
    </section>
  );
};

export default memo(AboutHeroSection);
