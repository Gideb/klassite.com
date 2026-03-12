import {
  FaMousePointer,
  FaChartLine,
  FaClock,
  FaCheckCircle,
  FaUsers,
} from "react-icons/fa";

import { memo } from "react";

const ProblemStatement = () => {
  const problems = [
    {
      icon: FaClock,
      title: "Slow Websites",
      description: "Costing you revenue daily",
      stat: "53% of users abandon sites loading >3s",
      color: "amber",
      gradient: "from-fuchsia-500 to-purple-700",
    },
    {
      icon: FaMousePointer,
      title: "Poor User Experience",
      description: "Driving customers away",
      stat: "88% won't return after bad UX",
      color: "amber",
      gradient: "from-fuchsia-500 to-purple-700",
    },
    {
      icon: FaChartLine,
      title: "Weak SEO Performance",
      description: "Hiding you from customers",
      stat: "75% never scroll past page 1",
      color: "amber",
      gradient: "from-fuchsia-500 to-purple-700",
    },
    {
      icon: FaUsers,
      title: "Disconnected Systems",
      description: "Wasting time & resources",
      stat: "Businesses lose 20-30% revenue to inefficiency",
      color: "amber",
      gradient: "from-fuchsia-500 to-purple-700",
    },
  ];

  return (
    <section
      id="problem"
      className="scroll-mt-24 py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-linear-to-t from-purple-50 via-white/60 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-md font-normal font-[autography] mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-600"></span>
            </span>
            The Reality Check
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-normal text-gray-900 leading-tight">
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

          <p className="text-lg text-gray-600 mt-6">
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
                  <h3 className="text-xl font-normal text-gray-900 mb-2">
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
      </div>
    </section>
  );
};

export default memo(ProblemStatement);
