import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { LuZap } from "react-icons/lu";
import ServiceFeatureCard from "./ServiceFeatureCard";

const AlternatingServiceSection = ({
  color = "amber",
  title,
  description,
  image,
  link,
  features,
  reverse = false,
  badgeText = "Service",
  badgeIcon: BadgeIcon = LuZap,
  imageAlt = "",
  imageHeight = "h-80 md:h-100",
  ctaText = "Learn more about",
  className = "",
  imageClassName = "",
  contentClassName = "",
}) => {
  // Extract first word from title for CTA
  const getFirstWord = (text) => {
    return text.split(" ")[0];
  };

  const colorStyles = {
    amber: {
      bg: "bg-amber-100",
      text: "text-amber-700",
    },
    purple: {
      bg: "bg-purple-100",
      text: "text-purple-700",
    },
 
  };

  const selectedColor = colorStyles[color] || colorStyles.amber;

  return (
    <div
      className={`grid md:grid-cols-2 gap-12 lg:gap-16 items-center ${className}`}
    >
      {/* Image Column */}
      <div className={`${reverse ? "md:order-2" : ""} ${imageClassName}`}>
        <div className="relative group">
          <div
            className={`absolute -inset-1 ${selectedColor.text} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500`}
          />
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={image}
              alt={imageAlt || title}
              className={`w-full ${imageHeight} object-cover transition-transform duration-700 group-hover:scale-105`}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Content Column */}
      <div className={`${reverse ? "md:order-1" : ""} ${contentClassName}`}>
        <div
          className={`inline-flex items-center gap-2 ${selectedColor.text} ${selectedColor.bg} px-3 py-1 rounded-full text-xs font-medium mb-4`}
        >
          {BadgeIcon && <BadgeIcon className="text-xs" />}
          <span>{badgeText}</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h2>

        <p className="text-gray-600 leading-relaxed mb-6">{description}</p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {features.map((feature, idx) => (
            <ServiceFeatureCard color={color} key={idx} {...feature} />
          ))}
        </div>

        <Link
          to={link}
          className={`inline-flex items-center gap-2 ${selectedColor.text} font-medium hover:gap-3 transition-all group`}
        >
          {ctaText} {getFirstWord(title)}
          <FaArrowRight className="text-sm group-hover:translate-x-1 transition" />
        </Link>
      </div>
    </div>
  );
};

export default AlternatingServiceSection;
