import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/features/auth/Login";
import Register from "./components/features/auth/Register";
import Layout from "./components/Layout";
// import WelcomeNav from "./components/WelcomeNav";
import Operate from "./components/Operate";
import Welcome from "./components/features/auth/Welcome";
import Dashboard from "./components/features/Dashboard/Dashboard";
import EditDetails from "./components/features/Dashboard/EditDetails";
import MineDetails from "./components/features/Dashboard/MineDetails";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="auth" element={<Welcome />} />
        <Route path="auth/operate" element={<Operate />} />
        <Route path="auth/minedetails" element={<MineDetails />} />
        <Route path="auth/editdetails" element={<EditDetails />} />
        <Route path="auth/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
