import styled from "@emotion/styled";
import { Box, Paper, Link } from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { RootPath } from "../constants";
import { loadingProcess } from "../lib/handler";
import { loginAPI } from "../lib/client";

const Container = styled(Paper)`
  height: 624px;
  width: 512px;
  display: flex;
  flex-direction: column;
  align-self: center;
`;
const Title = styled.div`
  font-size: 32px;
  height: 116px;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
`;
const LoginForm = styled.div`
  margin-left: 58px;
  & > div {
    width: 80%;
    margin: 32px auto;
  }
`;
const LoginInputs = styled.div`
  & > div {
    width: 80%;
    margin: 12px auto;
  }
`;
const LoginButton = styled.div`
  & button {
    width: 80%;
  }
`;
const SignupNav = styled.div``;
export function LoginInput() {
  const [input, setInput] = useState({
    email: {
      value: "",
      isError: false,
    },
    password: {
      value: "",
      showPassword: false,
      isError: false,
    },
  });
  const navigate = useNavigate();
  const { email, password } = input;
  const handleLogin = () => {
    loadingProcess(async () => {
      const loginUser = await loginAPI(email.value, password.value);
      if (loginUser) {
        console.log(loginUser);
        navigate("/");
      }
    });
  };
  const handleCreateAccount = () => {
    navigate(`${RootPath}/signup`);
  };
  return (
    <Container>
      <Title>Welcome</Title>
      <LoginForm>
        <LoginInputs>
          <TextField
            id="email-input"
            label="メールアドレス"
            required
            error={email.isError}
            value={email.value}
            autoFocus
            onChange={(e) => {
              setInput({
                password,
                email: {
                  ...email,
                  isError: e.target.value.length === 0,
                  value: e.target.value,
                },
              });
            }}
          />
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="password-input">Password</InputLabel>
            <OutlinedInput
              id="password-input"
              required
              error={password.isError}
              type={password.showPassword ? "text" : "password"}
              value={password.value}
              onChange={(e) => {
                setInput({
                  email,
                  password: {
                    ...password,
                    isError: e.target.value.length === 0,
                    value: e.target.value,
                  },
                });
              }}
              onKeyDown={(e) => {
                e.key === "Enter" && handleLogin();
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => {
                      setInput({
                        email,
                        password: {
                          ...password,
                          showPassword: !password.showPassword,
                        },
                      });
                    }}
                    onMouseDown={(event) => event.preventDefault()}
                    edge="end"
                  >
                    {password.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </LoginInputs>
        <LoginButton>
          <Button variant="contained" onClick={handleLogin}>
            LOGIN
          </Button>
        </LoginButton>
        <SignupNav>
          <Link href="" underline="none" onClick={handleCreateAccount}>
            {"Don`t have on account?Sign Up"}
          </Link>
        </SignupNav>
      </LoginForm>
    </Container>
  );
}
