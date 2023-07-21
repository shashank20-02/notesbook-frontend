import React from "react";
import Navbar from "../components/Navbar";
import Notes from "../pages/Notes";
import Account from "../pages/Account";
import { Routes, Route } from "react-router-dom";
import AddNote from "../pages/AddNote";
import EditNote from "../pages/EditNote";
import ReadNote from "../pages/ReadNote";
import UpdateUser from "../pages/UpdateUser";
const Routing2 = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Notes />}></Route>
        <Route path="/notes" element={<Notes />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/add" element={<AddNote />}></Route>
        <Route path="/edit/:id" element={<EditNote />}></Route>
        <Route path="/read/:id" element={<ReadNote />}></Route>
        <Route path="/update" element={<UpdateUser />}></Route>
      </Routes>
    </div>
  );
};

export default Routing2;
