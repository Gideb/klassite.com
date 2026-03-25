import { StrictMode } from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ui/ScrollToTop.jsx";
import ScrollToTopButton from "./components/ui/ScrollToTopButton.jsx";


ReactDom.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToTopButton />
      <App />
    </BrowserRouter>
  </StrictMode>,
);
