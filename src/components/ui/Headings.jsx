import React from "react";

const Headings = ({black, colored}) => {
  return (
    <div >
      <h2 className=" text-2xl sm:text-3xl lg:text-3xl font-medium text-black leading-tight">
        {black}
        <span className="bg-clip-text text-transparent bg-black">
          {colored}
        </span>
      </h2>
    </div>
  );
};

export default Headings;
