import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import { memo } from "react";
import digitalMark from "../../../assets/images/serviceSpecific/digi-mark.jpg";
import branding from "../../../assets/images/serviceSpecific/branding.jpg";
import enterprise from "../../../assets/images/serviceSpecific/enterprise.jpg";
import camera from "../../../assets/images/serviceSpecific/camera.jpg";
import Stats from "../../props/Stats.jsx";
import Topicbg from "../../props/Topicbg.jsx";
import Headings from "../../props/Headings.jsx";
import Button from "../../ui/Button.jsx";

const ServicesSection = () => {
  const serviceGroups = [
    {
      id: 1,
      title: "Enterprise Web Solutions",
      image: enterprise,
      description: "Custom, responsive websites designed to elevate your brand",
      services: ["Website Development", "Web Application Development"],
      gradient: "from-purple-600 to-fuchsia-600",
      to: "/services/web-development",
    },
    {
      id: 2,
      title: "Strategic UI/UX Design",
      image: digitalMark,
      description:
        "Clean, user-focused interfaces that enhance user experience and engagement",
      services: ["Web Design", "UI/UX Strategy"],
      gradient: "from-blue-600 to-cyan-500",
      to: "/services/ui-ux",
    },
    {
      id: 3,
      title: "Brand Experience Design ",
      image: branding,
      description:
        "We provide your brand with a strong identity that connects you with your audience.",
      services: ["Photography", "Branding", "Printing"],
      gradient: "from-green-600 to-emerald-500",
      to: "/services/brand-experience",
    },
    {
      id: 4,
      title: "Content Management",
      image: camera,
      description:
        "Engaging visuals and media that tell your story effectively.",
      services: [
        "Photography",
        "Videography",
        "Video Editing",
        "Content Creation",
      ],
      gradient: "from-orange-600 to-red-500",
      to: "/services/content-creation",
    },
  ];

  return (
    <section
      id="services"
      className="scroll-mt-16 relative w-full overflow-hidden bg-gray-50 py-20 sm:py-24"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-xl mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-fuchsia-200 rounded-xl mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        {/* Simple Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Topicbg color="purple" topic="Our Services" />
          <Headings black="What We Build" />
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
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-xl"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`${group.to}`}
                    className="inline-flex items-center gap-1 text-sm text-purple-500 hover:text-purple-400 font-medium group/link"
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
        <div className="text-center mt-12 group">
          <Button
            link="/services"
            text="More Services"
            icon={FaArrowRight}
            variant="primary"
          />
          {/*   <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-white text-amber-600 shadow-md hover:shadow-lg px-7 py-4 rounded-xl font-semibold  hover:scale-105 transition-all duration-300"
          >
            <span>Free Consultation</span>
            <FaArrowRight className="text-sm group-hover:translate-x-1 duration-200 " />
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default memo(ServicesSection);
