import React from "react";
import {
  Layers,
  Layout,
  Smartphone,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Award,
  Clock,
  Users,
  TrendingUp,
  Palette,
  Globe,
  Package,
  Share2,
  Eye,
} from "lucide-react";
import { Link } from "react-router-dom";
import DiffPageColors from "../../components/props/DiffPageColors";
import Headings from "../../components/props/Headings";
import Subheading from "../../components/props/Subheading";
import ExpertiseCta from "../../components/props/ExpertiseCta";

const GraphicDesign = () => {
  const services = [
    {
      icon: Layout,
      title: "Print Design",
      description:
        "Brochures, flyers, posters, business cards, and marketing collateral that leave a lasting impression.",
      color: "purple",
    },
    {
      icon: Palette,
      title: "Digital Graphics",
      description:
        "Social media graphics, web banners, email templates, and digital ads optimized for engagement.",
      color: "purple",
    },
    {
      icon: Package,
      title: "Packaging Design",
      description:
        "Product packaging that stands out on shelves and tells your brand story effectively.",
      color: "purple",
    },
    {
      icon: Globe,
      title: "Brand Collateral",
      description:
        "Stationery, merchandise, signage, and environmental graphics for cohesive brand presence.",
      color: "purple",
    },
    {
      icon: Share2,
      title: "Infographics",
      description:
        "Data visualization and informational graphics that make complex information beautiful.",
      color: "purple",
    },
    {
      icon: Smartphone,
      title: "UI/UX Assets",
      description:
        "Interface graphics, icons, illustrations, and visual elements for digital products.",
      color: "purple",
    },
  ];

  const portfolioItems = [
    {
      category: "Print Design",
      title: "Annual Report Layout",
      bg: "bg-gradient-to-br from-purple-500 to-indigo-600",
    },
    {
      category: "Packaging",
      title: "Luxury Product Line",
      bg: "bg-gradient-to-br from-pink-500 to-rose-600",
    },
    {
      category: "Digital",
      title: "Social Media Campaign",
      bg: "bg-gradient-to-br from-blue-500 to-cyan-600",
    },
    {
      category: "Branding",
      title: "Complete Visual Identity",
      bg: "bg-gradient-to-br from-amber-500 to-orange-600",
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: "Award-Winning Design",
      description: "Recognized for excellence in visual communication",
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Quick delivery without compromising quality",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Collaborative approach bringing your vision to life",
    },
    {
      icon: TrendingUp,
      title: "Results-Driven",
      description: "Design that converts and drives engagement",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Brief & Discovery",
      desc: "Understanding your goals, audience, and vision",
    },
    {
      step: "02",
      title: "Concept Development",
      desc: "Mood boards, sketches, and initial directions",
    },
    {
      step: "03",
      title: "Design Execution",
      desc: "Creating polished, print-ready graphics",
    },
    {
      step: "04",
      title: "Refinement",
      desc: "Feedback loops and perfecting every detail",
    },
    {
      step: "05",
      title: "Delivery",
      desc: "Final files optimized for any medium",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-linear-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-3 z-10">
          <div className=" bg-black/70 " />
          <div className=" bg-black/40 backdrop-blur-xs" />
          <div className=" bg-black/70 " />
        </div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -right-32 w-96 h-96 bg-purple-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 -left-32 w-96 h-96 bg-pink-600 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm rounded-full px-4 py-2 mt-6 border border-purple-500/30 my-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">
                Klass Koncepts • Graphic Design
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Visual{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-500">
                Storytelling
              </span>{" "}
              That Captivates
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your ideas into stunning visuals that communicate,
              persuade, and inspire. From print to digital, we create design
              solutions that elevate your brand.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services">
                <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-8 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
                  Start Your Project <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link to="/portfolio">
                <button className="border border-white/30 hover:bg-white/10 text-white font-medium px-8 py-3 rounded-full transition-all">
                  View Portfolio
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* What is Graphic Design Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <DiffPageColors color="purple" topic="Our Approach" />

              <Headings black="Design With Purpose & Precision" />
              <Subheading
                description="   Graphic design is visual communication that bridges creativity
                and strategy. At Klass Koncepts, we create designs that don't
                just look beautiful—they work hard for your business. Every
                color, font, and layout choice is intentional, designed to evoke
                emotion and drive action."
              />
              <div className="space-y-4">
                {[
                  "Strategic visual communication",
                  "Consistent brand expression",
                  "Audience-centered design",
                  "Multi-platform optimization",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-linear-to-br from-purple-100 to-pink-100 rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="w-full h-24 bg-linear-to-r from-purple-400 to-pink-400 rounded-lg mb-3" />
                    <div className="h-3 bg-gray-200 rounded w-3/4 mb-2" />
                    <div className="h-2 bg-gray-200 rounded w-1/2" />
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="w-full h-24 bg-linear-to-r from-blue-400 to-cyan-400 rounded-lg mb-3" />
                    <div className="h-3 bg-gray-200 rounded w-3/4 mb-2" />
                    <div className="h-2 bg-gray-200 rounded w-1/2" />
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="w-full h-24 bg-linear-to-r from-amber-400 to-orange-400 rounded-lg mb-3" />
                    <div className="h-3 bg-gray-200 rounded w-3/4 mb-2" />
                    <div className="h-2 bg-gray-200 rounded w-1/2" />
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="w-full h-24 bg-linear-to-r from-green-400 to-emerald-400 rounded-lg mb-3" />
                    <div className="h-3 bg-gray-200 rounded w-3/4 mb-2" />
                    <div className="h-2 bg-gray-200 rounded w-1/2" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      Visual Impact
                    </div>
                    <div className="text-2xl font-bold text-purple-500">
                      +156%
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
            <DiffPageColors color="purple" topic="What we create" />
            <Headings black="Comprehensive Design Services" />
            <Subheading
              description="From concept to completion, we deliver exceptional design across
              every medium"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
              >
                <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-purple-600" />
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

      {/* Portfolio Showcase */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <DiffPageColors color="purple" topic="Recent Work" />

            <Headings black="  Design That Delivers Results" />
            <Subheading
              description="Explore some of our favorite projects that showcase our creative
              range"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              >
                <div
                  className={`${item.bg} h-64 flex items-center justify-center transition-transform group-hover:scale-110 duration-500`}
                >
                  <div className="text-center p-6">
                    <Layers className="w-12 h-12 text-white/80 mx-auto mb-3" />
                    <p className="text-white/90 text-sm font-medium">
                      {item.category}
                    </p>
                    <h4 className="text-white font-bold text-lg mt-2">
                      {item.title}
                    </h4>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold transform -translate-y-2 group-hover:translate-y-0 transition-transform">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <DiffPageColors color="purple" topic="Why choose us" />

            <Headings black=" The Klass Koncepts Difference" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex p-4 bg-purple-50 rounded-2xl mb-5 group-hover:bg-purple-100 transition-colors">
                  <benefit.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Timeline */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <DiffPageColors color="purple" topic="Our Process" />
            <Headings black=" From Concept to Creation" />
            <Subheading description=" A collaborative workflow that ensures your vision becomes reality" />
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-purple-200 transform -translate-y-1/2" />
            <div className="grid md:grid-cols-5 gap-6 relative">
              {processSteps.map((step, i) => (
                <div key={i} className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
                    <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-700 font-bold text-xl flex items-center justify-center mx-auto mb-4">
                      {step.step}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-500 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tools & Technologies */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <DiffPageColors color="purple" topic="Expert tools" />

            <Headings black=" Industry-Standard Software" />
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              "Adobe Photoshop",
              "Adobe Illustrator",
              "Adobe InDesign",
              "Adobe After Effects",
              "Figma",
              "Procreate",
            ].map((tool, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gray-50 rounded-full text-gray-700 font-medium hover:bg-purple-50 hover:text-purple-600 transition-all"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-linear-to-r from-purple-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-purple-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-purple-300">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24hr</div>
              <div className="text-purple-300">Average Response Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-purple-300">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}

      <ExpertiseCta
        color="purple"
        header="Ready to Bring Your Ideas to Life?"
        paragragh=" Let's collaborate on something amazing. Whether you need a single design or a complete visual system, we're here to help."
        btn1=" Get a Free Consultation"
        btn2=" View Pricing"
        tiny="Klass Koncepts — Visual Excellence, Delivered "
        path="pricing"
      />

      {/* <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-r from-purple-50 to-pink-50 rounded-3xl p-12 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Bring Your Ideas to Life?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's collaborate on something amazing. Whether you need a single
              design or a complete visual system, we're here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Get a Free Consultation
              </button>
              <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-medium px-8 py-4 rounded-full transition-all text-lg">
                View Pricing
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-8">
              Klass Koncepts — Visual Excellence, Delivered
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default GraphicDesign;
