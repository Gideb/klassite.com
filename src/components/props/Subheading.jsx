import React from "react";

const Subheading = ({ description, isLight = false }) => {
  return (
    <div>
      <p className={`mb-6 lg:text-lg text-md ${isLight ? 'text-gray-200' : 'text-gray-600'}  leading-relaxed`}>
        {description}
      </p>
    </div>
  );
};

export default Subheading;
