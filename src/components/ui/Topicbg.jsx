import React from "react";

const Topicbg = ({ topic }) => {
  return (
    <div className="inline-flex items-center gap-2 bg-purple-100 border border-purple-500 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-3 uppercase tracking-wider">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
      </span>
      {topic}
    </div>
  );
};

export default Topicbg;
