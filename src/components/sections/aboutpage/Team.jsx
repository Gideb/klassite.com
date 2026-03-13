import React from "react";
import Stats from "../../Stats";
import Topicbg from "../../ui/topicbg";

const LeadershipGrid = () => {
  const leadershipTeam = [
    {
      name: "Marcus Rodriguez",
      title: "Chief Operating Officer",
      image: "https://contributors.gettyimages.com/img/hub/rodriguez.jpg",
      bio: "Scaled three startups from seed to Series C. Expert in operational systems that maintain quality while accelerating growth.",
      philosophy: '"Systems over heroics."',
    },
    {
      name: "Sarah Chen",
      title: "Founder & CEO",
      image:
        "https://tse1.mm.bing.net/th/id/OET.7252da000e8341b2ba1fb61c275c1f30?w=594&h=594&c=7&rs=1&o=5&pid=1.9",
      bio: "Former product leader at Google and Microsoft. Founded the company to bridge the gap between data and execution in enterprise environments.",
      philosophy: '"Clarity before consensus."',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 bg-white">
      {/* Header */}
      <div className="mb-16">

        <Topicbg topic="Leadership" />
        
        <h2 className="text-3xl font-light text-gray-900 mt-4 mb-6">
          Founder-Led.
          <br />
          <span className="text-purple-800">Performance-Driven.</span>
        </h2>
        <div className="h-px w-32 bg-purple-800"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        {leadershipTeam.map((leader, index) => (
          <div key={index} className="flex flex-col">
            <div className="relative mb-8 group">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-125 object-cover rounded-2xl shadow-lg transition-all duration-500 overflow-hidden group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-purple-800/10 group-hover:ring-purple-800/30  transition-colors"></div>
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
            </div>
          </div>
        ))}
      </div>

      <div>
        <Stats />
      </div>
    </section>
  );
};

export default LeadershipGrid;
