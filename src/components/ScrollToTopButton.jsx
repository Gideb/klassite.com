/* // eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

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
          whileHover={{
            scale: 1.1,
            background: "purple", color: "white"
          }}
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
            background: "linear-gradient(to top, white, #ebebeb)",
            color: "purple",
            boxShadow: "0px 0px 0px rgba(0,4,0,0.6)",
            zIndex: 50,
            transition: '0.3s',
            cursor: "pointer",
          }}
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
 */



// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";

// Loading Progress Indicator Component
const LoadingProgressIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.scrollY / totalScroll;
      setScrollProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={styles.progressContainer}>
      <svg width="75" height="75" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          opacity="0.2"
          pathLength="1"
          style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
        />
        {/* Progress circle */}
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="#ff0088"
          strokeWidth="5"
          strokeLinecap="round"
          pathLength="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: scrollProgress }}
          transition={{ duration: 0.1 }}
          style={{ 
            transform: 'rotate(-90deg)', 
            transformOrigin: 'center',
            filter: 'drop-shadow(0 0 5px #ff0088)'
          }}
        />
      </svg>
    </div>
  );
};

// Main ScrollToTopButton with Loading Illusion
const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setShowButton(scrolled > 400);
      
      // Calculate scroll progress for the button
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrolled / totalScroll;
      setScrollProgress(progress);
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
          whileHover={{
            scale: 1.1,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            boxShadow: "0 10px 25px -5px rgba(0,0,0,0.3)",
          }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          style={{
            ...styles.button,
            position: "fixed",
            bottom: "30px",
            right: "30px",
          }}
        >
          {/* Circular progress indicator */}
          <div style={styles.progressRingContainer}>
            <svg width="60" height="60" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="4"
                pathLength="1"
                style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
              />
              {/* Progress circle */}
              <motion.circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="#fff"
                strokeWidth="4"
                strokeLinecap="round"
                pathLength="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: scrollProgress }}
                transition={{ duration: 0.1 }}
                style={{ 
                  transform: 'rotate(-90deg)', 
                  transformOrigin: 'center',
                }}
              />
            </svg>
          </div>
          {/* Arrow icon */}
          <div style={styles.iconContainer}>
            <FaArrowUp size={20} />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// Optional: A demo component showing individual scroll progress for each section
const ScrollProgressSection = ({ children, index }) => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate how much of the section is visible
        const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        const progressPercent = Math.max(0, Math.min(1, visibleHeight / rect.height));
        
        setProgress(progressPercent);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} style={styles.section}>
      <div style={styles.sectionProgress}>
        <svg width="80" height="80" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="#ff0088"
            strokeWidth="5"
            opacity="0.2"
            pathLength="1"
            style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
          />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="#ff0088"
            strokeWidth="5"
            strokeLinecap="round"
            pathLength="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: progress }}
            transition={{ duration: 0.1 }}
            style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
          />
        </svg>
      </div>
      <div style={styles.sectionContent}>
        {children || `Section ${index + 1}`}
      </div>
    </div>
  );
};

// Styles
const styles = {
  button: {
    padding: 0,
    borderRadius: "50%",
    border: "none",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    zIndex: 50,
    cursor: "pointer",
    width: "60px",
    height: "60px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  progressRingContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  progressContainer: {
    position: "sticky",
    top: "20px",
    width: "80px",
    height: "80px",
    margin: "0 auto",
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
  section: {
    height: "100vh",
    maxHeight: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    borderBottom: "2px dashed #ff0088",
  },
  sectionProgress: {
    position: "absolute",
    top: "20px",
    right: "20px",
    width: "80px",
    height: "80px",
  },
  sectionContent: {
    width: "200px",
    height: "250px",
    border: "2px dotted #ff0088",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "20px",
  },
};

// Example usage in an App component
const App = () => {
  return (
    <div>
      {/* Optional: Sticky global progress indicator at the top */}
      <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000 }}>
        <LoadingProgressIndicator />
      </div>
      
      {/* Your main content */}
      {[...Array(8)].map((_, i) => (
        <ScrollProgressSection key={i} index={i}>
          <div>
            <h3>Section {i + 1}</h3>
            <p>Scroll to see progress</p>
          </div>
        </ScrollProgressSection>
      ))}
      
      {/* The scroll to top button with loading illusion */}
      <ScrollToTopButton />
    </div>
  );
};

export default ScrollToTopButton;
export { LoadingProgressIndicator, ScrollProgressSection };