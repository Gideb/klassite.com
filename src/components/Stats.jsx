import { GoRocket } from "react-icons/go";
import { LiaAwardSolid } from "react-icons/lia";
import { WiTime4 } from "react-icons/wi";
import { PiUsersThreeLight } from "react-icons/pi";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import team from "../assets/images/serviceSpecific/teamWorking.jpg";

const Stats = () => {
  const stats = [
    {
      icon: GoRocket,
      value: 90,
      suffix: "+",
      label: "Projects",
      color: "from-amber-600 to-amber-600",
      duration: 8,
    },
    {
      icon: PiUsersThreeLight,
      value: 60,
      suffix: "+",
      label: "Clients",
      color: "from-amber-600 to-amber-600",
      duration: 8,
    },
    {
      icon: LiaAwardSolid,
      value: 4,
      suffix: "+",
      label: "Years",
      color: "from-amber-600 to-amber-600",
      duration: 5,
    },
    {
      icon: WiTime4,
      value: 24,
      suffix: "/7",
      label: "Support",
      color: "from-amber-600 to-amber-600",
      duration: 8,
    },
  ];

  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      {/* Quick Stats - Simple row */}
      <div
        ref={statsRef}
        className="relative mb-20 rounded-3xl overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={team}
            alt="Team working"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-purple-900/60 backdrop-blur-sm"></div>
        </div>

        {/* Stats Content */}
        <div ref={statsRef} className="relative z-10 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mx-5">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={index}
                  className="relative shadow-sm hover:shadow-md transition-all duration-300 bg-white/30 backdrop-blur-md border border-white/30 p-5 rounded-2xl hover:scale-105 hover:bg-white/40 mx-2"
                >
                  {/* Faded index number */}
                  <span className="absolute bottom-3 right-5 text-3xl font-semibold text-gray-200 opacity-40">
                    00{index + 1}
                  </span>

                  {/* Top Row */}
                  <div className="flex items-center justify-between mb-6">
                    {/* Stat Number */}
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-100 leading-none">
                        {statsInView ? (
                          <>
                            <CountUp
                              end={stat.value}
                              duration={stat.duration}
                            />
                            {stat.suffix}
                          </>
                        ) : (
                          `0${stat.suffix}`
                        )}
                      </h3>
                    </div>

                    {/* Soft Icon Circle */}
                    <div
                      className="w-12 h-12 rounded-xl bg-white 
                                  flex items-center justify-center 
                                  shadow-sm"
                    >
                      <Icon className="text-gray-700 text-xl" />
                    </div>
                  </div>

                  {/* Label */}
                  <div className="flex items-start gap-3">
                    <span className="text-xl leading-none text-gray-100  opacity-90 ">
                      •
                    </span>
                    <p className="text-gray-100 opacity-90 text-sm ">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
