import { MdMeetingRoom } from "react-icons/md";
import { FaDiagramProject } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { memo } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

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
  subtitle = "  Let's discuss how we can help you achieve your business goals.",
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
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
          },
        },
      }}
      className={`
        scroll-mt-16 
        relative 
        w-full 
        overflow-hidden 
        bg-linear-to-br 
        ${GRADIENTS.background}
        py-16 
        sm:py-20 
        lg:py-24
        ${className}
      `}
      aria-labelledby="cta-title"
    >
      {/* Floating Orbs with staggered animation */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`
          absolute 
          top-0 
          left-0 
          w-64 
          h-64 
          ${GRADIENTS.orbs.left} 
          rounded-full 
          mix-blend-overlay 
          filter 
          blur-3xl
        `}
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
        className={`
          absolute 
          bottom-0 
          right-0 
          w-80 
          h-80 
          ${GRADIENTS.orbs.right} 
          rounded-full 
          mix-blend-overlay 
          filter 
          blur-3xl
        `}
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
        <motion.h2
          id="cta-title"
          variants={fadeInUpVariants}
          className="text-2xl sm:text-2xl lg:text-3xl font-normal text-white mb-3"
        >
          {title}
        </motion.h2>

        <motion.p
          variants={fadeInUpVariants}
          className="text-white mb-8 text-lg sm:text-base"
        >
          {subtitle}
        </motion.p>

        <div className="flex gap-3 items-center justify-center py-3">
          <motion.div
            variants={fadeInUpVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className={`inline-flex items-center gap-2 bg-linear-to-r ${GRADIENTS.button}
              text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 group cursor-pointer focus:outline-none focus:ring  focus:ring-white focus:ring-offset  focus:ring-offset-purple-900
            `}
              aria-label={buttonText}
            >
              <span>{buttonText}</span>
              <motion.span
                animate={{ x: 0 }}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <MdMeetingRoom className="text-md " aria-hidden="true"  />
              </motion.span>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUpVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/portfolio"
              className={`inline-flex items-center gap-2 bg-transparent border text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 group cursor-pointer  focus:outline-none focus:ring focus:ring-black  focus:ring-offset 
              focus:ring-offset-purple-900
            `}
              aria-label={buttonText}
            >
              <span>{button2Text}</span>
              <motion.span
                animate={{ x: 0 }}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <FaDiagramProject className="text-sm" aria-hidden="true" />
              </motion.span>
            </Link>
          </motion.div>
        </div>
        <motion.p
          variants={fadeInUpVariants}
          className="text-sm text-gray-300 mt-2"
        >
          {disclaimer}
        </motion.p>
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
    prevProps.disclaimer === nextProps.disclaimer &&
    prevProps.className === nextProps.className
  );
};

const MemoizedCTASection = memo(CTASection, arePropsEqual);
MemoizedCTASection.displayName = "CTASection";

export default MemoizedCTASection;
