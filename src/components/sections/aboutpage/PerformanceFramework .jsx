import { memo, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { HiOutlineCheckCircle } from "react-icons/hi";
import Topicbg from "../../ui/Topicbg";
import Subheading from "../../ui/Subheading";
import Headings from "../../ui/Headings";

const PerformanceFramework = () => {
  const sectionRef = useRef(null);
  const frameworks = [
    {
      id: "01",
      title: "Strategic Architecture",
      description:
        "We map your business goals to technical requirements before writing a single line of code.",

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
        "Every interaction is engineered for speed and clarity. Optimized for how users actually behave.",

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
        "Clean code that grows with you. Handles traffic spikes and future integration without breaking.",

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
        "Launch is just the beginning. We continuously refine based on real data.",

      details: [
        "Data-driven refinement",
        "Performance monitoring",
        "Continuous improvement",
      ],
    },
  ];

  // Split frameworks into two columns
  const leftColumnFrameworks = frameworks.slice(0, 2); // First two items
  const rightColumnFrameworks = frameworks.slice(2, 4); // Last two items

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 bg-white overflow-hidden"
    >
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Topicbg topic="Systematic Approach" />

          <Headings black="Our" colored=" Performance Framework" />

          <Subheading
            description=" A repeatable process that turns technical complexity into measurable
            business growth."
          />
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - First Two Items */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {leftColumnFrameworks.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="relative flex gap-6 group"
              >
                {/* Number badge */}
                <div className="shrink-0">
                  <div
                    className={`w-14 h-14 rounded-xl bg-black flex items-center justify-center text-white font-semibold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {item.id}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-6 border-b border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{item.description}</p>

                  <ul className="space-y-1">
                    {item.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-500"
                      >
                        <HiOutlineCheckCircle
                          className={`text-transparent bg-clip-text bg-linear-to-br ${item.gradient} text-sm`}
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

            {/* Optional: Add some decorative element for left column */}
            <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-1 h-48 bg-linear-to-b from-purple-600 via-fuchsia-500 to-transparent rounded-xl opacity-20"></div>
          </motion.div>

          {/* Right Column - Last Two Items */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 lg:mt-16" // Added margin top for visual interest
          >
            {rightColumnFrameworks.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.2 }}
                className="relative flex gap-6 group"
              >
                {/* Number badge */}
                <div className="shrink-0">
                  <div
                    className={`w-14 h-14 rounded-xl bg-amber-600 flex items-center justify-center text-white font-semibold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {item.id}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-6 border-b border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{item.description}</p>

                  <ul className="space-y-1">
                    {item.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-500"
                      >
                        <HiOutlineCheckCircle
                          className={`text-transparent bg-clip-text bg-linear-to-br ${item.gradient} text-sm`}
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

            {/* Optional: Add some decorative element for right column */}
            <div className="hidden lg:block absolute right-0 bottom-0 w-32 h-32 bg-linear-to-tl from-fuchsia-200 to-purple-200 rounded-xl filter blur-3xl opacity-30"></div>
          </motion.div>
        </div>

        {/* Optional: Add a connecting line or decorative element between columns */}
        <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-y-1/2 w-px h-64 bg-linear-to-b from-transparent via-purple-300 to-transparent"></div>

        {/* Bottom CTA or decorative element */}
        {/*    <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 bg-purple-50 px-6 py-3 rounded-xl">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-xl bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-xl h-3 w-3 bg-purple-600"></span>
            </span>
            <span className="text-sm text-gray-600">
              <span className="font-semibold text-purple-600">
                4 proven phases
              </span>{" "}
              to transform your digital presence
            </span>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default memo(PerformanceFramework);
