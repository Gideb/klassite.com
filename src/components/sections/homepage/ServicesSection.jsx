import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import { memo } from "react";
import digitalMark from "../../../assets/images/serviceSpecific/digi-mark.jpg";
import cctv from "../../../assets/images/serviceSpecific/cctv.jpg";
import webDev from "../../../assets/images/serviceSpecific/web-dev.jpg";
import camera from "../../../assets/images/serviceSpecific/camera.jpg";
import Stats from "../../Stats.jsx";
import Topicbg from "../../ui/topicbg.jsx";
import Headings from "../../ui/Headings.jsx";

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
      to: "/services/web-development",
    },
    {
      id: 2,
      title: "Digital Marketing",
      image: digitalMark,
      description:
        "Data-driven SEO strategies that get you to the top of Google.",
      services: ["SEO Optimization"],
      gradient: "from-blue-600 to-cyan-500",
      to: "/services/seo",
    },
    {
      id: 3,
      title: "Creative & Media",
      image: camera,
      description: "Professional photography, videography, and video editing.",
      services: ["Photography", "Videography", "Video Editing"],
      gradient: "from-green-600 to-emerald-500",
      to: "/services/video-production",
    },
    {
      id: 4,
      title: "Brand & Security",
      image: cctv,
      description:
        "Graphic design and security solutions for complete peace of mind.",
      services: ["Graphic Design", "CCTV Installation"],
      gradient: "from-orange-600 to-red-500",
      to: "/services/branding",
    },
  ];

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
          <Topicbg topic="Our Services" />
          <Headings black="What We" colored=" Build" />
        </div>

        <Stats />

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
                    to={`${group.to}`}
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
            to="/services"
            className="inline-flex items-center gap-2 bg-linear-to-r from-purple-600 to-fuchsia-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span>Free Consultation</span>
            <FaArrowRight className="text-sm" />
          </Link>
        
        </div>
      </div>
    </section>
  );
};

export default memo(ServicesSection);
