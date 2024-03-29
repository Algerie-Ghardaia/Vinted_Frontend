import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
//------------PAGES-------------//
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Payment from "./pages/Payment";
//-----------------------------//

function App() {
  return (
    <>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers/:id" element={<Offer/>}/>
        <Route path ="/offers/payment" element={<Payment/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
