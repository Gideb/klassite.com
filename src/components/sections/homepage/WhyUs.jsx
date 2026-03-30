import {
  FaRocket,
  FaSitemap,
  FaComments,
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { memo } from "react";
import Topicbg from "../../ui/Topicbg";
import Subheading from "../../ui/Subheading";
import Headings from "../../ui/Headings";

const WhyUs = () => {
  const differentiators = [
    {
      id: 1,
      title: "Performance-First",
      icon: FaRocket,
      stat: "2.4x faster",
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      id: 2,
      title: "Scalable Architecture",
      icon: FaSitemap,
      stat: "10x traffic spikes",
      gradient: "from-purple-600 to-pink-500",
    },
    {
      id: 3,
      title: "Transparent Communication",
      icon: FaComments,
      stat: "100% transparency",
      gradient: "from-green-600 to-emerald-500",
    },
    {
      id: 4,
      title: "Long-Term Partnerships",
      icon: FaHandshake,
      stat: "85% retention",
      gradient: "from-orange-600 to-red-500",
    },
  ];

  return (
    <section id="why-us" className="relative w-full py-28 bg-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        {/* Floating Orbs */}{" "}
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-400 rounded-xl mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-fuchsia-300 rounded-xl mix-blend-overlay filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="max-w-3xl mb-20">
          <Topicbg topic="Why Choose Us" />

          <Headings black="  Built for performance. " />
          <Headings colored=" Designed for long-term growth." />

          <Subheading
            description="We don’t just ship websites — we build scalable digital
            infrastructure that supports serious business growth."
          />
        </div>
        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group bg-white/70 border border-white/80 
                       rounded-2xl p-8 
                       backdrop-blur-md
                       transition-all duration-300
                       hover:bg-white/30 hover:-translate-y-2 hover:shadow-xs hover:shadow-purple-600"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div
                    className="w-12 h-12 rounded-xl bg-white/90 
                              flex items-center justify-center
                              transition-all duration-300
                              group-hover:bg-purple-600/80 "
                  >
                    <Icon className="text-xl text-purple-500 group-hover:text-white/90 transition-colors" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {item.title}
                </h3>

                {/* Stat */}
                <p className="text-sm text-gray-600">{item.stat}</p>
              </div>
            );
          })}
        </div>
        {/* CTA */}
        <div className="mt-20">
          <Link
            to="/about"
            className="inline-flex items-center gap-3 
                   bg-purple-600 hover:bg-purple-500
                   px-7 py-3 rounded-xl
                   font-medium
                   transition-all duration-300 group hover:scale-105 text-white"
          >
            Let’s Build Together
            <FaArrowRight className="text-sm transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default memo(WhyUs);
