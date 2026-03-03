import React from 'react'

const SubtleTransition = () => {
  return (
    <div>
     
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-xs text-gray-400">
            Our response
          </span>
        </div>
      </div>
    </div>
  );
}

export default SubtleTransition