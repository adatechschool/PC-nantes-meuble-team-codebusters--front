import 'bootstrap/dist/css/bootstrap.css';
import Navbarblack from "../components/TestComponents/Navbarblack";
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {createFurniture} from "../data/ApiController";

const buttonStyle = {
    border: "rgba(154, 113, 85, 0.2)",
   backgroundColor: "rgba(175, 128, 96, 0.928)",
   alignSelf: "center"
 }

 async function newFurniture(event) {
    event.preventDefault();
    const response = await createFurniture(
      document.getElementById("inputCategoryNewFurniture").value,
      document.getElementById("inputTypeNewFurniture").value,
      document.getElementById("inputPriceNewFurniture").value,
      document.getElementById("inputPhotosNewFurniture").value,
      document.getElementById("inputDescriptionNewFurniture").value,
    );
    console.log(response);
  }

export default function PostNewFurniture() {
  return (
    <div style={{ backgroundColor: "#FBF4F4", marginTop: "70px" }}>
      <Navbarblack />
    <div>
    <Form className='col-3' onSubmit={newFurniture}>
      
      <Form.Group className="mb-3" controlId="formBasicCategory">
        <Form.Label>Catégorie</Form.Label>
        <Form.Control type="text" placeholder="Entrez le type de votre meuble" id="inputCategoryNewFurniture"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicImage">
        <Form.Label>Type</Form.Label>
        <Form.Control type="text" placeholder="Entrez l'url de votre image" id="inputTypeNewFurniture"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPrice">
        <Form.Label>Prix</Form.Label>
        <Form.Control type="number" placeholder="Entrez le prix de votre meuble" id="inputPriceNewFurniture" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Photos</Form.Label>
        <Form.Control type="text" placeholder="Ex : Largeur 50 cm, Hauteur 80cm, Profondeur 40cm" id="inputPhotosNewFurniture"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescrption">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Entrez la description de votre meuble" id="inputDescriptionNewFurniture"/>
      </Form.Group>
      
      <Button style={buttonStyle} type="submit">
        Envoyer
      </Button>
    </Form>
    </div>
    </div>
  );
}


