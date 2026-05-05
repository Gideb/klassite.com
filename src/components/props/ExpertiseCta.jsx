import React from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { FaArrowRight } from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";

const ExpertiseCta = ({ color, header, paragragh, buttonText1, buttonText2, disclaimer, path }) => {
  return (
    <div>
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div
            className={`bg-linear-to-br from-${color}-50 via-${color}-100/50 to-${color}-100 rounded-3xl p-12 shadow-lg`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {header}
            </h2>
            <p className="text-md max-w-2xl mx-auto text-gray-600 mb-8">
              {paragragh}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                link="/contact"
                text={buttonText1}
                icon={FaArrowRight}
                variant={color}
              />
              <Button
                link={`/${path}`}
                text={buttonText2}
                icon={FaDiagramProject}
                variant={`transparent${color}`}
              />
            </div>
            <p className="text-gray-500 text-sm mt-3">{disclaimer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseCta;
