// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            padding: "15px 15px",
            fontSize: "15px",
            borderRadius: "50%",
            border: "none",
            background: "linear-gradient(to right, purple, fuchsia)",
            color: "white",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            zIndex: 50,
            cursor: "pointer",
          }}
        >
          <FaArrowRight style={{ transform: "rotate(-90deg)" }} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
