import {
  FaSearch,
  FaSitemap,
  FaCode,
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const VerticalProcessSection = () => {
  const processes = [
    {
      title: "Discovery & Strategy",
      icon: FaSearch,
      description:
        "We start by understanding your business, goals, and audience to create a strategic roadmap.",
      details: [
        "In-depth stakeholder interviews",
        "Market and competitor analysis",
        "User persona development",
        "Technical feasibility assessment",
        "Success metrics definition",
      ],
      color: "from-blue-600 to-cyan-500",
      duration: "2-3 weeks",
      deliverable: "Strategy Document & Roadmap",
    },
    {
      title: "Architecture & Design",
      icon: FaSitemap,
      description:
        "We plan the technical foundation and design an intuitive user experience.",
      details: [
        "Information architecture",
        "Wireframing & prototyping",
        "UI/UX design",
        "Technical specification",
        "Database design",
      ],
      color: "from-purple-600 to-pink-500",
      duration: "3-4 weeks",
      deliverable: "Design System & Technical Specs",
    },
    {
      title: "Development & Optimization",
      icon: FaCode,
      description:
        "We build with clean code, optimal performance, and security best practices.",
      details: [
        "Agile development sprints",
        "Performance optimization",
        "Security implementation",
        "Cross-browser testing",
        "Code review & QA",
      ],
      color: "from-orange-600 to-red-500",
      duration: "8-12 weeks",
      deliverable: "Fully Functional Product",
    },
    {
      title: "Launch & Growth Support",
      icon: FaRocket,
      description:
        "We ensure a smooth launch and provide ongoing support for continuous improvement.",
      details: [
        "Deployment strategy",
        "Performance monitoring",
        "Analytics setup",
        "User training",
        "Ongoing optimization",
      ],
      color: "from-green-600 to-emerald-500",
      duration: "Ongoing",
      deliverable: "Live Product & Support",
    },
  ];

  return (
    <section className="py-20 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-fuchsia-600">
              Proven Process
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            A structured approach that eliminates uncertainty and ensures
            predictable success
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-purple-200 via-fuchsia-200 to-purple-200"></div>

          {processes.map((process, index) => {
            const Icon = process.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-start gap-8 mb-12 last:mb-0 ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 lg:left-1/2 w-4 h-4 bg-purple-600 rounded-full transform -translate-x-1/2 mt-6 z-10 border-4 border-white shadow-lg"></div>

                {/* Content Card */}
                <div className={`lg:w-1/2 ${isEven ? "lg:pr-12" : "lg:pl-12"}`}>
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 lg:p-8 ml-16 lg:ml-0 border border-gray-100">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-linear-to-br ${process.color} flex items-center justify-center text-white shadow-lg`}
                      >
                        <Icon className="text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {process.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {process.duration}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-4">{process.description}</p>

                    {/* Details */}
                    <ul className="space-y-2 mb-4">
                      {process.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-500"
                        >
                          <FaCheckCircle
                            className={`text-${process.color.split(" ")[0].replace("from-", "")} mt-0.5 shrink-0`}
                          />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Deliverable */}
                    <div className="bg-purple-50 rounded-lg p-3 text-sm">
                      <span className="font-medium text-purple-700">
                        Deliverable:{" "}
                      </span>
                      <span className="text-gray-600">
                        {process.deliverable}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Empty space for alignment */}
                <div className="lg:w-1/2"></div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-linear-to-r from-purple-600 to-fuchsia-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all group"
          >
            Start Your Project With Confidence
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VerticalProcessSection;
