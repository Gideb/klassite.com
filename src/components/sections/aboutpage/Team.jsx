import Topicbg from "../../ui/Topicbg";
import klass from "../../../assets/images/klass.png";

const LeadershipGrid = () => {
  const leadershipTeam = [
    {
      name: "Klass A",
      title: "Founder & CEO",
      image: klass,
      bio: "Former product leader at Google and Microsoft. Founded the company to bridge the gap between data and execution in enterprise environments.",
      philosophy: '"Systems over heroics."',
    },
    {
      name: "Klass B",
      title: "Chief Operating Officer ",
      image: klass,
      bio: "Scaled three startups from seed to Series C. Expert in operational systems that maintain quality while accelerating growth.",
      philosophy: '"Clarity before consensus."',
    },
    {
      name: "Klass B",
      title: "Chief Operating Officer ",
      image: klass,
      bio: "Scaled three startups from seed to Series C. Expert in operational systems that maintain quality while accelerating growth.",
      philosophy: '"Clarity before consensus."',
    },
  ];

  return (
    <section className=" bg-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-24">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
          {leadershipTeam.map((leader, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative mb-8 group">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-100 object-cover rounded-2xl shadow-lg transition-all duration-500 overflow-hidden group-hover:scale-105"
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
      </div>
    </section>
  );
};

export default LeadershipGrid;
