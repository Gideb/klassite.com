import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaRegClock,
  FaShieldAlt,
  FaAward,
  FaGlobe,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const [email, setEmail] = useState("");

  const navLinks = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Services", path: "services" },
    { name: "Work", path: "portfolio" },
    { name: "Support", path: "faqs" },
    { name: "Careers", path: "careers" },
    { name: "Contact", path: "contact" },
  ];

  const services = [
    "Digital Transformation",
    "Enterprise Web Solutions",
    "AI & Machine Learning",
    "Cloud Architecture",
    "UX/UI Strategy",
    "Brand Experience",
    "Cybersecurity",
    "Data Analytics",
  ];

  const socialLinks = [
    {
      icon: FaXTwitter,
      href: "https://x.com/1gideb",
      label: "Twitter",
      color: "hover:bg-[#001100]",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/1gideb",
      label: "Instagram",
      color: "hover:bg-[#E1306C]",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/gilbert-debrah-836aa61a3/",
      label: "LinkedIn",
      color: "hover:bg-[#0A66C2]",
    },
    {
      icon: FaGithub,
      href: "https://github.com/Gideb",
      label: "GitHub",
      color: "hover:bg-[#333]",
    },
    {
      icon: FaYoutube,
      href: "https://youtube.com/gidebdesigns",
      label: "YouTube",
      color: "hover:bg-[#FF0000]",
    },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <footer className="relative bg-linear-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Premium Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-purple-500 to-transparent" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-xl blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-fuchsia-600/10 rounded-xl blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Column - Large */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold bg-linear-to-r from-purple-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                Klass Koncepts
              </h2>
              <p className="text-gray-200 leading-relaxed text-sm max-w-md">
                Crafting digital excellence through innovation, strategy, and
                uncompromising quality. We transform ambitious ideas into
                extraordinary digital experiences.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <FaAward className="text-purple-500" />
                <span>Global Award Winner</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <FaShieldAlt className="text-purple-500" />
                <span>ISO 27001 Certified</span>
              </div>
            </div>

            {/* Social Links - Enhanced */}
            <div className="flex gap-3 pt-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`group relative p-3 bg-white/15 rounded-xl ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/20`}
                  >
                    <Icon className="w-4 h-4 transition-colors group-hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-semibold text-gray-200 uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path === "home" ? "/" : `/${item.path}`}
                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm group flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-purple-500 transition-all duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold text-gray-200 uppercase tracking-wider">
              Expertise
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to="/services"
                  className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Info */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-4">
              <h3 className="text-xs font-semibold text-gray-200 uppercase tracking-wider">
                Connect
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:gidebdesigns@gmail.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors group"
                >
                  <div className="p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                    <FaEnvelope className="w-4 h-4 text-purple-500" />
                  </div>
                  <span className="text-sm">hello@klasskoncepts.com</span>
                </a>
                <a
                  href="tel:+233552649953"
                  className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors group"
                >
                  <div className="p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                    <FaPhone className="w-4 h-4 text-purple-500" />
                  </div>
                  <span className="text-sm">+233 55 264 9953</span>
                </a>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <FaMapMarkerAlt className="w-4 h-4 text-purple-500" />
                  </div>
                  <span className="text-sm">Accra, Ghana / Global Remote</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <FaRegClock className="w-4 h-4 text-purple-500" />
                  </div>
                  <span className="text-sm">24/7 Global Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section - Premium */}
        <div className="mt-20 mb-12">
          <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-purple-600/20 via-fuchsia-600/20 to-purple-600/20 border border-purple-500/20 p-8 md:p-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern id=%22grid%22 width=%2260%22 height=%2260%22 patternUnits=%22userSpaceOnUse%22%3E%3Cpath d=%22M 60 0 L 0 0 0 60%22 fill=%22none%22 stroke=%22rgba(139, 92, 246, 0.05)%22 stroke-width=%221%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22url(%23grid)%22/%3E%3C/svg%3E')] opacity-20" />

            <div className="relative flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2 bg-linear-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Join the Inner Circle
                </h3>
                <p className="text-gray-400 text-sm max-w-md">
                  Get exclusive insights, early access to case studies, and
                  industry trends.
                </p>
              </div>

              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row w-full md:w-auto gap-3 min-w-[320px]"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="flex-1 px-5 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-purple-500 border border-white/20 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-linear-to-r from-purple-600 to-fuchsia-600 rounded-xl font-semibold text-sm hover:shadow-2xl hover:shadow-purple-600/30 transition-all duration-300 hover:scale-105 whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </form>
            </div>

            <p className="relative text-center text-xs text-gray-500 mt-6">
              By subscribing, you agree to our Privacy Policy. No spam, ever.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} Klass Koncepts. All rights reserved.
              <span className="hidden md:inline"> — </span>
              <br className="md:hidden" />
              Crafting digital excellence worldwide.
            </p>

            <div className="flex gap-6 text-xs">
              <Link
                to="/privacy"
                className="text-gray-500 hover:text-purple-400 transition-colors"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="text-gray-500 hover:text-purple-400 transition-colors"
              >
                Terms
              </Link>
              <Link
                to="/cookies"
                className="text-gray-500 hover:text-purple-400 transition-colors"
              >
                Cookies
              </Link>
              <Link
                to="/accessibility"
                className="text-gray-500 hover:text-purple-400 transition-colors"
              >
                Accessibility
              </Link>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-500">
              <FaGlobe className="text-purple-500" />
              <span>English (Global)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
