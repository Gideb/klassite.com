import React from "react";

const LeadershipGrid = () => {
  const leadershipTeam = [
    {
      name: "Sarah Chen",
      title: "Founder & CEO",
      image: "/api/placeholder/500/600",
      bio: "Former product leader at Google and Microsoft. Founded the company to bridge the gap between data and execution in enterprise environments.",
      philosophy: '"Clarity before consensus."',
    },
    {
      name: "Marcus Rodriguez",
      title: "Chief Operating Officer",
      image: "/api/placeholder/500/600",
      bio: "Scaled three startups from seed to Series C. Expert in operational systems that maintain quality while accelerating growth.",
      philosophy: '"Systems over heroics."',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 bg-white">
      {/* Header */}
      <div className="mb-16">
        <span className="text-sm font-mono text-purple-800 font-medium tracking-wider">
          LEADERSHIP
        </span>
        <h2 className="text-3xl font-light text-gray-900 mt-4 mb-6">
          Founder-Led.
          <br />
          <span className="text-purple-800">Performance-Driven.</span>
        </h2>
        <div className="h-px w-32 bg-purple-800"></div>
      </div>

      {/* Two-column leadership grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        {leadershipTeam.map((leader, index) => (
          <div key={index} className="flex flex-col">
            {/* Image with subtle rounded corners */}
            <div className="relative mb-8 group">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-125 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-purple-800/10 group-hover:ring-purple-800/30 transition-colors"></div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="mb-4">
                <h3 className="text-2xl font-light text-gray-900 mb-1">
                  {leader.name}
                </h3>
                <p className="text-purple-800 font-medium text-sm tracking-wide">
                  {leader.title}
                </p>
              </div>

              <div className="space-y-4 text-gray-600 leading-relaxed mb-6">
                <p>{leader.bio}</p>
              </div>

              {/* Quote with purple accent */}
              <div className="pt-4 border-t border-gray-100">
                <p className="text-lg italic text-purple-800/80 font-light">
                  {leader.philosophy}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Team values footer */}
      <div className="mt-20 grid grid-cols-3 gap-8 pt-12 border-t border-gray-100">
        <div>
          <span className="text-xs font-mono text-purple-800 block mb-2">
            01
          </span>
          <span className="text-sm text-gray-600">Founder-led execution</span>
        </div>
        <div>
          <span className="text-xs font-mono text-purple-800 block mb-2">
            02
          </span>
          <span className="text-sm text-gray-600">Performance culture</span>
        </div>
        <div>
          <span className="text-xs font-mono text-purple-800 block mb-2">
            03
          </span>
          <span className="text-sm text-gray-600">Direct accountability</span>
        </div>
      </div>
    </section>
  );
};

export default LeadershipGrid;
