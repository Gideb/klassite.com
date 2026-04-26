import Topicbg from "../../ui/Topicbg";
import profile1 from "../../../assets/images/portrait/portrait-1.jpg";
import profile2 from "../../../assets/images/portrait/portrait-5.jpg";
import profile3 from "../../../assets/images/portrait/portrait-3.jpg";
import Headings from "../../ui/Headings";

const LeadershipGrid = () => {
  const leadershipTeam = [
    {
      name: "Gideb",
      title: "Founder & CEO",
      image: profile3,
      bio: "Former product leader at Google and Microsoft. Founded the company to bridge the gap between data and execution in enterprise environments.",
      philosophy: '"Systems over heroics."',
    },
    {
      name: "Jeff Beau",
      title: "Chief Operating Officer ",
      image: profile2,
      bio: "Scaled three startups from seed to Series C. Expert in operational systems that maintain quality while accelerating growth.",
      philosophy: '"Clarity before consensus."',
    },
    {
      name: "Samira Dotti",
      title: "Chief Operating Officer ",
      image: profile1,
      bio: "Scaled three startups from seed to Series C. Expert in operational systems that maintain quality while accelerating growth.",
      philosophy: '"Clarity before consensus."',
    },
  ];

  return (
    <section className=" bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="mb-16">
          <Topicbg color="amber" topic="Leadership" />

          <Headings black=" Performance Driven" />

          <div className="h-px w-32 bg-amber-800 mt-3"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
          {leadershipTeam.map((leader, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative mb-8 group">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-100 object-cover rounded-2xl shadow-lg transition-all duration-500 overflow-hidden group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-amber-800/10 group-hover:ring-amber-800/30  transition-colors"></div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="mb-4">
                  <h3 className="text-2xl font-light text-gray-900 mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-amber-800 font-medium text-sm tracking-wide">
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
      </div>
    </section>
  );
};

export default LeadershipGrid;
