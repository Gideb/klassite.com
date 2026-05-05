/* import React from "react";
import { Link } from "react-router-dom";

const Button = ({link, icon:Icon, text}) => {
  return (
    <div className="mt-20">
      <Link
        to={link}
        className="inline-flex items-center gap-3 bg-white text-amber-600 shadow-md hover:shadow-lg px-7 py-3 rounded-xl font-medium transition-all duration-300 group hover:scale-105 "
      >
        {text}

         <Icon className="text-sm transition-transform group-hover:translate-x-1" />
    
      </Link>
    </div>
  );
};

export default Button;
 */

import React from "react";
import { Link } from "react-router-dom";

const Button = ({ link, icon: Icon, text, variant = "primary" }) => {
  const base =
    "md:inline-flex flex items-center gap-2 justify-center gap-2 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1";

  const styles = {
    transparentblue:
      "border border-blue-500 text-blue-700 hover:text-blue-800 shadow-md hover:shadow-lg",
    blue: "bg-blue-600 hover:bg-blue-600 text-white shadow-md hover:shadow-lg",

    transparent:
      "border border-white text-white hover:text-white/50 shadow-md hover:shadow-lg",

    purple:
      "bg-purple-700 hover:bg-purple-600 text-white shadow-md hover:shadow-lg",
    primary:
      "bg-white text-purple-700 border border-gray-100 shadow-md hover:shadow-lg",
    transparentpurple:
      "border border-purple-600 text-purple-600 hover:text-purple-700 shadow-md hover:shadow-lg",

    secondary:
      "bg-white text-amber-600 border border-gray-100 shadow-md hover:shadow-lg",
    amber:
      "bg-amber-500 hover:bg-amber-600 text-black shadow-md hover:shadow-lg",
    transparentamber:
      "border border-amber-400 text-amber-400 hover:text-amber-600 shadow-md hover:shadow-lg",

    tetiary:
      "bg-white text-fuchsia-600 border border-gray-100 shadow-md hover:shadow-lg",
    fuchsia:
      "bg-fuchsia-500 hover:bg-fuchsia-600 text-black shadow-md hover:shadow-lg",
  };

  return (
    <Link to={link} className={`${base} ${styles[variant]} group`}>
      <span>{text}</span>

      {Icon && (
        <Icon className="text-sm transition-transform duration-300 group-hover:translate-x-1 " />
      )}
    </Link>
  );
};

export default Button;
