import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import ServicesLayout from "../components/layout/ServicesLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import FAQs from "../pages/FAQs";
import Careers from "../pages/Careers";
import Blog from "../pages/Blog";

// Services
import Services from "../pages/services/Services";
import DigitalSolutions from "../pages/services/DigitalSolutions";
import CreativeServices from "../pages/services/CreativeServices";

// Individual services
import WebDevelopment from "../pages/services/WebDevelopment";
import UIUX from "../pages/services/UIUX";
import MobileApps from "../pages/services/MobileApps";

import GraphicDesign from "../pages/services/GraphicDesign";
import BrandExperience from "../pages/services/BrandExperience";
import ContentCreation from "../pages/services/ContentCreation";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />

        {/* Services */}
        <Route path="/services" element={<ServicesLayout />}>
          <Route index element={<Services />} />

          {/* Categories */}
          <Route path="digital-solutions" element={<DigitalSolutions />} />
          <Route path="creative-services" element={<CreativeServices />} />

          {/* Digital */}
          <Route path="web-development" element={<WebDevelopment />} />
          <Route path="ui-ux" element={<UIUX />} />
          <Route path="mobile-apps" element={<MobileApps />} />

          {/* Creative */}
          <Route path="graphic-design" element={<GraphicDesign />} />
          <Route path="brand-experience" element={<BrandExperience />} />
          <Route path="content-creation" element={<ContentCreation />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
