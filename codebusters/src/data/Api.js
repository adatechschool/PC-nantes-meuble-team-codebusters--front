import React, { useEffect, useState } from "react";

export function Api() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/furnitures?availability=true")
      .then((response) => response.json())
      .then((data) => setData(data));
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

export function ApiAllAdmin(idFurniture) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("http://localhost:4000/furnitures/")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [idFurniture]);
  return data;
}
