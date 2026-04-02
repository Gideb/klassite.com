import React from "react";
import {
  Users,
  Eye,
  MousePointer,
  Heart,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Sparkles,
  TrendingUp,
  PenTool,
  Search,
  GitBranch,
  Target,
  Zap,
  Activity,
  Layers,
} from "lucide-react";
import { FaMapPin, FaPalette, FaFigma } from "react-icons/fa6";
import { Link } from "react-router-dom";
import DiffPageColors from "../../components/ui/DiffPageColors";
import Headings from "../../components/ui/Headings";
import Subheading from "../../components/ui/Subheading";
import ExpertiseCta from "../../components/ui/ExpertiseCta";

const UIUXDesign = () => {
  const services = [
    {
      icon: Search,
      title: "User Research",
      description:
        "In-depth interviews, surveys, and analytics to understand your users' needs and behaviors.",
      color: "indigo",
    },
    {
      icon: PenTool,
      title: "UX Strategy",
      description:
        "Information architecture, user flows, and journey mapping for seamless experiences.",
      color: "indigo",
    },
    {
      icon: Eye,
      title: "UI Design",
      description:
        "Beautiful, on-brand interfaces with pixel-perfect attention to detail.",
      color: "indigo",
    },
    {
      icon: MousePointer,
      title: "Interactive Prototypes",
      description:
        "Clickable prototypes for user testing and stakeholder buy-in.",
      color: "indigo",
    },
    {
      icon: Users,
      title: "Usability Testing",
      description:
        "Real user feedback to validate designs and identify improvements.",
      color: "indigo",
    },
    {
      icon: Activity,
      title: "Design Systems",
      description:
        "Scalable component libraries for consistent experiences across products.",
      color: "indigo",
    },
  ];

  const methodologies = [
    {
      name: "Design Thinking",
      steps: ["Empathize", "Define", "Ideate", "Prototype", "Test"],
      icon: Target,
      bg: "from-indigo-500 to-purple-500",
    },
    {
      name: "Lean UX",
      steps: ["Think", "Make", "Check", "Repeat"],
      icon: Zap,
      bg: "from-blue-500 to-cyan-500",
    },
    {
      name: "Agile UX",
      steps: ["Discover", "Design", "Build", "Measure", "Iterate"],
      icon: GitBranch,
      bg: "from-emerald-500 to-teal-500",
    },
  ];

  const deliverables = [
    { item: "User Personas", icon: Users, desc: "Data-driven user archetypes" },
    { item: "Journey Maps", icon: FaMapPin, desc: "End-to-end user flows" },
    { item: "Wireframes", icon: Layers, desc: "Low to high fidelity layouts" },
    {
      item: "Style Guides",
      icon: FaPalette,
      desc: "Color, typography, components",
    },
    {
      item: "Prototypes",
      icon: MousePointer,
      desc: "Interactive clickable demos",
    },
    {
      item: "Usability Reports",
      icon: BarChart3,
      desc: "Test findings & recommendations",
    },
  ];

  const processSteps = [
    { step: "01", title: "Discover", desc: "Research & user interviews" },
    { step: "02", title: "Define", desc: "Problem framing & strategy" },
    { step: "03", title: "Ideate", desc: "Brainstorming & concepts" },
    { step: "04", title: "Design", desc: "UI/UX & prototyping" },
    { step: "05", title: "Test", desc: "User validation & iteration" },
    { step: "06", title: "Deliver", desc: "Handoff & documentation" },
  ];

  const metrics = [
    { value: "85%", label: "Faster Task Completion", icon: Zap },
    { value: "4.8x", label: "ROI on UX Investment", icon: TrendingUp },
    { value: "67%", label: "Higher Conversion Rates", icon: BarChart3 },
    { value: "94%", label: "User Satisfaction", icon: Heart },
  ];

  const benefits = [
    "Reduced development costs through early validation",
    "Increased user retention and loyalty",
    "Lower support and training costs",
    "Competitive advantage through superior experiences",
    "Accessibility compliance (WCAG 2.1)",
    "Data-driven design decisions",
  ];

  // Helper for MapPin (not imported)
  /*  const MapPin = () => (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );

  const Palette = () => (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
      />
    </svg>
  );
 */
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-linear-to-br from-gray-900 via-indigo-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -right-32 w-96 h-96 bg-indigo-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 -left-32 w-96 h-96 bg-purple-600 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-indigo-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-indigo-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-medium text-indigo-300">
                Klass Koncepts • UI/UX Strategy
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Design Experiences{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-500">
                Users Love
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Great products aren't just built—they're designed. We combine user
              research, strategic thinking, and beautiful UI to create digital
              experiences that delight, engage, and convert.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services">
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-8 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
                  Start Your UX Journey <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link to="/casestudies">
                <button className="border border-white/30 hover:bg-white/10 text-white font-medium px-8 py-3 rounded-full transition-all">
                  View Case Studies
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* What is UI/UX Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <DiffPageColors color="indigo" topic="Our Philosophy" />
              <Headings black=" Human-Centered Design That Delivers" />
              <Subheading
                description=" UI/UX isn't just about making things look pretty—it's about
                creating intuitive, accessible, and meaningful experiences. At
                Klass Koncepts, we put users at the center of every decision,
                using research and data to guide our design process."
              />
              <div className="space-y-4">
                {benefits.slice(0, 4).map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-linear-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 shadow-xl">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1">
                      <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                        <Users className="w-4 h-4 text-indigo-600" />
                      </div>
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Eye className="w-4 h-4 text-purple-600" />
                      </div>
                      <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                        <Heart className="w-4 h-4 text-pink-600" />
                      </div>
                    </div>
                    <div className="text-xs text-gray-400">UX Metrics</div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Task Success Rate</span>
                        <span className="text-indigo-600 font-semibold">
                          92%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-indigo-500 h-2 rounded-full w-[92%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>User Satisfaction</span>
                        <span className="text-indigo-600 font-semibold">
                          4.8/5
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full w-[96%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Time on Task</span>
                        <span className="text-indigo-600 font-semibold">
                          -65%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-pink-500 h-2 rounded-full w-[65%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center">
                    <FaFigma className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      Design Tool
                    </div>
                    <div className="text-lg font-bold text-indigo-500">
                      Figma Expert
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <DiffPageColors color="indigo" topic="What We Do" />

            <Headings black="Comprehensive UI/UX Services" />
            <Subheading
              description=" From research to implementation, we cover every aspect of user
              experience design"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
              >
                <div className="w-14 h-14 rounded-xl bg-indigo-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-indigo-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Methodologies */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <DiffPageColors color="indigo" topic=" Our Approach" />

            <Headings black=" Proven UX Methodologies" />
            <Subheading
              description=" We blend industry-leading frameworks to deliver exceptional
              results"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {methodologies.map((method, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`bg-linear-to-r ${method.bg} p-6 text-white`}>
                  <div className="flex items-center gap-3 mb-4">
                    <method.icon className="w-8 h-8" />
                    <h4 className="text-xl font-bold">{method.name}</h4>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {method.steps.map((step, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
                      >
                        {step}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Deliverables */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <DiffPageColors color="indigo" topic="   What You Get" />
            <Headings black="  Tangible UX Deliverables" />
            <Subheading description=" Every project includes comprehensive documentation and assets" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-indigo-50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {item.item}
                  </h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <DiffPageColors color="indigo" topic=" Our Process" />
            <Headings black=" From Research to Rollout" />
            <Subheading
              description=" A structured approach that ensures nothing falls through the
              cracks"
            />
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-indigo-200 transform -translate-y-1/2" />
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
              {processSteps.map((step, i) => (
                <div key={i} className="relative">
                  <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow text-center">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 font-bold text-lg flex items-center justify-center mx-auto mb-3">
                      {step.step}
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">
                      {step.title}
                    </h4>
                    <p className="text-gray-500 text-xs">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="text-center p-6 bg-linear-to-br from-indigo-50 to-purple-50 rounded-2xl"
              >
                <div className="inline-flex p-3 bg-indigo-100 rounded-full mb-4">
                  <metric.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <DiffPageColors color="indigo" topic=" Expert Tools" />
            <Headings black="Industry-Leading Design Tools" />
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              "Figma",
              "Adobe XD",
              "Sketch",
              "Miro",
              "Hotjar",
              "UserTesting",
              "Abstract",
              "Zeplin",
            ].map((tool, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white rounded-full text-gray-700 font-medium hover:bg-indigo-50 hover:text-indigo-600 transition-all shadow-sm"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 bg-linear-to-r from-indigo-900 to-purple-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Amazing Experiences?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's collaborate on a UX strategy that transforms your digital
            product into something users can't live without.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Book a UX Audit
              </button>
            </Link>

            <Link to="/portfolio">
              <button className="border border-indigo-400 text-indigo-400 hover:bg-indigo-500/10 font-medium px-8 py-4 rounded-full transition-all text-lg">
                View Portfolio
              </button>
            </Link>
          </div>
          <p className="text-gray-400 text-sm mt-8">
            Klass Koncepts — Designing Digital Excellence
          </p>
        </div>
      </div>
    </div>
  );
};

export default UIUXDesign;
