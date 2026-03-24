import { useState, useEffect, useRef } from "react";
import {
  FaCode,
  FaLayerGroup,
  FaSearch,
  FaPalette,
  FaVideo,
  FaCamera,
  FaMobile,
  FaArrowRight,
  FaPaintBrush,
  FaRocket,
  FaDatabase,
  FaStar,
  FaUsers,
  FaTrophy,
  FaClock,
  FaBullhorn,
  FaChartPie,
  FaCrown,
  FaGem,
  FaInfinity,
} from "react-icons/fa";
import { IoSparklesOutline } from "react-icons/io5";
// eslint-disable-next-line no-unused-vars
import { motion, useInView, useAnimation } from "framer-motion";

// Helper functions for dynamic classes
const getGradientClass = (color) => {
  if (color === "purple") return "from-purple-50 via-purple-100/30 to-white";
  if (color === "amber") return "from-amber-50 via-amber-100/30 to-white";
  return "from-slate-50 via-slate-100/30 to-white";
};

const getShadowClass = (color) => {
  if (color === "purple") return "hover:shadow-purple-500/20";
  if (color === "amber") return "hover:shadow-amber-500/20";
  return "hover:shadow-slate-500/20";
};

const getIconBgClass = (color) => {
  if (color === "purple")
    return "bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-purple-500/30";
  if (color === "amber")
    return "bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-amber-500/30";
  return "bg-gradient-to-br from-slate-700 to-slate-800 text-white shadow-slate-500/30";
};

const getBadgeClass = (color) => {
  if (color === "purple") return "bg-purple-100 text-purple-700";
  if (color === "amber") return "bg-amber-100 text-amber-700";
  return "bg-slate-100 text-slate-700";
};

const getTextColorClass = (color) => {
  if (color === "purple") return "text-purple-600";
  if (color === "amber") return "text-amber-600";
  return "text-slate-600";
};

const getAccentClass = (color) => {
  if (color === "purple") return "via-purple-400";
  if (color === "amber") return "via-amber-400";
  return "via-slate-400";
};

const getGlowClass = (color) => {
  if (color === "purple") return "from-purple-400/5 to-purple-600/5";
  if (color === "amber") return "from-amber-400/5 to-orange-500/5";
  return "from-slate-400/5 to-slate-600/5";
};

