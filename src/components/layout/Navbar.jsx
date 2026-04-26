import logo from "../../assets/images/logo.png";
import { useEffect, useState } from "react";
import { FaPen, FaServicestack } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";
import { IoHomeOutline } from "react-icons/io5";
import { PiNewspaperThin } from "react-icons/pi";
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
    { name: "Home", path: "/", icon: IoHomeOutline },
    { name: "About", path: "/about", icon: HiOutlineUser },
    { name: "Services", path: "/services", icon: FaServicestack },
    { name: "Blog", path: "/blog", icon: PiNewspaperThin },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-7" : "bg-transparent py-15"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 pt-3">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="klass koncepts logo" className="w-16" />
          </Link>

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
            className="w-full sm:w-auto group bg-white text-purple-700 hover:text-purple-600 px-9 py-3 rounded-xl font-semibold text-md shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105 focus:outline-none hover:ring-1 focus:ring focus:ring-black focus:ring-offset invisible md:visible flex items-center justify-center gap-2"
          >
            Get a Quote
            <FaPen className="text-sm group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1 cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <span className="w-6 h-0.75 bg-gray-300"></span>
            <span className="w-5 h-0.75 bg-gray-400"></span>
            <span className="w-4 h-0.75 bg-gray-700"></span>
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
            className="self-end text-3xl font-semibold cursor-pointer hover:text-purple-600 transition"
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
                <div className="flex gap-3 hover:translate-x-1.5 transition-all duration-300">
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
            className="text-md shadow-md hover:shadow-xl text-black/80 px-8 py-4 rounded-xl font-semibold  transform transition duration-300 hover:scale-105 focus:outline-none focus:ring focus:ring-black focus:ring-offset absolute bottom-20 flex items-center justify-center gap-2"
          >
            Get a Quote
            <FaPen className="text-sm group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
