import React from "react";
import { FaEye } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";

const ServiceHero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-purple-50 via-purple-100/70 to-white">
    

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
              className="group relative px-8 py-3.5 bg-white  font-semibold rounded-xl shadow-md hover:shadow-lg hover:bg-purple-800 transform transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring focus:ring-purple-500 focus:ring-offset flex gap-3 items-center"
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
