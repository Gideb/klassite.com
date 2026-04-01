import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHandSparkles,
  FaArrowRight,
  FaMapPin,
  FaClock,
  FaArrowUp,
  FaLightbulb,
  FaUsers,
  FaRocket,
  FaHeart,
  FaEnvelope,
} from "react-icons/fa";
import { PiTarget } from "react-icons/pi";
import { BsSend } from "react-icons/bs";
import { GoFileCode } from "react-icons/go";
import { TbTargetArrow, TbTrendingUp } from "react-icons/tb";
import { FiMessageSquare } from "react-icons/fi";

const steps = [
  {
    icon: BsSend,
    title: "Application",
    desc: "Submit your CV and portfolio. We review every application within 48 hours.",
    gradient: "from-white/80 to-white/80",
  },
  {
    icon: FiMessageSquare,
    title: "Interview",
    desc: "A 30-minute conversation to learn about you, your goals, and your experience.",
    gradient: "from-white/80 to-white/80",
  },
  {
    icon: GoFileCode,
    title: "Task",
    desc: "A short, relevant take-home challenge to showcase your skills.",
    gradient: "from-white/80 to-white/80",
  },
  {
    icon: PiTarget,
    title: "Offer",
    desc: "If it's a match, we move fast. Welcome to the team.",
    gradient: "from-white/80 to-white/80",
  },
];

const categories = ["All", "Frontend", "Backend", "Design", "Marketing"];

const jobs = [
  {
    title: "Senior Frontend Engineer",
    category: "Frontend",
    location: "Remote",
    type: "Full-time",
    desc: "Build blazing-fast interfaces with React, TypeScript, and modern tooling.",
    featured: true,
  },
  {
    title: "Backend Engineer",
    category: "Backend",
    location: "Accra",
    type: "Full-time",
    desc: "Design and scale APIs, databases, and cloud infrastructure.",
    featured: false,
  },
  {
    title: "Product Designer",
    category: "Design",
    location: "Remote",
    type: "Full-time",
    desc: "Own end-to-end design for products that millions will use.",
    featured: true,
  },
  {
    title: "Brand & Marketing Lead",
    category: "Marketing",
    location: "Accra",
    type: "Full-time",
    desc: "Shape the narrative and drive growth across all channels.",
    featured: false,
  },
  {
    title: "Junior Frontend Developer",
    category: "Frontend",
    location: "Remote",
    type: "Internship",
    desc: "Learn from senior engineers while shipping real features.",
    featured: false,
  },
  {
    title: "UI/UX Design Intern",
    category: "Design",
    location: "Accra",
    type: "Internship",
    desc: "Get hands-on experience designing for real clients and products.",
    featured: false,
  },
];

const values = [
  {
    icon: FaLightbulb,
    title: "Innovation",
    description:
      "We challenge conventions and explore new frontiers in digital craft. Every project is an opportunity to push boundaries.",
  },
  {
    icon: FaUsers,
    title: "Collaboration",
    description:
      "Great work happens when great minds connect. We foster a culture of openness, feedback, and collective brilliance.",
  },
  {
    icon: TbTargetArrow,
    title: "Excellence",
    description:
      "We hold ourselves to the highest standard. Every pixel, every line of code, every strategy is intentional.",
  },
  {
    icon: TbTrendingUp,
    title: "Growth",
    description:
      "We invest in our people. Your career trajectory here is limited only by your ambition and curiosity.",
  },
];

