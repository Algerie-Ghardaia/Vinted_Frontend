import "../pages/payment.css";
import React from "react";

export default function Payment({ data }) {
  console.log(data);
  return (
    <>
      <div className="cantainer">
        <div className="terminal">
          <p>Résumé de la commande</p>
          <p>Commande</p>
          <p>Frais protection acheteurs</p>
          <p>Frais de port</p>
          <hr />
          <h2>Total</h2>
          <p>
            Il ne vous reste plus qu'un étape pour vous offrir Chemisier
            carreaux. Vous allez payer 19.5 € (frais de protection et frais de
            port inclus).
          </p>
          <hr />
          <div>
            <div></div>
            <input type="text" placeholder="Numero de la carte" />
          </div>
        </div>
      </div>
    </>
  );
}
