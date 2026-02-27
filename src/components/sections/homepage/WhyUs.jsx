import {
  FaRocket,
  FaSitemap,
  FaComments,
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { memo } from "react";

const WhyUs = () => {
  const differentiators = [
    {
      id: 1,
      title: "Performance-First",
      icon: FaRocket,
      stat: "2.4x faster",
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      id: 2,
      title: "Scalable Architecture",
      icon: FaSitemap,
      stat: "10x traffic spikes",
      gradient: "from-purple-600 to-pink-500",
    },
    {
      id: 3,
      title: "Transparent Communication",
      icon: FaComments,
      stat: "100% transparency",
      gradient: "from-green-600 to-emerald-500",
    },
    {
      id: 4,
      title: "Long-Term Partnerships",
      icon: FaHandshake,
      stat: "85% retention",
      gradient: "from-orange-600 to-red-500",
    },
  ];

  return (
    <section
      id="why-us"
      className="scroll-mt-16 relative w-full overflow-hidden py-20 sm:py-24"
    >
      {/* Simple dark background */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-900 via-purple-800 to-fuchsia-900"></div>

      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Floating Orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-fuchsia-500 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-2000"></div>

      <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        {/* Simple Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-fuchsia-300 font-semibold text-sm uppercase tracking-wider">
            Why Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            The{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-fuchsia-300 to-purple-200">
              Klass Koncepts
            </span>{" "}
            Difference
          </h2>
          <p className="text-purple-100 text-lg">
            We build partnerships, not just websites.
          </p>
        </div>

        {/* Simple 2x2 Grid of Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-linear-to-br ${item.gradient} mb-4`}
                >
                  <Icon className="text-xl text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-fuchsia-300">{item.stat}</p>
              </div>
            );
          })}
        </div>

        {/* Single, Clear CTA */}
        <div className="text-center">
          <Link
            to="/serivices"
            className="inline-flex items-center gap-2 bg-white text-purple-900 px-6 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 group"
          >
            <span>Let's Build Together</span>
            <FaArrowRight className="text-sm group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default memo(WhyUs);
