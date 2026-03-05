import { memo, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { HiOutlineCheckCircle } from "react-icons/hi";
import video3 from "../../../assets/videos/video3.mp4";
import poster from "../../../assets/images/poster.jpg";

const PerformanceFramework = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const frameworks = [
    {
      id: "01",
      title: "Strategic Architecture",
      description:
        "We map your business goals to technical requirements before writing a single line of code.",
      gradient: "from-purple-600 to-fuchsia-600",
      details: [
        "Business goal mapping",
        "Technical requirement analysis",
        "Scalability planning",
      ],
    },
    {
      id: "02",
      title: "Experience Engineering",
      description:
        "Every interaction is engineered for speed and clarity. Optimized for how users actually behave.",
      gradient: "from-blue-600 to-cyan-500",
      details: [
        "User behavior analysis",
        "Interaction optimization",
        "Conversion path mapping",
      ],
    },
    {
      id: "03",
      title: "Scalable Development",
      description:
        "Clean code that grows with you. Handles traffic spikes and future integration without breaking.",
      gradient: "from-green-600 to-emerald-500",
      details: [
        "Clean code architecture",
        "Traffic spike handling",
        "Future-proof integration",
      ],
    },
    {
      id: "04",
      title: "Optimization & Growth",
      description:
        "Launch is just the beginning. We continuously refine based on real data.",
      gradient: "from-orange-600 to-red-500",
      details: [
        "Data-driven refinement",
        "Performance monitoring",
        "Continuous improvement",
      ],
    },
  ];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 bg-white overflow-hidden"
    >
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">
            Systematic Approach
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-2">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-fuchsia-600">
              Performance Framework
            </span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            A repeatable process that turns technical complexity into measurable
            business growth.
          </p>
        </div>

        {/* Split Layout: Framework Left, Video Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Framework Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {frameworks.map((item, idx) => (
              <div key={idx} className="relative flex gap-6 group">
                {/* Number badge */}
                <div className="shrink-0">
                  <div
                    className={`w-14 h-14 rounded-full bg-linear-to-br ${item.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {item.id}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-6 border-b border-gray-100 last:border-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{item.description}</p>

                  <ul className="space-y-1">
                    {item.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-500"
                      >
                        <HiOutlineCheckCircle
                          className={`text-transparent bg-clip-text bg-linear-to-br ${item.gradient} text-sm`}
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Column - Video */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative top-50"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 aspect-video">
              {/* Video Element */}
              <video
                ref={videoRef}
                src={video3}
                poster={poster}
                autoPlay
                muted={isMuted}
                loop
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-purple-900/40 via-transparent to-transparent pointer-events-none"></div>

              {/* Video Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={togglePlay}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    {isPlaying ? (
                      <FaPause className="text-sm" />
                    ) : (
                      <FaPlay className="text-sm ml-0.5" />
                    )}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    {isMuted ? (
                      <FaVolumeMute className="text-sm" />
                    ) : (
                      <FaVolumeUp className="text-sm" />
                    )}
                  </button>
                </div>

                <span className="text-xs text-white/80 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  How we build • 1:24
                </span>
              </div>

              {/* Play/Pause when out of view */}
              {!isInView && isPlaying && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <button
                    onClick={togglePlay}
                    className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white hover:bg-purple-700 transition-colors animate-pulse"
                  >
                    <FaPlay className="text-xl ml-1" />
                  </button>
                </div>
              )}
            </div>

            {/* Video Caption */}
            <div className="mt-4 text-center text-sm text-gray-500">
              See our framework in action • Behind-the-scenes at Klass Koncepts
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 -z-10"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-fuchsia-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 -z-10"></div>
          </motion.div>

          {}
        </div>
      </div>
    </section>
  );
};

export default memo(PerformanceFramework);
