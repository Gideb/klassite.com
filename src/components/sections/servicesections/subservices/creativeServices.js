import { 
  FaPalette, 
  FaPaintBrush, 
  FaPenFancy, 
  FaVideo, 
  FaCamera,
  FaBullseye,
  FaHeart,
  FaMagic,
  FaSmile,
  FaUsers,
  FaChartLine
} from "react-icons/fa";
import { 
  LuSparkles, 
  LuPenTool, 
  LuLayers, 
 
  LuGlobe,
  LuClock,
  LuZap
} from "react-icons/lu";
import { 
  HiOutlinePhotograph, 
  HiOutlineLightBulb 
} from "react-icons/hi";
import { 
  TbBrandFigma, 
  TbBrandAdobe, 
  TbTypography 
} from "react-icons/tb";

// Import your images (replace with actual paths)
import brandExperienceImg from "../../../../assets/images/blog/klass.jpeg";
import contentCreationImg from "../../../../assets/images/blog/klass.jpeg";
import graphicDesignImg from "../../../../assets/images/blog/klass.jpeg";

export const creativeServices = [
  {
    title: "Brand Experience",
    description: "Create memorable brand journeys that resonate with your audience at every touchpoint. From brand strategy to emotional connection, we craft cohesive experiences that build lasting relationships and drive brand loyalty across all channels.",
    image: brandExperienceImg,
    link: "/services/brand-experience",
    features: [
      {
        icon: FaBullseye,
        title: "Brand Strategy",
        description: "Data-driven positioning & messaging",
      },
      {
        icon: FaHeart,
        title: "Emotional Connection",
        description: "Build meaningful relationships",
      },
      {
        icon: LuGlobe,
        title: "Omnichannel Presence",
        description: "Consistent across all platforms",
      },
      {
        icon: FaUsers,
        title: "Audience Insights",
        description: "Deep customer understanding",
      },
    ],
    reverse: false,
    badgeText: "Brand Experience",
    ctaText: "Transform your brand",
  },
  {
    title: "Content Creation",
    description: "Captivate your audience with compelling, platform-optimized content that tells your story. Our creative team produces high-quality visuals, videos, and copy that drives engagement, builds authority, and converts viewers into loyal customers.",
    image: contentCreationImg,
    link: "/services/content-creation",
    features: [
      {
        icon: FaVideo,
        title: "Video Production",
        description: "Professional storytelling",
      },
      {
        icon: FaCamera,
        title: "Photography",
        description: "High-impact visuals",
      },
      {
        icon: LuPenTool,
        title: "Copywriting",
        description: "Persuasive brand voice",
      },
      {
        icon: LuSparkles,
        title: "Social Content",
        description: "Platform-optimized assets",
      },
    ],
    reverse: true,
    badgeText: "Content Creation",
    ctaText: "Create engaging content",
  },
  {
    title: "Graphic Design",
    description: "Transform ideas into stunning visuals that communicate your brand's essence. From logos to complete brand identities, our designs are crafted to capture attention, convey messages clearly, and leave lasting impressions across every medium.",
    image: graphicDesignImg,
    link: "/services/graphic-design",
    features: [
      {
        icon: TbBrandFigma,
        title: "UI/UX Design",
        description: "Beautiful digital interfaces",
      },
      {
        icon: FaPaintBrush,
        title: "Brand Identity",
        description: "Logos, colors & typography",
      },
      {
        icon: TbTypography,
        title: "Print Design",
        description: "Brochures, packaging & more",
      },
      {
        icon: HiOutlineLightBulb,
        title: "Illustration",
        description: "Custom unique artwork",
      },
    ],
    reverse: false,
    badgeText: "Graphic Design",
    ctaText: "Bring ideas to life",
  },
];