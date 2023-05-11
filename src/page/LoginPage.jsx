import styled from "@emotion/styled";
import { Box, Paper } from "@mui/material";
import { LoginInput } from "./LoginInput";
import { useState } from "react";

const Container = styled(Box)`
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
export default function Login() {
  const [input, setInput] = useState({
    name: {
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
  return (
    <Container>
      <LoginInput input={input} />
    </Container>
  );
}
