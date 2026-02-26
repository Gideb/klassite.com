import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Pricings from "../pages/Pricings";
import Contact from "../pages/Contact";
import FAQs from "../pages/FAQs";
import Careers from "../pages/Careers";

import Portfolio from "../pages/portfolio/Portfolio";
import CaseStudyDetails from "../pages/portfolio/CaseStudyDetails";

import Blog from "../pages/blog/Blog";
import BlogPost from "../pages/blog/BlogPost";

import WebDevelopment from "../pages/individualServices/WebDevelopment";
import UIUXDesign from "../pages/individualServices/UIUXDesign";
import SEO from "../pages/individualServices/SEO";
import VideoProduction from "../pages/individualServices/VideoProduction";
import Branding from "../pages/individualServices/Branding";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />

        {/* Individual Services */}
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
        <Route path="/services/seo" element={<SEO />} />
        <Route path="/services/branding" element={<Branding />} />
        <Route
          path="/services/video-production"
          element={<VideoProduction />}
        />

        <Route path="/pricing" element={<Pricings />} />

        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:slug" element={<CaseStudyDetails />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
