import { MdMeetingRoom } from "react-icons/md";
import { FaDiagramProject } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { memo } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { TfiHeadphoneAlt } from "react-icons/tfi";

// Constants for easy customization
const GRADIENTS = {
  background: "from-purple-900 via-purple-800 to-fuchsia-900",
  button: "from-purple-600 to-fuchsia-600",
  orbs: {
    left: "bg-purple-500",
    right: "bg-fuchsia-500",
  },
};

// Animation variants for better performance
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const CTASection = ({
  id = "cta",
  title = "Ready to Transform Your Digital Presence?",
  subtitle = "Let's discuss how we can help you achieve your business goals.",
  buttonText = "Get Free Consultation",
  button2Text = "View Our Portfolio",
  disclaimer = "Schedule A Call • Just A Healthy Discourse",
  className = "",
}) => {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2, delayChildren: 0.1 },
        },
      }}
      className={`scroll-mt-16 relative w-full overflow-hidden bg-linear-to-br ${GRADIENTS.background} py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6  ${className} `}
      aria-labelledby="cta-title"
    >
      {/* Floating Orbs with staggered animation - Responsive sizing */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className={` absolute top-0  left-0  w-48  sm:w-64  md:w-72 lg:w-80 h-48 sm:h-64 
          md:h-72 lg:h-80    ${GRADIENTS.orbs.left}  rounded-full  mix-blend-overlay filter   blur-2xl sm:blur-3xl  `}
        aria-hidden="true"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className={`absolute bottom-0 right-0 sm:w-72 w-7xl lg:w-100 h-56 sm:h-72 
          md:h-80 lg:h-96  ${GRADIENTS.orbs.right}  rounded-full  mix-blend-overlay 
          filter blur-2xl  sm:blur-3xl`}
        aria-hidden="true"
      />

      {/* Content Container - Full responsive width */}
      <div className="relative z-10 w-full max-w-full px-4 sm:px-6 md:px-8 lg:px-0">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title - Responsive font sizes */}
          <motion.h2
            id="cta-title"
            variants={fadeInUpVariants}
            className=" text-xl  sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white   mb-3  sm:mb-4 md:mb-5 leading-tight sm:leading-tight  md:leading-snug
              px-2 sm:px-0  "
          >
            {title}
          </motion.h2>

          {/* Subtitle - Responsive text size and spacing */}
          <motion.p
            variants={fadeInUpVariants}
            className="
              text-white/90 
              mb-3
              sm:mb-5 
              md:mb-4 
              text-base 
              sm:text-lg 
              md:text-xl 
              lg:text-xl
              max-w-2xl 
              mx-auto
              px-4
              sm:px-6
              leading-relaxed
            "
          >
            {subtitle}
          </motion.p>

          {/* Buttons Container - Responsive layout */}
          <div className="flex flex-col  sm:flex-row gap-3 sm:gap-4 md:gap-5 items-center  justify-center py-1  sm:py-2 md:py-3 px-4 sm:px-0 ">
            {/* Primary Button */}
            <motion.div
              variants={fadeInUpVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/contact"
                className={`inline-flex items-center justify-center gap-2 bg-linear-to-r ${GRADIENTS.button} text-white px-6 sm:px-7  md:px-8 py-2  sm:py-3  md:py-3 rounded-full font-semibold text-sm sm:text-base  md:text-lg  transition-all duration-300  group  cursor-pointer focus:outline-none focus:ring-2  focus:ring-white focus:ring-offset-2  focus:ring-offset-purple-900 w-full sm:w-auto  shadow-lg hover:shadow-xl`}
                aria-label={buttonText}
              >
                <span className="whitespace-nowrap">{buttonText}</span>
                <motion.span
                  animate={{ x: 0 }}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="inline-flex"
                >
                  <TfiHeadphoneAlt
                    className="text-base sm:text-lg md:text-xl"
                    aria-hidden="true"
                  />
                </motion.span>
              </Link>
            </motion.div>

            {/* Secondary Button */}
            <motion.div
              variants={fadeInUpVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/portfolio"
                className="
                  inline-flex 
                  items-center 
                  justify-center
                  gap-2 
                  bg-transparent 
                  border
                  border-white 
                  text-white 
                  px-4 
                  sm:px-5 
                  md:px-6 
                  py-2 
                  sm:py-3 
                  md:py-3
                  rounded-full 
                  font-semibold 
                  text-sm
                  sm:text-base
                  md:text-lg
                  transition-all 
                  duration-300 
                  group 
                  cursor-pointer  
                  focus:outline-none 
                  focus:ring
                  focus:ring-white 
                  focus:ring-offset
                  focus:ring-offset-purple-900
                  hover:bg-white/10
                  w-full
                  sm:w-auto
                  
                "
                aria-label={button2Text}
              >
                <span className="whitespace-nowrap">{button2Text}</span>
                <motion.span
                  animate={{ x: 0 }}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="inline-flex"
                >
                  <FaDiagramProject
                    className="text-sm sm:text-base md:text-lg"
                    aria-hidden="true"
                  />
                </motion.span>
              </Link>
            </motion.div>
          </div>

          {/* Disclaimer - Responsive text */}
          <motion.p
            variants={fadeInUpVariants}
            className="
              text-xs 
              sm:text-sm 
              md:text-base 
              text-gray-300 
              mt-1
              sm:mt-3 
              md:mt-4
              opacity-80
              px-4
              sm:px-0
            "
          >
            {disclaimer}
          </motion.p>
        </div>
      </div>

      {/* Skip link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-purple-900 px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>
    </motion.section>
  );
};

const arePropsEqual = (prevProps, nextProps) => {
  return (
    prevProps.id === nextProps.id &&
    prevProps.title === nextProps.title &&
    prevProps.subtitle === nextProps.subtitle &&
    prevProps.buttonText === nextProps.buttonText &&
    prevProps.button2Text === nextProps.button2Text &&
    prevProps.disclaimer === nextProps.disclaimer &&
    prevProps.className === nextProps.className
  );
};

const MemoizedCTASection = memo(CTASection, arePropsEqual);
MemoizedCTASection.displayName = "CTASection";

export default MemoizedCTASection;
