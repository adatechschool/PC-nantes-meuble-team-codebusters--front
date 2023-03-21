import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import Navbarblack from "../components/TestComponents/Navbarblack";
import {
  callLogin,
  createFurniture,
  findUserFurnitures,
} from "../data/ApiController";

export default function Login() {
  // const [userFurniture, setUserFurniture] = useState([]);

  // useEffect(() => {
  //   findUserFurnitures().then((res) => {
  //     setUserFurniture(res);
  //   });
  // }, []);

  async function login() {
    const response = await callLogin("emilie@gmail.com", "1234567");
    console.log(response);
  }

  async function getUserFurnitures() {
    const response = await findUserFurnitures();
    console.log(response);
    //setUserFurniture(response);
  }

  async function onCreateFurniture() {
    const response = await createFurniture(
      new Date(),
      "assise",
      "pouf",
      120,
      [
        {
          url: "https://prodimages.casashops-devcdn.com/productimages/ambiant/664965/DiSbVEWy4hZ83eiHJuHT30.jpg?quality=75&width=667&fit=contain",
          view: "front",
        },
      ],
      "ceci est un pouf encore",
      true
    );
    console.log(response);
  }
  return (
    <div className="App" style={{ backgroundColor: "#FBF4F4" }}>
      <Navbarblack />
      <h1>LOGIN PAGE</h1>
      <button onClick={login}>click</button>
      <button onClick={getUserFurnitures}>click</button>
      <button onClick={onCreateFurniture}>click</button>
    </div>
  );
}