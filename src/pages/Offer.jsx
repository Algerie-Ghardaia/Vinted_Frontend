import React, { useEffect, useState } from "react";
import axios from "axios";
import "../pages/offer.css";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams, Link } from "react-router-dom";

export default function Offer() {

  const { id } = useParams();

  //-------------------STATE--------------------//
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  //--------------------------------------------//

//-------------------HANDL_USE_EFFECT--------------------//
  useEffect(() => {
    const fetchData = async () => {
      try {
        const respose = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        setData(respose.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
//------------------------------------------------------//


  return isLoading ? (
    <div className="cp" ><CircularProgress size={70} color="success" /></div>
    
  ) : (
    <main className="main1">
      <div className="ar_selected">
        <div className="selected">
          <img src={data.product_image.secure_url} alt="" />
        </div>
        <div className="info_article">
          <p className="price">{data.product_price} €</p>
          {data.product_details.map((detail) => {
            console.log(detail);
            const keys = Object.keys(detail);
            // console.log(keys);
            const keyName = keys[0];
            console.log(keyName);
            return (
              <div key={keyName} className="discription">
                <h5>{keyName}  </h5>
                <h6>{detail[keyName]}</h6>
              </div>
            );
          })}
          <hr />
          <div className="lo_us">
            <h2 style={{fontSize:'22px'}}>{data.product_name}</h2>
            <p>{data.product_description}</p>
            <div key={data.id} className="profile_username">
              <img src={data.owner.account.avatar?.secure_url} alt="" style={{background:'gold'}}/>
              <h2>{data.owner.account.username}</h2>
            </div>
            <Link to={"/payments"} state={{ title:data.product_name,price:data.product_price}}>
  
              <button className="bt">Acheter</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
