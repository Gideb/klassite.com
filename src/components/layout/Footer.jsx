import React from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const navLinks = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Services", path: "services" },
    { name: "Portfolio", path: "portfolio" },
    { name: "Contact", path: "contact" },
    { name: "Pricing", path: "pricing" },
    { name: "FAQs", path: "faqs" },
    { name: "Careers", path: "careers" },
  ];

  const services = [
    "Website Development",
    "Web Design",
    "SEO Optimization",
    "Graphic Design",
    "Video Editing",
    "Photography & Videography",
    "CCTV Installation",
  ];

  const socialLinks = [
    { icon: FaTwitter, href: "https://x.com/1gideb", label: "Twitter" },
    {
      icon: FaInstagram,
      href: "https://instagram.com/1gideb",
      label: "Instagram",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/gilbert-debrah-836aa61a3/",
      label: "LinkedIn",
    },
    { icon: FaGithub, href: "https://github.com/Gideb", label: "GitHub" },
    {
      icon: FaYoutube,
      href: "https://youtube.com/gidebdesigns",
      label: "YouTube",
    },
  ];

  return (
    <footer id="footer" className="scroll-mt-24">
      <section className="min-h-90 text-white bg-linear-to-b from-black via-zinc-900 to-black border-t border-purple-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="space-y-4 text-center sm:text-left">
              <h2 className="text-2xl font-bold">
                <span className="bg-clip-text text-transparent bg-linear-to-br from-purple-600 to-fuchsia-700">
                  Klass
                </span>{" "}
                Koncepts
              </h2>
              <p className="text-sm text-gray-400 lg:max-w-60 mx-auto sm:mx-0 ">
                Digital Solutions company delivering modern web technologies and
                creative experiences for modern brands.
              </p>

              {/* Social Links */}
              <div className="flex justify-center sm:justify-start gap-2 pt-2">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="p-2 bg-white/10 rounded-xl hover:bg-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-600/30 inline-block"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 text-center sm:text-left">
              <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider">
                Quick Links
              </h3>
              <div className="space-y-2 flex flex-col text-gray-400 text-sm">
                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path === "home" ? "/" : `/${item.path}`}
                    className="hover:text-purple-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4 text-center sm:text-left">
              <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider">
                Services
              </h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {services.map((service, index) => (
                  <li
                    key={index}
                    className="hover:text-gray-500 transition-colors"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4 text-center sm:text-left">
              <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider">
                Contact
              </h3>
              <div className="space-y-3 text-sm text-gray-400">
                <p className="flex items-center justify-center sm:justify-start gap-2">
                  <FaEnvelope className="text-purple-500" />
                  <a
                    href="mailto:hello@klasskoncepts.com"
                    className="hover:text-purple-500 transition-colors break-all"
                  >
                    hello@klasskoncepts.com
                  </a>
                </p>
                <p className="flex items-center justify-center sm:justify-start gap-2">
                  <FaPhone className="text-purple-500" />
                  <a
                    href="tel:+233552649953"
                    className="hover:text-purple-500 transition-colors"
                  >
                    +233 55 264 9953
                  </a>
                </p>
                <p className="flex items-center justify-center sm:justify-start gap-2">
                  <FaMapMarkerAlt className="" />
                  <span>
                    Accra, Ghana{" "}
                    <span className="text-xs text-purple-500">GH</span>
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter Section - Centered on all screens */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
              Ready to Build Something Exceptional?
            </h2>

            <div className="max-w-3xl mx-auto bg-purple-600/10 p-6 sm:p-8 rounded-2xl backdrop-blur-sm">
              <div className="flex flex-col items-center gap-4">
                <h3 className="text-base sm:text-lg font-semibold">
                  Stay Updated With Our Latest Projects
                </h3>
                <div className="flex flex-col sm:flex-row w-full max-w-md gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg sm:rounded-l-lg sm:rounded-r-none bg-white/10 backdrop-blur-md text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-purple-500 border border-white/20"
                  />
                  <button className="px-6 py-3 bg-linear-to-r from-purple-600 to-fuchsia-600 rounded-lg sm:rounded-r-lg sm:rounded-l-none font-semibold hover:shadow-lg hover:shadow-purple-600/30 transition-all duration-300 hover:scale-105">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-gray-500">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-white/10 my-8" />

          {/* Bottom Bar - Centered on all screens */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm text-center">
            <p>
              &copy; {new Date().getFullYear()} Klass Koncepts.
              <span className="block sm:inline sm:ml-1">
                All rights reserved.
              </span>
            </p>

            {/* Legal Links */}
            <div className="flex gap-4 text-xs">
             
              <Link
                to="/privacy"
                className="hover:text-purple-500 transition-colors"
              >
                Privacy Policy
              </Link>
              <span>•</span>
              <Link
                to="/terms"
                className="hover:text-purple-500 transition-colors"
              >
                Terms of Use
              </Link>
            </div>

            <p className="flex items-center gap-1">
              Powered by{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-br from-purple-600 to-fuchsia-700 font-semibold">
                Klass Koncepts
              </span>
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
