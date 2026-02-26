import React from "react";
import { FaRocket, FaClock, FaUsers, FaAward } from "react-icons/fa";


const Stats = () => {
  const stats = [
    {
      icon: FaRocket,
      value: 50,
      label: "Projects Delivered",
      suffix: "+",
      color: "from-blue-600 to-cyan-500",
    },
    {
      icon: FaUsers,
      value: 30,
      label: "Happy Clients",
      suffix: "+",
      color: "from-green-600 to-emerald-500",
    },
    {
      icon: FaAward,
      value: 5,
      label: "Years Experience",
      suffix: "+",
      color: "from-purple-600 to-pink-500",
    },
    {
      icon: FaClock,
      value: 24,
      label: "Support",
      suffix: "/7",
      color: "from-orange-600 to-red-500",
    },
  ];

  return (
    <div className="bg-purple-600">
      {/* Stats Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 sm:mb-16">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <Icon className="text-2xl sm:text-3xl text-white mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-white/70">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
