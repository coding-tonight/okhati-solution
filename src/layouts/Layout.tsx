import { Routes, Route } from "react-router-dom";
import Auth from "./Auth";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
const Layout = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </section>
  );
};

export default Layout;
