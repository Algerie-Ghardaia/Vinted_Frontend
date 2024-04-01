import "../pages/payment.css";
import React from "react";

export default function Payment({ data }) {
  console.log(data);
  return (
    <>
      <div className="cantainer">
        <div className="terminal">
          <p
            style={{
              marginBottom: "-100px",
              marginTop: "-30px",
              fontSize: "15px",
            }}
          >
            Résumé de la commande
          </p>
          <div className="haut">
            <div className="style">
              <p>Commande</p>
              <div className="somme01">10 €</div>
            </div>
            <div className="style">
              <p>Frais protection acheteurs</p>
              <div className="somme1">2,00 €</div>
            </div>
            <div className="style">
              <p>Frais de port</p>
              <div className="somme">2,00 €</div>
            </div>
            <hr className="rhami" />
          </div>
          <div className="centre">
            <div className="style">
              <h2>Total</h2>
              <div className="to">2,00 €</div>
            </div>
            <p className="text">
              Il ne vous reste plus qu'un étape pour vous offrir 👚Beau pull
              gris avec bandes sur les bras / Jennyfer / Taille 34 36 38 40
              42🌼. Vous allez payer 13 € (frais de protection et frais de port
              inclus).
            </p>
            <hr className="rhami1" />
          </div>
          <div className="bas">
            <div style={{ display: "flex" }}>
              <div className="logo_carte">LOGO</div>
              <input
                className="pay"
                type="text"
                placeholder="Numero de la carte"
              />
              <input
               className="pay1"
                type="text"
                placeholder="MM/AA"
              />
              <input
                className="pay1 pay2"
                type="text"
                placeholder="CVC"
              />
            
            </div>
          </div>
            <button className="btn_payment">Pay</button>
        </div>
      </div>
    </>
  );
}
