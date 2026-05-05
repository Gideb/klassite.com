import { FaDiagramProject, FaPenToSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { memo } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaPen } from "react-icons/fa";
import Button from "../ui/Button";

// Constants for easy customization
const GRADIENTS = {
  background: "from-fuchsia-900 via-fuchsia-700 to-fuchsia-900",
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
  className = ""
 
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
      className={`scroll-mt-16 relative py-24 overflow-hidden ${className} `}
      
    >
      <div className={`absolute inset-0 bg-linear-to-r from-purple-900 to-indigo-900 `} />
      <div className={`absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10 `} />

      <div className="relative max-w-4xl mx-auto text-center px-6">
        <motion.h2
          id="cta-title"
          variants={fadeInUpVariants}
          className="text-3xl md:text-5xl font-bold text-white mb-6"
        >
          {title}
        </motion.h2>
        <motion.p
          id="cta-subtitle"
          variants={fadeInUpVariants}
          className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4">
          <motion.div
            variants={fadeInUpVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Button
              link="/contact"
              text={buttonText}
              icon={FaPenToSquare}
              variant="primary"
            />
          </motion.div>
          {/* Secondary Button */}
          <motion.div
            variants={fadeInUpVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Button
              link="https://portfolio"
              text={button2Text}
              icon={FaDiagramProject}
              variant="transparent"
            />
          </motion.div>
        </div>
        <motion.p
          variants={fadeInUpVariants}
          className="
              text-xs sm:text-sm md:text-base text-gray-300 mt-1 sm:mt-3 md:mt-4 opacity-80 px-4 sm:px-0 "
        >
          {disclaimer}
        </motion.p>
      </div>
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
