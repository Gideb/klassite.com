import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaUser,
  FaPaperPlane,
} from "react-icons/fa";

const ContactSection = () => {
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

    // Here you would typically send the data to a backend
    console.log("Form submitted:", formData);

    // Show success message
    setSuccess(true);

    // Reset form after 3 seconds
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
      value: "Chat on WhatsApp",
      href: "https://wa.me/233552649953",
    },
  ];

  const serviceOptions = [
    "Web Development",
    "Web Design",
    "SEO Optimization",
    "Graphic Design",
    "Video Editing",
    "Photography & Videography",
    "CCTV Installation",
    "Branding",
    "Social Media Management",
  ];

  return (
    <div id="contact" className="scroll-mt-24">
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 text-center bg-linear-to-b from-purple-50 via-white to-white overflow-hidden">
        {/* Background Glow - Fixed positioning */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-75 sm:w-100 lg:w-125 h-75 sm:h-100 lg:h-125 bg-purple-500/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mx-auto">
            <span className="w-2 h-2 bg-fuchsia-600 rounded-full animate-pulse"></span>
            Contact
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-normal mt-4 text-gray-900">
            Let's{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-br from-purple-700 to-fuchsia-500">
              Work Together
            </span>
          </h2>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Ready to transform your digital presence? Get in touch and let's
            create something amazing.
          </p>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 py-12 lg:py-16">
            {/* Left Column - Contact Info */}
            <div className="text-left px-4 sm:px-0">
              <h3 className="font-semibold text-xl sm:text-2xl text-gray-900">
                Get In Touch
              </h3>
              <p className="my-4 sm:my-5 text-gray-600 text-sm sm:text-base">
                Whether you have a project in mind or just want to say hello,
                we'd love to hear from you.
              </p>

              <div className="space-y-4 sm:space-y-6">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  const Content = () => (
                    <div className="group bg-white/70 backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-purple-100 shadow-lg flex items-center gap-4 sm:gap-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
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
                            className="font-semibold text-sm sm:text-base text-gray-900 hover:text-purple-600 transition-colors truncate"
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
            </div>

            {/* Right Column - Form */}
            <div className="px-4 sm:px-0">
              <div className="bg-white/80 backdrop-blur-xl p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-[0_20px_60px_rgba(124,58,237,0.15)] border border-purple-100">
                <form
                  className="flex flex-col space-y-4 sm:space-y-5"
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
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-purple-200 rounded-xl px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500 transition appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                        backgroundPosition: "right 0.75rem center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "1.5em 1.5em",
                        paddingRight: "2.5rem",
                      }}
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
    </div>
  );
};

export default ContactSection;
