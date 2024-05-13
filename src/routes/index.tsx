import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login/index.tsx";
import SignUp from "../pages/auth/Signup/index.tsx";
import ForgotPassword from "../pages/auth/ForgotPassword/index.tsx";
import BlogPage from "../pages/blog/index.tsx";
import ChangePassword from "../pages/auth/changPassword/index.tsx";
import EventPage from "../pages/event/index.tsx";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/events" element={<EventPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
