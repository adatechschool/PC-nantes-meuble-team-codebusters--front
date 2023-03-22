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

//  const ApipostFurniture = (id) => {
//     console.log(id)
//     fetch("http://localhost:4000/users/furnitures/" + id, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(),
//     })
//         .then((response) => response.json())
//         .then((data) => window.location.reload(true));
// };

// const CreationOfFurniture = (id) => {
//     const furniture = {
//         type: document.getElementById("inputNameNewFurniture").value,
//         category: document.getElementById("inputCategoryNewFurniture").value,
//         photos: document.getElementById("inputImageNewFurniture").value,
//         price: document.getElementById("inputPriceNewFurniture").value,
//         description: [
//             {
//                 color: document.getElementById("inputColorNewFurniture").value,
//                 dimensions: document.getElementById("inputDimensionNewFurniture").value,
//                 text: document.getElementById("inputDescriptionNewFurniture").value,
//             }
//         ],
//     }
//     ApiUpdateInformationFurniture(id, furniture);
//     alert("Furniture added");
// }

 async function newFurniture(event) {
    console.log("Avant");
    event.preventDefault();
    const response = await createFurniture(
      document.getElementById("inputNameNewFurniture").value,
      document.getElementById("inputCategoryNewFurniture").value,
      document.getElementById("inputImageNewFurniture").value,
      document.getElementById("inputPriceNewFurniture").value,
      document.getElementById("inputDescriptionNewFurniture").value,
    );
    console.log("Après");
    console.log(response);
  }

export default function PostNewFurniture() {
  return (
    <div style={{ backgroundColor: "#FBF4F4", marginTop: "70px" }}>
      <Navbarblack />
    <div>
    <Form className='col-3' onSubmit={newFurniture}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nom</Form.Label>
        <Form.Control type="text" placeholder="Entrez le nom de votre meuble" id="inputNameNewFurniture"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCategory">
        <Form.Label>Catégorie</Form.Label>
        <Form.Control type="text" placeholder="Entrez le type de votre meuble" id="inputCategoryNewFurniture"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicImage">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Entrez l'url de votre image" id="inputImageNewFurniture"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPrice">
        <Form.Label>Prix</Form.Label>
        <Form.Control type="number" placeholder="Entrez le prix de votre meuble" id="inputPriceNewFurniture" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Dimensions</Form.Label>
        <Form.Control type="text" placeholder="Ex : Largeur 50 cm, Hauteur 80cm, Profondeur 40cm" id="inputDimensionNewFurniture"/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Couleur</Form.Label>
        <Form.Control type="text" placeholder="Entrez la couleur de votre meuble" id="inputColorNewFurniture" />
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


