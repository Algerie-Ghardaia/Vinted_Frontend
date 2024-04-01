import "../pages/signup.css";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Signup = ({ handlUserToken }) => {
  //-------------------STATE--------------------//
  const [formInput, setFormInput] = useState({
    username: "",
    email: "",
    password: "",
    click: false,
  });
  const [errorMessage, setErrorMessage] = useState("");

  //--------------------------------------------//

  const navigate = useNavigate();

  //-----------FUNCTION--------------------//
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setErrorMessage("");
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          username: formInput.username,
          email: formInput.email,
          password: formInput.password,
          click: formInput.click,
        }
      );
      handlUserToken(response.data.token);
      navigate("/");
    } catch (error) {
      if (error.response.status === 409) {
        console.log(error.response.status);
        setErrorMessage(
          "This email already has an account, please use another one"
        );
      } else if (error.response.data.message === "Missing parameters") {
        setErrorMessage("Please fill in all the fields");
      }
    }
  };
  //--------------------------------------//
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="main_signup">
          <div className="div_signup">
            <h1>S'inscrire</h1>
            <div className="text_input">
              <TextField
                onChange={(event) => {
                  setFormInput({ ...formInput, username: event.target.value });
                }}
                value={formInput.username}
                className="textField"
                label="Nom d'utilisateur"
                color="success"
                type="text"
                autoComplete="current-password"
                variant="standard"
              />
            </div>
            <div className="text_input">
              <TextField
                onChange={(event) => {
                  setFormInput({ ...formInput, email: event.target.value });
                }}
                value={formInput.email}
                className="textField"
                label="Email"
                color="success"
                type="text"
                autoComplete="current-password"
                variant="standard"
              />
            </div>
            <div className="text_input">
              <TextField
                onChange={(event) => {
                  setFormInput({ ...formInput, password: event.target.value });
                }}
                value={formInput.password}
                className="textField"
                label="Mot de passe"
                color="success"
                type="text"
                autoComplete="current-password"
                variant="standard"
              />
            </div>
            <div className="checkbox sous">
              <input
                className="checkbox"
                type="checkbox"
                checked={formInput.cheched}
                onChange={(event) => {
                  setFormInput({ ...formInput, click: event.target.checked });
                }}
                label="S'inscrire à notre newsletter"
              />
              <p>
                En m'inscrivant je confirme avoir lu et accepté les Termes &
                Conditions et Politique de Confidentialité de Vinted. Je
                confirme avoir au moins 18 ans.
              </p>
            </div>
            <button className="btn_sinscrire">S'inscrire</button>
            <div className="question">
              <p>Tu as déja un compte ? </p>
              <p>Connecte toi !</p>

              {errorMessage && <p className="ok_error">{errorMessage}</p>}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
