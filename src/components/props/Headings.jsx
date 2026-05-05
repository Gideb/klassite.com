import React from "react";

const Headings = ({ black }) => {
  return (
    <div>
      <h2 className=" text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-4 leading-none">
        {black}
      </h2>
    </div>
  );
};

export default Headings;
