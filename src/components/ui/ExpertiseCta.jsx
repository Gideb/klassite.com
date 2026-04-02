import React from "react";
import { Link } from "react-router-dom";

const ExpertiseCta = ({ color, header, paragragh, btn1, btn2, tiny, path }) => {
  return (
    <div>
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div
            className={`bg-linear-to-br from-${color}-50 via-${color}-400/30 to-${color}-400/60 rounded-3xl p-12 shadow-lg`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {header}
            </h2>
            <p className="text-md max-w-2xl mx-auto text-gray-600 mb-8">
              {paragragh}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <button
                  className={`bg-${color}-600 hover:bg-${color}-700 text-white font-semibold px-6 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg cursor-pointer`}
                >
                  {btn1}
                </button>
              </Link>
              <Link to={`/${path}`}>
                <button
                  className={`border border-${color}-600 text-${color}-600 hover:bg-${color}-50 font-medium px-6 py-3 rounded-full transition-all text-lg cursor-pointer`}
                >
                  {btn2}
                </button>
              </Link>
            </div>
            <p className="text-gray-500 text-sm mt-3">{tiny}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseCta;
