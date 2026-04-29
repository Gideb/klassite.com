const Transition = () => (
  <div className="relative py-8 -mt-9 bg-gray-50 ">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <div className="relative">
        {/* Animated arrow */}
        <div className="absolute left-1/2 top-14 transform -translate-x-1/2">
          <div className="w-8 h-8 bg-purple-100 rounded-xl flex items-center justify-center animate-bounce">
            <span className="text-purple-600 text-xs">▼</span>
          </div>
        </div>

        {/* Empathetic message */}
        <p className="text-sm sm:text-md text-gray-700 italic max-w-2xl mx-auto">
          "If any of this sounds familiar, you're in the right place.
          <span className="text-purple-600 font-normal block mt-2">
            Here's exactly how we help.
          </span>
          "
        </p>
      </div>
    </div>
  </div>
);

export default Transition;
