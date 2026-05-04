import { FaCheckCircle, FaUsers, FaStar, FaLayerGroup } from "react-icons/fa";
import { LuZap, LuSmartphone, LuClock, LuShield } from "react-icons/lu";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

import webDevImg from "../../../../assets/images/blog/klass.jpeg";
import mobileAppImg from "../../../../assets/images/blog/klass.jpeg";
import uiuxImg from "../../../../assets/images/blog/klass.jpeg";

export const digitalServices = [
  {
    title: "Enterprise Web Solutions",
    description:
      "We build high-performing, scalable websites and complex web applications tailored to your business needs. From custom e-commerce platforms to enterprise portals, our solutions are designed for speed, security, and seamless user experiences.",
    image: webDevImg,
    link: "/services/web-development",
    features: [
      {
        icon: LuZap,
        title: "Lightning Fast",
        description: "Optimized for Core Web Vitals",
      },
      {
        icon: LuShield,
        title: "Secure by Design",
        description: "Enterprise-grade security",
      },
      {
        icon: FaCheckCircle,
        title: "SEO Optimized",
        description: "Built to rank on search engines",
      },
      {
        icon: LuClock,
        title: "24/7 Support",
        description: "Dedicated maintenance team",
      },
    ],
    reverse: false,
    badgeText: "Web Development",
    ctaText: "Explore web solutions",
  },
  {
    title: "Mobile Applications",
    description:
      "Create powerful, intuitive mobile experiences that users love. Our cross-platform and native apps are engineered for performance, scalability, and seamless integration with your existing systems. From startups to enterprises, we deliver apps that drive engagement.",
    image: mobileAppImg,
    link: "/services/mobile-apps",
    features: [
      {
        icon: LuSmartphone,
        title: "Cross-Platform",
        description: "iOS & Android ready",
      },
      {
        icon: LuZap,
        title: "Offline First",
        description: "Works without internet",
      },
      {
        icon: FaUsers,
        title: "User-Centric",
        description: "Intuitive UX/UI design",
      },
      {
        icon: HiOutlineRocketLaunch,
        title: "Fast Launch",
        description: "Accelerated development",
      },
    ],
    reverse: true,
    badgeText: "Mobile Development",
    ctaText: "See mobile solutions",
  },
  {
    title: "UI/UX Strategy & Design",
    description:
      "Transform your digital products with user-first interfaces that drive engagement and conversions. Our design process combines research, prototyping, and testing to create experiences that are both beautiful and functional.",
    image: uiuxImg,
    link: "/services/ui-ux",
    features: [
      {
        icon: FaLayerGroup,
        title: "Design Systems",
        description: "Consistent brand experience",
      },
      {
        icon: FaUsers,
        title: "User Research",
        description: "Data-driven decisions",
      },
      {
        icon: FaStar,
        title: "Interactive Prototypes",
        description: "Test before building",
      },
      {
        icon: LuZap,
        title: "Accessibility First",
        description: "WCAG compliant designs",
      },
    ],
    reverse: false,
    badgeText: "UI/UX Design",
    ctaText: "View design approach",
  },
];
