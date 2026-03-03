import { memo } from "react";

const StrategicOrigin = () => {
  const milestones = [
    {
      year: "2021",
      text: "Identified the performance gap in digital infrastructure",
    },
    { year: "2022", text: "Built first performance-first frameworks" },
    { year: "2023", text: "Expanded team, refined our approach" },
    { year: "2024", text: "Helped 30+ businesses scale without breaking" },
  ];

  return (
    <section className="relative w-full py-20 sm:py-24 bg-white">
      <div className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-purple-100 backdrop-blur-sm text-purple-500 px-4 py-2 rounded-full mb-6 text-sm font-semibold  uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-400"></span>
            </span>
            Strategic Origin
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Closing the Performance Gap
          </h2>
        </div>

        <div className="space-y-6 text-gray-700">
          <p className="text-lg">
            We started Klass Koncepts because we kept seeing the same pattern:
            brilliant businesses held back by digital foundations that couldn't
            scale.
          </p>

          {/* Subtle timeline (still clean, no icons) */}
          <div className="my-8 space-y-4">
            {milestones.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <span className="text-sm font-mono text-purple-600 w-16">
                  {item.year}
                </span>
                <span className="text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>

          <p>
            While agencies chased trends, we focused on fundamentals. No
            templates. No cookie-cutter solutions. Just clean architecture and
            performance-first engineering.
          </p>

          <p>
            Today, we're still at it—building digital experiences that don't
            just look good, but perform where it counts.
          </p>
        </div>
      </div>
    </section>
  );
};
export default memo(StrategicOrigin);
