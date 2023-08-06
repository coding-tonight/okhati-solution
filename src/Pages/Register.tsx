import Guest from "../layouts/Guest";
import { TextField, Button } from "@mui/material";
import Card from "../components/Card";
import { LogoWithText } from "../libs";
import Header from "../components/Header";
import "../assets/css/App.css";
import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, useState, useEffect, FormEvent } from "react";

type UserInput = {
  email: string;
  password: string;
  confirm_password: string;
};

const Register: React.FC = () => {
  const [email, setEmail] = useState<UserInput | null>(null);
  const [password, setPassword] = useState<UserInput | null>(null);
  const [confirm_password, setConfirm_password] = useState<UserInput | null>(
    null
  );
  const [status, setStatus] = useState<boolean>(false);
  // condition for validation
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  //  check if user  is login or not
  useEffect(() => {
    let user = JSON.parse(sessionStorage.getItem("user"));
    setStatus(user?.status);
  }, []);

  useEffect(() => {
    if (password !== confirm_password && password.length > 8) {
      setIsPassword(true);
    } else {
      setIsPassword(false);
    }
  }, [password, confirm_password]);

  // state change handler

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setConfirm_password(event.target.value);
  };

  // form validatation
  // note for validattion i made decision to not use library like zod form this project

  const submit = (event: FormEvent.HTMLFormElement) => {
    event.preventDefault();
    localStorage.setItem(
      "user",
      JSON.stringify({
        email: email,
        password: password,
        status: 0,
      })
    );
    navigate("/login");
  };

  // check if user is login or not
  if (status) {
    navigate("/");
  }

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
              required
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
              required
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
              required
              sx={{
                width: "300px",
              }}
              onChange={handleConfirmPassword}
              type="password"
            />
            <span
              style={{
                color: "red",
                display: isPassword ? "block" : "none",
              }}
            >
              password doesn't match and min 8 character
            </span>
          </div>
          <Button
            variant="contained"
            color="success"
            type="submit"
            sx={{
              width: "300px",
            }}
            disabled={isPassword ? true : false}
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
