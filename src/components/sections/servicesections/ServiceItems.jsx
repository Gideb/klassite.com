import { FaGlobe, FaLayerGroup, FaPalette, FaArrowRight } from "react-icons/fa";
import {
  LuLaptopMinimalCheck,
  LuPalette,
  LuPenTool,
  LuCodeXml,
} from "react-icons/lu";
import {
  HiOutlineVideoCamera,
  HiOutlineRocketLaunch,
  HiOutlinePaintBrush,
} from "react-icons/hi2";

import Topicbg from "../../props/Topicbg";
import Headings from "../../props/Headings";
import Subheading from "../../props/Subheading";

import { Link } from "react-router-dom";

const ServiceItems = () => {
  const services = {
    digital: {
      title: "Digital Solutions",
      icon: FaGlobe,
      gradient: "from-purple-600 to-purple-500",
      bgGradient: "from-purple-50 to-white",
      intro:
        "We build digital experiences that are fast, modern, and built to convert.",
      lead: "/services/digital-solutions",
      items: [
        {
          icon: LuCodeXml,
          title: "Enterprise Web Solutions",
          desc: "Custom, responsive websites designed to elevate your brand and drive results.",
          color: "purple",
          lead: "/services/web-development",
        },
        {
          icon: HiOutlineRocketLaunch,
          title: "Mobile Applications",
          desc: "Scalable and functional applications tailored to your business needs.",
          color: "purple",
          lead: "/services/mobile-apps",
        },
        {
          icon: FaLayerGroup,
          title: "UI/UX Strategy",
          desc: "Clean, user-focused interfaces that enhance user experience and engagement.",
          color: "purple",
          lead: "/services/ui-ux",
        },
      ],
    },
    creative: {
      title: "Creative Services",
      icon: FaPalette,
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-white",
      intro:
        "We bring your brand to life through creative visuals and storytelling.",
      lead: "/services/creative-services",
      items: [
        {
          icon: HiOutlinePaintBrush,
          title: "Brand Experience",
          desc: "Build a strong identity that connects with your audience.",
          color: "amber",
          lead: "/services/brand-experience",
        },
        {
          icon: HiOutlineVideoCamera,
          title: "Content Creation",
          desc: "Engaging visuals and media that tell your story effectively.",
          color: "amber",
          lead: "/services/content-creation",
        },
        {
          icon: LuPenTool,
          title: "Graphic Design",
          desc: "Modern, eye-catching designs for digital and print.",
          color: "amber",
          lead: "/services/graphic-design",
        },
      ],
    },
  };
  // eslint-disable-next-line no-unused-vars
  const ServiceCard = ({ icon: Icon, title, desc, color, lead }) => {
    const isPurple = color === "purple";

    // Color configurations
    const colors = {
      purple: {
        iconBg: "bg-gradient-to-br from-purple-100 to-purple-50",
        iconColor: "text-purple-600",
        glow: "hover:shadow-purple-500/20",
        borderGlow: "hover:border-purple-500",
        linkColor: "text-purple-600",
        linkHover: "group-hover:text-purple-700",
        badgeBg: "bg-purple-100",
        badgeText: "text-purple-600",
      },
      amber: {
        iconBg: "bg-gradient-to-br from-amber-100 to-amber-50",
        iconColor: "text-amber-600",
        glow: "hover:shadow-amber-500/20",
        borderGlow: "hover:border-amber-500",
        linkColor: "text-amber-600",
        linkHover: "group-hover:text-amber-700",
        badgeBg: "bg-amber-100",
        badgeText: "text-amber-600",
      },
    };

    const style = colors[color];

    return (
      <div
        className={`group relative bg-white rounded-2xl p-8 border border-gray-100 
  transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-3 hover:shadow-xl ${style.glow} overflow-hidden`}
      >
        {/* Soft gradient hover wash */}
        <div
          className={`absolute inset-0 bg-linear-to-br ${
            isPurple ? "from-purple-50/40" : "from-amber-50/40"
          } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        {/* Top accent line (very premium touch) */}
        <div
          className={`absolute top-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ${
            isPurple
              ? "bg-linear-to-r from-purple-500 to-purple-300"
              : "bg-linear-to-r from-amber-500 to-amber-300"
          }`}
        />

        <div
          className={`relative w-14 h-14 ${style.iconBg} rounded-lg flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-105`}
        >
          <Icon className={`text-xl ${style.iconColor}`} />
        </div>

        {/* Title */}
        <h3 className="relative text-lg font-semibold text-gray-900 mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="relative text-gray-600 text-sm leading-relaxed mb-6">
          {desc}
        </p>

        {/* Link */}
        <Link
          to={lead}
          className={`relative z-10 inline-flex items-center gap-2 text-sm font-medium ${style.linkColor}`}
        >
          <span>Learn more</span>

          {/* Arrow motion (clean + intentional) */}
          <FaArrowRight className="text-xs transition-all duration-300 group-hover:translate-x-1" />
        </Link>

        {/* Bottom glow (depth, not noise) */}
        <div
          className={`absolute z-0 inset-x-0 bottom-0 h-0 group-hover:h-20 transition-all duration-500 ${
            isPurple ? "bg-purple-500/5" : "bg-amber-500/5"
          }`}
        />
      </div>

   
    );
  };

  return (
    <div id="services" className="scroll-mt-24 bg-gray-50">
      <section className="max-w-7xl mx-auto px-6 sm:px-12 py-24">
        {/* Header Section */}
        <div className="text-center mb-20">
          <Topicbg color="purple" topic="What We Do" />

          <Headings black="Our Services" />

          <div className="max-w-2xl mx-auto">
            <Subheading description="End-to-end digital and creative solutions tailored to your unique business needs." />
          </div>
        </div>

        {/* Digital Solutions Section */}
        <div className="mb-24 ">
          <div className="mb-10 ">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-3">
                <div className="w-15 h-15 bg-linear-to-br from-purple-100 to-purple-50 rounded-xl flex items-center justify-center">
                  <LuLaptopMinimalCheck className="text-purple-600 text-3xl" />
                </div>

                <Link to={services.digital.lead}>
                  <h3 className="text-2xl font-semibold text-gray-800 hover:text-purple-600 transition">
                    {services.digital.title}
                  </h3>
                </Link>
              </div>

              <Link
                to={services.digital.lead}
                className="text-sm font-medium text-purple-600 flex items-center gap-1 hover:gap-2 transition-all"
              >
                View all
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
            <p className="text-gray-600 text-md max-w-2xl ml-18">
              {services.digital.intro}
            </p>
            {/* <div className="w-1/4 h-0.5 bg-linear-to-r from-purple-500 to-purple-100 rounded-xl mt-3 ml-18" /> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.digital.items.map((service, index) => (
              <ServiceCard key={`digital-${index}`} {...service} />
            ))}
          </div>
        </div>

        {/*  <div className="w-full h-0.5 bg-linear-to-r from-gray-100 via-gray-300 to-gray-100 rounded-xl my-9 ml-18 mx-auto flex items-center" />  */}

        {/* Creative Services Section */}
        <div>
          <div className="mb-10">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-3">
                <div className="w-15 h-15 bg-linear-to-br from-amber-100 to-amber-50 rounded-xl flex items-center justify-center">
                  <LuPalette className="text-amber-600 text-3xl" />
                </div>

                <Link to={services.creative.lead}>
                  <h3 className="text-2xl font-semibold text-gray-800 hover:text-amber-600 transition">
                    {services.creative.title}
                  </h3>
                </Link>
              </div>

              <Link
                to={services.creative.lead}
                className="text-sm font-medium text-amber-600 flex items-center gap-1 hover:gap-2 transition-all"
              >
                View all
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
            <p className="text-gray-600 text-md max-w-2xl ml-18">
              {services.creative.intro}
            </p>
            {/* <div className="w-1/4 h-0.5 bg-linear-to-r from-amber-500 to-amber-100 rounded-xl mt-3 ml-18" /> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.creative.items.map((service, index) => (
              <ServiceCard key={`creative-${index}`} {...service} />
            ))}
          </div>
        </div>
        <div className="mt-20"></div>
      </section>
    </div>
  );
};

export default ServiceItems;
