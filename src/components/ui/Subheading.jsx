import React from "react";

const Subheading = ({ description }) => {
  return (
    <div>
      <p className="mb-6 text-lg text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default Subheading;
