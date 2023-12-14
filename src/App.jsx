import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import "./App.css";
import Home from "./Home.jsx";
import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";
import Checkout from "./Checkout.jsx";
import Login from "./Login.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Login" exact element={<Login />} />
          <Route path="/checkout" exact element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
