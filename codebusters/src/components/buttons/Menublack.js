import Button from "react-bootstrap/Button";
import { AiOutlineHome } from "react-icons/ai";

function searchButton() {
  return (
    <div>
      <Button variant="none">
        <button style={{ backgroundColor: "white", border: "none" }}>
          <AiOutlineHome
            style={{
              color: "black",
              fontSize: "1em",
              background: "none",
              width: "35.14px",
              height: "32px",
              hover:"black", 
            }}
          />
        </button>
      </Button>
    </div>
  );
}

export default searchButton;
