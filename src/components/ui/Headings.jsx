import React from "react";

const Headings = ({black, colored}) => {
  return (
    <div >
      <h2 className=" text-2xl sm:text-3xl lg:text-3xl font-medium text-gray-900 leading-tight">
        {black}
        <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-700 to-fuchsia-500">
          {colored}
        </span>
      </h2>
    </div>
  );
};

export default Headings;
