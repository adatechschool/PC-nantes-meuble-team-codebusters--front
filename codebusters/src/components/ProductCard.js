import { Api } from "../data/Api.js";

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
  padding: "0",
  
};

const titleUnique = {
    border:"1px solid black; padding: 5px;"
}

export default function Cards() {
  const data = Api();
  //console.log(data);
  const picturefurniture = data.map((furniture) => (
    <div class="card" style={cardUnique} key={furniture.id}>
      <img
        src={furniture.photos[0].url}
        class="card-img"
        style={imgUnique}
        alt="..."
      />
    </div>
  ));
  const titlefurniture = data.map((furniture) => (
    <div>
      <h2 class="card-title" style={titleUnique}>
        {furniture.type}
      </h2>
    </div>
  ));
  const textfurniture = data.map((furniture) => (
    <div>
      <h5 class="card-text" style={textUnique}>
        {furniture.description[0].text}
      </h5>
    </div>
  ));
  return (
    <div class="ProductCard" style={{ display: "flex", alignItems: "center" }}>
      <div style={cardStyle}>{picturefurniture[0]}</div>
      <div style={titleUnique}>
        {titlefurniture[0]}
        <br></br>
        <br></br>
        <br></br>
        <div style={textUnique}>
        {textfurniture[0]}
        </div>
      </div>
    </div>
  );
}
