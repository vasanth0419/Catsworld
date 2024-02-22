import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import NavBar from "./components/NavBar";
import Edit from "./components/Edit";
import Add from "./components/Add";

const App = () => {
  const [id, setid] = useState(0);
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details setid={setid} />} />
          <Route path="/edit/:id" element={<Edit id={id} />} />
          <Route path="/create" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
