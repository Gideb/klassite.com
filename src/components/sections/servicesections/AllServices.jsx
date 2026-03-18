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
  FaBolt,
  FaMobile,
  FaRocket,
  FaStore,
  FaUniversity,
  FaHeartbeat,
  FaGraduationCap,
  FaBuilding,
  FaUtensils,
  FaArrowRight,
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    company: "TechStart Inc.",
    quote:
      "Klass Koncepts transformed our online presence completely. Their attention to detail and creative approach exceeded our expectations.",
    rating: 5,
    image: "/client1.jpg", // Optional
  },
  {
    name: "Jane Smith",
    company: "Creative Agency",
    quote:
      "Professional, reliable, and incredibly talented. They delivered our project ahead of schedule and within budget.",
    rating: 5,
    image: "/client2.jpg",
  },
 
];

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

  const processSteps = [
    {
      icon: FaLightbulb,
      title: "Discovery",
      desc: "We analyze your needs, goals, and target audience to create a tailored strategy.",
      color: "purple",
    },
    {
      icon: FaCode,
      title: "Planning & Design",
      desc: "Wireframing, prototyping, and design concepts aligned with your brand vision.",
      color: "purple",
    },
    {
      icon: FaBolt,
      title: "Development",
      desc: "Agile development with regular updates and feedback loops.",
      color: "purple",
    },
    {
      icon: FaRocket,
      title: "Launch & Support",
      desc: "Deployment, testing, and ongoing maintenance to ensure peak performance.",
      color: "purple",
    },
  ];

  const industries = [
    {
      icon: FaStore,
      name: "Retail & E-commerce",
      desc: "Online stores and retail solutions",
    },
    {
      icon: FaUniversity,
      name: "Financial Services",
      desc: "Secure banking & fintech platforms",
    },
    {
      icon: FaHeartbeat,
      name: "Healthcare",
      desc: "Medical practices & wellness centers",
    },
    {
      icon: FaGraduationCap,
      name: "Education",
      desc: "E-learning & institutional websites",
    },
    {
      icon: FaBuilding,
      name: "Real Estate",
      desc: "Property listings & virtual tours",
    },
    {
      icon: FaUtensils,
      name: "Food & Beverage",
      desc: "Restaurants & hospitality",
    },
  ];

  const portfolio = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      image: "../../../assets/images/profile.jpg",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Brand Identity Design",
      category: "Graphic Design",
      image: "../../../assets/images/profile.jpg",
      tags: ["Logo Design", "Brand Guidelines"],
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
        <Icon className="text-2xl" aria-hidden="true" />
      </div>
      <h4 className="font-normal text-xl mb-4 text-black">{title}</h4>
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

        <h2 className="text-3xl sm:text-4xl font-normal mt-4 text-black">
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
          <div className="flex items-center gap-2 text-purple-600 text-xl font-normal mb-8">
            <FaGlobe className="text-2xl" aria-hidden="true" />
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
          <div className="flex items-center gap-2 text-amber-600 text-xl font-normal mb-8">
            <FaPalette className="text-2xl" aria-hidden="true" />
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
          <div className="flex items-center gap-2 text-purple-600 text-xl font-normal mb-8">
            <FaShieldAlt className="text-2xl" aria-hidden="true" />
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
      <section className="max-w-7xl mx-auto px-6 sm:px-12 py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium w-fit mx-auto">
          <span className="w-2 h-2 bg-fuchsia-600 rounded-full animate-pulse"></span>
          Our Process
        </div>

        <h2 className="text-3xl sm:text-4xl font-normal mt-4 text-black">
          How We{" "}
          <span className="bg-clip-text text-transparent bg-linear-to-br from-purple-700 to-fuchsia-500">
            Work
          </span>
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
          A streamlined approach to bringing your vision to life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-linear-to-r from-purple-600 to-transparent"></div>
              )}
              <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100 relative z-10">
                <div className="text-4xl font-bold text-purple-200 absolute top-4 right-4">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-2xl mb-6">
                  <step.icon />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-500">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gray-50 px-6 sm:px-12 py-24 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-600 px-4 py-2 rounded-full text-sm font-medium mx-auto">
            Industries We Serve
          </div>

          <h2 className="text-3xl sm:text-4xl font-normal mt-4 text-black">
            Solutions for{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-br from-amber-600 to-orange-500">
              Every Industry
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">
            {industries.map((industry, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-amber-600">
                  <div className="text-amber-600 text-3xl mb-3 group-hover:scale-110 transition-transform">
                    <industry.icon />
                  </div>
                  <h4 className="font-semibold text-sm">{industry.name}</h4>
                  <p className="text-xs text-gray-400 mt-1 hidden group-hover:block">
                    {industry.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 sm:px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-600 px-4 py-2 rounded-full text-sm font-medium mx-auto">
              Testimonials
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal mt-4 text-black">
              What Our{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-br from-amber-600 to-orange-500">
                Clients Say
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl relative hover:shadow-xl transition-shadow"
              >
                <FaQuoteLeft className="text-amber-200 text-4xl absolute top-4 right-4" />
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-linear-to-br from-purple-600 to-fuchsia-600 rounded-full"></div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 sm:px-12 py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mx-auto">
          Our Work
        </div>

        <h2 className="text-3xl sm:text-4xl font-normal mt-4 text-black">
          Featured{" "}
          <span className="bg-clip-text text-transparent bg-linear-to-br from-purple-700 to-fuchsia-500">
            Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {portfolio.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-video bg-linear-to-br from-purple-400 to-fuchsia-400 relative overflow-hidden">
                {/* Replace with actual images */}
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="font-semibold text-lg">{project.title}</h4>
                <p className="text-purple-600 text-sm mb-2">
                  {project.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-12 px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center gap-2">
          View All Projects <FaArrowRight />
        </button>
      </section>
    </div>
  );
};

export default AllServices;
