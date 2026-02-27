import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { memo } from "react";

const CTASection = () => {
  return (
    <section className="scroll-mt-16 relative w-full overflow-hidden bg-linear-to-br from-purple-900 via-purple-800 to-fuchsia-900 py-20 sm:py-24 lg:py-28">
     
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-fuchsia-500 rounded-full mix-blend-overlay filter blur-3xl animate-pulse animation-delay-2000"></div>


      <div className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
          Ready to Transform Your Digital Presence?
        </h2>

        <p className="text-white mb-8">
          Let's discuss your project over a free 30-minute strategic call.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-linear-to-r from-purple-600 to-fuchsia-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer"
        >
          <span>Get Your Free Consultation</span>
          <FaArrowRight className="text-sm group-hover:translate-x-1.5 transition-transform" />
        </Link>

        <p className="text-sm text-gray-300 mt-4">
          No pressure • Just honest advice
        </p>
      </div>
    </section>
  );
};

export default memo(CTASection);
