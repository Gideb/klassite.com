import { FaLaptopCode, FaChartLine, FaArrowRight } from "react-icons/fa";
import { GoRocket } from "react-icons/go";
import { LiaAwardSolid } from "react-icons/lia";
import { WiTime4 } from "react-icons/wi";
import { Link } from "react-router-dom";
import { PiUsersThreeLight } from "react-icons/pi";
import { TfiPalette } from "react-icons/tfi";
import { memo } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer"; // You'll need to install this

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Digital Platforms",
      icon: FaLaptopCode,
      description:
        "Custom web applications built for speed, scalability, and performance.",
      gradient: "from-blue-600 to-cyan-500",
      bgLight: "from-blue-50 to-cyan-50",
      outcomes: [
        "Lightning fast load times (< 2 seconds)",
        "Scalable architecture for growth",
        "Mobile-responsive design",
      ],
      link: "/services#digital-platforms",
      stats: "2.5x faster load times",
    },
    {
      id: 2,
      title: "Growth & Optimization",
      icon: FaChartLine,
      description:
        "Data-driven strategies that increase visibility, traffic, and conversions.",
      gradient: "from-green-600 to-emerald-500",
      bgLight: "from-green-50 to-emerald-50",
      outcomes: [
        "40% average traffic increase",
        "Top 3 Google rankings",
        "Higher conversion rates",
      ],
      link: "/services#growth",
      stats: "189% avg. ROI",
    },
    {
      id: 3,
      title: "Brand & Experience",
      icon: TfiPalette,
      description:
        "Visual identities and user experiences that turn visitors into loyal customers.",
      gradient: "from-purple-600 to-pink-500",
      bgLight: "from-purple-50 to-pink-50",
      outcomes: [
        "Memorable brand identity",
        "Intuitive user journeys",
        "Increased customer loyalty",
      ],
      link: "/services#brand",
      stats: "85% engagement increase",
    },
  ];

  const stats = [
    {
      icon: GoRocket,
      value: 50,
      suffix: "+",
      label: "Projects Delivered",
      color: "from-purple-600 to-fuchsia-600",
      duration: 2.5,
    },
    {
      icon: PiUsersThreeLight,
      value: 30,
      suffix: "+",
      label: "Happy Clients",
      color: "from-blue-600 to-cyan-600",
      duration: 2,
    },
    {
      icon: LiaAwardSolid,
      value: 5,
      suffix: "+",
      label: "Years Experience",
      color: "from-green-600 to-emerald-600",
      duration: 1.5,
    },
    {
      icon: WiTime4,
      value: 24,
      suffix: "/7",
      label: "Client Support",
      color: "from-orange-600 to-amber-600",
      duration: 1,
    },
  ];

  // Hook to trigger animation when stats come into view
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="services"
      className="scroll-mt-16 relative w-full overflow-hidden bg-linear-to-b from-white via-purple-50 to-white py-20 sm:py-24 lg:py-28"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-fuchsia-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-600"></span>
            </span>
            What We Do
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Solutions That Drive{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-600 to-fuchsia-600">
              Real Results
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to launch, we build digital experiences that don't just
            look good — they perform, convert, and grow with your business.
          </p>
        </div>

        {/* Stats Bar with CountUp Animation */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 sm:mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                ></div>

                {/* Icon with gradient */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 bg-linear-to-br ${stat.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <Icon className="text-2xl text-white" />
                </div>

                {/* CountUp Value */}
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                  {statsInView ? (
                    <>
                      <CountUp
                        end={stat.value}
                        duration={stat.duration}
                        separator=","
                      />
                      {stat.suffix}
                    </>
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>

                {/* Label */}
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>

                {/* Small decorative element */}
                <div
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-12 h-0.5 bg-linear-to-r ${stat.color} rounded-full transition-all duration-300`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden border border-gray-100"
              >
                {/* Top gradient bar */}
                <div
                  className={`h-2 w-full bg-linear-to-r ${service.gradient}`}
                ></div>

                <div className="p-8">
                  {/* Icon with gradient background */}
                  <div className="relative mb-8">
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-10 rounded-2xl blur-lg group-hover:opacity-20 transition-opacity duration-300`}
                    ></div>
                    <div
                      className={`relative inline-flex items-center justify-center w-20 h-20 bg-linear-to-br ${service.gradient} rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                    >
                      <Icon className="text-3xl text-white" />
                    </div>

                    {/* Floating stat badge */}
                    <div className="absolute -top-2 -right-2 bg-white px-3 py-1.5 rounded-full shadow-lg border border-gray-100">
                      <span
                        className={`text-xs font-bold bg-clip-text text-transparent bg-linear-to-r ${service.gradient}`}
                      >
                        {service.stats}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-base mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Outcome Points */}
                  <ul className="space-y-3 mb-8">
                    {service.outcomes.map((outcome, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <span
                          className={`inline-flex items-center justify-center w-5 h-5 rounded-full bg-linear-to-r ${service.gradient} text-white text-xs shrink-0 mt-0.5`}
                        >
                          ✓
                        </span>
                        <span className="text-sm">{outcome}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-purple-600 font-medium group/link transition-colors duration-300"
                  >
                    <span>Learn More</span>
                    <FaArrowRight className="text-sm group-hover/link:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>

                {/* Decorative corner accent */}
                <div
                  className={`absolute bottom-0 right-0 w-24 h-24 bg-linear-to-br ${service.gradient} opacity-5 rounded-tl-[100px] group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 sm:mt-24">
          <div className="relative max-w-3xl mx-auto">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-fuchsia-600 rounded-3xl opacity-5 blur-2xl"></div>

            <div className="relative bg-white rounded-3xl shadow-2xl p-10 sm:p-12 border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Not sure which service fits your needs?
              </h3>
              <p className="text-gray-600 mb-8 text-sm">
                Book a free 30-minute strategy call. No pressure, just honest
                advice.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-3 bg-linear-to-r from-purple-600 to-fuchsia-600 text-white px-6 py-3 rounded-full font-semibold text-md hover:shadow-2xl hover:scale-105 transition-all duration-300 group shadow-xl"
              >
                <span>Get Your Free Consultation</span>
                <FaArrowRight className="text-sm group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
              <p className="text-sm text-gray-400 mt-6">
                ✨ Limited spots available • Response within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(ServicesSection);
