import { memo } from "react";
import { FiTrendingDown, FiClock, FiWifi, FiUsers } from "react-icons/fi";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Topicbg from "../../ui/Topicbg";
import Headings from "../../ui/Headings";
import Subheading from "../../ui/Subheading";

const MarketReality = () => {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const problems = [
    {
      text: "Slow page loads kill 53% of mobile visits",
      icon: FiClock,
      stat: "53%",
      color: "text-red-500",
    },
    {
      text: "Poor architecture limits scaling potential",
      icon: FiWifi,
      stat: "Limited",
      color: "text-orange-500",
    },
    {
      text: "Disconnected tools create data silos",
      icon: FiUsers,
      stat: "Isolated",
      color: "text-orange-500",
    },
    {
      text: "Outdated tech increases security risks",
      icon: FiTrendingDown,
      stat: "At Risk",
      color: "text-red-500",
    },
  ];

  const stats = [
    {
      label: "Conversion Drop",
      value: 2.4,
      suffix: "%",
      prefix: "↓ ",
      desc: "per second delay",
      color: "text-red-600",
      duration: 2.5,
    },
    {
      label: "Bounce Rate",
      value: 32,
      suffix: "%",
      prefix: "↑ ",
      desc: "on slow sites",
      color: "text-orange-600",
      duration: 2.5,
    },
    {
      label: "Scale Limit",
      value: 10,
      suffix: "x",
      prefix: "",
      desc: "traffic spikes",
      color: "text-orange-600",
      duration: 2,
    },
    {
      label: "Revenue Loss",
      value: 1.6,
      suffix: "B",
      prefix: "$",
      desc: "annual (est.)",
      color: "text-red-600",
      duration: 3,
    },
  ];

  return (
    <section className="relative w-full py-20 sm:py-24 bg-purple-50/70">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-xl mb-8">
          <Topicbg topic="Market Reality" />
          <Headings
            black="The Hidden Cost of "
            colored=" Weak Digital Infrastructure"
          />

          <Subheading description="  In today's digital landscape, speed isn't just a feature—it's the price of entry. Yet most businesses operate on foundations that can't keep up." />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-3">
            <ul className="space-y-4">
              {problems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="shrink-0 w-6 h-6 mt-0.5">
                      <Icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                    <span
                      className={`font-mono font-semibold ${item.color}`}
                    ></span>
                  </li>
                );
              })}
            </ul>

            <p className="text-gray-600 italic border-l-4 border-purple-200 pl-4 py-1">
              "Every second your site takes to load costs you conversions,
              trust, and market position."
            </p>
          </div>

          {/* Right Column - Stats Cards with CountUp */}
          <div ref={statsRef} className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xs transition-shadow shadow-red-300 "
              >
                <div className={`text-2xl font-semibold ${stat.color} mb-1 `}>
                  {stat.prefix}
                  {statsInView ? (
                    <CountUp
                      end={stat.value}
                      duration={stat.duration}
                      decimals={stat.value % 1 !== 0 ? 1 : 0}
                    />
                  ) : (
                    `0${stat.suffix}`
                  )}
                  {stat.suffix}
                </div>
                <div className="font-medium text-gray-900 text-sm mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500">{stat.desc}</div>
              </div>
            ))}

            {/* Performance Gap Chart with CountUp */}
            <div className="col-span-2 bg-white p-6 rounded-xl border border-red-200 mt-2 shadow-md">
              <div className="text-sm font-medium text-gray-700 mb-4 ">
                Performance Gap (seconds)
              </div>

              {/* Competitors Bar */}
              <div className="mb-3">
                <div className="flex justify-between text-xs mb-1">
                  <span>Your competitors</span>
                  <span className="font-mono">
                    {statsInView ? (
                      <CountUp end={0.8} duration={2} decimals={1} />
                    ) : (
                      "0.0"
                    )}
                    s
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full transition-all duration-1000"
                    style={{ width: statsInView ? "75%" : "0%" }}
                  ></div>
                </div>
              </div>

              {/* Average Bar */}
              <div className="mb-3">
                <div className="flex justify-between text-xs mb-1">
                  <span>Average site</span>
                  <span className="font-mono">
                    {statsInView ? (
                      <CountUp end={2.4} duration={2.5} decimals={1} />
                    ) : (
                      "0.0"
                    )}
                    s
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-500 rounded-full transition-all duration-1000 delay-100"
                    style={{ width: statsInView ? "50%" : "0%" }}
                  ></div>
                </div>
              </div>

              {/* Slow Sites Bar */}
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Slow sites</span>
                  <span className="font-mono">
                    {statsInView ? (
                      <CountUp end={5.2} duration={3} decimals={1} />
                    ) : (
                      "0.0"
                    )}
                    s
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red-500 rounded-full transition-all duration-1000 delay-200"
                    style={{ width: statsInView ? "25%" : "0%" }}
                  ></div>
                </div>
              </div>

              {/* Impact Summary with CountUp */}
              <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-sm font-bold text-gray-900">
                    {statsInView ? (
                      <CountUp end={53} duration={2.5} suffix="%" />
                    ) : (
                      "0%"
                    )}
                  </div>
                  <div className="text-xs text-gray-500">bounce increase</div>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">
                    {statsInView ? (
                      <CountUp end={32} duration={2.5} suffix="%" />
                    ) : (
                      "0%"
                    )}
                  </div>
                  <div className="text-xs text-gray-500">fewer conversions</div>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">
                    {statsInView ? (
                      <CountUp end={44} duration={2.5} suffix="%" />
                    ) : (
                      "0%"
                    )}
                  </div>
                  <div className="text-xs text-gray-500">
                    lower satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(MarketReality);
