import { memo, useState } from "react";

import teamImage from "../../../assets/images/serviceSpecific/teamWorking.jpg";

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
      className="scroll-mt-16 relative w-full bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE — TEAM IMAGE */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src={teamImage}
                alt="Our Team"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-purple-900/20"></div>
            </div>
          </div>

          {/* RIGHT SIDE — TRUST CONTENT */}
          <div>
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium w-fit mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-600"></span>
              </span>
              Trusted Partners
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 mt-3">
              Trusted by{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-600 to-fuchsia-600">
                Industry Leaders
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-10">
              We collaborate with forward-thinking brands who trust us to
              deliver exceptional digital experiences.
            </p>

            {/* Logo Grid — Cleaner Version */}
            <div className="grid grid-cols-3 gap-6">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center 
                         bg-gray-50 rounded-xl p-4 shadow-sm
                         hover:bg-white hover:shadow-fuchsia-300 hover:shadow-md 
                         transition duration-300"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-10 object-contain grayscale hover:grayscale-0 transition duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Subtext */}
            <p className="text-gray-500 text-sm mt-8">
              ...and 40+ other innovative companies across fintech, healthcare,
              and e-commerce.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(SocialProofSection);
