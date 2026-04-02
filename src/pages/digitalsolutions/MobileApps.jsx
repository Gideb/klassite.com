import React from "react";
import {
  Smartphone,
  Apple,
  Cloud,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Users,
  Clock,
  Code,
  Layout,
  BarChart3,
  Lock,
  RefreshCw,
  Bell,
  MapPin,
  Camera,
  Mic,
  Bluetooth,
  Wifi,
  Database,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import DiffPageColors from "../../components/ui/DiffPageColors";
import Headings from "../../components/ui/Headings";
import Subheading from "../../components/ui/Subheading";
import ExpertiseCta from "../../components/ui/ExpertiseCta";

const MobileApps = () => {
  const services = [
    {
      icon: Apple,
      title: "iOS Development",
      description:
        "Native iOS apps with Swift and SwiftUI for seamless Apple ecosystem integration.",
      color: "rose",
      platform: "iOS",
    },
    {
      icon: Smartphone,
      title: "Android Development",
      description:
        "Native Android apps with Kotlin and Jetpack Compose for optimal performance.",
      color: "rose",
      platform: "Android",
    },
    {
      icon: FaGithub,
      title: "Cross-Platform",
      description:
        "React Native and Flutter apps that work flawlessly on both iOS and Android.",
      color: "rose",
      platform: "Both",
    },
    {
      icon: Layout,
      title: "UI/UX for Mobile",
      description:
        "Mobile-first designs optimized for touch, gestures, and small screens.",
      color: "rose",
      platform: "Both",
    },
    {
      icon: Cloud,
      title: "Backend Integration",
      description:
        "Cloud APIs, databases, and real-time sync for powerful mobile experiences.",
      color: "rose",
      platform: "Both",
    },
    {
      icon: Shield,
      title: "App Security",
      description:
        "Biometric auth, data encryption, and secure API communication.",
      color: "rose",
      platform: "Both",
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with 60fps animations",
    },
    {
      icon: Shield,
      title: "Secure by Default",
      description: "End-to-end encryption & secure storage",
    },
    {
      icon: Bell,
      title: "Push Notifications",
      description: "Engage users with timely alerts",
    },
    {
      icon: RefreshCw,
      title: "Offline First",
      description: "Work seamlessly without internet",
    },
  ];

  const technologies = [
    { name: "Swift", icon: Apple, color: "orange" },
    { name: "Kotlin", icon: Smartphone, color: "purple" },
    { name: "React Native", icon: FaGithub, color: "blue" },
    { name: "Flutter", icon: Layout, color: "blue" },
    { name: "Firebase", icon: Cloud, color: "yellow" },
    { name: "GraphQL", icon: Database, color: "pink" },
  ];

  const capabilities = [
    {
      icon: MapPin,
      name: "GPS & Location",
      desc: "Real-time tracking & geofencing",
    },
    { icon: Camera, name: "Camera & Gallery", desc: "Photo capture & editing" },
    { icon: Mic, name: "Audio Recording", desc: "Voice input & playback" },
    { icon: Bluetooth, name: "Bluetooth", desc: "Device connectivity" },
    { icon: Wifi, name: "Network", desc: "WiFi & cellular management" },
    { icon: Bell, name: "Notifications", desc: "Push & local alerts" },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      desc: "Requirements & platform strategy",
    },
    { step: "02", title: "Design", desc: "Wireframes & high-fidelity UI" },
    { step: "03", title: "Development", desc: "Agile sprints & coding" },
    { step: "04", title: "Testing", desc: "QA on real devices" },
    { step: "05", title: "Deployment", desc: "App Store & Play Store" },
    { step: "06", title: "Maintenance", desc: "Updates & support" },
  ];

  const appTypes = [
    {
      type: "E-Commerce Apps",
      examples: ["Shopping", "Marketplace", "Booking"],
      icon: GiShoppingCart,
      bg: "from-rose-500 to-orange-500",
    },
    {
      type: "Social Apps",
      examples: ["Messaging", "Networking", "Streaming"],
      icon: Users,
      bg: "from-purple-500 to-pink-500",
    },
    {
      type: "On-Demand Apps",
      examples: ["Delivery", "Ride-hailing", "Services"],
      icon: MapPin,
      bg: "from-blue-500 to-cyan-500",
    },
    {
      type: "Enterprise Apps",
      examples: ["CRM", "HR", "Analytics"],
      icon: BarChart3,
      bg: "from-emerald-500 to-teal-500",
    },
  ];

  // Helper icon
  /*   const ShoppingCart = () => (
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
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6M17 13l1.5 6M9 21h6M12 18v3"
      />
    </svg>
  ); */

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-linear-to-br from-gray-900 via-rose-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -right-32 w-96 h-96 bg-rose-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 -left-32 w-96 h-96 bg-orange-600 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-rose-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-rose-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-rose-400" />
              <span className="text-sm font-medium text-rose-300">
                Klass Koncepts • Mobile Applications
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Powerful{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-rose-400 to-orange-500">
                Mobile Apps
              </span>{" "}
              That Users Love
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Reach your customers wherever they are. We build high-performance
              iOS and Android apps that deliver exceptional user experiences and
              drive business growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services">
                <button className="bg-rose-500 hover:bg-rose-600 text-white font-semibold px-8 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
                  Start Your App <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link to="/portfolio">
                {" "}
                <button className="border border-white/30 hover:bg-white/10 text-white font-medium px-8 py-3 rounded-full transition-all">
                  View App Portfolio
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
              <DiffPageColors color="rose" topic="Our Expertise" />
              <Headings black="  Native & Cross-Platform Excellence" />
              <Subheading
                description=" Whether you need a native iOS app, Android app, or a
                cross-platform solution, we have the expertise to deliver. We
                build apps that are fast, reliable, and beautiful—providing
                seamless experiences across all devices."
              />
              <div className="space-y-4">
                {[
                  "Native performance on iOS and Android",
                  "Offline functionality & sync",
                  "App Store & Play Store optimization",
                  "Continuous updates & maintenance",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-rose-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-linear-to-br from-rose-100 to-orange-100 rounded-2xl p-8 shadow-xl">
                <div className="flex justify-center gap-8">
                  <div className="bg-gray-900 rounded-3xl p-3 w-48">
                    <div className="bg-linear-to-b from-gray-800 to-gray-900 rounded-2xl p-4">
                      <div className="w-full h-32 bg-linear-to-br from-rose-400 to-orange-400 rounded-xl mb-3" />
                      <div className="h-2 bg-gray-700 rounded w-3/4 mb-2" />
                      <div className="h-2 bg-gray-700 rounded w-1/2" />
                    </div>
                  </div>
                  <div className="bg-gray-900 rounded-3xl p-3 w-48">
                    <div className="bg-linear-to-b from-gray-800 to-gray-900 rounded-2xl p-4">
                      <div className="w-full h-32 bg-linear-to-br from-purple-400 to-pink-400 rounded-xl mb-3" />
                      <div className="h-2 bg-gray-700 rounded w-3/4 mb-2" />
                      <div className="h-2 bg-gray-700 rounded w-1/2" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-rose-500 flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      App Store Rating
                    </div>
                    <div className="text-2xl font-bold text-rose-500">
                      4.9 ★
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
            <DiffPageColors color="rose" topic="What We Build" />
            <Headings black="Mobile Development Services" />
            <Subheading description="End-to-end mobile app development for every platform" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-rose-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-rose-600" />
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 bg-rose-100 text-rose-600 rounded-full">
                    {service.platform}
                  </span>
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

      {/* App Types */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <DiffPageColors color="rose" topic=" What We've Built" />
            <Headings black="Apps for Every Industry" />
            <Subheading
              description="From startups to enterprises, we've delivered successful apps
              across all categories"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {appTypes.map((app, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              >
                <div
                  className={`bg-linear-to-br ${app.bg} p-6 h-56 flex flex-col justify-between transition-transform group-hover:scale-110 duration-500`}
                >
                  <div>
                    <app.icon className="w-10 h-10 text-white/90 mb-4" />
                    <h4 className="text-white text-xl font-bold mb-3">
                      {app.type}
                    </h4>
                  </div>
                  <div>
                    {app.examples.map((example, i) => (
                      <p key={i} className="text-white/80 text-sm">
                        • {example}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold transform -translate-y-2 group-hover:translate-y-0 transition-transform">
                    View Examples
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <DiffPageColors color="rose" topic=" Core Features" />
            <Headings black="Built-In Mobile Capabilities" />
            <Subheading description="Every app we build includes these essential feature" />
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex p-4 bg-rose-50 rounded-2xl mb-5 group-hover:bg-rose-100 transition-colors">
                  <feature.icon className="w-8 h-8 text-rose-600" />
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

      {/* Device Capabilities */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <DiffPageColors color="rose" topic=" Hardware Integration" />
            <Headings black="Full Device Access" />
            <Subheading description="  Leverage every feature of modern smartphones" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((cap, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center">
                  <cap.icon className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{cap.name}</div>
                  <div className="text-sm text-gray-500">{cap.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <DiffPageColors color="rose" topic="Modern Stack" />
            <Headings black=" Cutting-Edge Technologies" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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

      {/* Process */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <DiffPageColors color="rose" topic=" Our Process" />
            <Headings black="  From Idea to App Store" />
            <Subheading description=" A streamlined process that gets your app to market faster" />
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-rose-200 transform -translate-y-1/2" />
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
              {processSteps.map((step, i) => (
                <div key={i} className="relative">
                  <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow text-center">
                    <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-700 font-bold text-lg flex items-center justify-center mx-auto mb-3">
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

      {/* Stats */}
      <div className="py-20 bg-linear-to-r from-rose-900 to-orange-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">85+</div>
              <div className="text-rose-300">Apps Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">2M+</div>
              <div className="text-rose-300">Total Downloads</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">4.9★</div>
              <div className="text-rose-300">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-rose-300">Crash-Free Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}

      <ExpertiseCta
        color="rose"
        header="Ready to Launch Your Mobile App?"
        paragragh="Let's turn your app idea into a reality. From concept to App
              Store, we'll guide you every step of the way."
        btn1="Get a Free App Quote"
        btn2=" View App Portfolio"
        tiny="Klass Koncepts — Mobile Innovation Delivered"
        path="portfolio"
      />

     {/*  <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-r from-rose-50 to-orange-50 rounded-3xl p-12 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Launch Your Mobile App?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's turn your app idea into a reality. From concept to App
              Store, we'll guide you every step of the way.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-rose-600 hover:bg-rose-700 text-white font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Get a Free App Quote
              </button>
              <button className="border-2 border-rose-600 text-rose-600 hover:bg-rose-50 font-medium px-8 py-4 rounded-full transition-all text-lg">
                View App Portfolio
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-8">
              Klass Koncepts — Mobile Innovation Delivered
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default MobileApps;
