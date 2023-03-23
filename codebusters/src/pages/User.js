import "bootstrap/dist/css/bootstrap.css";
import Navbarblack from "../components/TestComponents/Navbarblack";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { createFurniture, findUserFurnitures, getUserInfo } from "../data/ApiController";

const imgSize = {
  width: "10rem",
  height: "10rem",
  objectFit: "cover",
  borderRadius: "50%",
};
const wrapperForm = {
  display: "Flex",
  marginTop: "8em",
  marginBottom: "10em",
  textAlign: "left",
};

const buttonStyle = {
  border: "rgba(154, 113, 85, 0.2)",
  backgroundColor: "rgba(175, 128, 96, 0.928)",
  alignSelf: "center",
};

const infosUser = {
  display: "flex",
  paddingTop: "9em",
  textAlign: "left",
};

const furnitureStyle = {
  paddingTop: "9em",
  marginRight: "3em",
};

async function newFurniture(event) {
  event.preventDefault();
  const response = await createFurniture(
    document.getElementById("inputCategoryNewFurniture").value,
    document.getElementById("inputTypeNewFurniture").value,
    document.getElementById("inputPriceNewFurniture").value,
    document.getElementById("inputPhotosNewFurniture").value,
    document.getElementById("inputDescriptionNewFurniture").value
  );
  console.log(response);
}

export default function PostNewFurniture() {
  const [furniture, setFurniture] = useState([]);
  const [userInfo, setUserInfo] = useState({name : "", email : ""});
  useEffect(() => {
    findUserFurnitures()
    .then((response) => setFurniture(response))
    getUserInfo()
    .then((response) => setUserInfo(response))
  }, []);

  return (
    <div style={{ backgroundColor: "#FBF4F4" }}>
      <Navbarblack />

      <div className="container">
        <div className="row">
          <div className="col-3">
            <div style={infosUser}>
              <div>
                <div>{userInfo.name}</div>
                <div>{userInfo.email}</div>
              </div>
            </div>

            <div style={wrapperForm}>
              <Form onSubmit={newFurniture}>
                <Form.Group className="mb-3" controlId="formBasicCategory">
                  <Form.Label>Catégorie</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Entrez le type de votre meuble"
                    id="inputCategoryNewFurniture"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicImage">
                  <Form.Label>Type</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Entrez le nom de votre meuble"
                    id="inputTypeNewFurniture"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPrice">
                  <Form.Label>Prix</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Entrez le prix de votre meuble"
                    id="inputPriceNewFurniture"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Photos</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Entrez l'url de votre image"
                    id="inputPhotosNewFurniture"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDescrption">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Entrez la description de votre meuble"
                    id="inputDescriptionNewFurniture"
                  />
                </Form.Group>

                <Button style={buttonStyle} type="submit">
                  Envoyer
                </Button>
              </Form>
            </div>
          </div>

          <div className="col" style={furnitureStyle}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Photos</th>
                  <th scope="col">Category</th>
                  <th scope="col">Type</th>
                  <th scope="col">Description</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {furniture.map((item) => (
                  <tr>
                    <td>
                      <img
                        src={item.photos[0].url}
                        style ={imgSize}
                        alt=""
                      />
                    </td>
                    <td>{item.category}</td>
                    <td>{item.type}</td>
                    <td>{item.description[0].text}</td>
                    <td>{item.price}€</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
