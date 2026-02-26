import {
  FaRocket,
  FaSitemap,
  FaComments,
  FaHandshake,
  FaShieldAlt,
  FaCheckCircle,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { memo } from "react";

const WhyUs = () => {
  const differentiators = [
    {
      id: 1,
      title: "Performance-First Engineering",
      icon: FaRocket,
      description:
        "We don't just build websites—we engineer high-performance digital platforms that load instantly and convert visitors.",
      points: [
        "Sub-2 second load times guaranteed",
        "Core Web Vitals optimization",
        "Mobile-first architecture",
      ],
      stat: "2.4x faster",
      gradient: "from-blue-600 to-cyan-500",
      lightBg: "from-blue-50 to-cyan-50",
      iconColor: "text-blue-600",
    },
    {
      id: 2,
      title: "Scalable Architecture",
      icon: FaSitemap,
      description:
        "Your platform grows with you. We build foundations that handle millions of users without breaking a sweat.",
      points: [
        "Enterprise-grade infrastructure",
        "Automatic scaling capabilities",
        "Future-proof technology stack",
      ],
      stat: "10x traffic spikes",
      gradient: "from-purple-600 to-pink-500",
      lightBg: "from-purple-50 to-pink-50",
      iconColor: "text-purple-600",
    },
    {
      id: 3,
      title: "Transparent Communication",
      icon: FaComments,
      description:
        "No black boxes. No jargon. You'll always know exactly what's happening with your project.",
      points: [
        "Weekly progress updates",
        "Real-time project dashboard",
        "Direct access to your team",
      ],
      stat: "100% transparency",
      gradient: "from-green-600 to-emerald-500",
      lightBg: "from-green-50 to-emerald-50",
      iconColor: "text-green-600",
    },
    {
      id: 4,
      title: "Long-Term Growth Partnerships",
      icon: FaHandshake,
      description:
        "We don't disappear after launch. We become your dedicated partner for ongoing success.",
      points: [
        "Continuous optimization",
        "Priority support access",
        "Strategic growth consulting",
      ],
      stat: "85% retention",
      gradient: "from-orange-600 to-red-500",
      lightBg: "from-orange-50 to-red-50",
      iconColor: "text-orange-600",
    },
  ];


  return (
    <section
      id="why-us"
      className="scroll-mt-16 relative w-full overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      {/* Bold Background Design */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-900 via-purple-800 to-fuchsia-900">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-fuchsia-500 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        {/* Section Header - White text on dark background */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-2">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium w-fit mx-auto lg:mx-0 ">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-600"></span>
            </span>
            The Difference
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Why{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-fuchsia-300 to-purple-200">
              Klass Koncepts
            </span>
          </h2>

          <p className="text-xl text-purple-100 leading-relaxed">
            We don't just write code. We architect success stories.
          </p>
        </div>

        {/* Main Differentiators - New alternating layout */}
        <div className="space-y-16 lg:space-y-24">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`relative flex flex-col lg:flex-row ${
                  isEven ? "" : "lg:flex-row-reverse"
                } items-center gap-8 lg:gap-16`}
              >
                {/* Left Side - Visual */}
                <div className="lg:w-1/2">
                  <div className="relative group">
                    {/* Animated background */}
                    <div
                      className={`absolute -inset-4 bg-linear-to-r ${item.gradient} rounded-3xl opacity-20 group-hover:opacity-30 blur-2xl transition-opacity duration-500`}
                    ></div>

                    {/* Content Card */}
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                      {/* Icon and Stat */}
                      <div className="flex items-center justify-between mb-6">
                        <div
                          className={`inline-flex items-center justify-center w-20 h-20 bg-linear-to-br ${item.gradient} rounded-2xl shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                        >
                          <Icon className="text-3xl text-white" />
                        </div>
                        <div className="bg-white/10 px-4 py-2 rounded-full border border-white/20">
                          <span
                            className={`text-sm font-bold bg-clip-text text-transparent bg-linear-to-r ${item.gradient}`}
                          >
                            {item.stat}
                          </span>
                        </div>
                      </div>

                      {/* Feature Points with Icons */}
                      <div className="space-y-4">
                        {item.points.map((point, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div
                              className={`w-6 h-6 rounded-full bg-linear-to-r ${item.gradient} flex items-center justify-center text-white text-xs`}
                            >
                              ✓
                            </div>
                            <span className="text-purple-100">{point}</span>
                          </div>
                        ))}
                      </div>

                      {/* Decorative Line */}
                      <div
                        className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${item.gradient} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Text */}
                <div className="lg:w-1/2 text-center lg:text-left">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-lg text-purple-100 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* CTA Link */}
                  <Link
                    to="/services"
                    className={`inline-flex items-center gap-2 text-transparent bg-clip-text bg-linear-to-r ${item.gradient} hover:gap-3 transition-all duration-300 group/link`}
                  >
                    <span>Learn more about {item.title.split(" ")[0]}</span>
                    <FaArrowRight className="text-sm group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Section - Centered CTA */}
        <div className="mt-24 text-center">
          <div className="relative max-w-3xl mx-auto">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-fuchsia-600 rounded-3xl opacity-20 blur-3xl"></div>

            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-10 sm:p-12 border border-white/20">
              <div className="flex items-center justify-center gap-2 mb-6">
                <FaShieldAlt className="text-fuchsia-300 text-xl" />
                <span className="text-fuchsia-300 font-semibold">
                  100% Satisfaction Guaranteed
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to Build Something Amazing?
              </h3>

              <p className="text-purple-100 mb-8 max-w-xl mx-auto">
                Join 50+ businesses that have already chosen excellence. Let's
                create your success story.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-linear-to-r from-purple-600 to-fuchsia-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 group shadow-xl"
                >
                  <span>Start Your Journey</span>
                  <FaArrowRight className="text-sm group-hover:translate-x-1.5 transition-transform" />
                </Link>

                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <span>View Case Studies</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full bg-linear-to-r from-purple-400 to-fuchsia-400 border-2 border-purple-900"
                      />
                    ))}
                  </div>
                  <span className="text-purple-200">50+ Happy Clients</span>
                </div>
                <div className="w-px h-4 bg-purple-700"></div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                  <span className="text-purple-200 ml-1">4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add to global CSS */}
      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default memo(WhyUs);
