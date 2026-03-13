import { useState } from "react";
import { FaCaretDown, FaUserAlt } from "react-icons/fa";
import Topicbg from "../../ui/topicbg";

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

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

  return (
    <div className="relative max-w-6xl mx-auto mt-10 px-4 sm:px-4 lg:px-6 sm:py-17 lg:py-20 py-10 overflow-hidden">
      {/* BIG QUESTION MARK BACKGROUND */}
      <div className="pointer-events-none absolute right-20 -top-10 text-[420px] font-black text-purple-100 rotate-120 select-none">
        ?
      </div>
      <Topicbg topic="Faqs" />

      <div className="relative max-w-3xl">
        <h3 className="text-3xl font-normal mb-8">
          Frequently{" "}
          <span className="bg-linear-to-br from-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
            Asked Questions
          </span>
          <div className="h-0.5 w-30 bg-fuchsia-600 mt-4"></div>
        </h3>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl bg-purple-50 shadow-sm"
            >
              <button
                className="w-full flex items-center justify-between p-4 text-left font-medium text-gray-800 hover:bg-purple-100 transition"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
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

              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed bg-white">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactFAQ;
