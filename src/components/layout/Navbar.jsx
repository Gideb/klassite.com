import logo from "../../assets/images/logo.png";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FiHome, FiBriefcase } from "react-icons/fi";
import { HiOutlineHome, HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const changeHeaderBg = () => {
      setScrolled(window.scrollY >= 50);
    };

    window.addEventListener("scroll", changeHeaderBg);
    return () => window.removeEventListener("scroll", changeHeaderBg);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", path: "/", icon: HiOutlineHome },
    { name: "About", path: "/about", icon: HiOutlineUser },
    { name: "Services", path: "/services", icon: FiBriefcase },
    { name: "Blog", path: "/blog", icon: FiHome },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-10"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 pt-3">
          {/* Logo */}
          <img src={logo} alt="klass koncepts logo" className="w-16" />

          {/* Desktop Links */}
          <div className="space-x-8 hidden md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative font-medium text-black/90 hover:text-purple-700
        after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Button */}

          <Link
            to="/contact"
            className="w-full sm:w-auto group bg-linear-to-r from-purple-600 to-fuchsia-600 text-white px-9 py-3 rounded-full font-semibold text-lg hover:shadow-lg transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 invisible md:visible flex items-center justify-center gap-2"
          >
            Get a Quote
            <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1 cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <span className="w-6 h-0.75 bg-gray-400"></span>
            <span className="w-5 h-0.75 bg-black/50"></span>
            <span className="w-4 h-0.75 bg-black/70"></span>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-linear-to-br from-fuchsia-100 via-purple-100 to-fuchsia-200 z-50 shadow-2xl transform transition-transform duration-400 ease-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex flex-col h-full ">
          {/* Close Button */}
          <button
            className="self-end text-4xl font-semibold cursor-pointer hover:text-purple-600 transition"
            onClick={() => setMenuOpen(false)}
          >
            ×
          </button>

          {/* Links */}
          <div className="mt-10 flex flex-col gap-6 text-lg">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="font-normal text-base text-gray-700 hover:text-fuchsia-600 transition"
              >
                <div className="flex gap-3">
                  <link.icon className="text-xl " />
                  {link.name}
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="bg-linear-to-r from-purple-600 to-fuchsia-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 absolute bottom-20 flex items-center justify-center gap-2"
          >
            Get a Quote
            <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
