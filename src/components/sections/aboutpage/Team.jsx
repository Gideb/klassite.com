
import { FaGithub, FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa";


const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Rivera",
      role: "Founder & Lead Architect",
      bio: "Full-stack architect with 10+ years in scalable systems. Previously led engineering at TechCorp.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      social: {
        github: "https://github.com/alexrivera",
        linkedin: "https://linkedin.com/in/alexrivera",
        twitter: "https://twitter.com/alexrivera",
        website: "https://alexrivera.dev",
      },
    },
    {
      id: 2,
      name: "Maya Chen",
      role: "AI/ML Director",
      bio: "AI researcher turned engineer. Specializes in neural networks and computer vision solutions.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      social: {
        github: "https://github.com/mayachen",
        linkedin: "https://linkedin.com/in/mayachen",
        twitter: "https://twitter.com/mayachen",
      },
    },
    {
      id: 3,
      name: "Jordan Taylor",
      role: "Head of Product",
      bio: "Product strategist bridging tech and business. Launched 5 successful SaaS platforms.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      social: {
        github: "https://github.com/jordantaylor",
        linkedin: "https://linkedin.com/in/jordantaylor",
        website: "https://jordantaylor.design",
      },
    },
    {
      id: 4,
      name: "Sofia Rodriguez",
      role: "Lead UX Engineer",
      bio: "Creative technologist crafting intuitive interfaces with a focus on micro-interactions.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      social: {
        github: "https://github.com/sofiarodriguez",
        linkedin: "https://linkedin.com/in/sofiarodriguez",
        twitter: "https://twitter.com/sofiarodriguez",
      },
    },
    {
      id: 5,
      name: "Marcus Wright",
      role: "DevOps Lead",
      bio: "Cloud infrastructure expert. AWS Hero and Kubernetes contributor.",
      image:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      social: {
        github: "https://github.com/marcuswright",
        linkedin: "https://linkedin.com/in/marcuswright",
        twitter: "https://twitter.com/marcuswright",
      },
    },
    {
      id: 6,
      name: "Priya Patel",
      role: "Blockchain Lead",
      bio: "Web3 architect building decentralized solutions. Smart contract auditor.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      social: {
        github: "https://github.com/priyapatel",
        linkedin: "https://linkedin.com/in/priyapatel",
        website: "https://priyapatel.xyz",
      },
    },
  ];

  return (
    <section className="relative bg-linear-to-b from-gray-900 to-black py-24 overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, cyan 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Animated glow lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent animate-pulse" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-purple-500 to-transparent animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-cyan-400 text-sm tracking-wider">
              CORE TEAM
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Digital architects behind
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-400">
              the innovation
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono">
            {`> We're a team of engineers, designers, and problem solvers building the next generation of software solutions.`}
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              {/* Card glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r from-cyan-500/10 to-purple-500/10 pointer-events-none" />

              {/* Tech corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/0 group-hover:border-cyan-500 transition-all duration-300" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-purple-500/0 group-hover:border-purple-500 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-500/0 group-hover:border-purple-500 transition-all duration-300" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/0 group-hover:border-cyan-500 transition-all duration-300" />

              {/* Image container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent z-10" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />

                {/* Social links overlay */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-900/90 backdrop-blur rounded-lg flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400 border border-gray-700 transition-all duration-300"
                    >
                      <FaGithub size={18} />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-900/90 backdrop-blur rounded-lg flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400 border border-gray-700 transition-all duration-300"
                    >
                      <FaLinkedin size={18} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-900/90 backdrop-blur rounded-lg flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400 border border-gray-700 transition-all duration-300"
                    >
                      <FaTwitter size={18} />
                    </a>
                  )}
                  {member.social.website && (
                    <a
                      href={member.social.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-900/90 backdrop-blur rounded-lg flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400 border border-gray-700 transition-all duration-300"
                    >
                      <FaGlobe size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-cyan-400/80 text-sm font-mono mt-1">
                      {member.role}
                    </p>
                  </div>
                  <span className="text-3xl text-gray-700 group-hover:text-cyan-500/30 transition-colors font-mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {member.bio}
                </p>

                {/* Tech tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs font-mono text-gray-500 bg-gray-900/50 px-2 py-1 rounded border border-gray-700">
                    #innovation
                  </span>
                  <span className="text-xs font-mono text-gray-500 bg-gray-900/50 px-2 py-1 rounded border border-gray-700">
                    #tech
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join the team CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-linear-to-r from-cyan-500/10 to-purple-500/10 border border-gray-700 rounded-2xl p-8">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Join our team
              </h3>
              <p className="text-gray-400">
                We're always looking for talented minds to push the boundaries
                of tech.
              </p>
            </div>

            <Button className="px-6 py-3 bg-linear-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
              View Openings
              <span className="ml-2">→</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating tech elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-cyan-500/10 rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 border border-purple-500/10 rounded-full animate-pulse delay-1000" />
    </section>
  );
};

export default Team;
