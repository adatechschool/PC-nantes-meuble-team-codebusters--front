import Button from "react-bootstrap/Button";
import { AiOutlineHome } from "react-icons/ai";
// import Logo2 from "../../assets/Funky_Funish_blanc.svg";

function searchButton() {
  return (
    <div>
      <Button variant="outline-light" style={{border:"none"}}>
        <button style={{ backgroundColor: "white", border: "none"}}>
            {/* <img src={Logo2} style={{height:"6vh", border:"none"}}></img> */}
          <AiOutlineHome
            style={{
              color: "black",
              fontSize: "1em",
              background: "none",
              width: "35.14px",
              height: "32px",
              hover:"black", 
              pointerEvents:"auto"
            }}
          />
        </button>
      </Button>
    </div>
  );
}

export default searchButton;
