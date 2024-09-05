import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar";
function Layout() {
  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
  );
}

export default Layout;
