import { ApiUnique } from "../data/Api.js";
import { useParams } from 'react-router-dom';

const cardStyle = {
  display: "flex",
  flexWrap: "wrap",
  width: "90%",
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
  borderRadius: "1em",
};

const titleUnique = {
  border: "1px solid black; padding: 5px;",
};

export default function Cards() {
  const { id } = useParams();
  const furniture = ApiUnique(id);
  return (
    <div style={cardStyle}>
      {furniture && furniture._id && (
        <div className="card" style={cardUnique} key={furniture._id}>
          <img src={furniture.photos[0].url} className="card-img-top" style={imgUnique} alt="..." />
        </div>
      )}
    </div>
  );
  
}

