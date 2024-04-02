import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Cookies from "js-cookie";

//------------PAGES-------------//
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Payment from "./pages/Payments";
import { Signup } from "./pages/Signup";
import { Publish } from "./pages/Publish";
//-----------------------------//

function App() {
  //-------------------STATE--------------------//
  const [token, setToken] = useState(Cookies.get("token_user") || null);
  const [search, setSearch] = useState("");
  //--------------------------------------------//
  const handlUserToken = (token) => {
    if (token) {
      Cookies.set("token_user", token, { expires: 15 });
      setToken(token);
    } else {
      Cookies.remove("token_user");
      setToken(null);
    }
  };

 

  return (
    <>
      <Router>
        <Header
          token={token}
          handlUserToken={handlUserToken}
          search={search}
          setSearch={setSearch}
        />
        <Routes>
          <Route path="/" element={<Home search={search} />} />
          <Route path="/offers/:id" element={<Offer />} />
          <Route path="/payments" element={<Payment />} />
          <Route path="/publish" element={<Publish token={token}/>} />
          <Route
            path="/signup"
            element={<Signup handlUserToken={handlUserToken} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
