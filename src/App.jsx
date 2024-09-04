import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/features/auth/Login";
import Register from "./components/features/auth/Register";
import Layout from "./components/Layout";
// import WelcomeNav from "./components/WelcomeNav";
import Operate from "./components/Operate";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="auth/">
        <Route index path="operate" element={<Operate />} />
      </Route>
    </Routes>
  );
}
