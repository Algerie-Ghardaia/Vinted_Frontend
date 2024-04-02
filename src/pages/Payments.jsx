import "../pages/payment.css";
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51IpvphDqQKb3lCIT3UU1fIPnAXyyG57gLns831kNwLVGCFo1a3MtSucuiIwEijgip8fL85zUlKZKTK0a2JAhSWHt00ZWSjTErF"
);

export default function Payments() {
  const Payment = () => {
    const location = useLocation();
    const { title } = location.state;
    const { price } = location.state;
    return { title, price };
  };

  const price = 5.9;

  const options = {
    mode: "payment",
    amount: Number((price * 100).toFixed(0)),
    currency: "eur",
  };
  return (
    <>
      <Elements stripe={stripePromise} options={options}>
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
                Il ne vous reste plus qu'un étape pour vous offrir {Payment}.
                Vous allez payer 13 € (frais de protection et frais de port
                inclus).
              </p>
              <hr className="rhami1" />
            </div>
            <div className="bas">
              {/* <div style={{ display: "flex" }}>
                <div className="logo_carte">LOGO</div>
                <input
                  className="pay"
                  type="text"
                  placeholder="Numero de la carte"
                />
                <input className="pay1" type="text" placeholder="MM/AA" />
                <input className="pay1 pay2" type="text" placeholder="CVC" />
              </div> */}
              <div className="stripe">
                <CheckoutForm />
              </div>
            </div>
          </div>
        </div>
      </Elements>
    </>
  );
}