export const CareerSection = () => {
  const [active, setActive] = useState("All");
  const [hoveredJob, setHoveredJob] = useState(null);

  const filtered =
    active === "All" ? jobs : jobs.filter((j) => j.category === active);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden ">
        {/* Animated Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 backdrop-blur-sm"
          >
            <FaHandSparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm font-medium">
              We're hiring across all teams
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
          >
            Build the Future
            <br />
            <span className="bg-linear-to-r from-amber-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              with Klass Koncepts
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            We craft world-class digital experiences — from software and
            branding to strategy and design. Join a team that ships fast, thinks
            big, and never settles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#roles"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-white px-8 py-4 text-base font-semibol shadow-md transition-all hover:shadow-lg"
            >
              <span className="relative z-10">View Open Roles</span>
             
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-purple-600 to-primary"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#cta"
              className="inline-flex items-center gap-2 rounded-xl  backdrop-blur-sm px-8 py-4 text-base font-semibold transition-all bg-black text-white shadow-md hover:shadow-lg "
            >
              Join Our Talent Pool
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-sm font-semibold text-primary uppercase tracking-wider mb-3"
            >
              Our Values
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold"
            >
              Culture that drives
              <span className="bg-linear-to-r from-amber-600 to-purple-500 bg-clip-text text-transparent">
                {" "}
                results
              </span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl bg-card p-8 shadow-lg transition-all hover:shadow-xl"
              >
                <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-primary/10 to-purple-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-amber-600 text-white group-hover:scale-110 transition-transform">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-gray-700">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="roles" className="relative py-24 bg-gray-100">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Open Positions
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Find your
              <span className="bg-linear-to-r from-amber-500 to-purple-500 bg-clip-text text-transparent">
                {" "}
                next role
              </span>
            </h2>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActive(cat)}
                className={`relative rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
                  active === cat ? "text-white" : "bg-white shadow-md"
                }`}
              >
                {active === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full bg-black"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </motion.button>
            ))}
          </div>

          {/* Job cards */}
          <div className="grid gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((job, index) => (
                <motion.div
                  key={job.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ x: 8 }}
                  onHoverStart={() => setHoveredJob(job.title)}
                  onHoverEnd={() => setHoveredJob(null)}
                  className="group relative rounded-2xl bg-card p-6 md:p-8 shadow-lg transition-all hover:shadow-lg hover:shadow-amber-400 bg-white"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{job.desc}</p>
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium bg-gray-100">
                          <FaMapPin className="h-3 w-3" />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium bg-gray-100">
                          <FaClock className="h-3 w-3" />
                          {job.type}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary bg-gray-100">
                          {job.category}
                        </span>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="shrink-0 inline-flex items-center gap-2 rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg"
                    >
                      Apply Now
                      <FaArrowUp className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </motion.button>
                  </div>

                  {hoveredJob === job.title && (
                    <motion.div
                      layoutId="hoverGlow"
                      className="absolute inset-0 rounded-2xl bg-linear-to-r from-primary/5 to-purple-500/5 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Hiring Process Section */}
      <section
        id="process"
        className="relative py-24 bg-linear-to-b from-background via-primary/5 to-background"
      >
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              How It Works
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Our
              <span className="bg-linear-to-r from-amber-600 to-purple-500 bg-clip-text text-transparent">
                {" "}
                hiring process
              </span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A transparent, supportive journey designed to help you showcase
              your best self
            </p>
          </motion.div>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Connector line */}
            <div className="hidden md:block absolute top-18 left-[12.5%] right-[12.5%] h-px bg-black " />

            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group relative text-center"
              >
                <div className="relative z-10 mx-auto mb-6">
                  <motion.div
                    className={`inline-flex h-15 w-15 items-center justify-center rounded-2xl bg-linear-to-r ${step.gradient} ring ring-black`}
                  >
                    <step.icon className="h-6 w-6 text-amber-600" />
                  </motion.div>
                  {/*  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-card border-2 border-primary text-sm font-bold text-white">
                    {i + 1}
                  </div> */}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-60 mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-xl bg-white/10 p-12 shadow-md"
          >
            <div className="absolute inset-0 bg-black/5" />
            <div className="relative z-10">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex mb-6"
              ></motion.div>
              <h2 className="text-4xl md:text-4xl font-bold  mb-4">
                Don't see a role?
                <br /> Reach out anyway.
              </h2>
              <p className="text-black/70 text-lg mb-8 max-w-2xl mx-auto">
                We're always looking for exceptional people. Send us your
                portfolio, tell us your story, and let's figure out where you
                fit.
              </p>
              <motion.button
                whileHover={{ translateX: 0.5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-8 py-4 text-sm font-medium text-primary shadow-lg transition-all group duration-300 text-white "
              >
                <FaEnvelope className="h-5 w-3 group-hover:-translate-x-1 duration-300" />
                careers@klasskoncepts.com
                <FaArrowRight className="h-5 w-3 group-hover:translate-x-1  duration-300" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CareerSection;
