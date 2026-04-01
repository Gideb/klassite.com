import { memo, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa";
import Topicbg from "../../ui/Topicbg";
import Headings from "../../ui/Headings";

const StrategicOrigin = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Animation variants for cleaner code
  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  };

  // Origin story paragraphs
  const storyParagraphs = [
    "We started Klass Koncepts because we kept seeing the same pattern: brilliant businesses held back by digital foundations that couldn't scale. Great ideas, poor execution.",
    "While agencies chased trends and flashy designs, we noticed the fundamentals crumbling. Sites that looked beautiful but took 6 seconds to load. Platforms that crashed during traffic spikes. Tools that should work together acting like strangers.",
    "So we took a different path. No templates. No cookie-cutter solutions. Just clean architecture, performance-first engineering, and honest conversations about what actually works. Three years later, we're still at it—building digital experiences that don't just look good, but perform where it counts.",
  ];

  return (
    <section className="relative w-full py-20 bg-gray-100 overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #6366f1 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Origin Story */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section Header */}
            <div className="mb-8">
              <Topicbg topic="Strategic Origin" />

              <Headings black=" Closing the" colored="  Performance Gap" />

              <div className="h-px w-32 bg-purple-800 mt-5"></div>
            </div>

            {/* Story paragraphs */}
            <div className="space-y-6 text-justify">
              {storyParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-700 leading-relaxed border-l-2 border-purple-200 pl-4 hover:border-purple-400 transition-colors duration-300"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Mission & Vision */}
          <motion.div
            ref={ref}
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 lg:mt-30"
          >
            {/* Mission Card */}
            <div className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-purple-200">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-linear-to-br from-purple-100 to-fuchsia-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaBullseye className="text-xl text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    To eliminate the performance gap between business ambition
                    and digital reality. We build infrastructure that scales,
                    experiences that convert, and partnerships that outlast
                    trends.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-fuchsia-200">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-linear-to-br from-fuchsia-100 to-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaEye className="text-xl text-fuchsia-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Our Vision
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    A digital landscape where every business—regardless of
                    size—has access to enterprise-grade performance. We're
                    building the standard for how brands grow through
                    technology.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(StrategicOrigin);
