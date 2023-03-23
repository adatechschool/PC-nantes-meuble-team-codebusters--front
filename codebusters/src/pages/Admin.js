import 'bootstrap/dist/css/bootstrap.css';
import Navbarblack from "../components/TestComponents/Navbarblack";
import { ApiAllAdmin } from '../data/Api';
import { getStoredToken } from '../data/ApiController';
import React, { useEffect, useState } from "react";

const imgSize = {
    width: "10rem",
    height: "10rem",
    objectFit: "cover",
    borderRadius: "50%"
};

const backGround = {
    backgroundColor: "#FBF4F4",
    marginTop: "5rem",
};

export default function Admin() {

    console.log(getStoredToken());
    if (getStoredToken() !== "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NDE5Yjc2OTUyNTRhY2RjNDYyNzJjZDQiLCJlbWFpbCI6ImxhdXJlbGluZS5mbGV1cnlAZ21haWwuY29tIn0.4pFpu9CGjQ4crv0nw8fjlxUOMYVDXi1DOGPC3i69LR8") {
      window.location.href = "/login";
    }

    // UPDATE AVAILABILITY
    const ApiUpdateFurniture = (id, availability) => {
        console.log(id, availability)
        fetch("http://localhost:4000/users/furnitures/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(availability),
        })
            .then((response) => response.json())
            .then((data) => window.location.reload(true));
    };

    // DELETE FURNITURE
    const ApiDeleteFurniture = (id) => {
        console.log(id)
        fetch("http://localhost:4000/users/furnitures/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => window.location.reload(true));
    };

    // UPDATE INFORMTION OF FURNITURE
    const ApiUpdateInformationFurniture = (id, furniture) => {
        console.log(id, furniture)
        fetch("http://localhost:4000/users/furnitures/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(furniture),
        })
            .then((response) => response.json())
            .then((data) => window.location.reload(true));
    };

    const data = ApiAllAdmin(); 
    console.log(data)
    
    const findFurniture = (id) => {
        data.map((furniture) => {
            if (furniture._id === id) {
                document.getElementById("idFurniture").value = furniture._id;
                document.getElementById("category").value = furniture.category;
                document.getElementById("type").value = furniture.type;
                document.getElementById("description").value = furniture.description[0].text;
                document.getElementById("price").value = furniture.price;
                window.scrollTo(0, 0);
            }
        })
    };

    const updateFurniture = (id) => {
        const furniture = {
            category: document.getElementById("category").value,
            type: document.getElementById("type").value,
            description: [
                {
                    text: document.getElementById("description").value,
                }
            ],
            price: document.getElementById("price").value,
        }
        ApiUpdateInformationFurniture(id, furniture);
        alert("Furniture updated");
    }

    return (
        <div className="App">
            <Navbarblack />
        {data && data[0] && (
            <div className="container">
            <div className="row" >
                <div className="col-12" style={backGround}>
                    <h1>Admin Page</h1>
                    {/* LIGNE POUR RENTRER UN ID ET MODIFIER LE MEUBLE */}
                    <div className="row">
                        <div className="col-12">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="idFurniture">ID Furniture</label>
                                    <input type="text" className="form-control" id="idFurniture" placeholder="Enter ID Furniture" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="category">Category</label>
                                    <input type="text" className="form-control" id="category" placeholder="Enter Category" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="type">Type</label>
                                    <input type="text" className="form-control" id="type" placeholder="Enter Type" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <input type="text" className="form-control" id="description" placeholder="Enter Description" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="price">Price</label>
                                    <input type="text" className="form-control" id="price" placeholder="Enter Price" />
                                </div>
                                <div className="form-group">
                                    <button type="button" className="btn btn-primary" onClick={() => updateFurniture(document.getElementById("idFurniture").value)}>Update Furniture</button>
                                    <button type="button" className="btn btn-warning" onClick={() => findFurniture(document.getElementById("idFurniture").value)}>Find Furniture ID</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Photos</th>
                                <th scope="col">Category</th>
                                <th scope="col">Type</th>
                                <th scope="col">Description</th>
                                <th scope="col">Price</th>
                                <th scope="col">Availability</th>
                                <th scope="col">Delete / Modify</th>
                                <th scope='col'>Copy ID</th>
                            </tr>
                        </thead>
                        <tbody>
                        {data.map((furniture) => (
                            <tr>
                                <td>
                                    <img src={furniture.photos[0].url} style={imgSize} alt="" /> 
                                </td>
                                    <td>{furniture.category}</td>
                                    <td>{furniture.type}</td>
                                    <td>{furniture.description[0].text}</td>
                                    <td>{furniture.price}€</td>
                                <td>
                                    {furniture.availability ? (
                                        <button type="button" className="btn btn-success" onClick={() => ApiUpdateFurniture(furniture._id, {availability: false})}>True</button>
                                        ) : (
                                            <button type="button" className="btn btn-danger" onClick={() => ApiUpdateFurniture(furniture._id, {availability: true})}>False</button>
                                            )}
                                </td>
                                <td>
                                    <button type="button" className="btn btn-danger" onClick={() => ApiDeleteFurniture(furniture._id)}>Delete</button>
                                    <button type="button" className="btn btn-primary" onClick={() => findFurniture(furniture._id)}>Modify</button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-warning" onClick={() => navigator.clipboard.writeText(furniture._id)}>Copy ID</button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        )}
    </div>
    );
  }