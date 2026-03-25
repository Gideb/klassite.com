import { useState } from "react";
import { FaCaretDown, FaUserAlt } from "react-icons/fa";
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

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl bg-purple-100 shadow-sm"
              >
                <button
                  className={`w-full flex items-center justify-between p-4 text-left font-medium text-gray-800 transition-all duration-300 ${
                    pendingIndex === index
                      ? "bg-purple-100"
                      : "hover:bg-fuchsia-100"
                  }`}
                  onClick={() => handleClick(index)}
                >
                  <div className="flex gap-3 text-left leading-tight">
                    <FaUserAlt />
                    <span>{faq.question}</span>
                  </div>

                  <span
                    className={`transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <FaCaretDown />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 py-4 text-gray-600 text-sm leading-relaxed bg-white">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <p>
          Can’t find your answer here? We’ve got more in our full{" "}
          <Link to="\faqs">FAQ</Link>{" "}
        </p>
      </div>
    </section>
  );
};

export default ContactFAQ;
