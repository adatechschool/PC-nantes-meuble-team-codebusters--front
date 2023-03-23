import "bootstrap/dist/css/bootstrap.css";
import Navbarblack from "../components/TestComponents/Navbarblack";
import { ApiUnique } from "../data/Api.js";

// MARGIN WITH THE TOP OF THE PAGE

const divStyle = {
    marginTop: "5rem",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

};

const cardStyle = {
    display: "flex",
    flexWrap: "wrap",
    borderRadius: "1em",
    marginTop: "2rem",
    width: "20rem",
    justifyContent: "space-around",

};

export default function Cart() {
  // recrupere le local storage de l'id et laffiche
  const getAllLocalStorage = () => {
    const card = localStorage.getItem("card");
    const cardArray = JSON.parse(card);
    const furnituresFetched = cardArray.map((id) => ApiUnique(id));
    return furnituresFetched;
  };

  // supprimer un element du local storage
  let card = localStorage.getItem("card");
  let cardArray = JSON.parse(card);
  const deleteLocalStorage = (id) => {
    console.log(id);
    // remove the id from the array
    cardArray = cardArray.filter((furniture) => furniture !== id);
    // set the new array in the local storage
    localStorage.setItem("card", JSON.stringify(cardArray));
    // refresh the page
    window.location.reload();
  };
  const data = getAllLocalStorage();

  if (data.length === cardArray.length) {
  return (
    <div className="App" style={{ backgroundColor: "#FBF4F4" }}>
      <Navbarblack />
      <div style={divStyle}>
        <h1>Panier</h1>
        {/* REGARDE SI LE PANIER EST PLEIN */}
        {data[0] === undefined && (
            <div>
                <h2>Your cart is empty</h2>
                </div>
        )}
        {/* SI IL EST PLEIN AFFICHER LES ARTICLES */}
        {data[0] && data[0].photos !== undefined && data.map((furniture) => (
            <div className="card" style={cardStyle}>
                <img src={furniture.photos[0].url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{furniture.type}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{furniture.price}€</h6>
                <a href="" className="btn btn-primary">Acheter</a>
                <button className="btn btn-danger" onClick={() => deleteLocalStorage(furniture._id)}>Supprimer</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
        }
}
