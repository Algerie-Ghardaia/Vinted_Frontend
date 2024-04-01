import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Cookies from "js-cookie";

//------------PAGES-------------//
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Payment from "./pages/Payment";
import { Signup } from "./pages/Signup";
// import { Login } from "./pages/Login";
//-----------------------------//

function App() {
  const [token, setToken] = useState(Cookies.get("token_user") || null);
  
  const handlUserToken = (token) => {
    if (token) {
      Cookies.set("token_user", token, { expires: 15 });
      console.log("cote app =>: " + token);
      setToken(token);
    } else {
      Cookies.remove("token_user");
      setToken(null);
    }
  };

  return (
    <>
      <Router>
        <Header token={token} handlUserToken={handlUserToken} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers/:id" element={<Offer />} />
          <Route path="/offers/payment" element={<Payment />} />
          <Route path="/signup" element={<Signup   handlUserToken={handlUserToken}/>} />
          {/* <Route path="/login" element={<Login   handlUserToken={handlUserToken}/>} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
