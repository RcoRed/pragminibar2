import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from "./components/Login.jsx";
import Bar from "./components/Bar.jsx";
import Inventario from "./components/Inventario.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/*<Route path="/" element={<Bar />} />*/}
        <Route path="/inventario" element={<Inventario />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App
//
//<Route path="clienti" element={<Clienti />} />
//<Route path="*" element={<NoPage />} />