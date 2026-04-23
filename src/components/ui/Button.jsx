import React from "react";
import { Link } from "react-router-dom";

const Button = ({link, icon, text}) => {
  return (
    <div className="mt-20">
      <Link
        to={link}
        className="inline-flex items-center gap-3 bg-white text-amber-600 shadow-md hover:shadow-lg px-7 py-3 rounded-xl font-medium transition-all duration-300 group hover:scale-105 "
      >
        {text}

        <div className="text-sm transition-transform group-hover:translate-x-1">
          {`<Fa${icon} />`}
        </div>
      </Link>
    </div>
  );
};

export default Button;
