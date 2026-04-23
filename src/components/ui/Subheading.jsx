import React from "react";

const Subheading = ({ description }) => {
  return (
    <div>
      <p className="mb-6 lg:text-lg text-md  text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default Subheading;
