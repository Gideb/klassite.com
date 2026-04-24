import React from "react";

const Card = ({ key, title, icon: Icon, description, color }) => {
  return (
    <div
      key={key}
      className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
    >
      <div
        className={`w-14 h-14 rounded-xl bg-${color}-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
      >
        {Icon && (
          <Icon
            className={`w-7 h-7 text-${color}-600 transition duration-400  group-hover:rotate-6 hover:scale-105`}
          />
        )}
      </div>
      <h4 className="text-xl font-bold text-gray-900 mb-3">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default Card;
