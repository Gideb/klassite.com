import React from "react";
import { FaEye, FaPen } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";

const ServiceHero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-purple-50 via-purple-100/70 to-white">
    

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
              className="group relative px-8 py-3 bg-white font-medium rounded-xl shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring focus:ring-purple-500 focus:ring-offset flex gap-3 items-center"
            >
              Get a Quote
              <FaPen />
              <span className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </Link>
            <Link
              to="/portfolio"
              className="px-8 py-3 text-white bg-black font-medium rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring focus:ring-purple-500 focus:ring-offset flex gap-3 items-center"
            >
              
              View Our Work
              <FaEye />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
