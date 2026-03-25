import "./App.css";
import "./index.css";
import AppRoutes from './routes/AppRoutes.jsx'
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <>
     

      <AppRoutes />
      <SpeedInsights />
      <Analytics />
    </>
  );
};

export default App;
