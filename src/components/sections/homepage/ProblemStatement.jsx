import {
  FaRocket,
  FaMousePointer,
  FaChartLine,
  FaClock,
  FaCheckCircle,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { memo } from "react";

const ProblemStatement = () => {
  const problems = [
    {
      icon: FaClock,
      title: "Slow Websites",
      description: "Costing you revenue daily",
      stat: "53% of users abandon sites loading >3s",
      color: "fuchsia",
      gradient: "from-fuchsia-500 to-rose-500",
    },
    {
      icon: FaMousePointer,
      title: "Poor User Experience",
      description: "Driving customers away",
      stat: "88% won't return after bad UX",
      color: "green",
      gradient: "from-green-500 to-yellow-500",
    },
    {
      icon: FaChartLine,
      title: "Weak SEO Performance",
      description: "Hiding you from customers",
      stat: "75% never scroll past page 1",
      color: "amber",
      gradient: "from-orange-500 to-amber-400",
    },
    {
      icon: FaUsers,
      title: "Disconnected Systems",
      description: "Wasting time & resources",
      stat: "Businesses lose 20-30% revenue to inefficiency",
      color: "purple",
      gradient: "from-purple-500 to-fuchsia-500",
    },
  ];

  return (
    <section
      id="problem"
      className="scroll-mt-24 py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-linear-to-br from-purple-50 via-white/60 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Small label for context */}
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium w-fit mx-auto lg:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-600"></span>
            </span>
            The Reality Check
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Most Businesses Don't Have a{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-700 to-fuchsia-500">
              Website Problem.
            </span>
            <br />
            They Have a{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-fuchsia-700 to-fuchsia-500">
              Performance Problem
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            If your digital presence isn't performing, you're leaving money on
            the table. Here's what's holding you back.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                {/* Background gradient on Hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${problem.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 bg-linear-to-br ${problem.gradient} rounded-xl mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                  >
                    <Icon className="text-2xl text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {problem.description}
                  </p>

                  {/* Stat with checkmark */}
                  <div className="flex items-start gap-2 bg-purple-50/50 p-3 rounded-lg">
                    <FaCheckCircle
                      className={`text-${problem.color}-600 text-sm mt-0.5 shrink-0`}
                    />
                    <p className="text-xs font-medium text-gray-700">
                      {problem.stat}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

       
        {/* <div className="text-center max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-xl border border-gray-100"> */}
          {/* <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Here's the good news
          </div> */}

         {/*  <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Every problem has a solution.
            <span className="block bg-clip-text text-transparent bg-linear-to-r from-purple-700 to-fuchsia-500 mt-2">
              We build intelligent digital architecture that solves all of this.
            </span>
          </p> */}

          {/* <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[
              { text: "⚡ Lightning Fast", color: "purple" },
              { text: "🎯 UX Optimized", color: "fuchsia" },
              { text: "🔍 SEO Ready", color: "purple" },
              { text: "🔄 Fully Integrated", color: "fuchsia" },
            ].map((feature, index) => (
              <span
                key={index}
                className={`px-5 py-2.5 bg-linear-to-r from-${feature.color}-50 to-${feature.color}-100 text-${feature.color}-700 rounded-full text-sm font-medium border border-${feature.color}-200 shadow-sm`}
              >
                {feature.text}
              </span>
            ))}
          </div> */}

          {/* CTA */}
          {/* <div className="mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 bg-linear-to-r from-purple-600 to-fuchsia-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              <span>Fix Your Performance Issues</span>
              <FaRocket className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              Free consultation • No obligation • 30-minute strategic call
            </p>
          </div> */}
       {/*  </div>  */}
      </div>


   
    </section>
  );
};

export default memo(ProblemStatement);
