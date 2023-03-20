import ImageAccueil from "./ImageAccueil";
import Navbarblack from "./TestComponents/Navbarblack";

const textStyle = {
  color: "white",
  textTransform: "uppercase",
  fontSize: "5em",
}

const divStyle = {
  position: "absolute",
  zIndex: "10",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "10em",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function Headerwhite() {
  return (
    <header>
      <div>
        <div>
          <Navbarblack />
          <div style={divStyle}>
            <h1 style={textStyle}>FUNKY FURNISH</h1>
          </div>
        </div>
        <ImageAccueil />
      </div>
    </header>
  );
}

export default Headerwhite;
