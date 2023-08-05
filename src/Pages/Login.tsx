import Guest from "../layouts/Guest";
import { TextField, Button } from "@mui/material";
import Card from "../components/Card";
import { LogoWithText } from "../libs";
import Header from "../components/Header";
import "../assets/css/App.css";
const Login: React.FC = () => {
  return (
    <Guest>
      <Card>
        <Header Logo={LogoWithText} />
        <form className="card">
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
              type="password"
            />
          </div>
          <Button
            variant="contained"
            color="success"
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
