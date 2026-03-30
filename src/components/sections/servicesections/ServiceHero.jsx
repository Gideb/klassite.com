import React from "react";
import { FaEye } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";

const ServiceHero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-purple-50 via-purple-100/70 to-white">
      {/* Animated Blobs - Abstract shapes for visual interest */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blob 1 - Large purple */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-300/30 rounded-xl mix-blend-multiply filter blur-3xl animate-blob" />
        {/* Blob 2 - Medium pink/purple */}
        <div className="absolute top-20 -right-20 w-72 h-72 bg-purple-400/30 rounded-xl mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        {/* Blob 3 - Bottom center */}
        <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-200/40 rounded-xl mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="text-center space-y-8">
          {/* Big Bold Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
            <span className="bg-linear-to-r from-purple-800 via-purple-700 to-purple-600 bg-clip-text text-transparent">
              Ideas That
            </span>
            <br />
            <span className="bg-linear-to-r from-purple-700 via-purple-600 to-purple-500 bg-clip-text text-transparent">
              Leave a Mark
            </span>
          </h1>

          {/* Description text */}
          <div className="max-w-3xl mx-auto space-y-4 text-gray-600 text-lg sm:text-xl">
            <p className="font-medium">
              We design, build, and elevate brands through powerful digital and
              creative solutions.
            </p>
            <p>
              From high-performing websites to compelling visual content, Klass
              Koncepts helps you stand out and scale with confidence.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              to="/contact"
              className="group relative px-8 py-3.5 bg-linear-to-br from-purple-700 to-fuchsia-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:bg-purple-800 transform transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 flex gap-3 items-center"
            >
              Get a Quote
              <TfiHeadphoneAlt />
              <span className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </Link>
            <Link
              to="/portfolio"
              className="px-8 py-3.5 border-2 border-purple-600 text-purple-700 font-semibold rounded-xl bg-transparent hover:bg-purple-50 hover:border-purple-700 transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 flex gap-3 items-center"
            >
              <FaEye />
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
