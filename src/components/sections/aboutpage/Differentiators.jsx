import { memo, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import {
  FaRocket,
  FaBrain,
  FaChartLine,
  FaHandshake,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Topicbg from "../../ui/topicbg";
import Subheading from "../../ui/Subheading";
import Headings from "../../ui/Headings";

const Differentiators = () => {
  const differentiators = [
    {
      icon: FaRocket,
      title: "Performance-First Engineering",
      description:
        "We don't bolt on speed—we build it in. Every decision prioritizes load times, Core Web Vitals, and user experience. The result? Sites that load 2.4x faster than industry average.",
      gradient: "from-purple-600 to-fuchsia-600",
      bgLight: "bg-purple-50",
      iconColor: "text-purple-600",
      metric: "2.4x faster",
      metricColor: "text-purple-600",
    },
    {
      icon: FaBrain,
      title: "Systems Thinking",
      description:
        "Your digital presence isn't isolated. We architect for how your business actually works—tools, teams, and workflows included. No more disconnected tools or siloed data.",
      gradient: "from-blue-600 to-cyan-500",
      bgLight: "bg-blue-50",
      iconColor: "text-blue-600",
      metric: "100% integrated",
      metricColor: "text-blue-600",
    },
    {
      icon: FaChartLine,
      title: "Measurable Outcomes",
      description:
        "If it doesn't move a metric, we don't do it. Every feature ties back to conversion rates, engagement, or revenue. We're obsessed with ROI, not just aesthetics.",
      gradient: "from-green-600 to-emerald-500",
      bgLight: "bg-green-50",
      iconColor: "text-green-600",
      metric: "43% avg. uplift",
      metricColor: "text-green-600",
    },
    {
      icon: FaHandshake,
      title: "Long-Term Partnerships",
      description:
        "We're not interested in one-off projects. We build relationships that evolve as your business grows. 85% of our clients have worked with us for 2+ years.",
      gradient: "from-orange-600 to-red-500",
      bgLight: "bg-orange-50",
      iconColor: "text-orange-600",
      metric: "85% retention",
      metricColor: "text-orange-600",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
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

  return (
    <section className="relative w-full py-20 sm:py-22 bg-white/90 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-fuchsia-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Topicbg topic="Why Choose Us" />

          <Headings black="Why Growth-Focused Brands " colored="   Choose Us" />

          <Subheading
            description=" We don't just build websites—we build competitive advantages that
            drive real business results."
          />
        </motion.div>

        {/* 2x2 Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 gap-6 lg:gap-8"
        >
          {differentiators.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* linear background on hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with background */}
                  <div
                    className={`flex items-center justify-center w-14 h-14 rounded-xl ${item.bgLight} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`text-2xl ${item.iconColor}`} />
                  </div>

                  {/* Title and metric */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <span
                      className={`text-sm font-semibold ${item.metricColor} bg-white px-2 py-1 rounded-full border border-gray-100`}
                    >
                      {item.metric}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bottom accent */}
                  <div
                    className={`absolute -bottom-8 left-0 right-0 h-1 bg-linear-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  ></div>
                </div>

                {/* Decorative corner */}
                <div
                  className={`absolute -top-2 -right-2 w-12 h-12 bg-linear-to-br ${item.gradient} opacity-10 rounded-bl-full`}
                ></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-2xl shadow-md border border-gray-100">
            <span className="text-gray-700 font-medium">
              Ready to experience the difference?
            </span>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              <span>Let's build together</span>
              <FaArrowRight className="text-sm group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Join 30+ businesses that have scaled with us
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Differentiators);
