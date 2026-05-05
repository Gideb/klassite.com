import React from "react";
import {
  FileText,
  Video,
  Mic,
  Image,
  Share2,
  Edit3,
  CheckCircle,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users,
  Clock,
  Zap,
  BookOpen,
  Hash,
  BarChart3,
} from "lucide-react";

import { PiInstagramLogo, PiYoutubeLogo } from "react-icons/pi";
import { Link } from "react-router-dom";
import DiffPageColors from "../../components/props/DiffPageColors";
import Headings from "../../components/props/Headings";
import Subheading from "../../components/props/Subheading";
import ExpertiseCta from "../../components/props/ExpertiseCta";


import contentbg from "../../assets/images/ipages/servicepage/contentcreation.jpg";




const ContentCreation = () => {
  const services = [
    {
      icon: FileText,
      title: "Copywriting",
      description:
        "Website copy, blog posts, articles, and long-form content that engages and converts.",
      color: "blue",
    },
    {
      icon: Edit3,
      title: "Social Media Content",
      description:
        "Posts, captions, threads, and stories tailored for each platform's unique audience.",
      color: "blue",
    },
    {
      icon: Video,
      title: "Video Production",
      description:
        "Script writing, filming, editing, and animation for compelling visual stories.",
      color: "blue",
    },
    {
      icon: Mic,
      title: "Podcast Production",
      description:
        "Recording, editing, show notes, and distribution for audio content.",
      color: "blue",
    },
    {
      icon: Image,
      title: "Visual Content",
      description:
        "Photography, custom graphics, memes, and visual assets for campaigns.",
      color: "blue",
    },
    {
      icon: Share2,
      title: "Content Strategy",
      description:
        "Editorial calendars, content audits, and platform-specific planning.",
      color: "blue",
    },
  ];

  const contentTypes = [
    {
      platform: "Blog & Articles",
      icon: BookOpen,
      examples: [
        "Long-form guides",
        "Listicles",
        "Case studies",
        "Industry insights",
      ],
      bg: "from-blue-500 to-cyan-500",
    },
    {
      platform: "Social Media",
      icon: PiInstagramLogo,
      examples: [
        "Instagram Reels",
        "LinkedIn articles",
        "Twitter threads",
        "Facebook posts",
      ],
      bg: "from-purple-500 to-pink-500",
    },
    {
      platform: "Video Content",
      icon: PiYoutubeLogo,
      examples: ["YouTube videos", "TikToks", "Tutorials", "Behind-the-scenes"],
      bg: "from-red-500 to-orange-500",
    },
    {
      platform: "Email Marketing",
      icon: Hash,
      examples: [
        "Newsletters",
        "Drip campaigns",
        "Welcome sequences",
        "Promotional emails",
      ],
      bg: "from-green-500 to-emerald-500",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      desc: "Understanding your brand voice and audience",
    },
    {
      step: "02",
      title: "Strategy",
      desc: "Content planning and calendar creation",
    },
    {
      step: "03",
      title: "Creation",
      desc: "Producing high-quality, engaging content",
    },
    {
      step: "04",
      title: "Optimization",
      desc: "SEO, formatting, and platform optimization",
    },
    {
      step: "05",
      title: "Distribution",
      desc: "Scheduling and publishing across channels",
    },
    {
      step: "06",
      title: "Analysis",
      desc: "Performance tracking and iteration",
    },
  ];

  const stats = [
    { value: "3x", label: "Average Engagement Increase", icon: TrendingUp },
    { value: "500+", label: "Content Pieces Created", icon: FileText },
    { value: "45%", label: "Time Saved for Clients", icon: Clock },
    { value: "100%", label: "Original Content", icon: Sparkles },
  ];

  const benefits = [
    "Consistent brand voice across all platforms",
    "SEO-optimized content that ranks",
    "Data-driven content strategy",
    "Fast turnaround times",
    "Unlimited revisions on select packages",
    "Performance reporting and insights",
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div
        className="relative bg-linear-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden"
        style={{
          backgroundImage: `url(${contentbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      > 
        <div className="absolute inset-0 grid grid-cols-3 z-10">
          <div className=" bg-black/50 " />
          <div className=" bg-white/10 backdrop-blur-xs" />
          <div className=" bg-black/50 " />
        </div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -right-32 w-96 h-96 bg-blue-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 -left-32 w-96 h-96 bg-cyan-600 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-500/30 my-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">
                Klass Koncepts • Content Creation
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Content That{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-500">
                Connects & Converts
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Stop struggling with content creation. We produce engaging,
              high-quality content that builds your brand, grows your audience,
              and drives measurable results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services">
                {" "}
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
                  Start Creating <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
              <Link to="/portfolio">
                <button className="border border-white/30 hover:bg-white/10 text-white font-medium px-8 py-3 rounded-full transition-all">
                  View Content Portfolio
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* What is Content Creation Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <DiffPageColors color="blue" topic="Our Philosophy" />
              <Headings black="Content That Tells Your Story" />
              <Subheading
                description=" Great content doesn't happen by accident. At Klass Koncepts, we
                combine strategic thinking with creative execution to produce
                content that resonates with your audience. Whether you need blog
                posts, videos, or social media content, we deliver quality that
                builds trust and authority. "
              />
              <div className="space-y-4">
                {benefits.slice(0, 4).map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-linear-to-br from-blue-100 to-cyan-100 rounded-2xl p-8 shadow-xl">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Content Performance
                      </div>
                      <div className="text-sm text-gray-500">Last 30 days</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Engagement Rate</span>
                        <span className="text-blue-600 font-semibold">
                          +156%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full w-3/4" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Reach Growth</span>
                        <span className="text-blue-600 font-semibold">
                          +89%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-cyan-500 h-2 rounded-full w-2/3" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Conversion Rate</span>
                        <span className="text-blue-600 font-semibold">
                          +42%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-400 h-2 rounded-full w-1/2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      Content ROI
                    </div>
                    <div className="text-2xl font-bold text-blue-500">
                      +283%
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
            <DiffPageColors color="blue" topic="What We Create" />
            <Headings black="Comprehensive Content Services" />
            <Subheading
              description=" From words to video, we produce everything you need to dominate
              your niche"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-blue-600" />
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

      {/* Content Types Showcase */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <DiffPageColors color="blue" topic="Multi-Platform Excellence" />
            <Headings black="Content for Every Channel" />
            <Subheading description="  Tailored content optimized for each platform's unique requirements" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentTypes.map((type, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg"
              >
                <div
                  className={`bg-linear-to-br ${type.bg} p-6 h-64 flex flex-col justify-between transition-transform group-hover:scale-105 duration-500`}
                >
                  <div>
                    <type.icon className="w-10 h-10 text-white/90 mb-4" />
                    <h4 className="text-white text-xl font-bold mb-3">
                      {type.platform}
                    </h4>
                  </div>
                  <div>
                    {type.examples.map((example, i) => (
                      <p key={i} className="text-white/80 text-sm mb-1">
                        • {example}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold transform -translate-y-2 group-hover:translate-y-0 transition-transform">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-linear-to-br from-blue-50 to-cyan-50 rounded-2xl"
              >
                <div className="inline-flex p-3 bg-blue-100 rounded-full mb-4">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Timeline */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <DiffPageColors color="blue" topic=" Our Process" />
            <Headings black="From Idea to Published Content" />
            <Subheading
              description=" A streamlined workflow that delivers consistent, high-quality
              content"
            />
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 transform -translate-y-1/2" />
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
              {processSteps.map((step, i) => (
                <div key={i} className="relative">
                  <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow text-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold text-lg flex items-center justify-center mx-auto mb-3">
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

      {/* Content Packages */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <DiffPageColors color="blue" topic=" Flexible Solutions" />

            <Headings black=" Content Packages for Every Need" />
            <Subheading description="  Choose the plan that fits your content goals and budget " />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$999",
                description:
                  "Perfect for businesses just starting with content",
                features: [
                  "4 blog posts/month",
                  "10 social media posts",
                  "Basic SEO optimization",
                  "Monthly analytics report",
                ],
                recommended: false,
              },
              {
                name: "Professional",
                price: "$2,499",
                description:
                  "Ideal for growing brands needing consistent content",
                features: [
                  "8 blog posts/month",
                  "20 social media posts",
                  "1 video/month",
                  "Email newsletter",
                  "Advanced SEO",
                  "Weekly strategy calls",
                ],
                recommended: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description:
                  "For established brands requiring full-scale content",
                features: [
                  "Unlimited blog posts",
                  "Full social media management",
                  "Video production",
                  "Podcast production",
                  "Dedicated content manager",
                  "Custom content strategy",
                ],
                recommended: false,
              },
            ].map((pkg, index) => (
              <div
                key={index}
                className={`relative rounded-2xl shadow-lg overflow-hidden ${pkg.recommended ? "border-2 border-blue-500 transform scale-105" : "border border-gray-200"}`}
              >
                {pkg.recommended && (
                  <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {pkg.price}
                  </div>
                  <p className="text-gray-600 text-sm mb-6">
                    {pkg.description}
                  </p>
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    className={`w-full py-3 rounded-full font-semibold transition-all ${pkg.recommended ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-900"}`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-20 bg-linear-to-r from-blue-900 to-cyan-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-blue-400" />
            </div>
            <p className="text-2xl md:text-3xl text-white leading-relaxed mb-8">
              "Klass Koncepts transformed our content strategy. Our engagement
              tripled within 3 months, and we've never had a more consistent
              brand voice."
            </p>
            <div className="text-white font-semibold">Sarah Johnson</div>
            <div className="text-blue-300 text-sm">
              Marketing Director, TechStart Inc.
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}

      <ExpertiseCta
        color="blue"
        header="Ready to Scale Your Content?"
        paragragh="Stop struggling with content creation. Let our team of expert
              creators handle everything while you focus on growing your
              business."
        btn1="Get a Free Content Audit"
        btn2=" View Content Samples"
        tiny="Klass Koncepts — Content That Works as Hard as You Do"
        path="portfolio"
      />

      {/*  <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-r from-blue-50 to-cyan-50 rounded-3xl p-12 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Scale Your Content?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Stop struggling with content creation. Let our team of expert
              creators handle everything while you focus on growing your
              business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Get a Free Content Audit
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium px-8 py-4 rounded-full transition-all text-lg">
                View Content Samples
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-8">
              Klass Koncepts — Content That Works as Hard as You Do
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ContentCreation;
