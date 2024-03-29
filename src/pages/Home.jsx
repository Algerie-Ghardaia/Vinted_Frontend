import axios from "axios";
import "../pages/home.css";
import React, { useEffect, useState } from "react";
import home from "../assets/img/home.png";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const dataFetch = async () => {
      try {
        const request = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setData(request.data);
        setIsLoading(false);
      } catch (error) {
        console.log("Error");
      }
    };
    dataFetch();
  }, []);
  return isLoading ? (
    <CircularProgress color="secondary" />
  ) : (
    <main>
      <div>
        <img
          src={home}
          alt=""
          height={500}
          style={{ width: "100vw", objectFit: "cover" }}
        />
      </div>
      <div className="container">
        {data.offers.map((off) => {
          return (
            <Link key={off._id} to={`/offers/${off._id}`}>
              <div className="glob_article">
                <article>
                  <div className="user_img">
                    <img
                      src={off.owner.account.avatar?.secure_url}
                      alt={off.owner.account.username}
                    />
                    <h2>{off.owner.account.username}</h2>
                  </div>
                  <div className="img_article">
                    <img
                      src={off.product_image?.secure_url}
                      alt={off.product_name}
                    />
                  </div>
                  <div>
                    <p className="price">{off.product_price} €</p>
                    <p>{off.product_details[1].TAILLE}</p>
                    <p>{off.product_details[0].MARQUE}</p>
                  </div>
                </article>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
