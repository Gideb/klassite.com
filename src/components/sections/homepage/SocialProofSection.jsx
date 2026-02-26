import { memo, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo1 from "../../../assets/images/brandLogo/logo1.png";
import logo2 from "../../../assets/images/brandLogo/logo2.png";
import logo3 from "../../../assets/images/brandLogo/logo3.png";
import logo4 from "../../../assets/images/brandLogo/logo4.png";
import logo5 from "../../../assets/images/brandLogo/logo5.png";
import logo6 from "../../../assets/images/brandLogo/logo6.png";

const SocialProofSection = () => {
  const brands = [
    {
      name: "TechCorp",
      gradient: "from-blue-600 to-blue-400",
      logo: logo1,
    },
    {
      name: "InnovateLabs",
      gradient: "from-purple-600 to-pink-500",
      logo: logo2,
    },
    {
      name: "GlobalMedia",
      gradient: "from-green-600 to-emerald-400",
      logo: logo3,
    },
    {
      name: "CreativeHub",
      gradient: "from-orange-600 to-amber-500",
      logo: logo4,
    },
    {
      name: "StartupX",
      gradient: "from-red-600 to-rose-500",
      logo: logo5,
    },
    {
      name: "FutureTech",
      gradient: "from-indigo-600 to-purple-500",
      logo: logo6,
    },
  ];

  // Logo fallback component
  const LogoWithFallback = ({ logo, name, gradient }) => {
    const [hasError, setHasError] = useState(false);

    if (hasError || !logo) {
      return (
        <div
          className={`w-full h-full rounded-xl bg-linear-to-br ${gradient} flex items-center justify-center`}
        >
          <span className="text-white font-bold text-xl">{name.charAt(0)}</span>
        </div>
      );
    }

    return (
      <img
        src={logo}
        alt={name}
        className="w-full h-full object-contain"
        onError={() => setHasError(true)}
        loading="lazy"
      />
    );
  };

  return (
    <section
      id="social-proof"
      className="scroll-mt-16 relative w-full overflow-hidden bg-linear-to-b from-white via-purple-50 to-white py-20 sm:py-24 lg:py-28"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        {/* Section Header - Simplified */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium w-fit mx-auto lg:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-600"></span>
            </span>
            Trusted Partners
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Backed by{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-600 to-fuchsia-600">
              Industry Leaders
            </span>
          </h2>

          <p className="text-lg text-gray-600">
            We're proud to partner with innovative companies that trust us to
            deliver exceptional digital experiences.
          </p>
        </div>

        {/* Brand Logos Grid - Clean and focused */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {brands.map((brand, index) => (
              <div key={index} className="group relative">
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${brand.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  {/* Logo container */}
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    {/* Decorative ring */}
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${brand.gradient} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-sm`}
                    ></div>

                    {/* Logo with fallback */}
                    <div className="relative w-full h-full p-3">
                      <LogoWithFallback
                        logo={brand.logo}
                        name={brand.name}
                        gradient={brand.gradient}
                      />
                    </div>
                  </div>

                  {/* Brand name */}
                  <div className="text-center">
                    <div className="text-sm font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                      {brand.name}
                    </div>
                  </div>

                  {/* Bottom gradient line */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${brand.gradient} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle brand mention - replaces stats */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            ...and 40+ other innovative companies across fintech, healthcare,
            and e-commerce
          </p>
        </div>

        {/* Gentle CTA */}
        <div className="text-center mt-8">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium group"
          >
            <span>See how we've helped these brands</span>
            <FaArrowRight className="text-sm group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      {/* Add animations to your global CSS if not already there */}
      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default memo(SocialProofSection);
