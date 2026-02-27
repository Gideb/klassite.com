import "./App.css";
import AppRoutes from './routes/AppRoutes.jsx'
import { SpeedInsights } from "@vercel/speed-insights/react";

const App = () => {
  return (
    <>
      <AppRoutes />
      <SpeedInsights />
    </>
  );
};

export default App;
