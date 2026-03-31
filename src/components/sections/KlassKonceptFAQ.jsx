import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronDown,
  FaSearch,
  FaTimes,
  FaHeadset,
  FaClock,
  FaShieldAlt,
  FaRocket,
  FaHeart,
  FaStar,
  FaArrowRight,
  FaMagic,
  FaGem,
  FaCrown,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";
import { BsChatQuote } from "react-icons/bs";
import { Link } from "react-router-dom";

// Background Decorations Component
const BackgroundDecorations = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-20 w-96 h-96 bg-purple-600/20 rounded-xl blur-[100px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-fuchsia-600/20 rounded-xl blur-[100px]"
      />
    </div>
  );
};

// Category Cards Component
const CategoryCard = ({
  icon: Icon,
  title,
  count,
  color,
  isActive,
  onClick,
}) => {
  const getColorClasses = (color) => {
    const colorMap = {
      purple: "text-purple-600",
      fuchsia: "text-fuchsia-600",
      blue: "text-blue-600",
      yellow: "text-yellow-600",
      green: "text-green-600",
      pink: "text-pink-600",
      orange: "text-orange-600",
    };
    return colorMap[color] || "text-purple-600";
  };

  return (
    <motion.button
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative group overflow-hidden rounded-2xl p-6 transition-all duration-500 ${
        isActive
          ? "bg-linear-to-br from-purple-600 to-fuchsia-600 text-white shadow-2xl shadow-purple-600/30"
          : "bg-white/80 backdrop-blur-xl text-gray-800 hover:shadow-xl border border-gray-200/50"
      }`}
    >
      {/* Animated background on hover */}
      <motion.div
        initial={false}
        animate={isActive ? { scale: 1.5 } : { scale: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-linear-to-br from-purple-600/20 to-fuchsia-600/20 rounded-2xl"
      />

      <div className="relative z-10">
        <div
          className={`text-3xl mb-4 ${isActive ? "text-white" : getColorClasses(color)}`}
        >
          {Icon && <Icon />}
        </div>
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p
          className={`text-sm ${isActive ? "text-white/80" : "text-gray-500"}`}
        >
          {count} Questions
        </p>
      </div>

      {/* Decorative elements */}
      <motion.div
        animate={isActive ? { rotate: 360 } : {}}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -right-8 -bottom-8 w-24 h-24 bg-white/10 rounded-xl blur-2xl"
      />
    </motion.button>
  );
};

// Premium FAQ Item Component
const PremiumFAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
  index,
  category,
}) => {
  const itemRef = useRef(null);

  useEffect(() => {
    if (isOpen && itemRef.current) {
      itemRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [isOpen]);

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative group"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${
          isOpen
            ? "bg-black text-black shadow-2xl scale-105 z-10"
            : "bg-white shadow-md backdrop-blur-xl hover:shadow-xl border border-gray-200/50"
        }`}
      >
        {/* Glass morphism overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <button
          onClick={onClick}
          className="w-full text-left p-6 relative z-10"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4 flex-1">
              {/* Question number with animation */}
              <motion.div
                animate={
                  isOpen ? { rotate: 360, scale: 1.2 } : { rotate: 0, scale: 1 }
                }
                transition={{ duration: 0.5 }}
                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                  isOpen
                    ? "bg-white/20 text-white"
                    : "bg-linear-to-br from-purple-100 to-fuchsia-100 text-purple-600"
                }`}
              >
                <span className="font-bold text-sm">{index + 1}</span>
              </motion.div>

              <div className="flex-1 ">
                <div className="flex items-center gap-2 mb-2 ">
                  {/* Category tag */}
                  <span
                    className={`text-xs px-3 py-1 rounded-xl ${
                      isOpen
                        ? "bg-white/20 text-white"
                        : "bg-linear-to-r from-purple-100 to-fuchsia-100 text-purple-600"
                    }`}
                  >
                    {category}
                  </span>

                  {/* Premium badge for special questions */}
                  {/*    {index % 3 === 0 && (
                    <span className="flex items-center gap-1 text-xs px-3 py-1 rounded-xl bg-linear-to-r from-yellow-400 to-orange-400 text-white">
                      <FaCrown className="text-xs" /> Premium
                    </span>
                  )} */}
                </div>

                <h3
                  className={`text-lg  font-semibold pr-8 ${isOpen ? "text-white" : "text-gray-900"}`}
                >
                  {question}
                </h3>
              </div>
            </div>

            {/* Animated chevron */}
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center ${
                isOpen ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
              }`}
            >
              <FaChevronDown />
            </motion.div>
          </div>
        </button>

        {/* Answer with animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="overflow-hidden"
            >
              <div className="p-6 pt-0 border-t border-white/20 ">
                <div className="flex gap-4 py-4">
                  {/* Answer icon */}
                  <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center shrink-0 ">
                    <FaMagic className="text-white/80" />
                  </div>

                  <div className="flex-1 space-y-4">
                    <p
                      className={`text-base leading-relaxed ${isOpen ? "text-white/90" : "text-gray-600"}`}
                    >
                      {answer}
                    </p>

                    {/* Additional resources */}
                    <div className="flex items-center gap-4 pt-4">
                      <button className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors group">
                        <FaHeart className="group-hover:scale-110 transition-transform" />
                        Was this helpful?
                      </button>
                      <button className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors">
                        <BsChatQuote />
                        Get personalized help
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleClear = useCallback(() => {
    setSearchTerm("");
  }, [setSearchTerm]);

  const handleSuggestionClick = useCallback(
    (term) => {
      setSearchTerm(term);
    },
    [setSearchTerm],
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative max-w-2xl mx-auto mb-12"
    >
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gray-300 shadow-md rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200" />

        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Ask me anything about Klass Koncept..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-4 bg-white backdrop-blur-xl rounded-xl text-gray-800 placeholder-gray-400 text-lg"
          />

          <div className="absolute right-2 flex items-center gap-2">
            {searchTerm && (
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ rotate: 90 }}
                onClick={handleClear}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <FaTimes className="text-gray-400" />
              </motion.button>
            )}

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-linear-to-r from-purple-600 to-fuchsia-600 rounded-lg text-white shadow-lg shadow-purple-600/30"
            >
              <FaSearch />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Search suggestions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex items-center gap-2 mt-3 text-sm text-gray-500"
      >
        <span>Popular searches:</span>
        {["Pricing", "Timeline", "Support", "Custom work"].map((term) => (
          <button
            key={term}
            onClick={() => handleSuggestionClick(term)}
            className="px-3 py-1 bg-gray-100 hover:bg-purple-100 rounded-xl transition-colors"
          >
            {term}
          </button>
        ))}
      </motion.div>
    </motion.div>
  );
};

