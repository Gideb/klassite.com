
import {
 
  FaCheckCircle,
  FaUsers,
  
  FaExternalLinkAlt,
  FaServicestack,
 
} from "react-icons/fa";
import {
 
  LuZap,
  LuClock,
  
} from "react-icons/lu";

import { TbBrandReact, TbBrandTailwind, TbBrandNodejs } from "react-icons/tb";

import Button from "../../components/ui/Button";
import Subheading from "../../components/props/Subheading";
import Headings from "../../components/props/Headings";

import AlternatingServiceSection from "../../components/props/AlternatingServiceSection";
import { creativeServices } from "../../data/creativeServices";

import bgimg from "../../assets/images/ipages/homepage/trust.jpg";
import MemoizedCTASection from "../../components/props/CTASection";

const StatCard = ({ value, label, icon: Icon }) => (
  <div className="text-center">
    <div className="flex justify-center mb-3">
      <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
        <Icon className="text-xl" />
      </div>
    </div>
    <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
    <div className="text-sm text-gray-500">{label}</div>
  </div>
);


const CreativeServices = ({ color = "amber" }) => {
  const colorStyles = {
    amber: {
      bg: "bg-amber-100",
      text: "text-amber-700",
      gradientFrom: "from-orange-700",
      gradientTo: "to-amber-700",
      hover: "text-amber-500",
    },
  };

  const selectedColor = colorStyles[color] || colorStyles.amber;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className={`relative overflow-hidden bg-linear-to-br from-amber-50 via-white to-amber-200 pt-32 pb-5`}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div
          className={`absolute top-20 right-10 w-72 h-72 ${selectedColor.bg} rounded-full blur-3xl opacity-20`}
        />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-20" />
        <div className="absolute inset-0 bg-amber-700 " />
        <div
          className="absolute inset-0 bg-center opacity-10"
          style={{ backgroundImage: `url(${bgimg})`, backgroundSize: "cover" }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10 py-20">
          <div className="text-center max-w-3xl mx-auto ">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight pt-10">
              Creative{" "}
              <span
                className={`bg-linear-to-r from-amber-100 to-amber-200  bg-clip-text text-transparent`}
              >
                Services
              </span>
            </h1>
            <div className="py-5">
              <Subheading
                isLight
                description="We design and build scalable digital products — from
              high-performing websites to complex web applications that drive
              real business growth."
              />
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                link="/contact"
                text="Start a Project"
                icon={FaExternalLinkAlt}
                variant="transparent"
              />
              <Button
                link="/contact"
                text="All Services"
                icon={FaServicestack}
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-16 py-8 ">
        <StatCard
          value="120+"
          label="Projects Delivered"
          icon={FaCheckCircle}
        />
        <StatCard value="24/7" label="Support" icon={LuClock} />
        <StatCard value="97%" label="Client Satisfaction" icon={FaUsers} />
        <StatCard value="2x" label="Faster Delivery" icon={LuZap} />
      </div>

      {/* Alternating Sub-Services Sections */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Headings black="Our Creative Services" />
            <div className="max-w-2xl mx-auto">
              <Subheading
                description=" Comprehensive solutions tailored to your business needs — each
              service designed with precision and care."
              />
            </div>
          </div>

          {/* Alternating Sections */}
          <div className="space-y-32">
            {creativeServices.map((service, index) => (
              <AlternatingServiceSection
                key={index}
                {...service}
                color={color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Banner */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                Built with Modern Tech Stack
              </h3>
              <p className="text-gray-500 text-sm">
                Cutting-edge tools for future-proof solutions
              </p>
            </div>
            <div className="flex flex-wrap gap-8 items-center">
              <TbBrandReact
                className={`text-3xl text-gray-400 hover:${selectedColor.hover} transition-colors`}
              />
              <TbBrandTailwind
                className={`text-3xl text-gray-400 hover:${selectedColor.hover} transition-colors`}
              />
              <TbBrandNodejs
                className={`text-3xl text-gray-400 hover:${selectedColor.hover} transition-colors`}
              />
              <span className="text-gray-300 text-xl">+</span>
              <span className="text-sm font-medium text-gray-500">
                More technologies
              </span>
            </div>
          </div>
        </div>
      </section>

      <MemoizedCTASection />
    </div>
  );
};

export default CreativeServices;
