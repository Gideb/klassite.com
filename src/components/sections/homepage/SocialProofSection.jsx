import { memo, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import teamImage from "../../../assets/images/ipages/homepage/trust1.jpg";

import logo1 from "../../../assets/images/brandLogo/logo1.png";
import logo2 from "../../../assets/images/brandLogo/logo2.png";
import logo3 from "../../../assets/images/brandLogo/logo3.png";
import logo4 from "../../../assets/images/brandLogo/logo4.png";
import logo5 from "../../../assets/images/brandLogo/logo5.png";
import logo6 from "../../../assets/images/brandLogo/logo6.png";
import Topicbg from "../../props/Topicbg";
import Subheading from "../../props/Subheading";
import Headings from "../../props/Headings";
import { FaWandMagic, FaWandMagicSparkles } from "react-icons/fa6";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const slideInLeftVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.8,
    },
  },
};

const slideInRightVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.8,
    },
  },
};

const slideInUpVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.6,
    },
  },
};

const staggerChildrenVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const SocialProofSection = () => {
  const brands = [
    {
      name: "TechCorp",
      gradient: "from-blue-600 to-blue-400",
      logo: logo1,
    },
    {
      name: "InnovateLabs",
      gradient: "from-purple-600 to-pink-500",
      logo: logo2,
    },
    {
      name: "GlobalMedia",
      gradient: "from-green-600 to-emerald-400",
      logo: logo3,
    },
    {
      name: "CreativeHub",
      gradient: "from-orange-600 to-amber-500",
      logo: logo4,
    },
    {
      name: "StartupX",
      gradient: "from-red-600 to-rose-500",
      logo: logo5,
    },
    {
      name: "FutureTech",
      gradient: "from-indigo-600 to-purple-500",
      logo: logo6,
    },
  ];

  // Logo fallback component
  const LogoWithFallback = ({ logo, name, gradient }) => {
    const [hasError, setHasError] = useState(false);

    if (hasError || !logo) {
      return (
        <div
          className={`w-full h-full rounded-xl bg-lineaer-to-br ${gradient} flex items-center justify-center`}
        >
          <span className="text-white font-semibold text-xl">
            {name.charAt(0)}
          </span>
        </div>
      );
    }

    return (
      <img
        src={logo}
        alt={name}
        className="w-full h-full object-contain"
        onError={() => setHasError(true)}
        loading="lazy"
      />
    );
  };

  return (
    <motion.section
      id="social-proof"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: "-50px" }}
      variants={containerVariants}
      className="scroll-mt-16 relative w-full bg-white py-20 sm:py-24 lg:py-28 overflow-hidden"
    >
      <motion.div
        variants={staggerChildrenVariants}
        className="absolute lg:left-1/2 lg:top-10 md:top-10 top-6 left-5"
      >
        <div className="lg:ml-9 sm:text-left ">
          <Topicbg color="purple" topic="Trusted Partners" />
        </div>
      </motion.div>

      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image with slide from left */}
          <motion.div
            variants={slideInLeftVariants}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                src={teamImage}
                alt="Our Team working together"
                className="w-full h-full object-cover"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute inset-0 bg-linear-to-tr from-purple-900/30 to-transparent"
              ></motion.div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-3 hidden lg:block"
            >
              <div className="flex justify-center items-center gap-4">
                <span>
                  <FaWandMagicSparkles className="text-amber-600 font-bold text-lg" />
                </span>

                <div>
                  <p className="text-purple-900 font-bold text-md">7+ Years</p>
                  <p className="text-gray-600 text-xs">Of Excellence</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content with slide from right */}
          <motion.div
            variants={slideInRightVariants}
            className="order-1 lg:order-2"
          >
            <motion.div variants={staggerChildrenVariants}>
              <Headings black=" Trusted by Industry Leaders" />
            </motion.div>

            <motion.div variants={staggerChildrenVariants}>
              <Subheading
                description="We collaborate with forward-thinking brands who trust us to
                deliver exceptional digital experiences."
              />
            </motion.div>
            <br />

            {/* Brand Logos Grid with staggered animation */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-3 gap-6"
            >
              {brands.map((brand, index) => (
                <motion.div
                  key={index}
                  variants={slideInUpVariants}
                  custom={index}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center 
                         bg-gray-50 rounded-xl p-4 shadow-sm
                         hover:bg-white hover:shadow-fuchsia-300 hover:shadow-md 
                         transition-all duration-300 cursor-pointer"
                >
                  <motion.img
                    initial={{ filter: "grayscale(50%)" }}
                    whileHover={{ filter: "grayscale(0%)" }}
                    transition={{ duration: 0.3 }}
                    src={brand.logo}
                    alt={brand.name}
                    className="h-10 object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Subtext with fade up animation */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="text-gray-500 text-sm mt-8"
            >
              ...and 60+ other innovative companies across fintech, healthcare,
              and e-commerce.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

// Custom comparison for memo optimization
// eslint-disable-next-line no-unused-vars
const arePropsEqual = (prevProps, nextProps) => {
  // Since this component doesn't accept props, always return true
  // to prevent unnecessary re-renders
  return true;
};

export default memo(SocialProofSection, arePropsEqual);
