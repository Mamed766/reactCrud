import React from "react";
import Navbar from "./Pages/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routers } from "./router";
const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          {routers &&
            routers.map((router, index) => (
              <Route path={router.path} element={router.element} />
            ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
