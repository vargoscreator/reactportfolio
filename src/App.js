import React from 'react'
import './styles/reset.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Lrb } from "./pages/Lrb";
import { Notes } from "./pages/Notes";
import { Xiaomi } from "./pages/Xiaomi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/Lrb" element={<Lrb/>} />
          <Route path="/Notes" element={<Notes/>} />
          <Route path="/Xiaomi" element={<Xiaomi/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

