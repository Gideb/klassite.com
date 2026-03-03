import {
  FaArrowRight,
  FaCode,
  FaSearch,
  FaVideo,
  FaShieldAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import { LiaAwardSolid } from "react-icons/lia";
import { WiTime4 } from "react-icons/wi";
import { PiUsersThreeLight } from "react-icons/pi";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { memo } from "react";
import digitalMark from "../../../assets/images/serviceSpecific/digi-mark.jpg";
import cctv from "../../../assets/images/serviceSpecific/cctv.jpg";
import webDev from "../../../assets/images/serviceSpecific/web-dev.jpg";
import camera from "../../../assets/images/serviceSpecific/camera.jpg";
import team from "../../../assets/images/serviceSpecific/teamWorking.jpg";

const ServicesSection = () => {

  const serviceGroups = [
    {
      id: 1,
      title: "Web Development & Design",
      image: webDev, 
      description:
        "Custom websites that are fast, responsive, and built to convert.",
      services: ["Website Development", "Web Design"],
      gradient: "from-purple-600 to-fuchsia-600",
    },
    {
      id: 2,
      title: "Digital Marketing",
      image: digitalMark, 
      description:
        "Data-driven SEO strategies that get you to the top of Google.",
      services: ["SEO Optimization"],
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      id: 3,
      title: "Creative & Media",
      image: camera, 
      description: "Professional photography, videography, and video editing.",
      services: ["Photography", "Videography", "Video Editing"],
      gradient: "from-green-600 to-emerald-500",
    },
    {
      id: 4,
      title: "Brand & Security",
      image: cctv, 
      description:
        "Graphic design and security solutions for complete peace of mind.",
      services: ["Graphic Design", "CCTV Installation"],
      gradient: "from-orange-600 to-red-500",
    },
  ];

  const stats = [
    {
      icon: GoRocket,
      value: 50,
      suffix: "+",
      label: "Projects",
      color: "from-amber-600 to-amber-600",
      duration: 8,
    },
    {
      icon: PiUsersThreeLight,
      value: 30,
      suffix: "+",
      label: "Clients",
      color: "from-amber-600 to-amber-600",
      duration: 8,
    },
    {
      icon: LiaAwardSolid,
      value: 5,
      suffix: "+",
      label: "Years",
      color: "from-amber-600 to-amber-600",
      duration: 5,
    },
    {
      icon: WiTime4,
      value: 24,
      suffix: "/7",
      label: "Support",
      color: "from-amber-600 to-amber-600",
      duration: 8,
    },
  ];

  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="services"
      className="scroll-mt-16 relative w-full overflow-hidden bg-white py-20 sm:py-24"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-fuchsia-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        {/* Simple Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium w-fit mx-auto lg:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-600"></span>
            </span>
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4 text-gray-900">
            What We{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-fuchsia-600">
              Build
            </span>
          </h2>
        </div>

        {/* Quick Stats - Simple row */}
        <div
          ref={statsRef}
          className="relative mb-20 rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src={team}
              alt="Team working"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-purple-900/60 backdrop-blur-md"></div>
          </div>

          {/* Stats Content */}
          <div className="relative z-10 px-6 py-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 
                       bg-white/10 backdrop-blur-lg 
                       border border-white/20
                       px-6 py-5 rounded-2xl 
                       transition duration-300 
                       hover:scale-105 hover:bg-white/20"
                  >
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-xl bg-linear-to-br ${stat.color}
                          flex items-center justify-center text-white shadow-md`}
                    >
                      <Icon className="text-lg" />
                    </div>

                    {/* Text */}
                    <div>
                      <div className="text-3xl font-bold text-white leading-none">
                        {statsInView ? (
                          <>
                            <CountUp
                              end={stat.value}
                              duration={stat.duration}
                            />
                            {stat.suffix}
                          </>
                        ) : (
                          `0${stat.suffix}`
                        )}
                      </div>
                      <div className="text-sm text-white/80 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Service Groups - Clean grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {serviceGroups.map((group) => {
            const Icon = group.icon;
            return (
              // Inside your map function, replace the card with:
              <div
                key={group.id}
                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={group.image}
                    alt={group.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${group.gradient} opacity-0 group-hover:opacity-20 transition-opacity`}
                  ></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {group.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-3">
                    {group.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {group.services.map((service, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1 text-sm text-purple-600 hover:text-purple-700 font-medium group/link"
                  >
                    <span>Learn more</span>
                    <FaArrowRight className="text-xs group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Simple CTA */}
        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-linear-to-r from-purple-600 to-fuchsia-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span>Free Consultation</span>
            <FaArrowRight className="text-sm" />
          </Link>
          <p className="text-xs text-gray-400 mt-3">
            30-min strategy call • No obligation
          </p>
        </div>
      </div>
    </section>
  );
};

export default memo(ServicesSection);
