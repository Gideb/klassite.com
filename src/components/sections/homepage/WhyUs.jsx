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
    },
    {
      id: 2,
      title: "Scalable Architecture",
      icon: FaSitemap,
      stat: "10x traffic spikes",
    },
    {
      id: 3,
      title: "Transparent Communication",
      icon: FaComments,
      stat: "100% transparency",
    },
    {
      id: 4,
      title: "Long-Term Partnerships",
      icon: FaHandshake,
      stat: "85% retention",
    },
  ];

  return (
    <section id="why-us" className="relative w-full py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}

        <div className="max-w-3xl mb-10">
          <Topicbg color="purple" topic="Why Choose Us" />
          <div className="max-w-xl ">
            <Headings black="Built for performance. Designed for long-term growth." />
          </div>

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
                className="group bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg shadow-md "
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-18 h-18 rounded-xl bg-purple-100 flex items-center justify-center transition-all duration-300 group-hover:scale-105 ">
                    <Icon className="lg:text-3xl text-2xl text-purple-600    transition-colors" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {item.title}
                </h3>

                {/* Stat */}
                <p className="text-sm text-gray-800">{item.stat}</p>
              </div>
            );
          })}
        </div>
        {/* CTA */}
        <div className="mt-20">
          <Link
            to="/about"
            className="inline-flex items-center gap-3  bg-white  text-purple-600 shadow-md hover:shadow-lg px-7 py-3 rounded-xl font-medium transition-all duration-300 group hover:scale-105 "
          >
            Let’s Build Together
            <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default memo(WhyUs);
