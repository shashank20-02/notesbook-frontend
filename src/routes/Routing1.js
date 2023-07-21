import React from "react";
import { Route, Routes } from "react-router-dom";
import Content from "../pages/Content";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Navbar from "../components/Navbar";
const Routing1 = () => (
  <div className="w-full h-screen overflow-hidden box-border">
    <Navbar />
    <Routes>
      <Route path="/" element={<Content />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
    </Routes>
  </div>
);

export default Routing1;
