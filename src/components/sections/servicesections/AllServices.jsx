import {
  FaGlobe,
  FaCode,
  FaLayerGroup,
  FaSearch,
  FaPalette,
  FaVideo,
  FaCamera,
  FaShareAlt,
  FaShieldAlt,
  FaLightbulb,
  FaAward,
  FaChartLine,
  FaBolt,
  FaMobile,
} from "react-icons/fa";

const AllServices = () => {
  const services = {
    digital: [
      {
        icon: FaCode,
        title: "Website Development",
        desc: "Custom, responsive websites built with modern tech stacks.",
        color: "purple",
      },
      {
        icon: FaLayerGroup,
        title: "Web Design",
        desc: "Beautiful UI/UX designs that convert visitors to clients.",
        color: "purple",
      },
      {
        icon: FaMobile,
        title: "Mobile Development",
        desc: "Native and cross-platform apps for iOS and Android.",
        color: "purple",
      },
      {
        icon: FaSearch,
        title: "SEO Optimization",
        desc: "Rank higher and drive organic traffic to your business.",
        color: "purple",
      },
    ],
    creative: [
      {
        icon: FaPalette,
        title: "Graphic Design",
        desc: "Brand identity, logos, and marketing materials.",
        color: "amber",
      },
      {
        icon: FaVideo,
        title: "Video Editing",
        desc: "Professional video production and post-processing.",
        color: "amber",
      },
      {
        icon: FaCamera,
        title: "Photography & Videography",
        desc: "High-quality visual content for your brand.",
        color: "amber",
      },
      {
        icon: FaShareAlt,
        title: "Social Media Management",
        desc: "Grow your audience with strategic content.",
        color: "amber",
      },
    ],
    security: [
      {
        icon: FaShieldAlt,
        title: "CCTV Installation",
        desc: "Professional surveillance systems for homes and businesses.",
        color: "purple",
      },
    ],
  };

  const whyUs = [
    {
      icon: FaAward,
      title: "Professional & Reliable",
      desc: "We deliver on our promises. Every project is executed with precision, professionalism, and on-time delivery you can count on.",
    },
    {
      icon: FaLightbulb,
      title: "Creative & Strategic Approach",
      desc: "We blend bold creativity with data-driven strategy to produce digital experiences that stand out and perform.",
    },
    {
      icon: FaChartLine,
      title: "Affordable & Scalable Solutions",
      desc: "Premium quality without the premium price tag. Our solutions grow with your business at every stage.",
    },
    {
      icon: FaBolt,
      title: "End-to-End Service Delivery",
      desc: "From concept to launch and beyond. We handle the full lifecycle so you can focus on what matters most.",
    },
  ];

  // eslint-disable-next-line no-unused-vars
  const ServiceCard = ({ icon: Icon, title, desc, color }) => {
    const borderColor = color === "purple" ? "#9333ea" : "#d97706"; // purple-600 : amber-600
    const bgColor = color === "purple" ? "#f3e8ff" : "#fffbeb"; // purple-100 : amber-100

    return (
      <div
        className="group bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer text-left border-2 border-gray-300 border-l-3 transform transition duration-300 ease-in-out hover:translate-x-3 hover:border-l-8"
        style={{ borderLeftColor: borderColor }}
      >
        <div
          className="w-12 h-12 flex items-center justify-center rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300"
          style={{ backgroundColor: bgColor, color: borderColor }}
        >
          <Icon className="text-xl" aria-hidden="true" />
        </div>
        <h4 className="font-semibold text-lg mb-2">{title}</h4>
        <p className="text-gray-500 text-sm">{desc}</p>
      </div>
    );
  };

  // eslint-disable-next-line no-unused-vars
  const WhyUsCard = ({ icon: Icon, title, desc }) => (
    <div className="bg-white px-8 py-10 rounded-xl shadow hover:shadow-xl cursor-pointer border-2 border-gray-200 border-t-5 border-t-amber-600 transform transition duration-300 ease-in-out hover:-translate-y-3 hover:border-t-3">
      <div className="text-white bg-linear-to-br from-purple-600 to-fuchsia-600 w-16 h-16 flex items-center justify-center rounded-lg mb-4 mx-auto shadow-lg">
        <Icon className="text-3xl" aria-hidden="true" />
      </div>
      <h4 className="font-bold text-xl mb-4 text-black">{title}</h4>
      <p className="text-gray-500 text-md leading-relaxed">{desc}</p>
    </div>
  );

  return (
    <div id="services" className="scroll-mt-24">
      <section className="max-w-7xl mx-auto min-h-screen px-6 sm:px-12 py-24 text-center mt-10">
        {/* Header Section */}
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium w-fit mx-auto">
          <span className="w-2 h-2 bg-fuchsia-600 rounded-full animate-pulse"></span>
          What We Do
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold mt-4 text-black">
          Our{" "}
          <span className="bg-clip-text text-transparent bg-linear-to-br from-purple-700 to-fuchsia-500">
            Services
          </span>
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
          End-to-end digital solutions tailored to your unique business needs.
        </p>

        {/* Digital Solutions */}
        <div className="mt-16">
          <div className="flex items-center gap-2 text-purple-600 text-xl font-bold mb-8">
            <FaGlobe className="text-3xl" aria-hidden="true" />
            <span>Digital Solutions</span>
            <span className="flex-1 h-px bg-linear-to-r from-purple-600 to-transparent ml-4"></span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.digital.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>

        {/* Creative & Media */}
        <div className="mt-16">
          <div className="flex items-center gap-2 text-amber-600 text-xl font-bold mb-8">
            <FaPalette className="text-3xl" aria-hidden="true" />
            <span>Creative & Media</span>
            <span className="flex-1 h-px bg-linear-to-r from-amber-600 to-transparent ml-4"></span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.creative.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>

        {/* Security Solutions */}
        <div className="mt-16">
          <div className="flex items-center gap-2 text-purple-600 text-xl font-bold mb-8">
            <FaShieldAlt className="text-3xl" aria-hidden="true" />
            <span>Security Solutions</span>
            <span className="flex-1 h-px bg-linear-to-r from-purple-600 to-transparent ml-4"></span>
          </div>

          <div className="lg:w-1/3 sm:w-full">
            {services.security.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section
        id="why-us"
        className="px-6 sm:px-12 py-24 text-center bg-linear-to-b from-purple-50 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-purple-200 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mx-auto">
            <span className="w-2 h-2 bg-fuchsia-600 rounded-full animate-pulse"></span>
            Why Us
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mt-4 text-black">
            Why Choose{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-br from-purple-800 to-fuchsia-500">
              Klass Koncepts
            </span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            We don't just build websites - we build digital experiences that
            drive results.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {whyUs.map((item, index) => (
              <WhyUsCard key={index} {...item} />
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-20">
            <div>
              <div className="text-4xl font-bold text-purple-600">50+</div>
              <div className="text-gray-500 mt-2">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600">30+</div>
              <div className="text-gray-500 mt-2">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600">5+</div>
              <div className="text-gray-500 mt-2">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600">24/7</div>
              <div className="text-gray-500 mt-2">Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllServices;
