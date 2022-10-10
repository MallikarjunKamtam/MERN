import React from "react";
import Dashboard from "../src/components/Dashboard";
import Register from "./components/Register";
import Login from "./components/Login";
import Header from "./components/Header";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div className="container text-xs">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
