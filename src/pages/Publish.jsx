import React, { useState } from "react";
import "../pages/publish.css";
import axios from "axios";

export const Publish = ({ token }) => {
  const [formPuplish, setFormPuplish] = useState({
    title: "",
    discription: "",
    taille: "",
    color: "",
    etat: "",
    lieu: "",
    picture: "",
    select: false,
  });

  const handlSubmitFormPublish = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", formPuplish.title);
      formData.append("picture", formPuplish.picture);
        console.log(formData);
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      setFormPuplish(response.data.secure_url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {formPuplish.picture && <img src={formPuplish.picture} alt="" />}
      <form onSubmit={handlSubmitFormPublish}>
        <div className="main_publish">
          <h1>Vends ton article</h1>
          <div className="publish">
            <div className="border classInput">
              {/* <label htmlFor="file">Ajouter une image</label> */}
              <input
                htmlFor="file"
                className="myInput"
                type="file"
                onChange={(event) => {
                  setFormPuplish(event.target.files[0]);
                }}
              />
            </div>
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
              <label>Taille</label>
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
                value={formPuplish.lieu}
                onChange={(event) => {
                  setFormPuplish({
                    ...formPuplish,
                    lieu: event.target.value,
                  });
                }}
              />
            </div>
            <div className="textarea">
              <label style={{}}>Décris ton article</label>
              <textarea
                name="discription"
                style={{}}
                type="text"
                value={formPuplish.discription}
                onChange={(event) => {
                  setFormPuplish({
                    ...formPuplish,
                    discription: event.target.value,
                  });
                }}
              >
                {formPuplish.discription}
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
    </>
  );
};
