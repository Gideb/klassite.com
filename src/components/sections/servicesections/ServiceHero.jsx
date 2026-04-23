import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../ui/Button";

const ServiceHero = () => {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 leading-tight tracking-tight">
          Not just services —{" "}
          <span className="text-purple-600">solutions that work</span>
        </h1>
        {/* Supporting text */}
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          We design and build with intention—focusing on performance, growth,
          and real business impact, not just aesthetics.
        </p>
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
              className="group p-5 rounded-xl border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all duration-300"
            >
              <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        {/* CTA */}

        <div className="mt-12">
          <Button
            link="/contact"
            text="Start Your Project"
            icon={FaArrowRight}
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
