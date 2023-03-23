import { ApiUnique } from "../data/Api.js";
import Carousel from "react-bootstrap/Carousel";
import { useParams } from "react-router-dom";
//import PanierWhite from "./buttons/Panierwhite";
import React, { useEffect, useState } from "react";
import { BsBasket2} from "react-icons/bs";
import Button from 'react-bootstrap/Button';


const colorBasket = {
    color: 'white',
    width: '31px',
    height: '30px',
    margin:"1rem",
};
  
const buttonStyle={
    textTransform: "uppercase",
    borderRadius:"1em",
    background:"lightsalmon",
    marginTop: "3rem",
    paddingRight:"5vh",
    paddingLeft:"4vh",
    // marginBottom:"10rem",
}

const cardStyle = {
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  margin: "auto",
  justifyContent: "center",
};

const cardUnique = {
  display:"flex",
  flexDirection:"column",
  maxWidth: "25rem",
  maxHeight: "30rem",
  marginTop: "10rem",
  borderRadius: "1em",
};

const imgUnique = {
  height: "50vh",
  borderRadius: "1em",
  objectFit: "contain",
};

const textUnique = {
  color: "black",
  textAlign: "center",
  padding: "3vh",
  borderTop: "1px solid black",
  letterSpacing: "1.3px",
  display:"flex",
};

const subText = {
  display:"flex",
  color: "black",
  textAlign: "center",
  letterSpacing: "1.3px",
};

export default function Cards() {
  // AJOUTER UN ELEMENT AU LOCAL STORAGE
  const addToCard = (id) => {
    console.log(id);
    let card = localStorage.getItem("card");
    // REGARDE SI LE TABLEAU EXISTE
    if (card) {
      let cardArray = JSON.parse(card);
      // REGARDE SI L'ID EST DEJA DANS LE TABLEAU
      if (cardArray.includes(id)) {
        return alert("Ce produit est déjà dans votre panier");
      } else {
        cardArray.push(id);
        localStorage.setItem("card", JSON.stringify(cardArray));
        window.location.href = "/cart";
      }
      // SI LE TABLEAU N'EXISTE PAS
    } else {
      let cardArray = [];
      localStorage.setItem("card", JSON.stringify(cardArray));
      window.location.href = "/cart";
    }
  };

  const { id } = useParams();
  const furniture = ApiUnique(id);
  return (
    <div style={cardStyle}>
      {furniture && furniture._id && (
        <div
          class="ProductCard"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div class="card" style={cardUnique}>
            <Carousel>
              <Carousel.Item>
                <img
                  src={furniture.photos[0].url}
                  style={imgUnique}
                  alt="..."
                ></img>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={furniture.photos[1].url}
                  style={imgUnique}
                  alt="..."
                ></img>
              </Carousel.Item>
            </Carousel>
          </div>
          <div class="title">
            <h2>{furniture.type}</h2>
            <div class="text" style={textUnique}>
              <p>{furniture.description[0].text}</p>
            </div>
            <div class="text" style={subText}>
              <p>{furniture.description[0].color}</p>
            </div>
            <div class="text" style={subText}>
              <p>{furniture.description[0].dimensions}</p>
            </div>
            <div class="price" style={{ borderTop: "1px solid black" }}>
              <h1>{furniture.price}€</h1>
            </div>
            <div>
              
                <Button onClick={() => addToCard(furniture._id)} variant="outline-light" style={buttonStyle}>
                  <BsBasket2 style={colorBasket}/>Ajouter au Panier
                </Button>
               
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
