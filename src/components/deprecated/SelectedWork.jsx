import React from "react";
import { Link } from "react-router-dom";
import projectImg from "../../../assets/images/portfolio/klass.jpeg";
import Topicbg from "../ui/Topicbg";
import Subheading from "../ui/Subheading";
import Headings from "../ui/Headings";

const projects = [
  {
    id: 1,
    title: "Code University Website",
    description:
      "Modern Programming University Website featuring offered programmes at all levels.",
    stack: ["React", "Tailwind", "Node.js"],
    image: projectImg,
    caseStudy: "https://my_portfolio.com/works/codeuni",
  },
  {
    id: 2,
    title: "Computing Learning Portal",
    description:
      "Responsive and structural modern learning portal system designed to teach most computing courses from amateur to mastery.",
    stack: ["JavaScript", "PHP", "MySQL"],
    image: projectImg,
    caseStudy: "https://my_portfolio.com/works/utsportal",
  },
  {
    id: 3,
    title: "Free Movie Downloading Website",
    description: "React movie website Incorporated with Restful APIs.",
    stack: ["React", "RestAPI"],
    image: projectImg,
    caseStudy: "https://my_portfolio.com/works/moviesite",
  },
];

const SelectedWork = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="text-left mb-14">
          <Topicbg color="purple" topic="Selected Work" />
          <Headings black="Our Work" />
          <Subheading description="A glimpse into some of the solutions we've built for our clients" />
        </div>

        {/* grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              {/* image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 hover:scale-105 transition duration-500"
                />
              </div>
              {/* content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* actions */}
                <div className="flex gap-3">
                  <a
                    href={project.caseStudy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm mt-3 font-semibold text-red-600  hover:text-fuchsia-500 "
                  >
                    View Case Study →
                  </a>

                  <Link
                    to="/contact"
                    className="text-sm font-semibold text-gray-700 hover:text-gray-900 mt-3"
                  >
                    Get Similar
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* view more */}
        <div className="lg:text-right mt-20 transition duration-300 ease-in-out hover:-translate-y-1 text-center ">
          <a
            href="https://my-portfolio.com"
            target="_blank"
            rel="noopener noreferral"
            className="text-fuchsia-600 font-semibold shadow-md py-4 px-6 rounded-xl hover:shadow-lg"
          >
            View More Projects →
          </a>
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
