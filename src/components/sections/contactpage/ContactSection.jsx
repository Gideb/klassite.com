import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaUser,
  FaPaperPlane,
  FaChevronDown,
} from "react-icons/fa";
import Headings from "../../ui/Headings";
import Subheading from "../../ui/Subheading";

const ContactSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    console.log("Form submitted:", formData);

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      setFormData({
        name: "",
        email: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "hello@klasskoncepts.com",
      href: "mailto:hello@klasskoncepts.com",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+233 55 264 9953",
      href: "tel:+233552649953",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Accra, Ghana",
      href: null,
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "Chat us on WhatsApp",
      href: "https://wa.me/233552649953",
    },
  ];

  const serviceOptions = [
    "Branding Experience",
    "Content Creation",
    "Enterprise Web Solutions",
    "Graphic Design",
    "Photography",
    "SEO Optimization",
    "Social Media Management",
    "UI/UX Strategy",
    "Videography",
    "Video Editing",
  ];

  return (
    <div
      id="contact"
      className="scroll-mt-24 relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center bg-linear-to-b from-purple-50 via-white to-white overflow-hidden"
    >
      <section>
        {/* Background Glow - Fixed positioning */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-75 sm:w-100 lg:w-125 h-75 sm:h-100 lg:h-125 bg-purple-500/10 blur-[120px] rounded-xl"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div>
            {/* Title */}
            <Headings black="Let's Work Together" />

            <Subheading
              description=" Ready to transform your digital presence? Get in touch and let's
            create something amazing."
            />
          </div>

          {/* Main Grid - Modified for alignment */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 py-10 lg:py-12">
            {/* Left Column - Contact Info */}
            <div className="text-left px-4 sm:px-0">
              <h3 className="font-semibold text-xl sm:text-2xl text-gray-900">
                Get In Touch
              </h3>
              <p className="py-5 text-gray-500 text-[8px] sm:text-base">
                Whether you have a project in mind or just want to say hello,
                we'd love to hear from you.
              </p>

              <div className="space-y-4 sm:space-y-6">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  const Content = () => (
                    <div
                      key={index}
                      className="group bg-white/70 backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-purple-100 shadow-lg flex items-center gap-4 sm:gap-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="text-white bg-linear-to-br from-purple-600 to-fuchsia-600 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg sm:rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300 shrink-0">
                        <Icon className="text-lg sm:text-xl" />
                      </div>

                      <div className="flex flex-col min-w-0">
                        <p className="text-xs sm:text-sm text-gray-500">
                          {method.label}
                        </p>
                        {method.href ? (
                          <a
                            href={method.href}
                            target={
                              method.label === "WhatsApp" ? "_blank" : "_self"
                            }
                            rel={
                              method.label === "WhatsApp"
                                ? "noopener noreferrer"
                                : ""
                            }
                            className="font-semibold text-sm sm:text-base text-gray-900 hover:text-green-600 transition-colors truncate"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <h4 className="font-semibold text-sm sm:text-base text-gray-900">
                            {method.value}
                          </h4>
                        )}
                      </div>
                    </div>
                  );
                  return <Content key={index} />;
                })}
              </div>
              <div className="mt-10 space-y-3 text-gray-700">
                <h2 className="text-lg font-semibold text-gray-900">
                  Business Hours
                </h2>

                <p className="flex justify-between border-b border-gray-200 pb-1">
                  <span className="font-medium">Mon - Fri</span>
                  <span className="text-gray-600">9am - 7pm GMT</span>
                </p>

                <p className="flex justify-between border-b border-gray-200 pb-1">
                  <span className="font-medium">Sat</span>
                  <span className="text-gray-600">10am - 3pm GMT</span>
                </p>

                <p className="pt-2 text-sm text-gray-600">
                  ✨ Response Time:{" "}
                  <span className="font-medium text-gray-800">
                    Within 24 hours during business days
                  </span>
                </p>
              </div>
            </div>

            {/* Right Column - Form - Now with margin-top to align with first contact method */}
            <div className="px-4 sm:px-0 lg:mt-30 mt-10">
              <div className="bg-white/80 backdrop-blur-xl p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-[0_10px_30px_rgba(124,58,237,0.15)] border border-purple-100">
                <form
                  className="flex flex-col space-y-5 sm:space-y-5 pt-8 -mb-20"
                  onSubmit={handleSubmit}
                >
                  {/* Name Input */}
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1 text-left"
                    >
                      Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="w-full bg-white border border-purple-200 rounded-xl pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500 transition"
                      />
                      <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm sm:text-base" />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1 text-left"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="w-full bg-white border border-purple-200 rounded-xl pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500 transition"
                      />
                      <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm sm:text-base" />
                    </div>
                  </div>

                  {/* Service Type Select */}
                  <div className="relative">
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-1 text-left"
                    >
                      Service Type
                    </label>
                    <div
                      className="relative w-full"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border border-purple-200 rounded-xl px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring focus:ring-purple-500/40 focus:border-purple-500 transition appearance-none "
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((service) => (
                          <option
                            key={service}
                            value={service.toLowerCase().replace(/\s+/g, "-")}
                          >
                            {service}
                          </option>
                        ))}
                      </select>
                      <FaChevronDown
                        onFocus={() => setIsOpen(true)}
                        onBlur={() => setIsOpen(false)}
                        className={`absolute right-5 top-1/2 -translate-y-1/2  transition-transform duration-300 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1 text-left"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={4}
                      required
                      className="w-full bg-white border border-purple-200 rounded-xl px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500 transition resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="group relative py-3 sm:py-3.5 rounded-xl font-medium text-white bg-linear-to-r from-purple-700 to-fuchsia-600 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Send Message
                      <FaPaperPlane className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-linear-to-r from-fuchsia-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </form>

                {/* Success Message */}
                <div
                  className={`mt-4 p-3 sm:p-4 rounded-lg text-white text-center font-medium transition-all duration-500 ${
                    success
                      ? "bg-green-500 scale-100 opacity-100"
                      : "scale-95 opacity-0 pointer-events-none"
                  }`}
                >
                  ✓ Message Sent Successfully!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center pb-2">
        <div className="w-full max-w-7xl ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127066.72273054127!2d-0.2621303729990889!3d5.591373806167042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra!5e0!3m2!1sen!2sgh!4v1773408836177!5m2!1sen!2sgh"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps - Accra"
            className=" shadow-lg w-full h-100"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
