import React from "react";
import {
  Globe,
  Server,
  Cloud,
  Shield,
  Zap,
  Database,
  CheckCircle,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users,
  Clock,
  Code,
  Smartphone,
  Layout,
  ShoppingCart,
  BarChart3,
  Lock,
  GitBranch,
  Cpu,
  Monitor,
  RefreshCw,
  Search,
  Terminal,
} from "lucide-react";
import { Link } from "react-router-dom";
import DiffPageColors from "../../components/props/DiffPageColors";
import Headings from "../../components/props/Headings";
import Subheading from "../../components/props/Subheading";
import ExpertiseCta from "../../components/props/ExpertiseCta";
import Card from "../../components/ui/Card";

import webbg from "../../assets/images/ipages/servicepage/web-dev.jpg";



const WebDevelopment = () => {
  const services = [
    {
      icon: Globe,
      title: "Custom Websites",
      description:
        "Responsive, high-performance websites tailored to your brand and business goals.",
      color: "emerald",
    },
    {
      icon: Layout,
      title: "Web Applications",
      description:
        "Interactive, data-driven web apps with complex functionality and user management.",
      color: "emerald",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description:
        "Scalable online stores with secure payments, inventory management, and analytics.",
      color: "emerald",
    },
    {
      icon: Server,
      title: "Enterprise Portals",
      description:
        "Internal dashboards, client portals, and B2B platforms with role-based access.",
      color: "emerald",
    },
    {
      icon: Database,
      title: "API Development",
      description:
        "RESTful and GraphQL APIs for seamless third-party integrations and data exchange.",
      color: "emerald",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "AWS, Azure, and Google Cloud deployment with auto-scaling and high availability.",
      color: "emerald",
    },
  ];

  const technologies = [
    { name: "React.js", icon: Code, color: "blue" },
    { name: "Next.js", icon: Code, color: "gray" },
    { name: "Node.js", icon: Server, color: "green" },
    { name: "Python/Django", icon: Terminal, color: "blue" },
    { name: "Laravel", icon: Code, color: "red" },
    { name: "Tailwind CSS", icon: Layout, color: "cyan" },
    { name: "PostgreSQL", icon: Database, color: "blue" },
    { name: "MongoDB", icon: Database, color: "green" },
    { name: "AWS", icon: Cloud, color: "orange" },
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with < 2s load times",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SSL, encryption, and regular security audits",
    },
    {
      icon: Smartphone,
      title: "Fully Responsive",
      description: "Flawless experience on any device",
    },
    {
      icon: RefreshCw,
      title: "Scalable Architecture",
      description: "Grows seamlessly with your business",
    },
  ];

  const caseStudies = [
    {
      title: "FinTech Dashboard",
      industry: "Financial Services",
      result: "Processed $50M+ in transactions",
      icon: BarChart3,
      bg: "from-emerald-500 to-teal-500",
    },
    {
      title: "Healthcare Portal",
      industry: "Medical",
      result: "50,000+ active patients",
      icon: Shield,
      bg: "from-blue-500 to-cyan-500",
    },
    {
      title: "E-Commerce Platform",
      industry: "Retail",
      result: "300% revenue increase",
      icon: ShoppingCart,
      bg: "from-purple-500 to-pink-500",
    },
    {
      title: "Logistics System",
      industry: "Supply Chain",
      result: "Real-time tracking for 10K+ shipments",
      icon: Cpu,
      bg: "from-orange-500 to-red-500",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      desc: "Requirements gathering & technical planning",
    },
    {
      step: "02",
      title: "Architecture",
      desc: "System design & technology selection",
    },
    {
      step: "03",
      title: "Development",
      desc: "Agile sprints & continuous delivery",
    },
    {
      step: "04",
      title: "Testing",
      desc: "QA, security, & performance testing",
    },
    {
      step: "05",
      title: "Deployment",
      desc: "CI/CD pipeline & cloud deployment",
    },
    {
      step: "06",
      title: "Maintenance",
      desc: "24/7 monitoring & ongoing support",
    },
  ];

  const benefits = [
    "Custom solutions built from scratch",
    "Mobile-responsive progressive web apps",
    "SEO-optimized architecture",
    "GDPR & CCPA compliance ready",
    "Third-party API integrations",
    "Comprehensive documentation",
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-linear-to-br from-gray-900 via-emerald-900 to-gray-900 text-white overflow-hidden"   style={{
                backgroundImage: `url(${webbg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
        <div className="absolute inset-0 grid grid-cols-3 z-10">
          <div className=" bg-black/30 " />
          <div className=" bg-white/20 backdrop-blur-xs" />
          <div className=" bg-black/30 " />
        </div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -right-32 w-96 h-96 bg-emerald-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 -left-32 w-96 h-96 bg-teal-600 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-emerald-500/30 my-6">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-300">
                Klass Koncepts • Enterprise Web Solutions
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-500">
                Powerful
              </span>{" "}
              Web Applications That Scale
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              From custom websites to complex enterprise platforms, we build
              robust, secure, and high-performance web solutions that drive
              digital transformation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services">
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
                  Start Your Project <ArrowRight className="w-5 h-5" />
                </button>
              </Link>

              <Link to="/portfolio">
                <button className="border border-white/30 hover:bg-white/10 text-white font-medium px-8 py-3 rounded-full transition-all">
                  View Our Work
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* What We Build Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <DiffPageColors color="emerald" topic="Our expertise" />
              <Headings black="Enterprise-Grade Web Development" />
              <Subheading
                description="We don't just build websites—we engineer comprehensive web
                solutions that solve real business problems. Using modern
                frameworks and cloud architecture, we create applications that
                are secure, scalable, and future-proof. From MVP to enterprise
                scale, we've got you covered."
              />

              <div className="space-y-4">
                {benefits.slice(0, 4).map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-linear-to-br from-emerald-100 to-teal-100 rounded-2xl p-8 shadow-xl">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="text-xs text-gray-400">terminal</div>
                  </div>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="text-emerald-600">$ npm run deploy</div>
                    <div className="text-gray-700">
                      {">"} Building enterprise app...
                    </div>
                    <div className="text-gray-700">
                      {">"} ✓ Dependencies installed
                    </div>
                    <div className="text-gray-700">
                      {">"} ✓ Tests passed (42/42)
                    </div>
                    <div className="text-gray-700">
                      {">"} ✓ Bundle optimized
                    </div>
                    <div className="text-emerald-600 font-bold">
                      {">"} Deployment successful! 🚀
                    </div>
                    <div className="text-gray-500 text-xs mt-4">
                      Available at: https://app.klasskoncepts.com
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      Performance Score
                    </div>
                    <div className="text-2xl font-bold text-emerald-500">
                      99/100
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
            <DiffPageColors color="emerald" topic="What we build" />
            <Headings black="  Comprehensive Web Development Services" />
            <Subheading description="End-to-end solutions for every digital need" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              /*  <div
                key={index}
                className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
              >
                <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-emerald-600 transition duration-400  group-hover:rotate-6 hover:scale-105" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div> */
              <Card
                key={index}
                title={service.title}
                Icon={service.icon}
                description={service.description}
                color="emerald"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <DiffPageColors color="emerald" topic="Why Choose Us" />
            <Headings black=" Enterprise Features Built-In" />
            <Subheading description="Every project includes these enterprise-grade capabilities" />
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex p-4 bg-emerald-50 rounded-2xl mb-5 group-hover:bg-emerald-100 transition-colors">
                  <feature.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <DiffPageColors color="emerald" topic="Modern tech stack" />
            <Headings black=" Cutting-Edge Technologies" />
            <Subheading
              description="We use the latest tools and frameworks to build future-proof
              applications"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all text-center"
              >
                <div className="inline-flex p-3 bg-white rounded-full mb-3 group-hover:scale-110 transition-transform">
                  <tech.icon className={`w-6 h-6 text-${tech.color}-600`} />
                </div>
                <div className="font-semibold text-gray-900 text-sm">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <DiffPageColors color="emerald" topic="success stories" />
            <Headings black=" Real Results, Real Impact" />
            <Subheading description="See how we've helped businesses transform through technology" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              >
                <div
                  className={`bg-linear-to-br ${study.bg} p-6 h-64 flex flex-col justify-between transition-transform group-hover:scale-110 duration-500`}
                >
                  <div>
                    <study.icon className="w-10 h-10 text-white/90 mb-4" />
                    <h4 className="text-white text-xl font-bold mb-2">
                      {study.title}
                    </h4>
                    <p className="text-white/80 text-sm">{study.industry}</p>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {study.result}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold transform -translate-y-2 group-hover:translate-y-0 transition-transform">
                    Read Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Development Process */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <DiffPageColors color="emerald" topic="Our process" />
            <Headings black="Agile Development Methodology" />
            <Subheading description=" A proven approach that delivers quality software on time" />
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-emerald-200 transform -translate-y-1/2" />
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
              {processSteps.map((step, i) => (
                <div key={i} className="relative">
                  <div className="bg-gray-50 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow text-center">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold text-lg flex items-center justify-center mx-auto mb-3">
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

      {/* Security & Compliance */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex p-3 bg-emerald-100 rounded-xl mb-6">
                <Lock className="w-8 h-8 text-emerald-600" />
              </div>

              <Headings black="Security First Approach" />
              <Subheading
                description=" We prioritize security at every stage of development. From
                secure authentication to data encryption and regular penetration
                testing, we ensure your application meets the highest security
                standards."
              />

              <div className="space-y-3">
                {[
                  "SSL/TLS encryption for all data in transit",
                  "OWASP Top 10 compliance",
                  "Regular security audits and updates",
                  "GDPR, CCPA, and HIPAA ready",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-emerald-600" />
                <h4 className="text-xl font-bold text-gray-900">
                  Security Badges
                </h4>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-600">SSL Certificate</span>
                  <span className="text-emerald-600 font-semibold">Active</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-600">DDoS Protection</span>
                  <span className="text-emerald-600 font-semibold">
                    Enabled
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-600">Firewall</span>
                  <span className="text-emerald-600 font-semibold">Active</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-gray-600">Backup Frequency</span>
                  <span className="text-emerald-600 font-semibold">Daily</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Uptime Guarantee</span>
                  <span className="text-emerald-600 font-semibold">99.99%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-linear-to-r from-emerald-900 to-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">120+</div>
              <div className="text-emerald-300">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">99.99%</div>
              <div className="text-emerald-300">Uptime Record</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50ms</div>
              <div className="text-emerald-300">Avg Response Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-emerald-300">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}

      <ExpertiseCta
        color="emerald"
        header="Ready to Build Your Web Application?"
        paragragh="Let's discuss your project requirements. Whether you need a simple
              website or a complex enterprise platform, we have the expertise to
              bring your vision to life."
        btn1="Schedule a Free Consultation"
        btn2=" View Technical Capabilities"
        tiny="Klass Koncepts — Engineering Digital Excellence"
        path="portfolio"
      />

      {/*  <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-12 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Build Your Web Application?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss your project requirements. Whether you need a simple
              website or a complex enterprise platform, we have the expertise to
              bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Schedule a Free Consultation
              </button>
              <button className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-medium px-8 py-4 rounded-full transition-all text-lg">
                View Technical Capabilities
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-8">
              Klass Koncepts — Engineering Digital Excellence
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default WebDevelopment;
