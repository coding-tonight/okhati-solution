import Guest from "../layouts/Guest";
import { TextField, Button } from "@mui/material";
import Card from "../components/Card";
import { LogoWithText } from "../libs";
import Header from "../components/Header";
import "../assets/css/App.css";
import { Link } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";

interface User {
  email: string;
  password: string;
  confirm_password: string;
  user: [
    {
      email: string;
      password: string;
      status: boolean | number;
    }
  ];
}

const Register: React.FC = () => {
  const [email, setEmail] = useState<User | null>(null);
  const [password, setPassword] = useState<User | null>(null);
  const [confirm_password, setConfirm_password] = useState<User | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<boolean | number>(0);
  // const [navigate, setNavigate] = useNavigate();

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setConfirm_password(event.target.value);
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    setStatus(1);
    setUser({
      email: email,
      password: password,
      status: status,
    });

    // console.log(user);
    sessionStorage.setItem("user", JSON.stringify(user));
    window.location.reload();
  };

  // if (sessionStorage.getItem("user")) {
  //   navigate("/login");
  // }

  return (
    <Guest>
      <Card
        style={{
          boxShadow: "0px 12px 24px -12px rgba(0, 0, 0, 0.5)",
          backgroundColor: "#fff",
          padding: "15px",
        }}
      >
        <Header Logo={LogoWithText} />

        <form onSubmit={submit}>
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
              sx={{
                width: "300px",
              }}
              onChange={handleEmail}
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
              sx={{
                width: "300px",
              }}
              onChange={handlePassword}
              type="password"
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
              label="Confirm_Password"
              variant="outlined"
              sx={{
                width: "300px",
              }}
              onChange={handleConfirmPassword}
              type="password"
            />
          </div>
          <Button
            variant="contained"
            color="success"
            sx={{
              width: "300px",
            }}
            type="submit"
          >
            Register
          </Button>
          <div
            className="mt-1"
            style={{
              marginBlock: "1rem",
            }}
          >
            <Link to="/login">Already have account ?</Link>
          </div>
        </form>
      </Card>
    </Guest>
  );
};

export default Register;
