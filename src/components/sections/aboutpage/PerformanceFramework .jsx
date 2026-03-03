import { memo, useRef } from "react";
import {  motion, useInView } from "framer-motion";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const PerformanceFramework = () => {
  const frameworks = [
    {
      id: "01",
      title: "Strategic Architecture",
      description:
        "We map your business goals to technical requirements before writing a single line of code. No assumptions. Just strategy.",
      gradient: "from-purple-600 to-fuchsia-600",
      details: [
        "Business goal mapping",
        "Technical requirement analysis",
        "Scalability planning",
      ],
    },
    {
      id: "02",
      title: "Experience Engineering",
      description:
        "Every interaction is engineered for speed and clarity. We optimize for how users actually behave, not how we wish they would.",
      gradient: "from-blue-600 to-cyan-500",
      details: [
        "User behavior analysis",
        "Interaction optimization",
        "Conversion path mapping",
      ],
    },
    {
      id: "03",
      title: "Scalable Development",
      description:
        "Clean code that grows with you. Our architecture handles traffic spikes, new features, and future integration without breaking.",
      gradient: "from-green-600 to-emerald-500",
      details: [
        "Clean code architecture",
        "Traffic spike handling",
        "Future-proof integration",
      ],
    },
    {
      id: "04",
      title: "Optimization & Growth",
      description:
        "Launch is just the beginning. We continuously refine based on real data, ensuring your digital presence gets better over time.",
      gradient: "from-orange-600 to-red-500",
      details: [
        "Data-driven refinement",
        "Performance monitoring",
        "Continuous improvement",
      ],
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative w-full py-24 sm:py-28 bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #6366f1 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
            </span>
            Systematic Approach
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-2">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-fuchsia-600">
              Performance Framework
            </span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            A repeatable process that turns technical complexity into measurable
            business growth.
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Vertical line with gradient */}
          <div className="absolute left-[2rem] top-0 bottom-0 w-0.5">
            <div className="w-full h-full bg-gradient-to-b from-purple-200 via-fuchsia-200 to-purple-200"></div>
          </div>

          {/* Timeline items */}
          <div className="space-y-12">
            {frameworks.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative flex gap-8 group"
              >
                {/* Number badge with glow effect */}
                <div className="relative flex-shrink-0">
                  <div
                    className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg z-10 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {item.id}
                  </div>
                  {/* Glow ring */}
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.gradient} opacity-20 blur-xl group-hover:opacity-30 transition-opacity`}
                  ></div>
                </div>

                {/* Content card */}
                <div className="flex-1 pt-2 pb-8">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Detail list */}
                    <ul className="space-y-2">
                      {item.details.map((detail, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-500"
                        >
                          <FaCheckCircle
                            className={`text-transparent bg-clip-text bg-gradient-to-br ${item.gradient} text-xs`}
                          />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            to="/methodology"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
          >
            <span>Explore our methodology</span>
            <FaArrowRight className="text-sm group-hover:translate-x-1.5 transition-transform" />
          </Link>
          <p className="text-sm text-gray-400 mt-4">
            *Every project follows this framework, adapted to your specific
            needs
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(PerformanceFramework);
