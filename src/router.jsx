import React from "react";
import { Routes, Route } from "react-router-dom";
import { RootPath } from "./constants";
import Home from "./page/Home";
import SignUpPage from "./page/SignUp";
import LoginPage from "./page/LoginPage";

export default function Router() {
  return (
    <Routes>
      <Route path={`${RootPath}/`} element={<Home />} />
      <Route path={`${RootPath}/login`} element={<LoginPage />} />
      <Route path={`${RootPath}/signup`} element={<SignUpPage />} />
    </Routes>
  );
}
