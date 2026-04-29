import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../ui/Button";
import Subheading from "../../props/Subheading";

const ServiceHero = () => {
  return (
    <section className="bg-linear-to-r from-fuchsia-800 via-fuchsia-700 to-fuchsia-800 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-100 leading-tight tracking-tight">
          Not Just Services —{" "}
          <span className="text-purple-300">Solutions That Work</span>
        </h1>

        <div className=" max-w-2xl mx-auto leading-relaxed">
          <p className="text-white">
            {" "}
            We design and build with intention—focusing on performance, growth,
            and real business impact, not just aesthetics.
          </p>
        </div>

        {/* 3 Key Points */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6 text-left">
          {[
            {
              title: "Strategy First",
              desc: "Every decision is guided by clear thinking and purpose.",
            },
            {
              title: "Built to Convert",
              desc: "Designed to drive engagement, action, and results.",
            },
            {
              title: "Tailored Approach",
              desc: "Every solution is crafted specifically for your brand.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group p-5 rounded-xl border border-gray-200 hover:border-purple-200 hover:shadow-sm  shadow-white transition-all duration-300"
            >
              <h3 className="font-semibold text-gray-100 group-hover:text-gray-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Button
            link="/contact"
            text="Start Your Project"
            icon={FaArrowRight}
            variant="tetiary"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
