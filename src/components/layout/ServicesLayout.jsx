import { Outlet } from "react-router-dom";

const ServicesLayout = () => {
  return (
    <div>
      {/* optional shared header / banner */}
      <Outlet />
    </div>
  );
};

export default ServicesLayout;
