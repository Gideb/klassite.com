import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";

import Contact from "../pages/Contact";
import FAQs from "../pages/FAQs";
import Careers from "../pages/Careers";

import Portfolio from "../pages/Portfolio";


import Blog from "../pages/blog/Blog";
import BlogPost from "../pages/blog/BlogPost";

import WebDevelopment from "../pages/digitalsolutions/WebDevelopment";
import MobileApps from "../pages/digitalsolutions/MobileApps";
import UIUXDesign from "../pages/digitalsolutions/UIUXDesign";

import GraphicDesign from "../pages/creativeservices/GraphicDesign";
import Branding from "../pages/creativeservices/Branding";
import ContentCreation from "../pages/creativeservices/ContentCreation";

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

        {/* digital Services */}
        <Route path="/services/webdev" element={<WebDevelopment />} />
        <Route path="/services/uxdesign" element={<UIUXDesign />} />
        <Route path="/services/mobileapp" element={<MobileApps />} />

        {/* creative Services */}
        <Route path="/services/branding" element={<Branding />} />
        <Route path="/services/graphicdesign" element={<GraphicDesign />} />
        <Route path="/services/contentcreation" element={<ContentCreation />} />

        <Route path="/portfolio" element={<Portfolio />} />
        

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
