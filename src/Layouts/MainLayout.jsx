import { Outlet } from "react-router-dom";
import Header from "../components/Pizza-joint/Header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
