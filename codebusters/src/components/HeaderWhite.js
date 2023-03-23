import ImageAccueil from "./ImageAccueil";
import Navbarblack from "./TestComponents/Navbarblack";
import Logo from "../assets/Funky_Funish_blanc.svg";
import Logo2 from "../assets/NewLogoG.png";
import "../assets/fonts/Vintage.ttf";

const textStyle = {
  display:"flex",
  color: "white",
  textTransform: "uppercase",
  fontFamily: "Vintage",
  fontSize: "7em",
  textShadow: "1px 1px 1px black",
  top: "calc(30% + 4em)"
};

const divStyle = {
  position: "absolute",
  zIndex: "10",
  top: "55%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

function Headerwhite() {
  return (
    <header>
      <div>
        <div>
          <Navbarblack />
          <div style={divStyle}>
            <h1 style={textStyle}>FUNKY FURNISH</h1>
            <img src={Logo} style={{display:"flex", height:"30vh", borderRadius:"1em", opacity:"1"}}></img>
            {/* <img src={Logo2} style={{display:"flex", height:"25vh", border:"none", opacity:"0.8"}}></img> */}
          </div>
        </div>
        <ImageAccueil />
      </div>
    </header>
  );
}

export default Headerwhite;
