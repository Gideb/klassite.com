import { memo, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaExternalLinkAlt,
  FaGithub,

  FaTimes,
  FaArrowRight,
  FaStar,
  FaHeart,
} from "react-icons/fa";

import project1 from "../assets/images/portfolio/klass.png";
import project2 from "../assets/images/portfolio/klass.png";
import project3 from "../assets/images/portfolio/klass.png";
import project4 from "../assets/images/portfolio/klass.png";
import project5 from "../assets/images/portfolio/klass.png";
import project6 from "../assets/images/portfolio/klass.png";
import project7 from "../assets/images/portfolio/klass.png";
import project8 from "../assets/images/portfolio/klass.png";
import project9 from "../assets/images/portfolio/klass.png";
import Topicbg from "./ui/Topicbg";
import Headings from "./ui/Headings";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter categories
  const filters = [
    { id: "all", label: "All Projects", count: 12 },
    { id: "web", label: "Web Development", count: 5 },
    { id: "mobile", label: "Mobile Apps", count: 3 },
    { id: "design", label: "UI/UX Design", count: 4 },
    { id: "branding", label: "Branding", count: 2 },
    { id: "ecommerce", label: "E-Commerce", count: 3 },
  ];

  // Portfolio Projects Data
  const projects = [
    {
      id: 1,
      title: "Luxury Fashion E-Commerce Platform",
      category: "ecommerce",
      tags: ["React", "Node.js", "Stripe", "Tailwind"],
      image: project1,
      client: "FashionHub",
      year: "2024",
      description:
        "A premium e-commerce platform for a luxury fashion brand featuring virtual try-on and personalized recommendations.",
      longDescription: "Full project details...",
      features: [
        "Virtual try-on using AR technology",
        "AI-powered product recommendations",
        "Secure payment gateway integration",
        "Real-time inventory management",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      images: [project1, project2, project3],
      testimonial: {
        quote:
          "Klass Koncepts transformed our online presence. Sales increased by 150% in the first quarter!",
        author: "Sarah Johnson",
        role: "CEO, FashionHub",
      },
      featured: true,
    },
    {
      id: 2,
      title: "Health & Fitness Mobile App",
      category: "mobile",
      tags: ["React Native", "Firebase", "Redux"],
      image: project2,
      client: "FitLife",
      year: "2024",
      description:
        "A comprehensive fitness app with workout plans, nutrition tracking, and social features.",
      longDescription: "Full project details...",
      features: [
        "Personalized workout plans",
        "Nutrition tracking",
        "Social community features",
        "Real-time progress tracking",
      ],
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      images: [project2, project3, project4],
      testimonial: {
        quote:
          "The app has 100K+ downloads and 4.8 stars on the App Store. Amazing work!",
        author: "Mike Chen",
        role: "Founder, FitLife",
      },
      featured: true,
    },
    {
      id: 3,
      title: "Banking Dashboard UI/UX Redesign",
      category: "design",
      tags: ["Figma", "UI/UX", "Prototyping"],
      image: project3,
      client: "Nexus Bank",
      year: "2023",
      description:
        "Complete redesign of a banking dashboard improving user experience and accessibility.",
      features: [
        "User research and testing",
        "Interactive prototypes",
        "Accessibility compliance",
        "Design system creation",
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
      liveUrl: "https://example.com",
      images: [project3, project4, project5],
      featured: false,
    },
    {
      id: 4,
      title: "Restaurant Management System",
      category: "web",
      tags: ["Vue.js", "Laravel", "MySQL"],
      image: project4,
      client: "Gourmet Delight",
      year: "2023",
      description:
        "Comprehensive management system for restaurant chains with online ordering and table management.",
      features: [
        "Online ordering system",
        "Table reservation",
        "Inventory management",
        "Staff scheduling",
      ],
      technologies: ["Vue.js", "Laravel", "MySQL", "Tailwind"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      images: [project4, project5, project6],
      featured: true,
    },
    {
      id: 5,
      title: "Real Estate Platform",
      category: "web",
      tags: ["Next.js", "PostgreSQL", "Mapbox"],
      image: project5,
      client: "DreamHome",
      year: "2024",
      description:
        "Modern real estate platform with virtual tours and AI-powered property matching.",
      features: [
        "3D virtual property tours",
        "AI property recommendations",
        "Interactive maps",
        "Mortgage calculator",
      ],
      technologies: ["Next.js", "PostgreSQL", "Mapbox", "TypeScript"],
      liveUrl: "https://example.com",
      images: [project5, project6, project7],
      featured: false,
    },
    {
      id: 6,
      title: "Corporate Rebranding Package",
      category: "branding",
      tags: ["Branding", "Identity", "Strategy"],
      image: project6,
      client: "TechCorp Inc.",
      year: "2023",
      description:
        "Complete brand identity redesign including logo, guidelines, and marketing materials.",
      features: [
        "Logo design",
        "Brand guidelines",
        "Marketing collateral",
        "Website design",
      ],
      technologies: ["Illustrator", "Photoshop", "InDesign"],
      images: [project6, project7, project8],
      featured: true,
    },
    {
      id: 7,
      title: "Food Delivery App",
      category: "mobile",
      tags: ["Flutter", "Firebase", "Google Maps"],
      image: project7,
      client: "QuickBite",
      year: "2023",
      description:
        "On-demand food delivery app with real-time tracking and multiple restaurant integration.",
      features: [
        "Real-time order tracking",
        "Multiple restaurant support",
        "Secure payments",
        "Rating and reviews",
      ],
      technologies: ["Flutter", "Firebase", "Google Maps API"],
      liveUrl: "https://example.com",
      images: [project7, project8, project9],
      featured: false,
    },
    {
      id: 8,
      title: "Educational Platform",
      category: "web",
      tags: ["Django", "React", "PostgreSQL"],
      image: project8,
      client: "EduLearn",
      year: "2024",
      description:
        "Online learning platform with video courses, quizzes, and certification.",
      features: [
        "Video streaming",
        "Interactive quizzes",
        "Progress tracking",
        "Certificate generation",
      ],
      technologies: ["Django", "React", "PostgreSQL", "Redis"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      images: [project8, project9, project1],
      featured: true,
    },
    {
      id: 9,
      title: "Travel Booking Website",
      category: "ecommerce",
      tags: ["WordPress", "WooCommerce", "PHP"],
      image: project9,
      client: "Wanderlust Travel",
      year: "2023",
      description:
        "Travel booking platform with package deals, reviews, and itinerary builder.",
      features: [
        "Package booking system",
        "User reviews",
        "Itinerary builder",
        "Payment integration",
      ],
      technologies: ["WordPress", "WooCommerce", "PHP", "MySQL"],
      liveUrl: "https://example.com",
      images: [project9, project1, project2],
      featured: false,
    },
  ];

  // Filter projects based on active filter and search
  const filteredProjects = projects.filter((project) => {
    const matchesFilter =
      activeFilter === "all" || project.category === activeFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesFilter && matchesSearch;
  });

  // Featured projects
  const featuredProjects = projects.filter((p) => p.featured);


  return (
    <>
   

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Topicbg topic="Featured Work" />
            <Headings black="Featured Projects" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredProjects.slice(0, 3).map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-purple-900/90 via-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex gap-2 mb-3">
                        {project.tags.slice(0, 2).map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs bg-white/20 px-2 py-1 rounded-xl"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-linear-to-r from-purple-600 to-fuchsia-600 text-white px-3 py-1 rounded-xl text-sm flex items-center gap-1">
                    <FaStar className="text-yellow-300" />
                    Featured
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {project.client}
                    </span>
                    <span className="text-fuchsia-600 font-semibold flex items-center gap-1 group">
                      View Project
                      <FaArrowRight className="text-xs group-hover:translate-x-1 transition" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeFilter === filter.id
                    ? "bg-linear-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <div className="flex gap-2 mb-2">
                          {project.tags.slice(0, 3).map((tag, i) => (
                            <span
                              key={i}
                              className="text-xs bg-white/20 px-2 py-1 rounded-xl"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <span>{project.client}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-fuchsia-600 transition">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs px-2 py-1 bg-gray-100 rounded-xl text-gray-700">
                        {project.category}
                      </span>
                      <button className="text-fuchsia-600 hover:text-fuchsia-700 font-semibold text-sm">
                        View Details →
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-gray-400">
                No projects found matching your criteria
              </p>
              <button
                onClick={() => {
                  setActiveFilter("all");
                  setSearchQuery("");
                }}
                className="mt-4 text-fuchsia-600 font-semibold"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={selectedProject.images[0]}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-white/40 transition"
                >
                  <FaTimes />
                </button>
                <div className="absolute bottom-6 left-6 text-white">
                  <h2 className="text-3xl font-bold mb-2">
                    {selectedProject.title}
                  </h2>
                  <div className="flex items-center gap-4">
                    <span className="text-sm">{selectedProject.client}</span>
                    <span>•</span>
                    <span className="text-sm">{selectedProject.year}</span>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Project Overview
                    </h3>
                    <p className="text-gray-700 mb-6">
                      {selectedProject.longDescription ||
                        selectedProject.description}
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Key Features
                    </h3>
                    <ul className="grid grid-cols-2 gap-3 mb-6">
                      {selectedProject.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-gray-700"
                        >
                          <span className="w-1.5 h-1.5 bg-linear-to-r from-purple-600 to-fuchsia-600 rounded-xl"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {selectedProject.testimonial && (
                      <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                        <p className="text-gray-700 italic mb-4">
                          "{selectedProject.testimonial.quote}"
                        </p>
                        <div>
                          <p className="font-semibold text-gray-900">
                            {selectedProject.testimonial.author}
                          </p>
                          <p className="text-sm text-gray-500">
                            {selectedProject.testimonial.role}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Project Gallery */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Project Gallery
                    </h3>
                    <div className="grid grid-cols-3 gap-4">
                      {selectedProject.images.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt={`${selectedProject.title} ${index + 1}`}
                          className="rounded-lg object-cover h-24 w-full"
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-xl text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Project Links
                    </h3>
                    <div className="space-y-3 mb-6">
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-fuchsia-600 hover:text-fuchsia-700"
                        >
                          <FaExternalLinkAlt />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {selectedProject.githubUrl && (
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
                        >
                          <FaGithub />
                          <span>View Source Code</span>
                        </a>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-linear-to-r from-purple-100 to-fuchsia-100 text-fuchsia-700 rounded-xl text-sm"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <button className="w-full mt-8 bg-linear-to-r from-purple-600 to-fuchsia-600 text-white font-semibold py-3 rounded-xl hover:shadow-lg transition">
                      <Link to="/contact">Discuss Similar Project</Link>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-purple-900 to-fuchsia-900">
        <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            Let's create something amazing together
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-purple-900 px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            >
              Get in Touch
              <FaArrowRight className="group-hover:translate-x-1.5 transition" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default memo(PortfolioSection);
