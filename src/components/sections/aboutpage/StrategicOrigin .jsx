import { memo, useRef } from "react";
 // eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import codeArchitecture from '../../../assets/images/aboutPage/slow-fast-site1.jpg'

const StrategicOrigin = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="relative w-full py-20 sm:py-24 bg-white overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #6366f1 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          

          {/* Right Column - Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={codeArchitecture}
                alt="Clean code architecture and development"
                className="w-full h-auto object-cover"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-tr from-purple-600/20 via-transparent to-fuchsia-600/20"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-fuchsia-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>

            {/* Floating tech badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-3 border border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-mono text-gray-600">
                  99.9% uptime
                </span>
              </div>
            </div>
          </motion.div>

{/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section Header */}
            <div className="mb-6">
              <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">
                Strategic Origin
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
                Closing the{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-fuchsia-600">
                  Performance Gap
                </span>
              </h2>
            </div>

            {/* Clean typography */}
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p className="text-lg">
                We started Klass Koncepts because we kept seeing the same
                pattern: brilliant businesses held back by digital foundations
                that couldn't scale. Great ideas, poor execution.
              </p>

              <p>
                While agencies chased trends and flashy designs, we noticed the
                fundamentals crumbling. Sites that looked beautiful but took 6
                seconds to load. Platforms that crashed during traffic spikes.
                Tools that should work together acting like strangers.
              </p>

              <p>
                So we took a different path. No templates. No cookie-cutter
                solutions. Just clean architecture, performance-first
                engineering, and honest conversations about what actually works.
                Three years later, we're still at it—building digital
                experiences that don't just look good, but perform where it
                counts.
              </p>

              {/* Subtle signature/quote */}
              <div className="pt-4 mt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500 italic">
                  — Gilbert, Founder & Lead Developer
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Optional subtle CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            to="/story"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium group"
          >
            <span>Read our full story</span>
            <FaArrowRight className="text-xs group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(StrategicOrigin);
