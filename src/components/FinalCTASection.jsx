import React from "react";
import {
  FaRocket,
  FaCalendarAlt,
  FaArrowRight,
  FaCheckCircle,
  FaStar,
  FaShieldAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FinalCTASection = () => {
  const benefits = [
    "Custom strategy tailored to your goals",
    "Performance-driven development",
    "Dedicated support team",
    "Scalable solutions that grow with you",
  ];

  const guarantees = [
    "No-obligation consultation",
    "Transparent pricing",
    "100% satisfaction guaranteed",
  ];

  return (
    <section
      id="final-cta"
      className="scroll-mt-24 py-20 sm:py-24 lg:py-28 bg-white text-purple-700 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl sm:rounded-4xl p-8 sm:p-12 lg:p-16 border border-white/20 shadow-2xl">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
            {/* Rocket Icon Animation */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 animate-bounce">
              <FaRocket className="text-2xl text-black" />
            </div>

            <h2 className="text-2xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-4">
              Ready to Build a{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-300 to-amber-500">
                Digital Platform
              </span>
              <br />
              That Performs?
            </h2>

            <p className="text-lg sm:text-xl text-purple-700 max-w-2xl mx-auto">
              Let's design a system that drives measurable growth for your
              business.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8 lg:mb-10 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-black/90"
              >
                <FaCheckCircle className="text-green-300 text-lg shrink-0" />
                <span className="text-sm sm:text-base">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mb-8">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-fuchsia-200 text-purple-900 px-8 sm:px-12 py-4 sm:py-5 rounded-full font-normal text-lg sm:text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <FaCalendarAlt className="text-purple-600 group-hover:rotate-12 transition-transform" />
              <span>Schedule a Strategy Call</span>
              <FaArrowRight className="text-purple-600 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Guarantees */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-purple-800">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-center gap-2">
                <FaShieldAlt className="text-fuchsia-500" />
                <span>{guarantee}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
          </div>
          <p className="text-purple-700 text-sm">
            Join 50+ businesses that have already transformed their digital
            presence
          </p>
        </div>
      </div>

      {/* Add keyframe animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(10px) translateX(-10px);
          }
          75% {
            transform: translateY(-10px) translateX(20px);
          }
        }
      `}</style>
    </section>
  );
};

export default FinalCTASection;
