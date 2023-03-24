import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Api } from "../data/Api.js";

// const filterbutton={
//   display: "flex",
//   alignItems: "center",
//   background: "grey",
//   border: "grey",
//   marginLeft: "31vh",
//   marginTop: "3vh",
// }

function BasicButtonExample() {
  const data = Api();
  // REDUIT LE NOMBRE D'OCCURENCE DES CATEGORIES 
  const uniqueCategory = data.reduce((accumulator, current) => {
    if (!accumulator.find((item) => item.category === current.category)) {
      accumulator.push(current);
    }
    return accumulator;
  }, []);

  return (
    <div>
      <div>
        {/* AFFICHAGE DES CATEGORIE EN LISTE */}
        <DropdownButton   id="dropdown-basic-button" title="Catégories">
          {uniqueCategory.map((furniture) => (
            <div key={furniture}>
              {/* REDIRIGE VERS LA PAGE /home/'nom de la categorie' */}
              <Dropdown.Item href={`/home/${furniture.category}`}>{furniture.category} </Dropdown.Item>
            </div>
          ))}
        </DropdownButton>
      </div>
    </div>
  );
}
export default BasicButtonExample;
