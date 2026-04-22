import { memo, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaCalendarAlt,
  FaUser,
  FaFolder,
  FaTags,
  FaArrowRight,
  FaClock,
  FaComment,
  FaShare,
} from "react-icons/fa";

// Blog Images (replace with your actual imports)
import blog1 from "../../assets/images/blog/klass.jpeg";
import blog2 from "../../assets/images/blog/klass.jpeg";
import blog3 from "../../assets/images/blog/klass.jpeg";
import blog4 from "../../assets/images/blog/klass.jpeg";
import blog5 from "../../assets/images/blog/klass.jpeg";
import blog6 from "../../assets/images/blog/klass.jpeg";
import author1 from "../../assets/images/blog/klass.jpeg";
import author2 from "../../assets/images/blog/klass.jpeg";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const BlogPost = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Blog Categories
  const categories = [
    { id: "all", name: "All Posts", count: 24 },
    { id: "web-design", name: "Web Design", count: 8 },
    { id: "development", name: "Development", count: 7 },
    { id: "branding", name: "Branding", count: 5 },
    { id: "marketing", name: "Digital Marketing", count: 4 },
  ];

  // Blog Posts Data
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Design: 2024 Trends to Watch",
      excerpt:
        "Explore the latest trends shaping the future of web design, from AI-powered interfaces to immersive 3D experiences.",
      content: "Full content here...",
      image: blog1,
      category: "web-design",
      tags: ["Web Design", "Trends", "UI/UX"],
      author: {
        name: "Sarah Johnson",
        avatar: author1,
        role: "Lead Designer",
      },
      date: "2024-03-15",
      readTime: "5 min read",
      comments: 12,
      featured: true,
    },
    {
      id: 2,
      title: "Building Scalable React Applications: Best Practices",
      excerpt:
        "Learn the essential patterns and practices for building large-scale React applications that stand the test of time.",
      image: blog2,
      category: "development",
      tags: ["React", "JavaScript", "Architecture"],
      author: {
        name: "Michael Chen",
        avatar: author2,
        role: "Senior Developer",
      },
      date: "2024-03-10",
      readTime: "8 min read",
      comments: 8,
      featured: false,
    },
    {
      id: 3,
      title: "The Psychology of Color in Branding",
      excerpt:
        "Discover how color psychology influences brand perception and consumer behavior in the digital age.",
      image: blog3,
      category: "branding",
      tags: ["Branding", "Psychology", "Design"],
      author: {
        name: "Emily Rodriguez",
        avatar: author1,
        role: "Brand Strategist",
      },
      date: "2024-03-05",
      readTime: "6 min read",
      comments: 15,
      featured: true,
    },
    {
      id: 4,
      title: "SEO Strategies That Actually Work in 2024",
      excerpt:
        "Cut through the noise with proven SEO strategies that drive real results and improve your search rankings.",
      image: blog4,
      category: "marketing",
      tags: ["SEO", "Marketing", "Growth"],
      author: {
        name: "David Kim",
        avatar: author2,
        role: "SEO Specialist",
      },
      date: "2024-02-28",
      readTime: "7 min read",
      comments: 6,
      featured: false,
    },
    {
      id: 5,
      title: "Mastering Mobile-First Design",
      excerpt:
        "A comprehensive guide to creating exceptional mobile experiences that users love.",
      image: blog5,
      category: "web-design",
      tags: ["Mobile", "Responsive", "UI"],
      author: {
        name: "Lisa Thompson",
        avatar: author1,
        role: "UX Designer",
      },
      date: "2024-02-20",
      readTime: "6 min read",
      comments: 9,
      featured: false,
    },
    {
      id: 6,
      title: "The Rise of No-Code Development",
      excerpt:
        "How no-code platforms are democratizing development and changing the way we build software.",
      image: blog6,
      category: "development",
      tags: ["No-Code", "Development", "Innovation"],
      author: {
        name: "Alex Rivera",
        avatar: author2,
        role: "Tech Lead",
      },
      date: "2024-02-15",
      readTime: "4 min read",
      comments: 4,
      featured: true,
    },
  ];

  // Featured Posts
  const featuredPosts = blogPosts.filter((post) => post.featured);

  // Filter posts based on category and search
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Recent Posts (for sidebar)
  const recentPosts = blogPosts.slice(0, 3);

  // Popular Tags
  const popularTags = [
    "React",
    "Design",
    "Development",
    "UI/UX",
    "Branding",
    "SEO",
    "Marketing",
    "Mobile",
  ];

  return (
    <>
      {/* Main Blog Content */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content - Blog Posts */}
            <div className="lg:col-span-2">
              {/* Featured Posts Carousel */}
              {featuredPosts.length > 0 &&
                searchTerm === "" &&
                selectedCategory === "all" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Featured Articles
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {featuredPosts.slice(0, 2).map((post) => (
                        <motion.article
                          key={post.id}
                          whileHover={{ y: -10 }}
                          className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                          <Link to={`/blog/${post.id}`} className="block">
                            <div className="relative h-48 overflow-hidden">
                              <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                              />
                              <div className="absolute top-4 left-4 bg-linear-to-r from-purple-600 to-fuchsia-600 text-white px-3 py-1 rounded-xl text-sm">
                                Featured
                              </div>
                            </div>

                            <div className="p-6">
                              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                <span className="flex items-center gap-1">
                                  <FaCalendarAlt className="text-fuchsia-600" />
                                  {new Date(post.date).toLocaleDateString(
                                    "en-US",
                                    {
                                      month: "short",
                                      day: "numeric",
                                      year: "numeric",
                                    },
                                  )}
                                </span>
                                <span className="flex items-center gap-1">
                                  <FaClock className="text-fuchsia-600" />
                                  {post.readTime}
                                </span>
                              </div>

                              <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-fuchsia-600 transition">
                                {post.title}
                              </h3>

                              <p className="text-gray-600 mb-4 line-clamp-2">
                                {post.excerpt}
                              </p>

                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <img
                                    src={post.author.avatar}
                                    alt={post.author.name}
                                    className="w-8 h-8 rounded-xl object-cover"
                                  />
                                  <span className="text-sm text-gray-700">
                                    {post.author.name}
                                  </span>
                                </div>
                                <span className="text-fuchsia-600 font-semibold flex items-center gap-1 group">
                                  Read More
                                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition" />
                                </span>
                              </div>
                            </div>
                          </Link>
                        </motion.article>
                      ))}
                    </div>
                  </motion.div>
                )}

              {/* Blog Posts Grid */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-6"
              >
                {currentPosts.map((post) => (
                  <motion.article
                    key={post.id}
                    variants={fadeInUp}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <Link to={`/blog/${post.id}`} className="block">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        />
                      </div>

                      <div className="p-5">
                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                          <span className="flex items-center gap-1">
                            <FaCalendarAlt className="text-fuchsia-600" />
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaComment className="text-fuchsia-600" />
                            {post.comments}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-fuchsia-600 transition line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            By {post.author.name}
                          </span>
                          <span className="text-fuchsia-600 text-sm font-semibold flex items-center gap-1 group">
                            Read
                            <FaArrowRight className="text-xs group-hover:translate-x-1 transition" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </motion.div>

              {/* Pagination */}
              {totalPages > 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="flex justify-center mt-12 gap-2"
                >
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 rounded-xl font-semibold transition-all ${
                          currentPage === page
                            ? "bg-linear-to-r from-purple-600 to-fuchsia-600 text-white"
                            : "bg-white text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {page}
                      </button>
                    ),
                  )}
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-md mb-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Categories
                </h3>
                <ul className="space-y-3">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center justify-between p-2 rounded-lg transition ${
                          selectedCategory === category.id
                            ? "bg-gradient-to-r from-purple-50 to-fuchsia-50 text-fuchsia-600"
                            : "hover:bg-gray-50"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <FaFolder
                            className={
                              selectedCategory === category.id
                                ? "text-fuchsia-600"
                                : "text-gray-400"
                            }
                          />
                          {category.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {category.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Recent Posts */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-md mb-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Recent Posts
                </h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.id}`}
                      className="flex gap-3 group"
                    >
                      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 group-hover:text-fuchsia-600 transition line-clamp-2">
                          {post.title}
                        </h4>
                        <span className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                          <FaCalendarAlt className="text-fuchsia-600" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Popular Tags */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-md mb-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <button
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-xl text-sm hover:bg-gradient-to-r hover:from-purple-600 hover:to-fuchsia-600 hover:text-white transition-all"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-purple-900 to-fuchsia-900 rounded-2xl p-6 shadow-md text-white"
              >
                <h3 className="text-xl font-bold mb-2">Newsletter</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Get the latest posts delivered straight to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 mb-3 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="w-full bg-white text-purple-900 font-semibold py-2 rounded-lg hover:bg-gray-100 transition">
                  Subscribe
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(BlogPost);
