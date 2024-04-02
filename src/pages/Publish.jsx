import React, { useState } from "react";
import "../pages/publish.css";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { BiSolidCloudUpload } from "react-icons/bi";

export const Publish = ({ token }) => {
  
  const navigate = useNavigate();

  //-------------------STATE--------------------//
  const [picture, setPicture] = useState();
  const [formPuplish, setFormPuplish] = useState({
    title: "",
    marque: "",
    discription: "",
    price: "",
    color: "",
    etat: "",
    city: "",
    taille: "",
    select: false,
  });
//---------------------------------------------//

  //-------------------HANDL_SUBMIT--------------------//
  const handlSubmitFormPublish = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("picture", picture);
      formData.append("title", formPuplish.title);
      formData.append("description", formPuplish.description);
      formData.append("price", formPuplish.price);
      formData.append("condition", formPuplish.etat);
      formData.append("city", formPuplish.city);
      formData.append("size", formPuplish.taille);
      formData.append("brand", formPuplish.marque);
      formData.append("color", formPuplish.color);
      console.log(formData);
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      //   console.log(response.data);
      if (response.data._id) {
        navigate(`/offers/${response.data._id}`);
      }
    } catch (error) {
      console.log("Je suis dans le catch", error);
    }
  };
  //--------------------------------------------------//

  return token ? (
    <main>
      <form onSubmit={handlSubmitFormPublish}>
        <div className="main_publish">
          <h1>Vends ton article</h1>
          <div className="publish">
            <div className="photo">
              <label htmlFor="picture-input" className="labe_upload">
                Ajoute une photo <BiSolidCloudUpload size={40} className="lo" />
              </label>
              <input
                style={{ display: "none" }}
                id="picture-input"
                type="file"
                onChange={(event) => {
                  console.log(event);
                  setPicture(event.target.files[0]);
                }}
              />
              <div className="myPhoto">
                {picture && (
                  <img src={URL.createObjectURL(picture)} alt="produit" />
                )}
              </div>
            </div>

            <hr className="d" />

            <div className="title_in">
              <label>Title</label>
              <input
                name="title"
                type="text"
                value={formPuplish.title}
                onChange={(event) => {
                  setFormPuplish({ ...formPuplish, title: event.target.value });
                }}
              />
            </div>

            <div className="title_in">
              <label>Marque</label>
              <input
                name="title"
                type="text"
                value={formPuplish.marque}
                onChange={(event) => {
                  setFormPuplish({ ...formPuplish, marque: event.target.value });
                }}
              />
            </div>

            <div className="title_in">
              <label>Prix</label>
              <input
                name="title"
                type="text"
                value={formPuplish.price}
                onChange={(event) => {
                  setFormPuplish({ ...formPuplish, price: event.target.value });
                }}
              />
            </div>

            <div className="title_in">
              <label>taille</label>
              <input
                type="text"
                name="taille"
                value={formPuplish.taille}
                onChange={(event) => {
                  setFormPuplish({
                    ...formPuplish,
                    taille: event.target.value,
                  });
                }}
              />
            </div>

            <div className="title_in">
              <label>Couleur</label>
              <input
                name="color"
                type="text"
                value={formPuplish.color}
                onChange={(event) => {
                  setFormPuplish({
                    ...formPuplish,
                    color: event.target.value,
                  });
                }}
              />
            </div>

            <div className="title_in">
              <label>Etat</label>
              <input
                type="text"
                name="etat"
                value={formPuplish.etat}
                onChange={(event) => {
                  setFormPuplish({
                    ...formPuplish,
                    etat: event.target.value,
                  });
                }}
              />
            </div>

            <div className="title_in">
              <label>Lieu</label>
              <input
                type="text"
                name="lieu"
                value={formPuplish.city}
                onChange={(event) => {
                  setFormPuplish({
                    ...formPuplish,
                    city: event.target.value,
                  });
                }}
              />
            </div>

            <div className="textarea">
              <label>Décris ton article</label>
              <textarea
                name="discription"
                style={{}}
                type="text"
                value={formPuplish.description}
                onChange={(event) => {
                  setFormPuplish({
                    ...formPuplish,
                    description: event.target.value,
                  });
                }}
              >
                {formPuplish.description}
              </textarea>
            </div>

            <div
              className="title_in"
              style={{ marginLeft: "300px", marginBottom: "20px" }}
            >
              <label htmlFor="scales" style={{ width: "500px" }}>
                Je suis intéressé(e) par les échanges
              </label>
              <input
                type="checkbox"
                name="select"
                style={{ marginLeft: "-150px" }}
                checked={formPuplish.checked}
                onChange={(event) => {
                  setFormPuplish({
                    ...formPuplish,
                    select: event.target.checked,
                  });
                }}
              />
            </div>
          </div>
          <hr />
          <button className="btn_upload">Ajouter</button>
        </div>
      </form>
    </main>
  ) : (
    <Navigate to={"/signup"} />
  );
};
