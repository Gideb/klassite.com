import React, { useEffect, useRef, useState, useCallback } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import Topicbg from "../../ui/Topicbg";
import Headings from "../../ui/Headings";
import Subheading from "../../ui/Subheading";

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Founder",
      company: "FinTech Startup",
      location: "Sunyani, Ghana",
      text: "Klass Koncepts didn’t just redesign our platform — they restructured our entire digital strategy. Within 90 days, we saw measurable growth across every key metric.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah Mensah",
      company: "TechStart",
      location: "Accra, Ghana",
      text: "Klass Koncepts transformed our online presence completely. Their attention to detail and technical expertise is unmatched. The website they built for us has increased our conversions by 200%.",
      rating: 5,
    },
    {
      id: 3,
      name: "John Doe",
      company: "Global Media",
      location: "Lagos, Nigeria",
      text: "Working with Gilbert was a pleasure. He understood our vision perfectly and delivered beyond expectations. The project was completed on time and within budget.",
      rating: 4,
    },
    {
      id: 4,
      name: "Amara Okafor",
      company: "Creative Hub",
      location: "Nairobi, Kenya",
      text: "The team's creative direction and technical implementation are top-notch. They don't just build websites; they create digital experiences that resonate with users.",
      rating: 5,
    },
    {
      id: 5,
      name: "John Doe",
      company: "Global Media",
      location: "Lagos, Nigeria",
      text: "Working with Gilbert was a pleasure. He understood our vision perfectly and delivered beyond expectations. The project was completed on time and within budget.",
      rating: 4,
    },
    {
      id: 6,
      name: "Amara Okafor",
      company: "Creative Hub",
      location: "Nairobi, Kenya",
      text: "The team's creative direction and technical implementation are top-notch. They don't just build websites; they create digital experiences that resonate with users.",
      rating: 5,
    },
  ];

  // Check mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const visibleSlides = isMobile ? 1 : 2;
  const maxIndex = testimonials.length - visibleSlides;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto slide
  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 4000);
    return () => clearInterval(intervalRef.current);
  }, [nextSlide]);

  const StarRating = ({ rating }) => (
    <div className="flex gap-1 mt-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section
      id="testimonials"
      className="scroll-mt-24  min-h-70 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-20 text-center bg-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        {/* Badge */}

        <Topicbg topic="Testimonials" />
        <Headings black="What " colored=" Clients Say" />

        <Subheading
          description="Don't just take our word for it - hear from some of our satisfied
          clients"
        />

        <div className="relative mt-12 sm:mt-16 px-4 sm:px-8 lg:px-12">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 sm:-left-2 lg:-left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white text-black shadow-md rounded-xl hover:bg-white/90 transition-all duration-300 hover:shadow-lg hover:scale-110 focus:outline-none focus:ring focus:ring-purple-600 focus:ring-offset"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-sm sm:text-base" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 sm:-right-2 lg:-right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white text-black shadow-md rounded-xl hover:bg-white/90 transition-all duration-300 hover:shadow-lg  hover:scale-110 focus:outline-none focus:ring focus:ring-purple-600 focus:ring-offset"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-sm sm:text-base" />
          </button>

          {/* Slider */}
          <div className="overflow-hidden rounded-2xl">
            <ul
              className="flex transition-transform duration-700 ease-out cursor-grab active:cursor-grabbing"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <li
                  key={testimonial.id}
                  className={`shrink-0 ${isMobile ? "w-full" : "w-1/2"} list-none p-2 sm:p-3 lg:p-4`}
                >
                  <div className="bg-white shadow-lg hover:shadow-xl p-6 sm:p-8 lg:p-10 rounded-2xl text-gray-600 leading-relaxed h-full flex flex-col transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                    <div className="text-purple-200 mb-4">
                      <FaQuoteRight className="text-2xl sm:text-3xl opacity-50" />
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 gap-4 sm:gap-0">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/74/74464.png"
                        alt={testimonial.name}
                        className="w-16 h-16 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl object-cover border-4 border-purple-100 sm:mr-4"
                      />
                      <div className="text-left">
                        <h3 className="text-purple-700 font-semibold text-base sm:text-lg">
                          {testimonial.name}
                        </h3>
                        <span className="text-sm text-gray-500">
                          {testimonial.company}, {testimonial.location}
                        </span>

                        <StarRating rating={testimonial.rating} />
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-gray-600 text-left leading-relaxed grow">
                      "{testimonial.text}"
                    </p>

                    <div className="h-1 w-20 bg-linear-to-r from-purple-600 to-fuchsia-500 rounded-xl mt-6"></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-black"
                    : "w-2 bg-black/60 hover:bg-black/30"
                } h-2 rounded-xl`}
                aria-label={`Go to slide group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
