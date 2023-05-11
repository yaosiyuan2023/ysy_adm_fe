import styled from "@emotion/styled";
import { Box, Paper, Link } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { signup } from "../module";
import { loadingProcess } from "../lib/handler";
import { signUpAPI } from "../lib/client";

const PageContainer = styled(Box)`
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
  height: 977px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
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
export default function SignUp() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    nickname: {
      value: "",
      isError: false,
    },
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
  const { nickname, email, password } = input;
  const handleSignupClick = () => {
    loadingProcess(async () => {
      const createUser = await signUpAPI(
        nickname.value,
        email.value,
        password.value
      );
      if (createUser) {
        navigate(`/login`);
      }
      console.log("createUser", createUser);
    });
  };

  return (
    <PageContainer>
      <Container>
        <Title>SIGN-UP</Title>
        <LoginForm>
          <LoginInputs>
            <TextField
              id="nickname-input"
              label="ニックネーム"
              required
              error={nickname.isError}
              value={nickname.value}
              autoFocus
              onChange={(e) => {
                setInput({
                  ...input,
                  nickname: {
                    ...nickname,
                    isError: e.target.value.length === 0,
                    value: e.target.value,
                  },
                });
              }}
            />
            <TextField
              id="email-input"
              label="メールアドレス"
              required
              error={email.isError}
              value={email.value}
              onChange={(e) => {
                setInput({
                  ...input,
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
                    ...input,
                    password: {
                      ...password,
                      isError: e.target.value.length === 0,
                      value: e.target.value,
                    },
                  });
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => {
                        setInput({
                          ...input,
                          password: {
                            ...password,
                            showPassword: !password.showPassword,
                          },
                        });
                      }}
                      onMouseDown={(event) => event.preventDefault()}
                      edge="end"
                    >
                      {password.showPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </LoginInputs>
          <LoginButton>
            <Button variant="contained" onClick={handleSignupClick}>
              SIGN-UP
            </Button>
            <div>You are agree to aour terms and policies</div>
          </LoginButton>
        </LoginForm>
      </Container>
    </PageContainer>
  );
}
