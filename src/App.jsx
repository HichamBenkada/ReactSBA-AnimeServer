import React from "react";
import { Routes, Route } from "react-router-dom";

//components:
import NavBar from "./components/NavBar";

//Pages:
import NotFound from "./pages/404";
import Home from "./pages/Home";

import "./App.css";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path= "*" elemete={<NotFound />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
