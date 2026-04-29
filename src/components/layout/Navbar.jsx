import logo from "../../assets/images/logo.png";
import { useEffect, useState } from "react";
import { FaPen, FaServicestack } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";
import { IoHomeOutline } from "react-icons/io5";
import { PiNewspaperThin } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [openMobileSub, setOpenMobileSub] = useState(null);

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
    {
      name: "Services",
      path: "/services",
      icon: FaServicestack,
      dropdown: [
        {
          name: "Digital Solutions",
          path: "/services/digital-solutions",
          dropdown: [
            {
              name: "Mobile Apps",
              path: "/services/mobile-apps",
            },
            {
              name: "Web Development",
              path: "/services/web-development",
            },
            {
              name: "UIUX Design",
              path: "/services/ui-ux",
            },
          ],
        },
        {
          name: "Creative Services",
          path: "/services/creative-services",
          dropdown: [
            {
              name: "Brand Experience",
              path: "/services/brand-experience",
            },
            {
              name: "Content Creation",
              path: "/services/content-creation",
            },
            {
              name: "Graphics Design",
              path: "/services/graphic-design",
            },
          ],
        },
      ],
    },
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
              <div
                key={link.name}
                className="relative py-2"
                onMouseEnter={() => setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={link.path}
                  className="flex items-center gap-1 font-medium text-black/90 hover:text-purple-700"
                >
                  {link.name}

                  {link.dropdown && (
                    <FaChevronDown
                      className={`duration-300 text-xs opacity-70 group-hover:opacity-100 transition ${
                        openDropdown === link.name ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                {link.dropdown && openDropdown === link.name && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-lg py-2">
                    {link.dropdown.map((item) => (
                      <div
                        key={item.name}
                        className="relative group"
                        onMouseEnter={() => setOpenSubDropdown(item.name)}
                        onMouseLeave={() => setOpenSubDropdown(null)}
                      >
                        <Link
                          to={item.path}
                          className="flex justify-between items-center px-4 py-2 text-sm hover:bg-purple-100"
                        >
                          {item.name}

                          {item.dropdown && (
                            <FaChevronDown className="transition-all duration-300 text-xs rotate-90 group-hover:-rotate-90 text-gray-600 " />
                          )}
                        </Link>

                        {/* SECOND LEVEL DROPDOWN */}
                        {item.dropdown && openSubDropdown === item.name && (
                          <div className="absolute top-0 left-full w-56 bg-white shadow-lg rounded-lg py-2">
                            <div className="w-2 absolute -left-2 top-0 bottom-0"></div>
                            {item.dropdown.map((sub) => (
                              <Link
                                key={sub.name}
                                to={sub.path}
                                className="block px-4 py-2 text-sm hover:bg-purple-100"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
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
              <div key={index}>
                <div
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === link.name ? null : link.name,
                    )
                  }
                  className="flex items-center justify-between cursor-pointer"
                >
                  <div className="flex gap-3">
                    <link.icon className="text-xl" />
                    {link.name}
                  </div>

                  {link.dropdown && (
                    <FaChevronDown
                      className={`text-xs transition-transform duration-300 ${
                        openDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {/* Dropdown */}
                {link.dropdown && openDropdown === link.name && (
                  <div className="ml-6 mt-2 flex flex-col gap-2">
                    {link.dropdown.map((item) => (
                      <div key={item.name}>
                        {/* If item has children → toggle */}
                        {item.dropdown ? (
                          <>
                            <div
                              onClick={() =>
                                setOpenMobileSub(
                                  openMobileSub === item.name
                                    ? null
                                    : item.name,
                                )
                              }
                              className="flex justify-between items-center cursor-pointer text-sm text-gray-700"
                            >
                              {item.name}
                              <FaChevronDown
                                className={`text-xs transition-transform ${
                                  openMobileSub === item.name
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </div>

                            {/* SECOND LEVEL */}
                            {openMobileSub === item.name && (
                              <div className="ml-4 mt-2 flex flex-col gap-2">
                                {item.dropdown.map((sub) => (
                                  <Link
                                    key={sub.name}
                                    to={sub.path}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-sm text-gray-600"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </>
                        ) : (
                          /* Normal link (no children) */
                          <Link
                            to={item.path}
                            onClick={() => setMenuOpen(false)}
                            className="text-sm text-gray-600"
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
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
