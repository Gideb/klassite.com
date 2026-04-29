import React from "react";

const DiffPageColors = ({ color, topic }) => {
  //usage
  //  <DiffPageColors color="indigo" topic="Our Philosophy" />

  return (
    <div>
      <div
        className={`inline-flex items-center gap-2 border px-4 py-2 rounded-full text-sm font-medium mb-3 uppercase tracking-wider bg-${color}-100 text-${color}-600 border-${color}-100`}
      >
        <span className="relative flex h-2 w-2">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-${color}-500 opacity-75`}
          ></span>
          <span
            className={`relative inline-flex rounded-full h-2 w-2 bg-${color}-600`}
          ></span>
        </span>
        {topic}
      </div>
    </div>
  );
};

export default DiffPageColors;
