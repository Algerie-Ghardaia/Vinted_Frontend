import { useState } from "react";
import "../components/modal.css";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Modal({ setShowModal, handlUserToken }) {
  //-------------------STATE--------------------//
  const [formConnection, setFormConnection] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  //--------------------------------------------//

  const navigate = useNavigate();
  const handlConnected = async () => {
    try {
      if (formConnection.email === "" || formConnection.password === "") {
        setErrorMessage("Please enter your email and password");
      } else {
        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/login",
          {
            email: formConnection.email,
            password: formConnection.password,
          }
        );
        //console.log(response);
        handlUserToken(response.data.token);
        navigate("/");
        console.log("is dkhal");
        setShowModal(false);
      }
    } catch (error) {
      // console.log(error.message);
      setErrorMessage(error.response.data.message);
    }
   
  };

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="model">
          <div className="model-content">
            <div className="k">
              <div className="text_input">
                <TextField
                  onChange={(event) => {
                    setFormConnection({
                      ...formConnection,
                      email: event.target.value,
                    });
                  }}
                  value={formConnection.email}
                  className="textField"
                  label="Adresse email"
                  color="success"
                  type="text"
                  autoComplete="current-password"
                  variant="standard"
                />
                <div className="ok_error"></div>
              </div>

              <div className="text_input">
                <TextField
                  onChange={(event) => {
                    setFormConnection({
                      ...formConnection,
                      password: event.target.value,
                    });
                  }}
                  value={formConnection.password}
                  className="textField"
                  label="Mot de passe"
                  color="success"
                  type="text"
                  autoComplete="current-password"
                  variant="standard"
                />
                <div className="ok_error"></div>
                <button
                  className="btn_sinscrire btn_modal"
                  onClick={handlConnected}
                >
                  Se Connecter
                </button>
              </div>

              <div>
                <Link
                  to={"/signup"}
                  className="question"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  <p>Pas encore de compte ?</p>
                  <p>Inscris-toi !</p>
                </Link>
                {errorMessage && <p className="ok_error isNon">{errorMessage}</p>}
              </div>
           
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
