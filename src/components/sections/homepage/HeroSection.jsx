import hero from "../../../assets/images/ipages/homepage/hero1.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { GoRocket } from "react-icons/go";
import CountUp from "react-countup";
import { memo } from "react";
import { useInView } from "react-intersection-observer";
import BlobBackground from "../../ui/BlobBackground";
import Subheading from "../../props/Subheading";
import Headings from "../../props/Headings";
import Button from "../../ui/Button";

// Services array
const SERVICES = ["Web Development", "Mobile Development", "Branding", "Media", ""];

// Stats array
const STATS = [
  { end: 7, suffix: "+", label: "Years Experience", duration: 5 },
  { end: 120, suffix: "+", label: "Projects Delivered", duration: 6 },
  { end: 97, suffix: "%", label: "Client Satisfaction", duration: 5 },
];

const ServiceTags = memo(() => (
  <div className="flex flex-wrap gap-3" aria-label="Our services">
    {SERVICES.map((service) => (
      <span
        key={service}
        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium hover:bg-purple-100 hover:text-purple-600 transition-colors duration-300 cursor-default"
      >
        {service}
      </span>
    ))}
  </div>
));

ServiceTags.displayName = "ServiceTags";

const HeroSection = () => {
  const { ref: STATSRef, inView: STATSInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="hero"
      className="scroll-mt-16 relative mt-10 sm:mt-5  w-full overflow-hidden bg-white py-8 sm:py-8 lg:py-22 "
      aria-label="Hero section"
    >
      <BlobBackground />

      {/* Main Content Container */}
      <div className=" z-10 mt-10  px-4 sm:px-4 lg:px-7 max-w-7xl mx-auto min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-5 lg:gap-10 items-center w-full py-12 lg:py-0">
          <div className="flex flex-col space-y-6 lg:space-y-8 order-2 lg:order-1">
            <h1 className="font-black text-3xl sm:text-5xl lg:text-6xl xl:text-7xl leading-none text-gray-900">
              We Build{" "}
              <span className="bg-clip-text text-transparent bg-purple-600">
                {" "}
                High Performance
              </span>{" "}
              Digital Systems That Grow Your Business
            </h1>

            <div className="text-base sm:text-lg text-gray-600 max-w-2xl -mt-2">
              <Subheading
                description="Klass Koncepts partners with ambitious brands to architect and
              scale performance-driven digital platforms."
              />
            </div>

            <ServiceTags />

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-1">
              {/*  <Link
                to="/contact"
                className="w-full sm:w-auto grouptext-md shadow-md hover:shadow-lg px-8 py-3.5 rounded-xl font-medium text-md transform transition-all duration-300 hover:scale-105 focus:outline-none ring ring-purple-600 hover:text-purple-700 focus:ring-purple-300 focus:ring-offset flex items-center justify-center gap-2"
              >
                <SlCalender />
                <span> Book a Strategic Call </span>
                <FaArrowRight
                  className="text-sm group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </Link> */}
              <Button
                link="/contact"
                text=" Book a Strategic Call"
                icon={SlCalender}
                variant="primary"
              />
              
             

              <a
                href="/services"
                className="w-full sm:w-auto group text-white bg-purple-600 px-8 py-3 rounded-xl font-medium border-2 hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#services")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <FaPlay className="text-xs" aria-hidden="true" />
                <span> Start a Project</span>
            
              </a>
            </div>

            <div
              ref={STATSRef}
              className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 lg:pt-10 border-t border-gray-200"
            >
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <h5 className="text-xl sm:text-2xl font-semibold text-gray-700">
                    {STATSInView ? (
                      <>
                        <CountUp end={stat.end} duration={stat.duration} />
                        {stat.suffix}
                      </>
                    ) : (
                      `0${stat.suffix}`
                    )}
                  </h5>
                  <span className="text-gray-700 text-xs sm:text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex -space-x-2" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-xl bg-linear-to-br from-purple-400 to-purple-400 border-2 border-white shadow-sm"
                  />
                ))}
              </div>
              <span className="font-medium">
                Trusted by 60+ businesses worldwide
              </span>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="w-full flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-linear-to-r from-purple-600 to-fuchsia-600 rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>

              <img
                src={hero}
                alt="team members in a discussion"
                className="relative w-full max-w-md lg:max-w-lg rounded-xl shadow-xl will-change-transform group-hover:scale-105 transition-transform duration-500"
                loading="eager"
              />

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 motion-safe:animate-bounce">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-xl bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-xl h-2 w-2 bg-green-500"></span>
                </div>
                <span className="text-sm font-medium">Available for work</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
        <a
          href="#problem"
          className="flex flex-col items-center gap-2 hover:text-purple-500 text-purple-600 transition-colors group p-2"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#problem")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-xs uppercase tracking-widest sr-only lg:not-sr-only">
            Scroll
          </span>
          <div className="w-5 h-9 border-2 border-current rounded-xl flex justify-center p-1">
            <div className="w-1 h-2 bg-current rounded-xl motion-safe:animate-[bounce_1s_ease-in-out_infinite]"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default memo(HeroSection);
