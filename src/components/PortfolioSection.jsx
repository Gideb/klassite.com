import React, { useState } from "react";
import placeholder from "../assets/images/hero.png";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "TechCorp Website Redesign",
      category: "Web Development",
      description:
        "Modern corporate website with CMS integration and SEO optimization.",
      image: placeholder,
      tags: ["React", "Node.js", "Tailwind"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      featured: true,
    },
    {
      id: 2,
      title: "EcoShop Mobile App",
      category: "Mobile Development",
      description:
        "Sustainable shopping platform with real-time inventory and payments.",
      image: placeholder,
      tags: ["React Native", "Firebase", "Stripe"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      featured: false,
    },
    {
      id: 3,
      title: "Creative Agency Portfolio",
      category: "Web Design",
      description:
        "Immersive portfolio site with smooth animations and case studies.",
      image: placeholder,
      tags: ["Figma", "GSAP", "Next.js"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      featured: true,
    },
    {
      id: 4,
      title: "Fintech Dashboard",
      category: "Web Application",
      description: "Analytics dashboard with real-time data visualization.",
      image: placeholder,
      tags: ["D3.js", "Express", "MongoDB"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      featured: false,
    },
    {
      id: 5,
      title: "Restaurant Brand Identity",
      category: "Branding",
      description:
        "Complete brand overhaul including logo, menus, and digital presence.",
      image: placeholder,
      tags: ["Illustrator", "Photoshop", "Print"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      featured: false,
    },
    {
      id: 6,
      title: "Healthcare Platform",
      category: "Full Stack",
      description:
        "Telemedicine platform with video consultations and EHR integration.",
      image: placeholder,
      tags: ["WebRTC", "PostgreSQL", "Redis"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
      featured: true,
    },
  ];

  // Category filter state
  const categories = [
    "All",
    ...new Set(portfolioItems.map((item) => item.category)),
  ];
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(portfolioItems);

  // Filter function
  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(
        portfolioItems.filter((item) => item.category === category),
      );
    }
  };

  const PortfolioCard = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className="group relative bg-white rounded-xl shadow hover:shadow-xl cursor-pointer text-left border-2 border-gray-200 overflow-hidden hover:-translate-y-2 transition-all duration-500"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Rolling Fuchsia Overlay - Your creative effect */}
        <div
          className={`absolute inset-0 bg-linear-to-br from-purple-600/10 to-fuchsia-500/10 transition-transform duration-700 ease-out z-10 ${
            isHovered ? "translate-y-0" : "-translate-y-full"
          }`}
        ></div>

        {/* Image Container */}
        <div className="relative overflow-hidden h-48">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Category Badge - Absolute positioned */}
          <div className="absolute top-4 left-4 z-20">
            <span className="inline-flex items-center bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
              {item.category}
            </span>
          </div>

          {/* Featured Badge -  */}
          {item.featured && (
            <div className="absolute top-4 right-4 z-20">
              <span className="inline-flex items-center bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                ⭐ Featured
              </span>
            </div>
          )}

          {/* Hover Overlay Links */}
          <div
            className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-4 transition-opacity duration-300 z-20 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            {item.liveLink && (
              <a
                href={item.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-600 p-3 rounded-full hover:scale-110 transition-transform duration-300 hover:bg-purple-600 hover:text-white"
                onClick={(e) => e.stopPropagation()}
              >
                <FaExternalLinkAlt />
              </a>
            )}
            {item.githubLink && (
              <a
                href={item.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-800 p-3 rounded-full hover:scale-110 transition-transform duration-300 hover:bg-gray-800 hover:text-white"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 relative z-10 bg-white">
          <h5 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
            {item.title}
          </h5>

          <p className="text-gray-500 text-sm mb-4">{item.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="portfolio" className="scroll-mt-24">
      <section className="max-w-7xl mx-auto min-h-screen px-6 sm:px-12 py-24 text-center">
        {/* Header */}
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium w-fit mx-auto">
          <span className="w-2 h-2 bg-fuchsia-600 rounded-full animate-pulse"></span>
          Portfolio
        </div>

        <h2 className="text-3xl sm:text-4xl font-normal mt-4 text-black">
          Our{" "}
          <span className="bg-clip-text text-transparent bg-linear-to-br from-purple-700 to-fuchsia-500">
            Work
          </span>
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
          A selection of products we've delivered with passion and precision.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => filterItems(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-purple-600 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-purple-100 hover:text-purple-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {filteredItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>

        {/* Show message if no items */}
        {filteredItems.length === 0 && (
          <div className="mt-20 py-20 text-center bg-gray-50 rounded-2xl">
            <p className="text-gray-500 text-lg">
              No projects in this category yet.
            </p>
          </div>
        )}

        {/* View All Button */}
        <div className="mt-16">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-linear-to-r from-purple-600 to-fuchsia-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 group"
          >
            View All Projects
            <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PortfolioSection;
