import {
  FaMousePointer,
  FaChartLine,
  FaClock,
  FaCheckCircle,
  FaUsers,
} from "react-icons/fa";

import { memo } from "react";
import Topicbg from "../../ui/Topicbg";
import Headings from "../../ui/Headings";
import Subheading from "../../ui/Subheading";

const ProblemStatement = () => {
  const problems = [
    {
      icon: FaClock,
      title: "Slow Websites",
      description: "Costing you revenue daily",
      stat: "53% of users abandon sites loading >3s",
      
      
    },
    {
      icon: FaMousePointer,
      title: "Poor User Experience",
      description: "Driving customers away",
      stat: "88% won't return after bad UX",
     
     
    },
    {
      icon: FaChartLine,
      title: "Weak SEO Performance",
      description: "Hiding you from customers",
      stat: "75% never scroll past page 1",
      
     
    },
    {
      icon: FaUsers,
      title: "Disconnected Systems",
      description: "Wasting time & resources",
      stat: "Businesses lose 20-30% revenue to inefficiency",
     
      },
  ];

  return (
    <section
      id="problem"
      className="scroll-mt-24 py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Topicbg topic="The Reality Check" />

          <Headings black="Most Businesses Don't Have A Website Problem." />
          <Headings colored="They Have A Performance Problem." />

          <Subheading
            description="If your digital presence isn't performing, you're leaving money on
            the table. Here's what's holding you back."
          />
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
                  className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 bg-gray-700 rounded-xl mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg"
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
