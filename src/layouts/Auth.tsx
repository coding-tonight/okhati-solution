import React from "react";
import "../../src/assets/css/App.css";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ToastServive from "react-material-toast";

const toast = ToastServive.new({
  place: "topRight",
  duration: 2,
  maxCount: 8,
});

const App = () => {
  const [status, setStatus] = useState<boolean>(false);
  const [username, setUserName] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    let user = JSON.parse(sessionStorage.getItem("user"));
    setStatus(user?.status);
    setUserName(user?.email.split("@"));
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      const id = toast.success("Sucessfully  login!");
    }

    setTimeout(() => {
      toast.removeAll();
    }, 3000);
  }, []);

  // user status is false then redirect  to login pages
  if (!status) {
    navigate("/login");
  }

  return (
    <section className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <section>
        <h1> Welcome {username ? username[0] : ""}</h1>
      </section>
    </section>
  );
};

export default App;
