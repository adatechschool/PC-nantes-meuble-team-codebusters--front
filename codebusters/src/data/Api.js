import React, { useEffect, useState } from "react";
import { buildHeaders, getStoredToken } from "./ApiController";

const token = getStoredToken();
const headers = buildHeaders();

export function Api() {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (token) {
      fetch("http://localhost:4000/users/furnitures", {
        headers: buildHeaders()
      })
        .then((response) => response.json())
        .then((data) => setData(data));
    } else {
      fetch("http://localhost:4000/furnitures?availability=true")
        .then((response) => response.json())
        .then((data) => setData(data));
    }
  }, []);
  return data;
}

export function ApiUnique(idFurniture) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("http://localhost:4000/furnitures/" + idFurniture)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [idFurniture]);
  return data;
}
