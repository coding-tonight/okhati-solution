import Guest from "../layouts/Guest";
import { TextField, Button } from "@mui/material";
import Card from "../components/Card";
import { LogoWithText } from "../libs";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/App.css";

type UserId = {
  email: string;
  password: string;
  status: boolean;
};
const Login: React.FC = () => {
  const [email, setEmail] = useState<UserId | null>(null);
  const [password, setPassword] = useState<UserId | null>(null);
  const [status, setStatus] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);
  const navigate = useNavigate();

  // change handler
  const handleEmail = (event: ChangeEvent.HTMLInputElement) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: ChangeEvent.HTMLInputElement) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    let user = JSON.parse(sessionStorage.getItem("user"));
    setStatus(user?.status);
  }, []);

  const UserLogin = (event: FormEvent.HTMLFormElement) => {
    event.preventDefault();
    const AuthUser = JSON.parse(localStorage.getItem("user"));
    console.log(AuthUser.email);
    if (AuthUser.email === email && AuthUser.password === password) {
      sessionStorage.setItem(
        "user",
        JSON.stringify({
          email: AuthUser.email,
          session: Math.random(),
          status: 1,
        })
      );
      setIsValid(false);
      window.location.reload();
    } else {
      setIsValid(true);
    }
  };

  if (status) {
    navigate("/");
  }
  return (
    <Guest>
      <Card>
        <Header Logo={LogoWithText} />
        <form onSubmit={UserLogin}>
          <div
            className="mt-1"
            style={{
              marginBlock: "1rem",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              onChange={handleEmail}
              sx={{
                width: "300px",
              }}
            />
          </div>
          <div
            className="mt-1"
            style={{
              marginBlock: "1rem",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              onChange={handlePassword}
              sx={{
                width: "300px",
              }}
              type="password"
            />
          </div>
          <span
            style={{
              color: "red",
              display: isValid ? "block" : "none",
            }}
          >
            please valid email and password
          </span>
          <Button
            variant="contained"
            color="success"
            type="submit"
            disabled={status ? true : false}
            sx={{
              width: "300px",
            }}
          >
            Login
          </Button>
          <div className="">
            <a href="#">forget Password ?</a>
          </div>
        </form>
      </Card>
    </Guest>
  );
};

export default Login;
