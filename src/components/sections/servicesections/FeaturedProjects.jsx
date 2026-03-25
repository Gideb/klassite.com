import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaEye, FaExternalLinkAlt, FaStar } from "react-icons/fa";
import { HiOutlineRocketLaunch, HiOutlinePaintBrush } from "react-icons/hi2";
import { LuCodeXml } from "react-icons/lu";
import poster from "../../../assets/images/poster.jpg";
import Topicbg from "../../ui/Topicbg";
import Headings from "../../ui/Headings";
import Subheading from "../../ui/Subheading";

const FeaturedProjects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "poster Realty Website",
      description:
        "A modern real estate platform designed to showcase listings and drive qualified inquiries.",
      category: "Web Development",
      serviceMatch: "Website Development",
      icon: LuCodeXml,
      image: poster,
      tags: ["Real Estate", "Property Listings", "Lead Generation"],
      results: "+150% inquiries",
    },
    {
      id: 2,
      name: "Luxe Beauty Brand Identity",
      description:
        "Complete brand transformation with sophisticated visual identity and premium packaging design.",
      category: "Branding",
      serviceMatch: "Branding",
      icon: HiOutlinePaintBrush,
      image: poster,
      tags: ["Brand Identity", "Packaging", "Visual Strategy"],
      results: "40% brand recognition increase",
    },
    {
      id: 3,
      name: "Nexus Financial Dashboard",
      description:
        "Intuitive web application that simplifies complex financial data for enterprise clients.",
      category: "Web Application",
      serviceMatch: "Web Applications",
      icon: HiOutlineRocketLaunch,
      image: poster,
      tags: ["FinTech", "Dashboard", "Data Visualization"],
      results: "80% faster reporting",
    },
  ];

  const getCategoryColor = (serviceMatch) => {
    const colors = {
      "Website Development": "purple",
      "Web Applications": "purple",
      Branding: "amber",
    };
    return colors[serviceMatch] || "purple";
  };

  const ProjectCard = ({ project }) => {
    const isPurple = getCategoryColor(project.serviceMatch) === "purple";
// eslint-disable-next-line no-unused-vars
    const isHovered = hoveredProject === project.id;

    return (
      <div
        className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-500 ease-out"
        onMouseEnter={() => setHoveredProject(project.id)}
        onMouseLeave={() => setHoveredProject(null)}
      >
        {/* Image Container */}
        <div className="relative h-64 md:h-72 overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* View Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <Link
              to={`/portfolio/${project.id}`}
              className={`transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500 ${isPurple ? "bg-purple-600 hover:bg-purple-700" : "bg-amber-600 hover:bg-amber-700"} text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg`}
            >
              <FaEye />
              View Project
            </Link>
          </div>

         
          <div className="absolute top-4 left-4">
            <div
              className={`flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-md`}
            >
              <project.icon className={`text-sm ${isPurple ? "text-purple-600" : "text-amber-600"}`}
              />
              <span className="text-xs font-semibold text-gray-700">
                {project.serviceMatch}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category */}
          <div className="mb-3">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${isPurple ? "bg-purple-100 text-purple-700" : "bg-amber-100 text-amber-700"}`}
            >
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {project.name}
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            {project.description}
          </p>

          {/* Results / Metrics */}
          {project.results && (
            <div
              className={`text-xs font-semibold mb-3 ${isPurple ? "text-purple-600" : "text-amber-600"}`}
            >
              📈 {project.results}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* View Link */}
          <Link
            to={`/portfolio/${project.id}`}
            className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group/link
              ${isPurple ? "text-purple-600 hover:text-purple-700" : "text-amber-600 hover:text-amber-700"}`}
          >
            <span>View Project</span>
            <FaArrowRight className="text-xs transition-transform duration-300 group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-linear-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <Topicbg topic="Selected Work" />

          <Headings black="Featured " colored="Projects" />

          <Subheading
            description="A glimpse of what we've created for our clients. Each project
            represents our commitment to excellence."
          />

        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      
        <div className="text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-3 bg-linear-to-br from-purple-600 to-fuchsia-700 hover:from-purple-700 hover:to-fuchsia-800 text-white px-8 py-3 rounded-full font-semibold text-md shadow hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 group"
          >
            <span>View Full Portfolio</span>
            <FaExternalLinkAlt className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <p className="text-gray-500 text-sm mt-4">
            Explore 20+ more projects across different industries
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