// Service Card Component
const ServiceCard = ({
  // eslint-disable-next-line no-unused-vars
  icon: Icon,
  title,
  desc,
  color,
  features,
  price,
  index,
  onHoverStart,
  onHoverEnd,
}) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      onHoverStart={() => onHoverStart(index)}
      onHoverEnd={onHoverEnd}
      className={`group relative bg-gradient-to-br ${getGradientClass(color)} 
        rounded-3xl p-8 shadow-lg ${getShadowClass(color)}
        transition-all duration-500 ease-out
        border border-gray-100 hover:border-opacity-50
        backdrop-blur-sm`}
    >
      {/* Premium Accent Line */}
      <div
        className={`absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent ${getAccentClass(color)} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Icon with Premium Animation */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className={`w-16 h-16 ${getIconBgClass(color)} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
      >
        <Icon className="text-2xl" aria-hidden="true" />
      </motion.div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 text-base leading-relaxed mb-5">{desc}</p>

      {/* Features Grid */}
      <div className="flex flex-wrap gap-2 mb-5">
        {features.map((feature, idx) => (
          <span
            key={idx}
            className={`text-xs px-2 py-1 rounded-full ${getBadgeClass(color)} font-medium`}
          >
            {feature}
          </span>
        ))}
      </div>

      {/* Price Indicator */}
      <div className="mb-4 pt-2 border-t border-gray-100">
        <span className="text-sm text-gray-500">Starting at</span>
        <p className="text-2xl font-bold text-gray-800">{price}</p>
      </div>

      {/* Enhanced Learn More */}
      <motion.div
        whileHover={{ x: 8 }}
        className={`inline-flex items-center gap-2 ${getTextColorClass(color)} 
          font-semibold text-sm transition-all duration-300 cursor-pointer group-hover:gap-3`}
      >
        <span>Explore Service</span>
        <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
      </motion.div>

      {/* Hover Glow Effect */}
      <div
        className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
        bg-gradient-to-r ${getGlowClass(color)}`}
      />
    </motion.div>
  );
};

// Section Header Component
const SectionHeader = ({ title, badge, intro, gradient, controls }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={controls}
    variants={itemVariants}
    className="text-center mb-16"
  >
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-purple-100 text-purple-600 px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm"
    >
      <IoSparklesOutline className="text-xs" />
      <span>{badge}</span>
    </motion.div>

    <h2 className="text-5xl sm:text-6xl font-bold mb-6">
      <span
        className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
      >
        {title}
      </span>
    </h2>

    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
      {intro}
    </p>

    <div
      className={`w-24 h-1 bg-gradient-to-r ${gradient} rounded-full mx-auto mt-8`}
    />
  </motion.div>
);

// Stats Section Component
const StatsSection = ({ controls }) => {
  const stats = [
    {
      icon: FaTrophy,
      value: "500+",
      label: "Projects Delivered",
      color: "purple",
    },
    { icon: FaUsers, value: "250+", label: "Happy Clients", color: "purple" },
    { icon: FaClock, value: "98%", label: "Client Retention", color: "amber" },
    { icon: FaStar, value: "4.9", label: "Client Rating", color: "amber" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      variants={itemVariants}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 py-12 border-y border-gray-100"
    >
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          whileHover={{ y: -5 }}
          className="text-center group"
        >
          <div
            className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-${stat.color}-100 to-${stat.color}-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
          >
            <stat.icon className={`text-${stat.color}-600 text-xl`} />
          </div>
          <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
          <div className="text-sm text-gray-500">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// CTA Section Component
const CtaSection = ({ controls }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={controls}
    variants={itemVariants}
    className="mt-24 text-center bg-gradient-to-r from-purple-900 via-purple-800 to-fuchsia-800 rounded-3xl p-12 relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent" />

    <motion.div whileHover={{ scale: 1.02 }} className="relative z-10">
      <FaCrown className="text-5xl text-yellow-400 mx-auto mb-6" />
      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Ready to Build Something Extraordinary?
      </h3>
      <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
        Join the ranks of industry leaders who trust us to deliver excellence.
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="bg-white text-purple-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2"
      >
        Start Your Project
        <FaArrowRight className="text-sm" />
      </motion.button>
    </motion.div>
  </motion.div>
);

// Animation Variants (defined outside)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Main Component
const Pricing = () => {
  // eslint-disable-next-line no-unused-vars
  const [hoveredCard, setHoveredCard] = useState(null);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const services = {
    digital: {
      title: "DIGITAL SOLUTIONS",
      badge: "⚡ Next-Gen Digital",
      intro:
        "We engineer digital experiences that dominate markets, drive exponential growth, and set new industry standards.",
      gradient: "from-purple-600 via-purple-500 to-fuchsia-500",
      items: [
        {
          icon: FaCode,
          title: "Website Development",
          desc: "Custom, high-performance websites engineered for conversion, scalability, and unmatched user experience.",
          color: "purple",
          features: [
            "React/Next.js",
            "E-commerce",
            "CMS Integration",
            "99.9% Uptime",
          ],
          price: "$2,500+",
        },
        {
          icon: FaLayerGroup,
          title: "UI/UX Design",
          desc: "Award-winning interfaces that blend aesthetics with psychology to maximize engagement and retention.",
          color: "purple",
          features: [
            "User Research",
            "Wireframing",
            "Prototyping",
            "Usability Testing",
          ],
          price: "$1,800+",
        },
        {
          icon: FaRocket,
          title: "Web Applications",
          desc: "Scalable SaaS platforms and enterprise applications built for global scale and peak performance.",
          color: "purple",
          features: [
            "Real-time Data",
            "API Integration",
            "Cloud Native",
            "Security First",
          ],
          price: "$5,000+",
        },
        {
          icon: FaMobile,
          title: "Mobile Development",
          desc: "Native and cross-platform apps that deliver seamless experiences across all devices.",
          color: "purple",
          features: [
            "iOS/Android",
            "React Native",
            "Flutter",
            "App Store Optimization",
          ],
          price: "$4,000+",
        },
        {
          icon: FaSearch,
          title: "SEO & Growth",
          desc: "Data-driven SEO strategies that dominate search rankings and drive organic traffic at scale.",
          color: "purple",
          features: [
            "Keyword Strategy",
            "Technical SEO",
            "Content Marketing",
            "Analytics",
          ],
          price: "$1,500/mo",
        },
        {
          icon: FaDatabase,
          title: "Cloud Solutions",
          desc: "Enterprise-grade cloud infrastructure and DevOps for maximum reliability and performance.",
          color: "purple",
          features: [
            "AWS/Azure",
            "Scalable Architecture",
            "24/7 Monitoring",
            "Backup Solutions",
          ],
          price: "$3,000+",
        },
      ],
    },
    creative: {
      title: "CREATIVE SERVICES",
      badge: "🎨 Brand Excellence",
      intro:
        "We craft iconic brand identities and compelling narratives that resonate deeply with audiences and stand the test of time.",
      gradient: "from-amber-500 via-orange-500 to-red-500",
      items: [
        {
          icon: FaPalette,
          title: "Graphic Design",
          desc: "Stunning visual identities that capture attention and communicate your brand's unique story.",
          color: "amber",
          features: [
            "Logo Design",
            "Print Materials",
            "Social Graphics",
            "Packaging",
          ],
          price: "$800+",
        },
        {
          icon: FaPaintBrush,
          title: "Branding Strategy",
          desc: "Comprehensive brand development that creates emotional connections and builds lasting loyalty.",
          color: "amber",
          features: [
            "Brand Audit",
            "Positioning",
            "Voice & Tone",
            "Style Guide",
          ],
          price: "$2,500+",
        },
        {
          icon: FaVideo,
          title: "Content Creation",
          desc: "Cinematic content that tells your story and captivates your audience across all platforms.",
          color: "amber",
          features: [
            "Video Production",
            "Photography",
            "Copywriting",
            "Motion Graphics",
          ],
          price: "$1,200+",
        },
        {
          icon: FaCamera,
          title: "Visual Storytelling",
          desc: "Professional photography and videography that brings your brand narrative to life.",
          color: "amber",
          features: ["Commercial", "Product", "Corporate", "Event Coverage"],
          price: "$900+",
        },
        {
          icon: FaBullhorn,
          title: "Social Media Strategy",
          desc: "Data-driven social campaigns that build communities and drive meaningful engagement.",
          color: "amber",
          features: [
            "Content Calendar",
            "Influencer Marketing",
            "Community Management",
            "Analytics",
          ],
          price: "$1,500/mo",
        },
        {
          icon: FaChartPie,
          title: "Marketing Campaigns",
          desc: "Integrated marketing solutions that deliver measurable ROI and brand growth.",
          color: "amber",
          features: [
            "Multi-channel",
            "Email Marketing",
            "PPC Ads",
            "Retargeting",
          ],
          price: "$2,000+",
        },
      ],
    },
    premium: {
      title: "PREMIER SERVICES",
      badge: "👑 Executive Suite",
      intro:
        "White-glove services for established brands and enterprises seeking the ultimate in digital excellence.",
      gradient: "from-slate-700 via-slate-800 to-slate-900",
      items: [
        {
          icon: FaCrown,
          title: "Enterprise Solutions",
          desc: "Custom enterprise-grade platforms with dedicated teams and VIP support.",
          color: "slate",
          features: [
            "Dedicated Team",
            "SLA Guarantee",
            "Custom Development",
            "Priority Support",
          ],
          price: "Custom Quote",
        },
        {
          icon: FaGem,
          title: "Digital Transformation",
          desc: "Complete digital overhaul for businesses ready to lead their industry into the future.",
          color: "slate",
          features: [
            "Process Automation",
            "Digital Strategy",
            "Legacy Migration",
            "Training",
          ],
          price: "Custom Quote",
        },
        {
          icon: FaInfinity,
          title: "Retainer Partnership",
          desc: "Ongoing strategic partnership with unlimited creative and technical resources.",
          color: "slate",
          features: [
            "Unlimited Requests",
            "Dedicated Manager",
            "Monthly Strategy",
            "Priority Queue",
          ],
          price: "$8,000+/mo",
        },
      ],
    },
  };

  const handleHoverStart = (index) => {
    setHoveredCard(index);
  };

  const handleHoverEnd = () => {
    setHoveredCard(null);
  };

  return (
    <div
      id="services"
      className="scroll-mt-24 bg-gradient-to-b from-white via-purple-50/20 to-white"
    >
      <section className="max-w-7xl mx-auto px-6 sm:px-12 py-24" ref={ref}>
        {/* Global Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={itemVariants}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-purple-50 text-purple-700 px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <FaStar className="text-yellow-500" />
            <span>Trusted by Industry Leaders</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            World-Class
            <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
              {" "}
              Digital Excellence
            </span>
          </h1>

          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Comprehensive solutions designed to elevate your brand and drive
            measurable business growth
          </p>
        </motion.div>

        {/* Stats Section */}
        <StatsSection controls={controls} />

        {/* Digital Solutions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mb-32"
        >
          <SectionHeader
            title={services.digital.title}
            badge={services.digital.badge}
            intro={services.digital.intro}
            gradient={services.digital.gradient}
            controls={controls}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.digital.items.map((service, index) => (
              <ServiceCard
                key={`digital-${index}`}
                {...service}
                index={index}
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
              />
            ))}
          </div>
        </motion.div>

        {/* Creative Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mb-32"
        >
          <SectionHeader
            title={services.creative.title}
            badge={services.creative.badge}
            intro={services.creative.intro}
            gradient={services.creative.gradient}
            controls={controls}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.creative.items.map((service, index) => (
              <ServiceCard
                key={`creative-${index}`}
                {...service}
                index={index + 100}
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
              />
            ))}
          </div>
        </motion.div>

        {/* Premier Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mb-24"
        >
          <SectionHeader
            title={services.premium.title}
            badge={services.premium.badge}
            intro={services.premium.intro}
            gradient={services.premium.gradient}
            controls={controls}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.premium.items.map((service, index) => (
              <ServiceCard
                key={`premium-${index}`}
                {...service}
                index={index + 200}
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <CtaSection controls={controls} />
      </section>
    </div>
  );
};

export default Pricing;
