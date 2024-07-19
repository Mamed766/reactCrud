import React from "react";
import Navbar from "./Pages/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.page";
import User from "./Pages/user/User";
import Adduser from "./Pages/user/Adduser";
import Edit from "./Pages/user/Edit";
const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/add-user" element={<Adduser />} />
          <Route path="/edit-user/:id" element={<Edit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
