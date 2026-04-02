import React from "react";

const Headings = ({black, colored}) => {
  return (
    <div>
      <h2 className=" sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
        {black}
        <span className="bg-clip-text text-transparent bg-gray-900">
          {colored}
        </span>
      </h2>
    </div>
  );
};

export default Headings;
