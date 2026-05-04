import React from "react";

const ServiceFeatureCard = ({
  color = "amber",
  icon: Icon,
  title,
  description,
  className = "",
}) => {
  const colorStyles = {
    amber: {
      bg: "bg-amber-100",
      text: "text-amber-600",
    },
    purple: {
      bg: "bg-purple-100",
      text: "text-purple-600",
    },

  };

  const selectedColor = colorStyles[color] || colorStyles.amber;

  return (
    <div
      className={`flex gap-3 p-4 rounded-xl bg-gray-50/50 hover:bg-gray-50 transition-colors ${className}`}
    >
      <div
        className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${selectedColor.bg} ${selectedColor.text}`}
      >
        <Icon className="text-lg" />
      </div>

      <div>
        <h4 className="font-semibold text-gray-800 text-sm mb-1">{title}</h4>
        <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceFeatureCard;
