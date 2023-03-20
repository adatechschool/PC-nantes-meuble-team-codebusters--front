import ImageAccueil from "./ImageAccueil";
import Navbarblack from "./TestComponents/Navbarblack";
import "../assets/fonts/Vintage.ttf";

const textStyle = {
  color: "white",
  textTransform: "uppercase",
  fontFamily: "Vintage",
  fontSize: "7em",
  textShadow: "1px 1px 1px black",
};

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
