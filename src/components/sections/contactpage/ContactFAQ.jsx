import { useState } from "react";
import { FaArrowRight, FaCaretDown, FaUserAlt } from "react-icons/fa";
import Topicbg from "../../ui/Topicbg";
import { Link } from "react-router-dom";

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [pendingIndex, setPendingIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer web development, UI/UX design, mobile app development, digital strategy, and branding services tailored to your business needs.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity. A standard website takes 4-6 weeks, while more complex applications may take 2-3 months. We'll provide a detailed timeline during our consultation.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Absolutely! We work with clients worldwide and have experience collaborating across different time zones. We use tools like Slack, Zoom, and project management software to ensure smooth communication.",
    },
    {
      question: "What is your payment structure?",
      answer:
        "We typically require a 50% deposit to begin work, with the remaining 50% due upon project completion. For larger projects, we can arrange milestone-based payments.",
    },
  ];

  const handleClick = (index) => {
    if (openIndex === index) {
      // If clicking the same item, close it immediately
      setOpenIndex(null);
      setPendingIndex(null);
    } else {
      // Set pending index and show loading/transition state
      setPendingIndex(index);

      // Delay before revealing the answer
      setTimeout(() => {
        setOpenIndex(index);
        setPendingIndex(null);
      }, 300); // 300ms delay before revealing
    }
  };

  return (
    <section className="relative">
      <div className="pointer-events-none absolute right-40 -top-10 text-[420px] font-black text-fuchsia-300 rotate-130 select-none">
        ?
      </div>
      <div className="relative max-w-6xl mx-auto mt-10 px-4 sm:px-4 lg:px-6 sm:py-17 lg:py-20 py-10 overflow-hidden">
        <div className="pointer-events-none absolute right-50 top-10 text-[420px] font-black text-fuchsia-100 rotate-100 select-none">
          ?
        </div>
        <div className="pointer-events-none absolute right-40 top-50 text-[420px] font-black text-purple-300 rotate-60 select-none">
          ?
        </div>
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[420px] font-black text-fuchsia-300 -rotate-60 select-none">
          ?
        </div>
        <Topicbg topic="Faqs" />

        <div className="relative max-w-3xl">
          <h3 className="text-3xl font-normal mb-8">
            Frequently{" "}
            <span className="bg-linear-to-br from-purple-600 to-fuchsia-500 bg-clip-text text-transparent">
              Asked Questions
            </span>
            <div className="h-0.5 w-30 bg-fuchsia-600 mt-4"></div>
          </h3>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-xl transition-all duration-300 ${
                  openIndex === index
                    ? "shadow-2xl shadow-purple-500/20"
                    : "shadow-lg hover:shadow-xl"
                }`}
              >
                <button
                  className={`w-full flex items-center justify-between p-6 text-left font-medium text-gray-800 transition-all duration-300 hover:cursor-pointer rounded-xl ${
                    pendingIndex === index
                      ? "bg-white/70 scale-100"
                      : "bg-white hover:shadow-2xl hover:scale-[1.02]"
                  } ${openIndex === index ? "shadow-lg rounded-b-none" : ""}`}
                  onClick={() => handleClick(index)}
                  onMouseEnter={(e) => {
                    // Scale effect on hover for question/answer area
                    if (openIndex !== index) {
                      e.currentTarget.style.transform = "scale(1.02)";
                      e.currentTarget.style.boxShadow =
                        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (openIndex !== index) {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "";
                    }
                  }}
                >
                  <div className="flex gap-3 text-left leading-tight transition-all duration-300 group-hover:scale-105">
                    <FaUserAlt className="transition-all duration-300 group-hover:text-purple-600" />
                    <span>{faq.question}</span>
                  </div>

                  <span
                    className={`transform transition-all duration-300 bg-purple-200 rounded items-center w-7 h-7 flex justify-center ${
                      openIndex === index
                        ? "rotate-180 bg-purple-300"
                        : "hover:bg-purple-300"
                    }`}
                  >
                    <FaCaretDown />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    openIndex === index
                      ? "grid-rows-[1fr] shadow-lg shadow-purple-500/10"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`p-6 text-sm leading-relaxed text-white bg-linear-to-r from-purple-900 to-fuchsia-900 rounded-b-2xl transition-all duration-300 ${
                        openIndex === index
                          ? "scale-100 opacity-100"
                          : "scale-95 opacity-0"
                      }`}
                      onMouseEnter={(e) => {
                        // Scale effect on hover for answer
                        e.currentTarget.style.transform = "scale(1.02)";
                        e.currentTarget.style.boxShadow =
                          "0 25px 50px -12px rgba(0, 0, 0, 0.25)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "";
                      }}
                    >
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="pl-5 py-3 text-md transition-all duration-300 hover:scale-105 hover:translate-x-2">
              <p>
                Can’t find your answer here? We’ve got more in our full
                <Link
                  className="text-purple-800 font-semibold items-center inline-flex transition-all group hover:text-purple-600"
                  to="..\faqs"
                >
                  {" "}
                  &nbsp; FAQ Page
                  <FaArrowRight className="text-sm ml-2 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
