import profile from "../assets/images/profile.jpg";
import {
  FaCode,
  FaBriefcase,
  FaUser,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaJs,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

const AboutFounder = () => {
  const techStack = [
    { icon: SiTypescript, name: "TypeScript", bgColor: "bg-fuchsia-600" },
    { icon: FaReact, name: "React", bgColor: "bg-blue-600" },
    { icon: FaJs, name: "JavaScript", bgColor: "bg-green-600" },
    { icon: SiTailwindcss, name: "Tailwind", bgColor: "bg-yellow-600" },
    { icon: FaNodeJs, name: "Node.js", bgColor: "bg-red-600" },
    { icon: FaGitAlt, name: "Git", bgColor: "bg-purple-600" },
    { icon: FaFigma, name: "Figma", bgColor: "bg-amber-600" },
  ];

  const skills = [
    {
      title: "Full-Stack Engineering",
      desc: "React, Node.js, APIs",
      hoverEffect: "hover:-rotate-3",
    },
    {
      title: "Creative Direction",
      desc: "Branding & Visual Design",
      hoverEffect: "hover:rotate-3",
    },
    {
      title: "Client Focus",
      desc: "Ghana & Global",
      hoverEffect: "hover:rotate-3",
    },
    {
      title: "Delivery Method",
      desc: "Agile & On-Time",
      hoverEffect: "hover:-rotate-3",
    },
  ];

  return (
    <div id="about" className="scroll-mt-24">
      <section className="max-w-7xl mx-auto px-6 sm:px-12 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT – Profile Card */}
          <div className="bg-gray-100 rounded-3xl p-10 shadow border border-gray-300 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 order-2 lg:order-1">
            <div className="relative w-36 h-40 mx-auto mb-6 rounded-2xl bg-linear-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center overflow-hidden group">
              <img
                src={profile}
                alt="Gilbert Larbi Debrah - Founder"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <h3 className="text-2xl font-semibold text-gray-900">
              Gilbert Larbi Debrah
            </h3>
            <p className="text-purple-600 font-medium mt-1">
              Founder & Technical Lead
            </p>

            <div className="flex justify-center gap-3 mt-6 flex-wrap">
              <span className="px-4 py-2 text-sm rounded-full bg-purple-100 text-purple-600 font-medium flex items-center gap-2">
                <FaCode aria-hidden="true" /> Developer
              </span>
              <span className="px-4 py-2 text-sm rounded-full bg-purple-100 text-purple-600 font-medium flex items-center gap-2">
                <FaBriefcase aria-hidden="true" /> Founder
              </span>
              <span className="px-4 py-2 text-sm rounded-full bg-purple-100 text-purple-600 font-medium flex items-center gap-2">
                <FaUser aria-hidden="true" /> Strategist
              </span>
            </div>

            {/* Social Links - Optional Addition */}
            <div className="flex justify-center gap-4 mt-6">
              <a
                href="https://www.linkedin.com/in/gilbert-debrah-836aa61a3/"
                className="text-gray-400 hover:text-purple-600 transition-colors"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href="https://github.com/Gideb"
                className="text-gray-400 hover:text-purple-600 transition-colors"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                href="https://x.com/1gideb"
                className="text-gray-400 hover:text-purple-600 transition-colors"
              >
                <i className="fab fa-x-twitter text-xl"></i>
              </a>
            </div>
          </div>

          {/* RIGHT – Text Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-normal mt-6 leading-tight">
              Built By {" "}
              <span className="bg-clip-text text-transparent bg-linear-to-br from-purple-600 to-fuchsia-500">
               A Developer
              </span>{" "}
              Who Gets It
            </h2>

            <div className="space-y-4 mt-6">
              <p className="text-gray-600 leading-relaxed text-justify">
                <strong>Klass Koncepts</strong> is a digital solutions company
                founded by{" "}
                <span className="text-purple-600 font-medium">
                  Gilbert Larbi Debrah
                </span>
                , focused on delivering modern web technologies and creative
                digital experiences that empower businesses to thrive in the
                digital era.
              </p>

              <p className="text-gray-600 leading-relaxed text-justify">
                With a deep background in software engineering and creative
                design, Gilbert leads every project with technical excellence
                and an eye for detail. From pixel-perfect interfaces to robust
                backend systems, every solution is crafted to exceed
                expectations.
              </p>

              <p className="text-gray-600 leading-relaxed text-justify">
                Based in Ghana, Klass Koncepts serves clients locally and
                internationally — combining the energy of a startup with the
                discipline of an enterprise agency.
              </p>
            </div>

            {/* Skills Boxes */}
            <div className="grid sm:grid-cols-2 gap-4 mt-10 ">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-6 rounded-xl transition-all duration-300 border border-gray-200 hover:shadow-lg hover:border-purple-200 group hover:rotate-3"
                >
                  <h5 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {skill.title}
                  </h5>
                  <p className="text-purple-600 text-sm mt-1">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="tech-stack"
        className="px-6 sm:px-12 py-24 text-center bg-linear-to-b from-purple-50 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <div>
            <div className="inline-flex items-center gap-2 bg-purple-200 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mx-auto">
              <span className="w-2 h-2 bg-fuchsia-600 rounded-full animate-pulse"></span>
              Tech Stack
            </div>

            <h2 className="text-3xl sm:text-4xl font-normal mt-4 text-black">
              Tools &{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-br from-purple-800 to-fuchsia-500">
                Technologies
              </span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
              Modern, battle-tested technologies that power our digital
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-16">
            {techStack.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-4 rounded-xl shadow-lg cursor-pointer border-2 border-gray-200 flex items-center gap-4 transition-all duration-300 hover:shadow-xl hover:border-purple-300 hover:-translate-y-1 hover:animate-jiggle"
                >
                  <div
                    className={`${tech.bgColor} w-12 h-12 flex items-center justify-center rounded-lg transition-transform group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <IconComponent className="text-white text-2xl" />
                  </div>
                  <h4 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                    {tech.name}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutFounder;
