import { ApiUnique } from "../data/Api.js";
import Carousel from "react-bootstrap/Carousel";
import { useParams } from "react-router-dom";
import PanierWhite from "./buttons/Panierwhite";

const cardStyle = {
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  margin: "auto",
  justifyContent: "center",
};

const cardUnique = {
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
  padding: "30px",
  borderTop: "1px solid black",
};

const subText = {
  color: "black",
  textAlign: "center",
};

const panierWhite = {
  display: "none",
};

export default function Cards() {
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
            <div class="price" style={{ borderTop: "1px solid black"}}>
              <h1>{furniture.price}€</h1>
            </div>
            <div>
              <PanierWhite style={panierWhite} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