const StatsCards = () => {
  const stats = useMemo(
    () => [
      {
        icon: FaClock,
        label: "Avg. Response",
        value: "< 2 hours",
        color: "purple",
        iconColor: "text-purple-600",
      },
      {
        icon: FaHeadset,
        label: "24/7 Support",
        value: "Premium",
        color: "fuchsia",
        iconColor: "text-fuchsia-600",
      },
      {
        icon: FaShieldAlt,
        label: "Satisfaction",
        value: "100%",
        color: "blue",
        iconColor: "text-purple-600",
      },
      {
        icon: FaRocket,
        label: "Projects",
        value: "500+",
        color: "orange",
        iconColor: "text-fuchsia-600",
      },
    ],
    [],
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
    >
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <motion.div
            key={index}
            whileHover={{ y: -5, scale: 1.02 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-linear-to-r from-purple-600/10 to-fuchsia-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 text-center">
              <div className={`text-3xl ${stat.iconColor} mb-2`}>
                <IconComponent />
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

// Main Component
const KlassKonceptFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // FAQ Categories - moved to useMemo to prevent recalculation
  const categories = useMemo(
    () => [
      {
        id: "all",
        name: "All Questions",
        icon: FaGem,
        count: 24,
        color: "purple",
      },
      {
        id: "services",
        name: "Services",
        icon: FaRocket,
        count: 8,
        color: "fuchsia",
      },
      {
        id: "pricing",
        name: "Pricing",
        icon: FaCrown,
        count: 6,
        color: "gray",
      },
      {
        id: "support",
        name: "Support",
        icon: FaHeadset,
        count: 5,
        color: "fuchsia",
      },
      {
        id: "process",
        name: "Process",
        icon: FaMagic,
        count: 5,
        color: "purple",
      },
    ],
    [],
  );

  // Premium FAQ Data - moved to useMemo
  const faqs = useMemo(
    () => [
      {
        question: "What makes Klass Koncept different from other agencies?",
        answer:
          "Klass Koncept combines cutting-edge technology with artistic excellence. We don't just build websites; we create digital experiences that captivate, convert, and elevate your brand. Our team of elite designers and developers work seamlessly to deliver solutions that are 3x faster and 5x more beautiful than industry standards.",
        category: "services",
        premium: true,
      },
      {
        question: "How quickly can you start on my project?",
        answer:
          "We typically begin within 48 hours of project confirmation. Our agile methodology allows us to rapidly deploy resources while maintaining our signature quality. For urgent projects, we offer a 'Rapid Launch' option that can have your project started within 24 hours.",
        category: "process",
        premium: false,
      },
      {
        question: "What's your pricing structure like?",
        answer:
          "Our pricing is transparent and value-based. We offer three tiers: Essential (starts at $2,500), Professional (starts at $5,000), and Enterprise (custom pricing). Each tier is designed to scale with your needs, and we provide detailed breakdowns before any commitment. All packages include our signature white-glove service.",
        category: "pricing",
        premium: true,
      },
      {
        question: "Do you offer ongoing support after launch?",
        answer:
          "Absolutely! Every project includes 30 days of complimentary post-launch support. We also offer flexible maintenance packages starting at $199/month that include regular updates, security patches, priority support, and performance optimization.",
        category: "support",
        premium: false,
      },
      {
        question: "Can you work with our existing brand guidelines?",
        answer:
          "Yes! We're brand chameleons. Whether you have established guidelines or need help creating them, we seamlessly adapt to your brand's voice, colors, and personality. Our designers treat your brand with the same care and attention as if it were our own.",
        category: "services",
        premium: true,
      },
      {
        question: "What technologies do you specialize in?",
        answer:
          "We're technology agnostic but excellence-focused. Our stack includes React, Next.js, Vue, Node.js, Python, and cutting-edge frameworks. We choose the perfect technology for your specific needs rather than forcing a one-size-fits-all solution.",
        category: "services",
        premium: false,
      },
      {
        question: "How do you handle revisions and feedback?",
        answer:
          "We believe in collaborative creation. You'll have access to a private project dashboard where you can leave feedback, track progress, and request revisions. We offer unlimited revisions during the design phase because your satisfaction is non-negotiable.",
        category: "process",
        premium: true,
      },
      {
        question: "What's your typical project timeline?",
        answer:
          "Timelines vary by complexity: Landing pages (1-2 weeks), Business websites (2-4 weeks), E-commerce (4-6 weeks), and Web applications (6-12 weeks). We provide detailed timelines upfront and hit every milestone with precision.",
        category: "process",
        premium: false,
      },
    ],
    [],
  );

  // Filter FAQs based on category and search - using useMemo for performance
  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory =
        activeCategory === "all" || faq.category === activeCategory;
      const matchesSearch =
        searchTerm === "" ||
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [faqs, activeCategory, searchTerm]);

  // Get category name helper
  const getCategoryName = useCallback(
    (categoryId) => {
      const category = categories.find((c) => c.id === categoryId);
      return category?.name || categoryId;
    },
    [categories],
  );

  // Handlers
  const handleCategoryClick = useCallback((categoryId) => {
    setActiveCategory(categoryId);
    setOpenIndex(null); // Close any open FAQ when switching categories
  }, []);

  const handleFaqClick = useCallback(
    (index) => {
      setOpenIndex(openIndex === index ? null : index);
    },
    [openIndex],
  );

  const handleClearAll = useCallback(() => {
    setSearchTerm("");
    setActiveCategory("all");
  }, []);

  // Add a debug log to check if component is rendering
  console.log("Rendering KlassKonceptFAQ", {
    filteredFaqs: filteredFaqs.length,
  });

  return (
    <div className="relative min-h-screen bg-linear-to-b from-gray-50 via-white to-purple-50/30">
      <BackgroundDecorations />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Premium badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="inline-flex items-center gap-2 bg-linear-to-r from-purple-600/10 to-fuchsia-600/10 backdrop-blur-xl px-4 py-2 rounded-xl border border-purple-200/50 mb-6"
            >
              <span className="text-sm font-semibold bg-linear-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                Premium Knowledge Base
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Hello, how can we
              </span>
              <br />
              <span className="bg-linear-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                help you today?
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Search our premium knowledge base or browse categories below to
              find expert answers about our services, process, and pricing.
            </p>
          </motion.div>

          {/* Search Bar */}
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          {/* Stats Cards */}
          <StatsCards />
        </div>
      </section>

      {/* Main FAQ Section */}
      <section className="relative pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16"
          >
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                icon={category.icon}
                title={category.name}
                count={category.count}
                color={category.color}
                isActive={activeCategory === category.id}
                onClick={() => handleCategoryClick(category.id)}
              />
            ))}
          </motion.div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-4">
            <AnimatePresence mode="wait">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                  <PremiumFAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    category={getCategoryName(faq.category)}
                    isOpen={openIndex === index}
                    onClick={() => handleFaqClick(index)}
                    index={index}
                  />
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center py-20"
                >
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    No results found
                  </h3>
                  <p className="text-gray-600">
                    Try adjusting your search or browse all categories
                  </p>
                  <button
                    onClick={handleClearAll}
                    className="mt-6 px-6 py-3 bg-linear-to-r from-purple-600 to-fuchsia-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    View all questions
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Still have questions? */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mt-32"
          >
            <div  />
            <div className="relative bg-gray-200 backdrop-blur-xl rounded-2xl p-10 text-center">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-5xl mb-4"
              >
                💎
              </motion.div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Still have questions?
              </h2>

              <p className="text-md text-gray-600 max-w-2xl mx-auto mb-8">
                Our premium support team is ready to provide personalized
                answers and guide you through your journey with Klass Koncept.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/portfolio">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-8 py-3 bg-black text-white rounded-xl font-medium text-md shadow-md hover:shadow-lg transition-all"
                  >
                    <span className="flex items-center gap-2">
                      Check Out Our Works
                      <FaArrowUp className="group-hover:translate-x-1 transition-transform text-xs" />
                    </span>
                  </motion.button>
                </Link>

                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-white text-gray-900 rounded-xl shadow-md font-medium text-md  hover:shadow-lg transition-all"
                  >
                    <span className="flex items-center gap-2">
                      Schedule a consultation
                      <FaArrowDown className="group-hover:translate-x-1 transition-transform text-xs" />
                    </span>
                  </motion.button>
                </Link>
              </div>

              {/* Quick contact options */}
              <div className="flex items-center justify-center gap-3 mt-3 text-sm text-gray-600">
                <span className="bg-white shadow-md p-2 rounded-2xl">
                  ✨ hello@klasskoncept.com
                </span>

                <span className="bg-white mx-2 shadow-md p-2 rounded-2xl">
                  ✨ +233 55 264 9953
                </span>

                <span className="bg-white shadow-md p-2 rounded-2xl">
                  ✨ 24/7 Premium Support
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default KlassKonceptFAQ;
