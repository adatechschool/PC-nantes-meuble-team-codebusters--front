import { ApiSingle } from "../data/ApiSingle.js";

const cardStyle = {
  display: "flex",
  flexWrap: "wrap",
  width: "90%",
  // center middle of the page
  margin: "auto",
  justifyContent: "center",
};

const cardUnique = {
  width: "20rem",
  height: "28rem",
  margin: "1em",
  borderRadius: "1em",
};

const imgUnique = {
  width: "100%",
  height: "100%",
  // border top radius
  borderTopLeftRadius: "1em",
  borderTopRightRadius: "1em",
};

const textUnique = {
  textTransform: "uppercase",
  color: "black",
  textAlign: "center",
  padding: "30px",
  border: "1px solid black",
  boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
  padding: "10px",
  borderRadius: "1em",
};

const titleUnique = {
  border: "1px solid black; padding: 5px;",
};

export default function Cards() {
  const data = ApiSingle();
  console.log("ProductCard.js")
  console.log(data);
  return (
    <div class="ProductCard" style={{ display: "flex", alignItems: "center" }}>
    </div>
  );
}
