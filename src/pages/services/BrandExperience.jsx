import React from "react";
import {
  Compass,
  Target,
  PenTool,
  Palette,
  Type,
  Layers,
  CheckCircle,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Users,
  TrendingUp,
} from "lucide-react";
import { FaDiagramProject, FaPenToSquare } from "react-icons/fa6";

import { Link } from "react-router-dom";
import Headings from "../../components/props/Headings";
import Subheading from "../../components/props/Subheading";
import DiffPageColors from "../../components/props/DiffPageColors";
import CTASection from "../../components/props/CTASection";

import brandbg from "../../assets/images/ipages/servicepage/brandexperience.jpg";
import Button from "../../components/ui/Button";
import { FaArrowRight } from "react-icons/fa";

const BrandExperience = () => {
  const services = [
    {
      icon: Compass,
      title: "Brand Strategy",
      description:
        "Market research, positioning, audience profiling, and brand architecture that sets the foundation for everything.",
      color: "amber",
    },
    {
      icon: PenTool,
      title: "Visual Identity",
      description:
        "Logo design, color systems, typography, and visual guidelines that create instant recognition.",
      color: "amber",
    },
    {
      icon: Palette,
      title: "Brand Identity Systems",
      description:
        "Comprehensive brand assets, patterns, icons, and graphic elements for cohesive storytelling.",
      color: "amber",
    },
    {
      icon: Type,
      title: "Brand Messaging",
      description:
        "Voice, tone, taglines, and key messaging frameworks that communicate your unique value.",
      color: "amber",
    },
    {
      icon: Layers,
      title: "Brand Guidelines",
      description:
        "Detailed brand books ensuring consistency across all touchpoints and teams.",
      color: "amber",
    },
    {
      icon: Target,
      title: "Brand Launch & Rollout",
      description:
        "Strategic implementation across digital, print, and physical environments.",
      color: "amber",
    },
  ];

  const phases = [
    {
      step: "01",
      title: "Discovery",
      desc: "Research, stakeholder interviews, and market analysis",
    },
    {
      step: "02",
      title: "Strategy",
      desc: "Positioning, messaging, and creative direction",
    },
    {
      step: "03",
      title: "Creation",
      desc: "Design development and iterative refinement",
    },
    {
      step: "04",
      title: "Activation",
      desc: "Implementation, guidelines, and launch support",
    },
  ];

  const checklistItems = [
    "Strategic brand positioning",
    "Emotional connection with audiences",
    "Consistent multi-channel presence",
    "Long-term brand equity building",
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div
        className="relative bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden "
        style={{ backgroundImage: `url(${brandbg})`, backgroundSize: "cover" }}
      >
        <div className="absolute inset-0 grid grid-cols-3 z-10">
          <div className=" bg-black/50 " />
          <div className=" bg-white/5 backdrop-blur-xs" />
          <div className=" bg-black/50 " />
        </div>

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -right-32 w-96 h-96 bg-amber-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 -left-32 w-96 h-96 bg-amber-700 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 mt-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-amber-500/30 my-6">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-300">
                Klass Koncepts • Premium BrandExperience
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mt-10 mb-6">
              Forge a{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-amber-600">
                Legendary
              </span>{" "}
              Brand Identity
            </h1>
            <Subheading
              isLight
              description="Your brand is more than a logo—it's the soul of your business. We
              craft distinctive, memorable identities that resonate with your
              audience and stand the test of time."
            />

            <div className="flex flex-wrap gap-4">
              <Button
                link="/contact"
                text="Begin Your Brand Journey"
                icon={FaArrowRight}
                variant="amber"
              />
              <Button
                link="https://portfolio"
                text="View Portfolio"
                icon={FaDiagramProject}
                variant="transparent"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#brandtypes"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#brandtypes")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-white/60 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </a>
      </div>
      {/* What is BrandExperience Section */}
      <section id="brandtypes">
        {" "}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <DiffPageColors color="amber" topic="Our Philosophy" />
                <Headings black=" Beyond Aesthetics — Brand Alchemy" />
                <Subheading
                  description=" BrandExperience is the art of shaping perception. At Klass Koncepts,
                  we blend strategic thinking with creative excellence to build
                  identities that don't just look good—they perform. From
                  startups to established enterprises, we create cohesive brand
                  ecosystems that command attention and build trust."
                />

                <div className="space-y-4">
                  {checklistItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-500" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-linear-to-br from-amber-100 to-amber-200 rounded-2xl p-8 shadow-xl">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                          <span className="text-amber-400 font-bold text-xl">
                            K
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="w-2 h-2 bg-gray-300 rounded-full"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-200 rounded w-3/4" />
                      <div className="h-4 bg-gray-200 rounded w-full" />
                      <div className="h-4 bg-gray-200 rounded w-5/6" />
                      <div className="pt-4">
                        <div className="flex gap-2">
                          <div className="w-10 h-10 bg-amber-100 rounded-full" />
                          <div className="flex-1">
                            <div className="h-3 bg-gray-200 rounded w-24 mb-2" />
                            <div className="h-3 bg-gray-200 rounded w-32" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        Brand Recognition
                      </div>
                      <div className="text-2xl font-bold text-amber-500">
                        +87%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BrandExperience Services */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <DiffPageColors color="amber" topic="Comprehensive Solutions" />{" "}
            <Headings black="Our BrandExperience Services" />
            <Subheading
              description="End-to-end branding solutions tailored to your unique vision and
              market position."
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
              >
                <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-amber-600" />
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

      {/* Process Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <DiffPageColors color="amber" topic="Our Methodology" />

            <Headings black="The Brand Building Process" />
            <Subheading description="A proven framework that transforms ideas into iconic brands" />
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {phases.map((phase, i) => (
              <div key={i} className="relative">
                {i < 3 && (
                  <div className="hidden md:block absolute top-12 left-[70%] w-[60%] h-0.5 bg-amber-200" />
                )}
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 font-bold text-xl flex items-center justify-center mb-4">
                    {phase.step}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {phase.title}
                  </h4>
                  <p className="text-gray-500 text-sm">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Results Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="inline-flex p-4 bg-amber-50 rounded-full mb-6">
                <ShieldCheck className="w-8 h-8 text-amber-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600">Client retention rate</div>
            </div>
            <div className="p-8">
              <div className="inline-flex p-4 bg-amber-50 rounded-full mb-6">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-gray-600">Brands launched globally</div>
            </div>
            <div className="p-8">
              <div className="inline-flex p-4 bg-amber-50 rounded-full mb-6">
                <TrendingUp className="w-8 h-8 text-amber-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">6.2x</div>
              <div className="text-gray-600">Average brand value increase</div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-linear-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build an Iconic Brand?
          </h2>
          <Subheading
            description=" Let's create something extraordinary together. Book a discovery call
            and let's bring your brand vision to life."
            isLight
          />

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              link="/contact"
              text="Begin Your Project "
              icon={FaPenToSquare}
              variant="amber"
            />
            <Button
              link="https://portfolio"
              text="View Case Studies"
              icon={FaDiagramProject}
              variant="transparentAmber"
            />
          </div>
          <p className="text-gray-400 text-sm mt-8">
            Klass Koncepts — Where Strategy Meets Artistry
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrandExperience;
